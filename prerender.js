/**
 * Prerenders every route into its own static build/<route>/index.html with the
 * real react-helmet <title>/<meta description> baked in, so crawlers and link
 * previews (which don't execute JS) see per-page SEO tags instead of Firebase's
 * catch-all rewrite always serving the same build/index.html.
 *
 * Replaces react-snap, which ships a 2019 Chromium (can't parse modern JS like
 * optional chaining) and silently drops most pages under its own concurrency.
 */
const fs = require('fs');
const path = require('path');
const express = require('express');
const puppeteer = require('puppeteer');

const BUILD_DIR = path.join(__dirname, 'build');
const PORT = 45679;

const ROUTES = [
  '/',
  '/about-maruti-suzuki-dealers',
  '/victoris',
  '/all-new-maruti-alto-k10-on-road-price-in-hyderabad',
  '/maruti-wagon-r-on-road-price-in-hyderabad',
  '/the-all-new-celerio',
  '/maruti-swift-car-on-road-price-in-hyderabad',
  '/maruti-swift-dzire-on-road-price-in-hyderabad',
  '/maruti-s-presso-on-road-price-in-hyderabad',
  '/maruti-ertiga-on-road-price-in-hyderabad',
  '/maruti-new-brezza-on-road-price-in-hyderabad',
  '/maruti-eeco-on-road-price-in-hyderabad',
  '/maruti-brezza-cng-on-road-price',
  '/alto-k10-cng',
  '/maruti-wagonr-cng-on-road-price-in-hyderabad',
  '/maruti-swift-dzire-cng-on-road-price-in-hyderabad',
  '/maruti-s-presso-cng-on-road-price-in-hyderabad',
  '/maruti-ertiga-cng-on-road-price-in-hyderabad',
  '/maruti-eeco-cng-on-road-price-in-hyderabad',
  '/maruti-celerio-cng-on-road-price-in-hyderabad',
  '/maruti-swift-cng-on-road-price-in-hyderabad',
  '/maruti-wagnor-tour-h3-on-road-price-in-hyderabad',
  '/maruti-dzire-tour-s-on-road-price-in-hyderabad',
  '/maruti-eeco-tour-v-on-road-price-in-hyderabad',
  '/maruti-ertiga-tour-m-on-road-price-in-hyderabad',
  '/showrooms',
  '/true-value',
  '/maruti-suzuki-car-service-center',
  '/maruti-driving-school-locations',
  '/maruti-suzuki-car-insurance-renewal',
  '/maruti-suzuki-car-finance-services',
  '/corporate',
  '/subscribe',
  '/maruti-suzuki-driving-school',
  '/maruti-suzuki-new-cars',
  '/maruti-suzuki-cng-cars',
  '/maruti-suzuki-tour-cars',
  // '/maruti-suzuki-car-offers-page' is rendered per request by api/offers-page.js.
  '/maruti-car-service-centers-near-me',
  '/metaverse',
  '/compare-cars',
  // '/blog' is rendered per request by api/blog-page.js. Prerendering it would
  // create a static file that takes priority over that function on Vercel.
  '/awards',
  '/gallery',
  '/contact-maruti-suzuki-showroom',
  '/maruti-genuine-accessories',
  '/careers',
  '/maruti-car-terms-and-conditions',
  '/maruti-car-privacy-policy',
  '/thank-you-for-contact-us',
  '/faq',
  '/pricelist',
  '/arenasitemap',
  '/marutirewards',
];

function startServer() {
  const app = express();
  app.use(express.static(BUILD_DIR));
  app.use((req, res) => {
    res.sendFile(path.join(BUILD_DIR, 'index.html'));
  });
  return new Promise((resolve) => {
    const server = app.listen(PORT, () => resolve(server));
  });
}

function outputPathFor(route) {
  if (route === '/') return path.join(BUILD_DIR, 'index.html');
  return path.join(BUILD_DIR, route, 'index.html');
}

async function prerenderRoute(page, route) {
  const url = `http://localhost:${PORT}${route}`;
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
  try {
    await page.waitForFunction(
      () => !!document.querySelector('meta[name="description"][data-react-helmet="true"]'),
      { timeout: 5000 }
    );
  } catch (e) {
    console.warn(`  warning: helmet tag never appeared for ${route}, saving anyway`);
  }
  // public/index.html has its own default tags, which react-helmet adds to rather than
  // replaces. Without this, each page would have two descriptions and share images.
  await page.evaluate(() => {
    document.querySelectorAll('meta[data-react-helmet]').forEach((tag) => {
      ['name', 'property'].forEach((attr) => {
        const key = tag.getAttribute(attr);
        if (!key) return;
        document
          .querySelectorAll(`meta[${attr}="${key}"]:not([data-react-helmet])`)
          .forEach((duplicate) => duplicate.remove());
      });
    });
  });
  const html = await page.content();
  const outPath = outputPathFor(route);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, html);
}

async function main() {
  const server = await startServer();
  let browser;
  try {
    browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
    });
    const page = await browser.newPage();

    await page.setRequestInterception(true);
    page.on('request', (req) => {
      const reqUrl = req.url();
      if (reqUrl.startsWith(`http://localhost:${PORT}`)) {
        req.continue();
      } else {
        req.abort();
      }
    });
    page.on('pageerror', () => {});
    page.on('console', () => {});

    let ok = 0;
    const failed = [];
    for (const route of ROUTES) {
      try {
        await prerenderRoute(page, route);
        ok += 1;
        console.log(`prerendered (${ok}/${ROUTES.length}): ${route}`);
      } catch (err) {
        failed.push(route);
        console.error(`FAILED: ${route} -> ${err.message}`);
      }
    }

    console.log(`\nDone. ${ok}/${ROUTES.length} routes prerendered.`);
    if (failed.length) {
      console.error(`Failed routes:\n${failed.join('\n')}`);
    }
  } finally {
    // Always release the server/browser, even if launch itself failed —
    // an open listening server keeps Node's event loop alive forever,
    // which previously hung the whole `npm run build` indefinitely on
    // Vercel instead of letting the soft-failure below actually finish.
    if (browser) {
      await browser.close().catch(() => {});
    }
    await new Promise((resolve) => server.close(resolve));
  }
}

// Prerendering '/' overwrites index.html with the home page, so keep an untouched
// copy first. The blog function and /admin use it as their empty starting page.
fs.copyFileSync(
  path.join(BUILD_DIR, 'index.html'),
  path.join(BUILD_DIR, 'app-shell.html')
);

// A prerendering failure (e.g. headless Chrome unavailable in this CI
// environment) should degrade to shared meta tags, not block deployment
// entirely — so this never exits non-zero and never fails `npm run build`.
main()
  .catch((err) => {
    console.error('Prerendering failed, deploying without per-route static HTML:', err);
  })
  .finally(() => {
    // Force termination regardless of any other handle still open
    // (e.g. a zombie child process from a partial browser launch).
    process.exit(0);
  });
