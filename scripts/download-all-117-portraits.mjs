import fs from 'fs';
import path from 'path';

const heroes = JSON.parse(fs.readFileSync('scripts/wiki-unique-heroes.json', 'utf8'));
console.log('Total characters:', heroes.length);
console.log('Sample characters:', heroes.slice(0, 20));

const avatarsDir = path.resolve('public/avatars');
if (!fs.existsSync(avatarsDir)) {
  fs.mkdirSync(avatarsDir, { recursive: true });
}

async function downloadAllPortraits() {
  let downloaded = 0;
  let skipped = 0;
  let failed = 0;

  for (const h of heroes) {
    const artFile = h.art;
    const destPath = path.join(avatarsDir, artFile);

    if (fs.existsSync(destPath)) {
      skipped++;
      continue;
    }

    try {
      const url = `https://opm-ts-wiki.vercel.app/characters/art/${artFile}`;
      const res = await fetch(url);
      if (res.ok) {
        const buf = Buffer.from(await res.arrayBuffer());
        fs.writeFileSync(destPath, buf);
        downloaded++;
      } else {
        failed++;
        console.log('Failed to download:', h.name, url, res.status);
      }
    } catch (e) {
      failed++;
      console.log('Error downloading:', h.name, e.message);
    }
  }

  console.log(`Download Summary: Downloaded: ${downloaded}, Skipped (Already have): ${skipped}, Failed: ${failed}`);
}

downloadAllPortraits();
