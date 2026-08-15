import fs from 'fs';
import path from 'path';

const avatarsDir = path.resolve('public/avatars');
if (!fs.existsSync(avatarsDir)) {
  fs.mkdirSync(avatarsDir, { recursive: true });
}

// Copy Saitama generated image
const saitamaSrc = 'C:/Users/ADMIN/.gemini/antigravity-ide/brain/45450f71-ba5a-4e6f-adf4-1c71b9450e1f/saitama_portrait_1786795557422.jpg';
if (fs.existsSync(saitamaSrc)) {
  fs.copyFileSync(saitamaSrc, path.join(avatarsDir, 'ur_saitama.webp'));
  fs.copyFileSync(saitamaSrc, path.join(avatarsDir, 'saitama.webp'));
  console.log('✅ Saitama portrait copied.');
}

const characterDownloads = [
  { id: 'urplus_blacksperm', url: 'https://opm-ts-wiki.vercel.app/characters/art/he_100318_ur_plus__featured.webp' },
  { id: 'urplus_zombieman', url: 'https://opm-ts-wiki.vercel.app/characters/art/he_100317_ur_plus__featured.webp' },
  { id: 'urplus_rover', url: 'https://opm-ts-wiki.vercel.app/characters/art/he_100316_ur_plus__featured.webp' },
  { id: 'urplus_bang_bomb', url: 'https://opm-ts-wiki.vercel.app/characters/art/he_100315_ur_plus__featured.webp' },
  { id: 'urplus_g5', url: 'https://opm-ts-wiki.vercel.app/characters/art/he_100314_ur_plus__featured.webp' },
  { id: 'ssr_plus_atomic', url: 'https://opm-ts-wiki.vercel.app/characters/art/he_100313_ur_plus__featured.webp' },
  { id: 'urplus_nyan', url: 'https://opm-ts-wiki.vercel.app/characters/art/he_100312_ur_plus__featured.webp' },
  { id: 'ur_tatsumaki', url: 'https://opm-ts-wiki.vercel.app/characters/art/he_100311_ur_plus__featured.webp' },
  { id: 'amai_mask', url: 'https://opm-ts-wiki.vercel.app/characters/art/he_100310_ur_plus__featured.webp' },
  { id: 'ur_boros', url: 'https://opm-ts-wiki.vercel.app/characters/art/he_100309_ur_plus__featured.webp' },
  { id: 'urplus_genos', url: 'https://opm-ts-wiki.vercel.app/characters/art/he_100308_ur_plus__featured.webp' },
  { id: 'ur_gyoro', url: 'https://opm-ts-wiki.vercel.app/characters/art/he_100307_ur__featured.webp' },
  { id: 'gyoro_core', url: 'https://opm-ts-wiki.vercel.app/characters/art/he_100166_ssr_plus__featured.webp' },
  { id: 'ur_metalbat_v2', url: 'https://opm-ts-wiki.vercel.app/characters/art/he_100306_ur__featured.webp' },
  { id: 'ur_sonic', url: 'https://opm-ts-wiki.vercel.app/characters/art/he_100305_ur__featured.webp' },
  { id: 'ssr_garou', url: 'https://opm-ts-wiki.vercel.app/characters/art/he_100304_ur__featured.webp' },
  { id: 'ur_pig_god', url: 'https://opm-ts-wiki.vercel.app/characters/art/he_100303_ur__featured.webp' },
  { id: 'ssr_carnage', url: 'https://opm-ts-wiki.vercel.app/characters/art/he_100302_ur__featured.webp' },
  { id: 'ur_subterranean', url: 'https://opm-ts-wiki.vercel.app/characters/art/he_100301_ur__featured.webp' },
  { id: 'ur_drive_knight', url: 'https://opm-ts-wiki.vercel.app/characters/art/he_100300_ur__featured.webp' },
  { id: 'ur_fubuki', url: 'https://opm-ts-wiki.vercel.app/characters/art/he_100199_ur__featured.webp' },
  { id: 'ur_deep_sea_king', url: 'https://opm-ts-wiki.vercel.app/characters/art/he_100198_ur__featured.webp' },
  { id: 'zombieman_core', url: 'https://opm-ts-wiki.vercel.app/characters/art/he_100197_ur__featured.webp' },
  { id: 'child_emperor_core', url: 'https://opm-ts-wiki.vercel.app/characters/art/he_100196_ur__featured.webp' },
  { id: 'ssr_plus_mosquito', url: 'https://opm-ts-wiki.vercel.app/characters/art/he_100195_ur__featured.webp' },
  { id: 'ur_flashy_flash', url: 'https://opm-ts-wiki.vercel.app/characters/art/he_100194_ur__featured.webp' },
  { id: 'ur_gouketsu', url: 'https://opm-ts-wiki.vercel.app/characters/art/he_100193_ur__featured.webp' },
  { id: 'ur_king', url: 'https://opm-ts-wiki.vercel.app/characters/art/he_100187_ur__featured.webp' },
  { id: 'bomb_core', url: 'https://opm-ts-wiki.vercel.app/characters/art/he_100186_ur__featured.webp' },
  { id: 'ssr_plus_silverfang', url: 'https://opm-ts-wiki.vercel.app/characters/art/he_100160_ssr_plus__featured.webp' },
  { id: 'ssr_superalloy', url: 'https://opm-ts-wiki.vercel.app/characters/art/he_100177_ssr_plus__featured.webp' },
  { id: 'ssr_plus_geryu', url: 'https://opm-ts-wiki.vercel.app/characters/art/he_100159_ssr_plus__featured.webp' },
  { id: 'sr_goldenball', url: 'https://opm-ts-wiki.vercel.app/characters/art/he_100008_sr__featured.webp' },
  { id: 'sr_smileman', url: 'https://opm-ts-wiki.vercel.app/characters/art/he_100013_sr__featured.webp' },
  { id: 'sr_armoredgorilla', url: 'https://opm-ts-wiki.vercel.app/characters/art/he_100014_sr__featured.webp' },
  { id: 'sr_doctor_genus', url: 'https://opm-ts-wiki.vercel.app/characters/art/he_100015_sr__featured.webp' },
  { id: 'sr_konbu_infinity', url: 'https://opm-ts-wiki.vercel.app/characters/art/he_100017_sr__featured.webp' },
  { id: 'ssr_vaccine_man', url: 'https://opm-ts-wiki.vercel.app/characters/art/he_100021_ssr__featured.webp' },
  { id: 'r_mumen_rider', url: 'https://opm-ts-wiki.vercel.app/characters/art/he_100001_r__featured.webp' }
];

async function syncAll() {
  console.log(`Starting download of ${characterDownloads.length} character portraits...`);
  for (const item of characterDownloads) {
    try {
      const res = await fetch(item.url);
      if (res.ok) {
        const buffer = Buffer.from(await res.arrayBuffer());
        const filePath = path.join(avatarsDir, `${item.id}.webp`);
        fs.writeFileSync(filePath, buffer);
        console.log(`✅ Downloaded: ${item.id}.webp (${buffer.length} bytes)`);
      } else {
        console.warn(`⚠️ Failed ${item.id}: status ${res.status}`);
      }
    } catch (err) {
      console.error(`❌ Error downloading ${item.id}:`, err.message);
    }
  }
  console.log('🎉 All character portraits synced successfully to public/avatars/!');
}

syncAll();
