import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
  console.log('Fetching character list from opm-ts-wiki...');
  const res = await fetch('https://opm-ts-wiki.vercel.app/vi/character-list');
  const html = await res.text();
  
  const matches = [...html.matchAll(/href="\/vi\/character-info\/([^"]+)"/g)].map(m => m[1]);
  const uniqueSlugs = [...new Set(matches)];
  console.log(`Found ${uniqueSlugs.length} unique character dossiers on opm-ts-wiki.`);

  const scrapedData = [];

  for (let i = 0; i < uniqueSlugs.length; i++) {
    const slug = uniqueSlugs[i];
    console.log(`[${i + 1}/${uniqueSlugs.length}] Fetching VI & EN dossier for: ${slug}`);

    try {
      // Fetch VI page
      const viRes = await fetch(`https://opm-ts-wiki.vercel.app/vi/character-info/${slug}`);
      const viHtml = await viRes.text();

      // Fetch EN page
      const enRes = await fetch(`https://opm-ts-wiki.vercel.app/en/character-info/${slug}`);
      const enHtml = await enRes.text();

      // Extract JSON from RSC chunks
      const extractDossier = (pageHtml) => {
        const dossierMatch = pageHtml.match(/"data":(\{[\s\S]*?"model":"ro_\d+"[\s\S]*?\})/);
        if (dossierMatch) {
          try {
            // unescape quotes
            const cleanJson = dossierMatch[1].replace(/\\"/g, '"').replace(/\\\\/g, '\\');
            return JSON.parse(cleanJson);
          } catch (e) {
            // fallback match skills array
            const skillsMatch = pageHtml.match(/"skills":(\[[\s\S]*?\]),"glossary":/);
            if (skillsMatch) {
              return { skills: JSON.parse(skillsMatch[1]) };
            }
          }
        }
        return null;
      };

      const viDossier = extractDossier(viHtml);
      const enDossier = extractDossier(enHtml);

      if (viDossier) {
        scrapedData.push({
          slug,
          vi: viDossier,
          en: enDossier || viDossier
        });
      }
    } catch (err) {
      console.error(`Error scraping ${slug}:`, err.message);
    }
  }

  const outPath = path.resolve(__dirname, '../src/data/officialWikiDossiers.json');
  fs.writeFileSync(outPath, JSON.stringify(scrapedData, null, 2), 'utf8');
  console.log(`Successfully scraped ${scrapedData.length} dossiers and saved to ${outPath}!`);
}

main().catch(console.error);
