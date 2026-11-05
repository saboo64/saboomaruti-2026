// Run after `npm run build` when pages are added or their tags change in code:
//   node scripts/extract-seo-defaults.js
// Saves each prerendered page's tags to src/constants/seoDefaults.json, which is the
// list of pages in the dashboard's SEO manager. Existing entries are kept.
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const buildDir = path.join(root, 'build');
const outFile = path.join(root, 'src', 'constants', 'seoDefaults.json');
const EXCLUDED = ['/thank-you-for-contact-us'];

const decode = (text) =>
  text
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&#x27;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .trim();

function readTags(file) {
  const html = fs.readFileSync(file, 'utf8');
  const metas = html.match(/<meta\b[^>]*data-react-helmet[^>]*>/gi) || [];
  const find = (key) => {
    const tag = metas.find((m) => new RegExp(`(?:name|property)="${key}"`, 'i').test(m));
    const content = tag && /\bcontent="([^"]*)"/i.exec(tag);
    return content ? decode(content[1]) : '';
  };
  const title = /<title[^>]*>([^<]*)<\/title>/i.exec(html);
  return {
    title: title ? decode(title[1]) : '',
    description: find('description'),
    keywords: find('keywords'),
    ogImage: find('og:image'),
  };
}

const pages = fs.existsSync(outFile) ? JSON.parse(fs.readFileSync(outFile, 'utf8')) : {};
pages['/'] = readTags(path.join(buildDir, 'index.html'));
for (const entry of fs.readdirSync(buildDir, { withFileTypes: true })) {
  const file = path.join(buildDir, entry.name, 'index.html');
  const route = `/${entry.name}`;
  if (entry.isDirectory() && fs.existsSync(file) && !EXCLUDED.includes(route)) {
    pages[route] = readTags(file);
  }
}

const sorted = Object.fromEntries(
  Object.keys(pages).sort().map((key) => [key, pages[key]])
);
fs.writeFileSync(outFile, `${JSON.stringify(sorted, null, 2)}\n`);
const missing = Object.entries(sorted).filter(([, tags]) => !tags.description).map(([key]) => key);
console.log(`Saved ${Object.keys(sorted).length} pages. Missing a description: ${missing.join(', ') || 'none'}`);
