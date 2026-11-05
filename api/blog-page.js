const { setShortCache } = require('./_lib/cache');
const { listPublishedPosts, getPublishedPost } = require('./_lib/posts');
const { loadShell } = require('./_lib/shell');
const {
  SITE_URL,
  escapeHtml,
  imagekitUrl,
  renderPage,
} = require('./_lib/render');

const DEFAULT_IMAGE = `${SITE_URL}/img/og-tags/default.webp`;
const PUBLISHER = { '@type': 'AutomotiveDealer', name: 'Popular RKS Maruti Suzuki' };

function listPage(posts) {
  const canonical = `${SITE_URL}/blog`;
  const description =
    'Maruti Suzuki car guides, service tips, and news from Popular RKS, Hyderabad.';
  const items = posts
    .map(
      (post) =>
        `<article><h2><a href="/blog/${escapeHtml(post.slug)}">${escapeHtml(post.title)}</a></h2><p>${escapeHtml(post.excerpt)}</p></article>`
    )
    .join('');
  return {
    seo: {
      title: 'Maruti Suzuki Blog | Popular RKS Hyderabad',
      description,
      canonical,
      image: DEFAULT_IMAGE,
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Popular RKS Maruti Suzuki Blog',
        description,
        url: canonical,
        publisher: PUBLISHER,
      },
    },
    rootHtml: `<main><h1>Maruti Suzuki Blog</h1>${items}</main>`,
  };
}

function postPage(post) {
  const canonical = `${SITE_URL}/blog/${post.slug}`;
  const title = post.metaTitle || `${post.title} | Popular RKS`;
  const description = post.metaDescription || post.excerpt;
  const image = post.coverImage || DEFAULT_IMAGE;
  const cover = post.coverImage
    ? `<img src="${escapeHtml(imagekitUrl(post.coverImage, 'w-1200,f-auto'))}" alt="${escapeHtml(post.coverImageAlt)}">`
    : '';
  return {
    seo: {
      title,
      description,
      canonical,
      image,
      type: 'article',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.title,
        description,
        image,
        url: canonical,
        datePublished: post.publishedAt,
        dateModified: post.updatedAt || post.publishedAt,
        author: { '@type': 'Organization', name: post.author },
        publisher: PUBLISHER,
      },
    },
    rootHtml: `<main><article><h1>${escapeHtml(post.title)}</h1>${cover}${post.body}</article></main>`,
  };
}

const NOT_FOUND_SEO = {
  title: 'Page not found | Popular RKS',
  description: 'This blog post could not be found.',
  canonical: `${SITE_URL}/blog`,
  image: DEFAULT_IMAGE,
  robots: 'noindex',
};

module.exports = async function handler(req, res) {
  const shell = await loadShell(req);
  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  try {
    const slug = req.query.slug ? String(req.query.slug) : null;
    if (slug) {
      const post = await getPublishedPost(slug);
      if (!post) {
        setShortCache(res, 30);
        return res.status(404).send(renderPage(shell, NOT_FOUND_SEO, ''));
      }
      const page = postPage(post);
      setShortCache(res);
      return res.status(200).send(renderPage(shell, page.seo, page.rootHtml));
    }
    const page = listPage(await listPublishedPosts());
    setShortCache(res);
    return res.status(200).send(renderPage(shell, page.seo, page.rootHtml));
  } catch (err) {
    // 503 tells crawlers to come back later; visitors still get the app, which
    // shows its own error message.
    console.error('api/blog-page failed:', err);
    res.setHeader('Cache-Control', 'no-store');
    return res.status(503).send(shell);
  }
};
