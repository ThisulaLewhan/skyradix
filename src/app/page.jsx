"use client";
import { useState, useEffect } from "react";
import HeroSection from "@/components/HomeComponents/HeroSection";
import SoftwareService from "@/components/HomeComponents/SoftwareService";
import WebService from "@/components/HomeComponents/WebsiteService";
import AboutSection from "@/components/HomeComponents/AboutSection";
import ContactSection from "@/components/MiscComponents/Contact";

export default function Home() {
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
      <div id="hero-section">
        <HeroSection />
      </div>
      <div class="background-thing">
        <SoftwareService />
        <WebService />
        <AboutSection />
        <ContactSection title="Contact Us" />
      </div>
    </main>
  );
}