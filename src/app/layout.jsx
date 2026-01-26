import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/MiscComponents/Navbar";
import Footer from "@/components/MiscComponents/Footer";
import "./globals.css";
import StructuredData from "@/components/MiscComponents/StructuredData";
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from 'next/script'


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Skyradix Solutions",
  // ADDED: This fixes the canonical URL issue globally and correctly
  metadataBase: new URL("https://skyradix.com"),
  alternates: {
    canonical: "./",
  },
  // -----------------------------------------------------------
  url: "https://skyradix.com",
  email: "contact@skyradix.com",
  contact: "contact@skyradix.com",
  description: "Skyradix delivers cutting-edge web, mobile, and software solutions, seamlessly integrating marketing strategies to ensure digital success.",
  keywords: "web development, mobile app development, software solutions, digital marketing integration, tech innovation, Skyradix",
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
    description: "We create technology-driven solutions for businesses, integrating marketing into every project for maximum impact.",
    image: "https://skyradix.com/images/main-logo.png",
  },
  robots: "NOODP"
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="NOODP" />
        {/* REMOVED: The two duplicate <link> tags that caused the crash. 
            The 'metadata' object above now handles this correctly. */}
        <StructuredData />
      </head>
      <body>
        <GoogleAnalytics gaId="G-9WN3Y71GTE" />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=pub-7450672699713030"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}