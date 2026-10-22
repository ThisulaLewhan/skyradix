"use client";

import { PageTransition, SectionTransition } from "@/components/ui/PageTransition";
import { H1, Body } from "@/components/ui/Typography";
import { PrototypeCards } from "@/components/prototypes/PrototypeCards";

export default function PrototypesPage() {
    return (
        <PageTransition>
            <div className="pt-24 pb-24 max-w-7xl mx-auto px-6 lgx:px-8">
                <SectionTransition className="mb-20 flex flex-col items-center text-center">
                    <div className="border border-white/10 rounded-full px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest text-muted-grey uppercase bg-white/5 backdrop-blur-sm">
                        Our Work
                    </div>
                    <H1 className="mb-6 font-bold tracking-tight text-5xl md:text-6xl text-white drop-shadow-sm">Live Prototypes</H1>
                    <Body variant="large" className="text-muted-grey max-w-3xl text-lg">
                        Real websites built by Skyradix, click any card to explore a live demo and see what we can build for your business.
                    </Body>
                </SectionTransition>

                <PrototypeCards />
            </div>
        </PageTransition>
    );
}
