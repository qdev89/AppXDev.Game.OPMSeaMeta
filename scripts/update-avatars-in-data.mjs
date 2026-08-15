import fs from 'fs';
import path from 'path';

const filePath = path.resolve('src/data/defaultCharacters.js');
let content = fs.readFileSync(filePath, 'utf8');

// Replace all avatar lines with their corresponding local image file path
const avatarMap = {
  ur_saitama: 'avatars/ur_saitama.webp',
  ur_tatsumaki: 'avatars/ur_tatsumaki.webp',
  ur_boros: 'avatars/ur_boros.webp',
  ur_sonic: 'avatars/ur_sonic.webp',
  ssr_plus_atomic: 'avatars/ssr_plus_atomic.webp',
  ssr_plus_silverfang: 'avatars/ssr_plus_silverfang.webp',
  bomb_core: 'avatars/bomb_core.webp',
  gyoro_core: 'avatars/gyoro_core.webp',
  ssr_plus_mosquito: 'avatars/ssr_plus_mosquito.webp',
  zombieman_core: 'avatars/zombieman_core.webp',
  ssr_plus_geryu: 'avatars/ssr_plus_geryu.webp',
  child_emperor_core: 'avatars/child_emperor_core.webp',
  amai_mask: 'avatars/amai_mask.webp',
  urplus_blacksperm: 'avatars/urplus_blacksperm.webp',
  urplus_zombieman: 'avatars/urplus_zombieman.webp',
  ur_gyoro: 'avatars/ur_gyoro.webp'
};

for (const [id, avatarPath] of Object.entries(avatarMap)) {
  const regex = new RegExp(`(id:\\s*["']${id}["'][\\s\\S]*?avatar:\\s*["'])[^"']+["']`, 'g');
  content = content.replace(regex, `$1${avatarPath}"`);
}

fs.writeFileSync(filePath, content);
console.log('✅ defaultCharacters.js updated with 100% authentic local avatar assets!');
