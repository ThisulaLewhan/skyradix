import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";
import StructuredData from "@/components/MiscComponents/StructuredData";
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata = {
  title: "Skyradix Solutions",
  metadataBase: new URL("https://skyradix.com"),
  alternates: {
    canonical: "./",
  },
  url: "https://skyradix.com",
  email: "skyradixsolutions@gmail.com",
  contact: "skyradixsolutions@gmail.com",
  description: "Skyradix delivers cutting-edge web, mobile, and software solutions, seamlessly integrating behavioral strategies to ensure digital success.",
  keywords: [
    "Custom software development agency",
    "Full-stack web application development",
    "Cross-platform mobile app developers",
    "Enterprise B2B software solutions",
    "Custom iOS and Android app development",
    "SaaS platform development company",
    "Cloud-based ERP implementation",
    "Custom ERP solutions for growing businesses",
    "Scalable SaaS architecture design",
    "Data-driven digital growth strategy",
    "Conversion rate optimization (CRO) services",
    "UI/UX product design agency",
    "User-centric digital product design",
    "Top IT solutions company Sri Lanka",
    "Custom software development Colombo",
    "Best web development agency Sri Lanka",
    "Enterprise ERP solutions Sri Lanka",
    "Digital growth marketing Colombo",
    "Future-proof enterprise software architecture",
    "End-to-end digital product design and development",
    "Next-gen SaaS platform developers",
    "Automated business systems and ERP integration",
    "Scalable digital growth strategies for tech startups",
    "Skyradix",
    "Skyradix Solutions",
    "Skyradix IT services",
    "Skyradix software development",
    "Thisula",
    "Lewhan",
    "Thisula Lewhan"
  ],
  robots: "index, follow",
  author: "Skyradix Team",
  software: "https://skyradix.com/services/software",
  website: "https://skyradix.com/services/website",
  openGraph: {
    title: "Skyradix | Web, Mobile & Software Innovation",
    description: "At Skyradix, we merge innovation with strategy to build powerful web, mobile, and software solutions that drive business success.",
    url: "https://skyradix.com",
    type: "website",
    images: [
      {
        url: "https://skyradix.com/images/main-logo.png",
        width: 1200,
        height: 630,
        alt: "Skyradix - Web, Mobile & Software Innovation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@skyradix",
    title: "Skyradix | Web, Mobile & Software Innovation",
    description: "We create technology-driven solutions for businesses, integrating strategy into every project for maximum impact.",
    image: "https://skyradix.com/images/main-logo.png",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <StructuredData />
      </head>
      <body className="font-sans bg-primary-black text-foreground antialiased min-h-screen flex flex-col">
        <GoogleAnalytics gaId="G-9WN3Y71GTE" />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=pub-7450672699713030"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}