import React from "react";
import { Helmet } from "react-helmet";
import ProfileCard from "../../components/ProfileCard";

export default function Card() {
  return (
    <>
      <Helmet>
        {/* Basic SEO */}
        <title>Abdul Hameed | GM Marketing | Popular RKS</title>
        <meta
          name="description"
          content="Contact Abdul Hameed, GM-Marketing at Popular RKS . Get direct phone, email, and WhatsApp contact details."
        />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Abdul Hameed | GM Marketing | Saboo RKS" />
        <meta
          property="og:description"
          content="Reach out to Abdul Hameed, GM-Marketing at Popular RKS . Phone, email, and WhatsApp details available."
        />
        <meta property="og:url" content="https://saboomaruti.in/Abdul-Hameed" />
        <meta property="og:site_name" content="Popular RKS " />

        {/* OG IMAGE - UPDATE URL */}
        <meta
          property="og:image"
          content="https://saboomaruti.in/OG_Tag.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Abdul Hameed | GM Marketing | Saboo RKS"
        />
        <meta
          name="twitter:description"
          content="Contact Abdul Hameed, GM-Marketing at Popular RKS."
        />
        <meta
          name="twitter:image"
          content="https://saboomaruti.in/OG_Tag.jpg"
        />
      </Helmet>

      <ProfileCard />
    </>
  );
}
