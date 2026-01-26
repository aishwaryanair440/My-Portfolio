import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
}

export function SEO({
  title = "Aishwarya A Nair - UI/UX Designer & Frontend Developer Portfolio",
  description = "Explore the portfolio of Aishwarya A Nair, a passionate UI/UX designer and frontend developer specializing in React, Tailwind CSS, and creating user-centered digital experiences. View projects including SkillSwap, Hacktoberfest contributions, and neobrutalism design work.",
  keywords = "Aishwarya A Nair, UI/UX Designer, Frontend Developer, React Developer, Tailwind CSS, Portfolio, Web Design, User Experience, Neobrutalism Design, SkillSwap, Hacktoberfest, Web Development",
  image = "https://aishwaryaanair.vercel.app/og-image.png",
  url = "https://aishwaryaanair.vercel.app/",
  type = "website",
  author = "Aishwarya A Nair"
}: SEOProps) {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content="Aishwarya A Nair Portfolio Preview" />
      <meta property="og:site_name" content="Aishwarya A Nair Portfolio" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@aishwaryaanair" />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#FDF6E3" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Performance & SEO */}
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
    </Helmet>
  );
}
