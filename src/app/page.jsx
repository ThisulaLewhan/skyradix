
import { HeroSection } from "@/components/home/HeroSection";
import { WhatWeBuildSection } from "@/components/home/WhatWeBuildSection";
import { PageTransition } from "@/components/ui/PageTransition";

import { WhySkyradixSection } from "@/components/home/WhySkyradixSection";
import { PrototypePreviewSection } from "@/components/home/PrototypePreviewSection";
import { HowWeWorkSection } from "@/components/home/HowWeWorkSection";
import { OurProductsSection } from "@/components/home/OurProductsSection";
import { InnovationSection } from "@/components/home/InnovationSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";

export default function Home() {
  return (
    <PageTransition>
      <div className="flex flex-col w-full">
        <HeroSection />
        <WhatWeBuildSection />
        <PrototypePreviewSection />
        <HowWeWorkSection />
        <OurProductsSection />
        <WhySkyradixSection />
        <InnovationSection />
        <FinalCtaSection />
      </div>
    </PageTransition>
  );
}