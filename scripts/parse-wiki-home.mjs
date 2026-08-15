import fs from 'fs';

async function parseWikiHomepage() {
  const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  };

  const res = await fetch('https://opm-ts-wiki.vercel.app/', { headers });
  const html = await res.text();
  
  // Extract all character art URLs
  const artMatches = [...html.matchAll(/characters\/art\/([^\"\s\)\']+)/g)].map(m => m[1]);
  const uniqueArts = [...new Set(artMatches)];
  console.log('Unique character arts found:', uniqueArts.length, uniqueArts);

  // Extract all gear names or sets mentioned
  const gearMatches = [...html.matchAll(/(Knight|Primal|Suit|Monk|Casual|Battle|Scholar|Prisoner|Swordsman|Lightning|Martial Arts|Flash|Toughness)/gi)].map(m => m[0]);
  console.log('Unique gear types mentioned:', [...new Set(gearMatches)]);

  fs.writeFileSync('scripts/wiki-homepage-arts.json', JSON.stringify(uniqueArts, null, 2));
}

parseWikiHomepage();
