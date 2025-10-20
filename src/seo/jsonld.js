// SEO: JSON-LD structured data helpers for better search engine understanding

// Base domain - update this to match deployment domain
const BASE_DOMAIN = "https://nurseassistinternational.com";

// Organization structured data for NAI
export const organizationJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Nurse Assist International",
  "alternateName": "NAI",
  "url": BASE_DOMAIN,
  "logo": `${BASE_DOMAIN}/image.png`,
  "description": "Australia's leading nursing education institute providing NCLEX-RN, OSCE, and OBA preparation for internationally qualified nurses.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Suite 104, Level 1, 25 Grose Street",
    "addressLocality": "Parramatta",
    "addressRegion": "NSW",
    "postalCode": "2150",
    "addressCountry": "AU"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+61-478-320-397",
    "contactType": "customer service",
    "email": "admin@nurseassistinternational.com",
    "availableLanguage": "English"
  },
  "sameAs": [
    "https://www.facebook.com/nurseassistinternatioanal/",
    "https://x.com/nurseassist_",
    "https://www.instagram.com/nurseassist.international/",
    "https://www.youtube.com/channel/UCUL2vr-3N2TleKdg5LLFAsQ"
  ],
  "foundingDate": "2019",
  "areaServed": "Australia",
  "serviceArea": {
    "@type": "Country",
    "name": "Australia"
  }
});

// Course structured data
export const courseJsonLd = ({ 
  name, 
  description, 
  courseCode,
  duration,
  price,
  url,
  prerequisites = [],
  skills = []
}) => ({
  "@context": "https://schema.org",
  "@type": "Course",
  "name": name,
  "description": description,
  "courseCode": courseCode,
  "url": url,
  "provider": {
    "@type": "Organization",
    "name": "Nurse Assist International",
    "url": BASE_DOMAIN
  },
  "educationalLevel": "Professional Development",
  "teaches": skills,
  "coursePrerequisites": prerequisites,
  "timeRequired": duration,
  "offers": {
    "@type": "Offer",
    "price": price,
    "priceCurrency": "AUD",
    "availability": "https://schema.org/InStock",
    "validFrom": new Date().toISOString()
  },
  "inLanguage": "en-AU",
  "audience": {
    "@type": "Audience",
    "audienceType": "Internationally Qualified Nurses"
  }
});

// FAQ Page structured data
export const faqPageJsonLd = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(({ question, answer }) => ({
    "@type": "Question",
    "name": question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": answer
    }
  }))
});

// Breadcrumb navigation structured data
export const breadcrumbJsonLd = (breadcrumbs) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((breadcrumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": breadcrumb.name,
    "item": breadcrumb.url
  }))
});

// LocalBusiness schema for local SEO (preserving old site location data)
export const localBusinessJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BASE_DOMAIN}/#localbusiness`,
  "name": "Nurse Assist International",
  "alternateName": "NAI",
  "url": BASE_DOMAIN,
  "logo": `${BASE_DOMAIN}/image.png`,
  "description": "Australia's leading nursing education institute providing NCLEX Australia, OSCE preparation Australia, and OBA pathway guidance for international nurses.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Suite 104, Level 1, 25 Grose Street",
    "addressLocality": "Parramatta", 
    "addressRegion": "NSW",
    "postalCode": "2150",
    "addressCountry": "AU"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -33.8150,
    "longitude": 151.0000
  },
  "telephone": "+61-478-320-397",
  "email": "admin@nurseassistinternational.com",
  "priceRange": "$1700-$2700",
  "currenciesAccepted": "AUD",
  "paymentAccepted": "Cash, Credit Card, Bank Transfer",
  "openingHours": "Mo-Fr 09:00-17:00",
  "areaServed": [
    {
      "@type": "City",
      "name": "Sydney"
    },
    {
      "@type": "City", 
      "name": "Melbourne"
    },
    {
      "@type": "City",
      "name": "Brisbane"  
    },
    {
      "@type": "City",
      "name": "Adelaide"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Nursing Education Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Course",
          "name": "NCLEX Australia Preparation"
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Course",
          "name": "OSCE Preparation Australia"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Course", 
          "name": "OBA Pathway Support"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "500",
    "bestRating": "5"
  }
});

// Educational Organization specific data
export const educationalOrganizationJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Nurse Assist International",
  "url": BASE_DOMAIN,
  "logo": `${BASE_DOMAIN}/image.png`,
  "description": "Specialized nursing education institute for NCLEX-RN, OSCE, and OBA preparation in Australia.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Suite 104, Level 1, 25 Grose Street",
    "addressLocality": "Parramatta",
    "addressRegion": "NSW",
    "postalCode": "2150",
    "addressCountry": "AU"
  },
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "Professional Development",
    "recognizedBy": {
      "@type": "Organization",
      "name": "Australian Health Practitioner Regulation Agency"
    }
  },
  "offers": [
    {
      "@type": "Course",
      "name": "NCLEX-RN Preparation",
      "description": "Comprehensive NCLEX-RN exam preparation course"
    },
    {
      "@type": "Course", 
      "name": "OSCE Training",
      "description": "Objective Structured Clinical Examination training"
    },
    {
      "@type": "Course",
      "name": "OBA Pathway Support", 
      "description": "Outcome Based Assessment pathway guidance"
    }
  ]
});

// WebSite structured data with search functionality
export const websiteJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Nurse Assist International",
  "alternateName": "NAI",
  "url": BASE_DOMAIN,
  "description": "Australia's premier nursing education institute for international nurses seeking Australian registration.",
  "publisher": {
    "@type": "Organization",
    "name": "Nurse Assist International"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${BASE_DOMAIN}/search?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
});

// Person structured data for team members
export const personJsonLd = ({ name, jobTitle, description, image, email }) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "name": name,
  "jobTitle": jobTitle,
  "description": description,
  "image": image,
  "email": email,
  "worksFor": {
    "@type": "Organization",
    "name": "Nurse Assist International",
    "url": BASE_DOMAIN
  },
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "Australian Nursing Institution"
  }
});

export { BASE_DOMAIN };
