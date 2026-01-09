export default function StructuredData() {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Skyradix",
      "url": "https://skyradix.com",
      "logo": "https://skyradix.com/logo.png",
      "description": "Skyradix delivers cutting-edge web, mobile, and software solutions, integrating marketing strategies for maximum impact.",
      "sameAs": [
        "https://twitter.com/skyradix",
        "https://www.linkedin.com/company/skyradix",
        "https://www.facebook.com/skyradix"
      ],
      "foundingDate": "2024",
      "founder": {
        "@type": "Person",
        "name": "Thisula Lewhan"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+94767607668",
        "email": "contact@skyradix.com",
        "contactType": "customer support",
        "areaServed": "Worldwide",
        "availableLanguage": ["English", "Sinhala"]
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Colombo",
        "addressCountry": "Sri Lanka"
      },
      "service": [
        {
          "@type": "Service",
          "name": "Web Development",
          "description": "Custom web solutions tailored for businesses."
        },
        {
          "@type": "Service",
          "name": "Mobile App Development",
          "description": "iOS and Android mobile applications for business success."
        },
        {
          "@type": "Service",
          "name": "Software Solutions",
          "description": "Innovative software development for various industries."
        },
        {
          "@type": "Service",
          "name": "Digital Marketing Integration",
          "description": "Strategic marketing integration for better online visibility."
        }
      ]
    };
  
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    );
  }
  