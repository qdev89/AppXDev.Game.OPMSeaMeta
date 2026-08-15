import fs from 'fs';

async function extractAllWikiEntities() {
  const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  };

  const res = await fetch('https://opm-ts-wiki.vercel.app/', { headers });
  const html = await res.text();

  // Find character blocks, cards, or JSON
  console.log('Searching for hero card patterns in HTML...');
  
  // Extract all hero names and IDs
  const heroesFound = [];
  const regex = /alt=\"([^\"]+)\"[^>]+src=\"\/characters\/art\/([^\"\s]+)\"/g;
  let match;
  while ((match = regex.exec(html)) !== null) {
    heroesFound.push({
      name: match[1],
      art: match[2]
    });
  }

  const uniqueByName = {};
  for (const h of heroesFound) {
    if (!uniqueByName[h.name]) {
      uniqueByName[h.name] = h;
    }
  }

  console.log('Extracted unique character cards:', Object.keys(uniqueByName).length);
  fs.writeFileSync('scripts/wiki-unique-heroes.json', JSON.stringify(Object.values(uniqueByName), null, 2));
}

extractAllWikiEntities();
