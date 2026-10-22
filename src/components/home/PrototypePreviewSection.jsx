"use client";

import { SectionTransition } from "@/components/ui/PageTransition";
import { H2, Body } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { PrototypeCards } from "@/components/prototypes/PrototypeCards";
import { ArrowRight } from "lucide-react";
import DotGrid from "@/components/ui/DotGrid";

export const PrototypePreviewSection = () => {
    return (
        <section id="prototypes" className="py-24 relative bg-primary-black overflow-hidden">
            <div className="absolute inset-0 z-0 pointer-events-none">
                <DotGrid gap={24} size={1.5} mouseRadius={200} distortionStrength={4} returnSpeed={0.06} className="opacity-100" />
            </div>
            {/* Overlay gradient to blend edges */}
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-primary-black to-transparent pointer-events-none z-0" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-primary-black to-transparent pointer-events-none z-0" />

            <div className="max-w-7xl mx-auto px-6 lgx:px-8 relative z-10">
                <SectionTransition className="flex flex-col items-center justify-center text-center mb-16 gap-6">
                    <div className="max-w-2xl">
                        <H2 className="mb-4">Explore Interactive Prototypes</H2>
                        <Body variant="muted" className="mb-8">
                            Live demos of concepts, UI systems, and experimental builds.<br />
                            See what we can build for your business.
                        </Body>
                    </div>
                    <Button href="/prototypes" variant="secondary" className="group">
                        View All Prototypes
                        <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </SectionTransition>

                <PrototypeCards linkQuery="?from=home" />
            </div>
        </section>
    );
};
