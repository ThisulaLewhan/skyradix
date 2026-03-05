"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { H1, Body } from "@/components/ui/Typography";
import { SectionTransition } from "@/components/ui/PageTransition";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export const HeroSection = () => {
    // Removed complex Blob loading logic to drastically improve LCP.
    // The video will now load concurrently with the HTML document.

    const preventContextMenu = (e) => {
        e.preventDefault();
    };

    const protectedImageProps = {
        onContextMenu: preventContextMenu,
        draggable: "false",
        style: { userSelect: 'none', WebkitUserSelect: 'none' }
    };

    return (
        <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-20 pb-20">
            {/* Dark Background Base */}
            <div className="absolute inset-0 z-0 bg-primary-black"></div>

            {/* Glow / Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-green-900/60 via-black/80 via-45% md:via-35% to-black opacity-80 pointer-events-none"></div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-80 z-0 pointer-events-none mt-8">
                <Image
                    src="/grid-background.svg"
                    alt="Background Pattern"
                    fill
                    priority
                    style={{ objectFit: 'cover' }}
                    {...protectedImageProps}
                />
            </div>

            {/* Left DNA Video */}
            <div className="absolute top-0 left-0 opacity-80 z-0 pointer-events-none mix-blend-lighten">
                <video
                    src="/DNA-Animation.webm"
                    autoPlay
                    muted
                    playsInline
                    preload="auto"
                    disablePictureInPicture
                    controlsList="nodownload noplaybackrate"
                    className="w-64 md:w-[480px] h-auto"
                    {...protectedImageProps}
                >
                    <track kind="captions" srcLang="en" label="English" default />
                </video>
            </div>

            {/* Right DNA Video (Flipped) */}
            <div className="absolute top-0 right-0 opacity-80 scale-x-[-1] z-0 pointer-events-none mix-blend-lighten">
                <video
                    src="/DNA-Animation.webm"
                    autoPlay
                    muted
                    playsInline
                    preload="auto"
                    disablePictureInPicture
                    controlsList="nodownload noplaybackrate"
                    className="w-64 md:w-[480px] h-auto"
                    {...protectedImageProps}
                >
                    <track kind="captions" srcLang="en" label="English" default />
                </video>
            </div>

            <div className="max-w-7xl mx-auto px-6 lgx:px-8 relative z-10 w-full mt-10 md:mt-28">
                <SectionTransition className="max-w-5xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <H1 className="text-5xl md:text-6xl lg:text-[65px] mb-6 leading-[1.1] font-bold tracking-tight">
                            <span className="bg-gradient-to-b from-[#00F99A] to-[#396755] bg-clip-text text-transparent drop-shadow-sm pb-2 block lg:inline-block lg:whitespace-nowrap">
                                Turning Ideas Into Digital Reality
                            </span>
                            <br className="hidden lg:block" />
                            <span className="bg-gradient-to-b font-medium from-[#F6F8F8] to-[#A7AEAE] bg-clip-text text-transparent drop-shadow-sm pb-2 inline-block">
                                Solutions That Help You Grow
                            </span>
                        </H1>

                        <Body variant="large" className="max-w-2xl mx-auto mb-12 text-muted-grey">
                            Websites, Applications, Software & Systems designed not just to look good, but to bring customers and support your business goals.
                        </Body>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                            <Link href="/contact">
                                <Button size="lg" className="justify-center min-w-[200px] px-8 py-4 text-base font-bold rounded-xl bg-[#00F99A] text-black shadow-[0_0_35px_-5px_rgba(0,249,154,0.2)] hover:shadow-[0_0_50px_-5px_rgba(0,249,154,0.7)] hover:brightness-105 active:scale-95 transition-all flex items-center gap-2 group">
                                    Start a Project
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                            <Link href="/prototypes">
                                <Button variant="ghost" size="lg" className="justify-center min-w-[200px] px-8 py-4 text-base font-medium rounded-xl border border-green-400/40 bg-black/70 backdrop-blur-md text-white hover:bg-black/90 hover:border-green-400/90 transition-all">
                                    View Prototypes
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </SectionTransition>
            </div>

            {/* Bottom abstract fade */}
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
        </section>
    );
};
