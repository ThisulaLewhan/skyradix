"use client";

import { SectionTransition } from "@/components/ui/PageTransition";
import { H2, Body } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export const FinalCtaSection = () => {
    return (
        <section className="py-40 relative bg-[#000] border-t border-white/5 overflow-hidden flex flex-col items-center justify-center">
            {/* Deep Grid Background */}
            <div className="absolute inset-0" />

            {/* Light Rays (Spectrum from Prism) */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[800px] pointer-events-none opacity-60 mix-blend-screen"
                style={{
                    background: 'conic-gradient(from 270deg at 50% 100%, #1e3a8a 0deg, #3b82f6 45deg, #05d892ff 90deg, #f59e0b 135deg, #f12727ff 180deg, transparent 180deg)'
                }}
            />
            {/* Ray texture overlay (using repeating linear gradient) */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[800px] pointer-events-none opacity-40 mix-blend-overlay"
                style={{
                    backgroundImage: 'repeating-radial-gradient(circle at 50% 100%, transparent 0, transparent 2px, rgba(0,0,0,0.8) 3px, rgba(0,0,0,0.8) 4px)'
                }}
            />



            {/* Fade shadow to blend the bottom */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />

            {/* Content Foreground */}
            <div className="max-w-4xl mx-auto px-6 text-center relative z-10 -mt-20">
                <SectionTransition>
                    <H2 className="text-4xl md:text-6xl mb-6">Have a vision?</H2>
                    <Body variant="large" className="text-white/80 mb-12">
                        Let's do it properly. We build scalable systems that perform from day one.
                    </Body>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        {/* Direct Call button — opens phone dialer */}
                        <a href="tel:0702708220">
                            <button className="group inline-flex items-center justify-center gap-2.5 min-w-[200px] px-8 py-4 rounded-xl bg-white text-black font-semibold text-base hover:bg-white/90 shadow-[0_0_40px_rgba(255,255,255,0.25)] hover:shadow-[0_0_60px_rgba(255,255,255,0.45)] transition-all duration-300 active:scale-95">
                                <Phone size={17} className="group-hover:scale-110 transition-transform" />
                                Direct Call
                            </button>
                        </a>
                        {/* Contact Us button */}
                        <Link href="/contact">
                            <button className="group inline-flex items-center justify-center gap-2.5 min-w-[200px] px-8 py-4 rounded-xl border border-white/30 hover:border-white/50 text-white/80 hover:text-white font-semibold text-base backdrop-blur-lg bg-white/5 hover:bg-white/10 transition-all duration-300 active:scale-95">
                                Start a Project
                                <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </Link>
                    </div>
                </SectionTransition>
            </div>
        </section>
    );
};
