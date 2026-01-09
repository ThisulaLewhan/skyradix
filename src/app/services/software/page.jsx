"use client"
import { useEffect } from 'react';
import HeroSection from '@/components/SoftwareSolutions/HeroSection';
import ServicesSection from '@/components/SoftwareSolutions/ServicesSection';
import FeaturesSection from '@/components/SoftwareSolutions/FeaturesSection';
import TimelineSection from '@/components/SoftwareSolutions/TimelineSection';
import ContactSection from '@/components/MiscComponents/Contact';

export default function SoftwarePage() {
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
            <TimelineSection />
            <ContactSection title="Let's Talk" />
          </div>
        </main>
    )
}