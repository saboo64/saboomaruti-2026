import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import seoOverrides from '../../generated/seoOverrides.json';

// Applies changes from the dashboard's SEO manager to any page, however its own tags
// are set. It must render after <Routes>, because the last react-helmet instance
// wins. In App.js it's keyed by path, so it stays last when moving between pages.
const PageSeoOverride = () => {
  const { pathname } = useLocation();
  const override = seoOverrides[pathname.replace(/(.)\/$/, '$1')];
  if (!override) return null;
  const { title, description, keywords, ogImage } = override;

  return (
    <Helmet>
      {title && <title>{title}</title>}
      {title && <meta name='title' content={title} />}
      {title && <meta property='og:title' content={title} />}
      {title && <meta property='twitter:title' content={title} />}
      {description && <meta name='description' content={description} />}
      {description && <meta property='og:description' content={description} />}
      {description && <meta property='twitter:description' content={description} />}
      {keywords && <meta name='keywords' content={keywords} />}
      {ogImage && <meta property='og:image' content={ogImage} />}
      {ogImage && <meta property='twitter:image' content={ogImage} />}
    </Helmet>
  );
};

export default PageSeoOverride;
