"use client"
import { useEffect } from 'react';
import HeroSection from '@/components/WebsiteSolutions/HeroSection';
import ServicesSection from '@/components/WebsiteSolutions/ServicesSection';
import FeaturesSection from '@/components/WebsiteSolutions/FeaturesSection';
import PostLaunchSection from '@/components/WebsiteSolutions/PostLaunchSection';
import ContactSection from '@/components/MiscComponents/Contact';

export default function WebistePage() {
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero-section");
      
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

    return (
        <main>
          <head>
            <link
            rel="canonical"
            href="https://skyradix.com/services/software"
            key="canonical"
          />
          </head>
          <div id="hero-section">
            <HeroSection />
          </div>
          <div class="background-thing">
            <ServicesSection />
            <FeaturesSection />
            <PostLaunchSection />
            <ContactSection title="Let's Talk" />
          </div>
        </main>
    )
}