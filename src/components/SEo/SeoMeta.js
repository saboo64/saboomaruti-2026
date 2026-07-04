import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

const SeoMeta = ({
  // eslint-disable-next-line react/prop-types
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = "/img/og-tags/default.webp",
  twitterUrl = "https://x.com/saboorksmaruti",
  author = "Broaddcast",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph tags */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter Card tags */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={twitterUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
    </Helmet>
  );
};
SeoMeta.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.string,
  canonicalUrl: PropTypes.string.isRequired,
  ogImage: PropTypes.string,
  twitterUrl: PropTypes.string,
  author: PropTypes.string,
};

export default SeoMeta;

