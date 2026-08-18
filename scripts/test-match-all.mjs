import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load official database
const officialDb = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../src/data/official_wiki_all.json'), 'utf8'));

// Import current defaultCharacters
const currentMod = await import('../src/data/defaultCharacters.js');
const characters = currentMod.defaultCharacters;

console.log(`Processing ${characters.length} characters with 100% official data...`);

// Helper to find official dossier
function findOfficialDossier(c) {
  // 1. match from avatar slug
  if (c.avatar) {
    const slugMatch = c.avatar.match(/(\d+-[a-z0-9]+)/);
    if (slugMatch && officialDb[slugMatch[1]]) {
      return officialDb[slugMatch[1]];
    }
    // Also try normalizing e.g. 100315_ur_plus -> 100315-urplus
    const altSlugMatch = c.avatar.match(/he_(\d+)_([a-z0-9_]+)__featured/);
    if (altSlugMatch) {
      const num = altSlugMatch[1];
      const tier = altSlugMatch[2].replace(/_/g, '');
      const candidateSlug = `${num}-${tier}`;
      if (officialDb[candidateSlug]) {
        return officialDb[candidateSlug];
      }
    }
  }

  // 2. match from name & rarity
  const cleanNameVi = (c.name?.vi || c.name || '').toLowerCase().replace(/[^a-z0-9]/g, '');
  const cleanNameEn = (c.name?.en || c.name || '').toLowerCase().replace(/[^a-z0-9]/g, '');

  for (const slug of Object.keys(officialDb)) {
    const o = officialDb[slug].vi;
    if (!o) continue;
    const oName = (o.name || '').toLowerCase().replace(/[^a-z0-9]/g, '');
    const oTier = (o.tier || '').toUpperCase();
    const cRarity = (c.rarity || '').toUpperCase();

    if (oName.includes(cleanNameVi) || cleanNameVi.includes(oName) || oName.includes(cleanNameEn) || cleanNameEn.includes(oName)) {
      if (oTier === cRarity || (cRarity.startsWith('UR') && oTier.startsWith('UR')) || (cRarity.startsWith('SSR') && oTier.startsWith('SSR'))) {
        return officialDb[slug];
      }
    }
  }

  return null;
}

let matchedCount = 0;
let unmatchedList = [];

for (const c of characters) {
  const dossier = findOfficialDossier(c);
  if (dossier) {
    matchedCount++;
  } else {
    unmatchedList.push({ id: c.id, name: c.name, avatar: c.avatar });
  }
}

console.log(`Matched: ${matchedCount}/${characters.length}`);
console.log('Unmatched:', unmatchedList);
