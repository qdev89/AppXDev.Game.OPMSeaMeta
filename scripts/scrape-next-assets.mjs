import fs from 'fs';

async function fetchWiki() {
  const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  };

  const res = await fetch('https://opm-ts-wiki.vercel.app/', { headers });
  const html = await res.text();
  console.log('Homepage HTML length:', html.length);

  // Look for js scripts
  const scripts = [...html.matchAll(/src=\"(\/_next\/static\/[^\"]+)\"/g)].map(m => m[1]);
  console.log('Scripts:', scripts.length);

  for (const s of scripts) {
    if (s.includes('pages') || s.includes('app') || s.includes('index') || s.includes('characters')) {
      const sRes = await fetch('https://opm-ts-wiki.vercel.app' + s, { headers });
      const jsCode = await sRes.text();
      console.log('Script:', s, 'Length:', jsCode.length);
      
      // Look for character names or IDs in JS
      const charIds = [...jsCode.matchAll(/he_\d+_[a-z0-9_]+/g)].map(m => m[0]);
      const uniqueCharIds = [...new Set(charIds)];
      if (uniqueCharIds.length > 0) {
        console.log('Found character asset IDs:', uniqueCharIds.length, uniqueCharIds.slice(0, 15));
      }
    }
  }
}

fetchWiki();
