import React from 'react';
import { Helmet } from 'react-helmet-async';

export function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Aishwarya A Nair",
    "jobTitle": "UI/UX Designer & Frontend Developer",
    "url": "https://aishwaryaanair.vercel.app/",
    "sameAs": [
      "https://www.linkedin.com/in/aishwarya-a-nair",
      "https://github.com/aishwaryaanair",
      "https://twitter.com/aishwaryaanair"
    ],
    "knowsAbout": [
      "UI/UX Design",
      "Frontend Development",
      "React.js",
      "Tailwind CSS",
      "TypeScript",
      "JavaScript",
      "Web Design",
      "User Experience",
      "Framer Motion",
      "Responsive Design"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Educational Institution"
    },
    "description": "Passionate UI/UX designer and frontend developer with 2+ years of experience in creating user-centered digital experiences",
    "email": "aishwarya@example.com",
    "image": "https://aishwaryaanair.vercel.app/profile-image.png"
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Aishwarya A Nair Portfolio",
    "url": "https://aishwaryaanair.vercel.app/",
    "description": "Portfolio website showcasing UI/UX design and frontend development work by Aishwarya A Nair",
    "author": {
      "@type": "Person",
      "name": "Aishwarya A Nair"
    },
    "inLanguage": "en-US",
    "copyrightYear": 2026,
    "copyrightHolder": {
      "@type": "Person",
      "name": "Aishwarya A Nair"
    }
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Aishwarya A Nair - UI/UX Design & Frontend Development",
    "image": "https://aishwaryaanair.vercel.app/og-image.png",
    "url": "https://aishwaryaanair.vercel.app/",
    "telephone": "+91-XXXXXXXXXX",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "12.9716",
      "longitude": "77.5946"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.linkedin.com/in/aishwarya-a-nair",
      "https://github.com/aishwaryaanair"
    ]
  };

  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "Aishwarya A Nair Portfolio",
    "author": {
      "@type": "Person",
      "name": "Aishwarya A Nair"
    },
    "about": "UI/UX Design and Frontend Development Portfolio",
    "abstract": "A comprehensive portfolio showcasing design projects, frontend development work, and case studies including SkillSwap, Hacktoberfest contributions, and neobrutalism design work.",
    "keywords": "UI/UX Design, Frontend Development, React, Tailwind CSS, Portfolio, Web Design",
    "inLanguage": "en-US",
    "datePublished": "2026-01-26",
    "dateModified": "2026-01-26"
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(personSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(professionalServiceSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(portfolioSchema)}
      </script>
    </Helmet>
  );
}
