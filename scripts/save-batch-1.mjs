import fs from 'fs';

const content = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity-ide/brain/45450f71-ba5a-4e6f-adf4-1c71b9450e1f/.system_generated/steps/2661/output.txt', 'utf8');

const sIdx = content.indexOf('[\n  {');
const eIdx = content.lastIndexOf('\n]');

if (sIdx !== -1 && eIdx !== -1) {
  const jsonStr = content.substring(sIdx, eIdx + 2);
  const data = JSON.parse(jsonStr);
  console.log(`Parsed ${data.length} heroes from Batch 1!`);
  fs.writeFileSync('src/data/batch_1.json', JSON.stringify(data, null, 2), 'utf8');
} else {
  console.log('Markers not found');
}
