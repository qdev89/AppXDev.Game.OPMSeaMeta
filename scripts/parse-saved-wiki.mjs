import fs from 'fs';
import path from 'path';

const contentPath = 'C:/Users/ADMIN/.gemini/antigravity-ide/brain/45450f71-ba5a-4e6f-adf4-1c71b9450e1f/.system_generated/steps/2599/content.md';
const content = fs.readFileSync(contentPath, 'utf8');

const regex = /href="\/vi\/character-info\/([^"]+)"/g;
let match;
const slugs = [];
while ((match = regex.exec(content)) !== null) {
  slugs.push(match[1]);
}

const uniqueSlugs = [...new Set(slugs)];
console.log('Total unique slugs in saved wiki homepage:', uniqueSlugs.length);
console.log('All Slugs:', uniqueSlugs);

fs.writeFileSync('src/data/wiki_slugs.json', JSON.stringify(uniqueSlugs, null, 2), 'utf8');
