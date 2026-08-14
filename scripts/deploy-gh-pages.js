import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('--- 1. Building Production Bundle ---');
execSync('npm run build', { stdio: 'inherit' });

console.log('--- 2. Creating 404.html fallback ---');
const distPath = path.resolve('dist');
const indexHtml = path.join(distPath, 'index.html');
const notFoundHtml = path.join(distPath, '404.html');
if (fs.existsSync(indexHtml)) {
  fs.copyFileSync(indexHtml, notFoundHtml);
  console.log('Copied index.html to 404.html in dist/');
}

// Add .nojekyll so GitHub Pages does not ignore files with underscores or custom paths
fs.writeFileSync(path.join(distPath, '.nojekyll'), '');
console.log('Created .nojekyll in dist/');

console.log('--- 3. Deploying dist/ to origin gh-pages ---');
const distGit = path.join(distPath, '.git');
if (fs.existsSync(distGit)) {
  fs.rmSync(distGit, { recursive: true, force: true });
}

process.chdir(distPath);
execSync('git init', { stdio: 'inherit' });
execSync('git checkout -b gh-pages', { stdio: 'inherit' });
execSync('git add -A', { stdio: 'inherit' });
execSync('git commit -m "deploy: update gh-pages release build"', { stdio: 'inherit' });

// Push with environment credentials cleaned
execSync('git remote add origin https://github.com/qdev89/AppXDev.Game.OPMSeaMeta.git', { stdio: 'inherit' });
execSync('git push -f origin gh-pages', { 
  stdio: 'inherit',
  env: { ...process.env, GH_TOKEN: '', GITHUB_TOKEN: '' }
});

console.log('=== Successfully deployed compiled dist to gh-pages branch! ===');
