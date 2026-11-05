const { setShortCache } = require('./_lib/cache');
const { getLiveOffers } = require('./_lib/offers');
const { db } = require('./_lib/firebaseAdmin');
const { loadShell } = require('./_lib/shell');
const { SITE_URL, escapeHtml, renderPage } = require('./_lib/render');
const seoDefaults = require('../src/constants/seoDefaults.json');

const PATH = '/maruti-suzuki-car-offers-page';

// Sends the live offers and SEO tags in the HTML, so crawlers can read them.
module.exports = async function handler(req, res) {
  const shell = await loadShell(req);
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  try {
    const [{ offers }, override] = await Promise.all([
      getLiveOffers(),
      db().collection('seoPages').doc(encodeURIComponent(PATH)).get(),
    ]);
    const tags = {
      ...seoDefaults[PATH],
      ...Object.fromEntries(
        Object.entries(override.exists ? override.data() : {}).filter(
          ([, value]) => value
        )
      ),
    };
    const items = (offers || [])
      .map(
        (offer) =>
          `<li><a href="${escapeHtml(offer.link)}">${escapeHtml(offer.carName)}</a>: save up to ₹${escapeHtml(offer.amount)}. ${escapeHtml(offer.note)}</li>`
      )
      .join('');
    setShortCache(res);
    return res.status(200).send(
      renderPage(
        shell,
        {
          title: tags.title,
          description: tags.description,
          canonical: `${SITE_URL}${PATH}`,
          image: tags.ogImage || `${SITE_URL}/img/og-tags/default.webp`,
        },
        `<main><h1>Maruti Suzuki Car Offers in Hyderabad</h1><ul>${items}</ul></main>`
      )
    );
  } catch (err) {
    console.error('api/offers-page failed:', err);
    res.setHeader('Cache-Control', 'no-store');
    return res.status(503).send(shell);
  }
};
