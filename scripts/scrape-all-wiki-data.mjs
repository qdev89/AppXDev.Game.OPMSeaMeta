import fs from 'fs';

async function scrapeWiki() {
  try {
    const res = await fetch('https://opm-ts-wiki.vercel.app/characters');
    const html = await res.text();
    console.log('HTML Length:', html.length);
    
    // Find next.js build id or data chunks
    const buildIdMatch = html.match(/\/static\/([a-zA-Z0-9_-]+)\/_buildManifest\.js/);
    console.log('Build ID:', buildIdMatch ? buildIdMatch[1] : 'Not found');

    const nextDataMatch = html.match(/<script id="__NEXT_DATA__" type="application\/json">([\s\S]*?)<\/script>/);
    if (nextDataMatch) {
      const data = JSON.parse(nextDataMatch[1]);
      console.log('Next Data keys:', Object.keys(data));
      console.log('Page Props keys:', Object.keys(data.props?.pageProps || {}));
      
      const characters = data.props?.pageProps?.characters || data.props?.pageProps?.allCharacters || [];
      console.log('Found characters in __NEXT_DATA__:', characters.length);
      if (characters.length > 0) {
        fs.writeFileSync('scripts/wiki-scraped-characters.json', JSON.stringify(characters, null, 2));
      }
    }

    // Also look for character slugs in links
    const slugs = new Set();
    const regex = /\/characters\/([a-zA-Z0-9_-]+)/g;
    let match;
    while ((match = regex.exec(html)) !== null) {
      if (match[1] !== 'art') {
        slugs.add(match[1]);
      }
    }
    console.log('Found unique character slugs:', slugs.size, Array.from(slugs));
    
  } catch (err) {
    console.error('Scrape error:', err);
  }
}

scrapeWiki();
