"use client";

import { SectionTransition } from "@/components/ui/PageTransition";
import { H2, H3, Body } from "@/components/ui/Typography";
import { QrCode, ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import Link from "next/link";
import DotGrid from "@/components/ui/DotGrid";

export const OurProductsSection = () => {
    const products = [
        {
            title: "FindMe",
            desc: "Create privacy safe QR for your valuable items. If lost, finders can contact you securely without seeing your personal details.",
            link: "https://findme.skyradix.com",
            icon: <QrCode className="w-8 h-8 text-neon-cyan" />,
            color: "from-cyan-500/20 to-blue-500/20",
            borderClass: "border-cyan-500/30 group-hover:border-cyan-400/50",
            status: "live",
            ctaText: "Visit FindMe",
            hasGlow: true
        },
        {
            status: "coming_soon",
            borderClass: "border-white/10 border-dashed",
            hasGlow: false
        },
        {
            status: "coming_soon",
            borderClass: "border-white/10 border-dashed",
            hasGlow: false
        }
    ];

    return (
        <section className="py-32 relative bg-primary-black overflow-hidden border-t border-white/5">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-electric-blue/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />

            {/* Interactive Dot Grid Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <DotGrid gap={24} size={1.5} mouseRadius={200} distortionStrength={4} returnSpeed={0.06} className="opacity-100" />
            </div>

            {/* Overlay gradient to blend edges */}
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-primary-black to-transparent pointer-events-none z-0" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-primary-black to-transparent pointer-events-none z-0" />

            <div className="max-w-7xl mx-auto px-6 lgx:px-8 relative z-10">
                <SectionTransition className="mb-20 text-center max-w-3xl mx-auto">
                    <H2 className="mb-6 font-bold tracking-tight text-white drop-shadow-md">
                        We Also Build Our Own Products
                    </H2>
                    <Body variant="large" className="text-muted-grey text-lg leading-relaxed">
                        Alongside client projects, we build our own products
                        focused on solving real operational and productivity challenges.
                    </Body>
                </SectionTransition>

                {/* Product Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => {
                        const CardWrapper = product.status === "live" ? Link : 'div';
                        const wrapperProps = product.status === "live" ? { href: product.link, target: "_blank", rel: "noopener noreferrer" } : {};

                        return (
                            <SectionTransition key={index} delay={index * 0.15}>
                                <div className="relative h-full group">
                                    {/* Always-on Animated Glow for featured items */}
                                    {product.hasGlow && (
                                        <div className="absolute -inset-[2px] rounded-[1.5rem] bg-gradient-to-r from-neon-cyan via-purple-500 to-electric-blue opacity-50 blur-lg animate-pulse pointer-events-none group-hover:opacity-100 group-hover:blur-xl transition-all duration-700" />
                                    )}

                                    <CardWrapper {...wrapperProps} className="block relative h-full">
                                        <div className={`relative bg-[#0a0a0a] backdrop-blur-xl border rounded-3xl p-8 transition-all duration-500 flex flex-col h-full overflow-hidden ${product.borderClass} ${product.status === "live" ? "hover:-translate-y-2 hover:shadow-2xl hover:shadow-black cursor-pointer" : "opacity-60 cursor-default items-center justify-center min-h-[320px]"}`}>

                                            {product.status === "live" ? (
                                                <>
                                                    {/* Hover Ambient Detail */}
                                                    <div className={`absolute -inset-2 opacity-0 group-hover:opacity-100 bg-gradient-to-br ${product.color} blur-2xl transition-opacity duration-700 pointer-events-none`} />

                                                    {/* Top section: Icon and Arrow */}
                                                    <div className="relative flex justify-between items-start mb-10 z-10">
                                                        <div className="w-16 h-16 rounded-2xl border flex items-center justify-center backdrop-blur-sm transition-transform duration-500 shadow-xl bg-white/5 border-white/10 group-hover:scale-110">
                                                            {product.icon}
                                                        </div>
                                                        <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 group-hover:text-white group-hover:bg-white/10 transition-all duration-300">
                                                            <ExternalLink className="w-4 h-4" />
                                                        </div>
                                                    </div>

                                                    {/* Content */}
                                                    <div className="relative z-10 flex-grow">
                                                        <H3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all duration-300">
                                                            {product.title}
                                                        </H3>
                                                        <p className="leading-relaxed text-muted-grey group-hover:text-white/80 transition-colors duration-300">
                                                            {product.desc}
                                                        </p>
                                                    </div>

                                                    {/* Action pseudo-button mimicking prototype section */}
                                                    <div className="mt-10 relative z-10">
                                                        <div className="w-full flex items-center justify-between border rounded-xl py-4 px-6 transition-all duration-300 border-white/10 group-hover:border-white/20 bg-white/5 group-hover:bg-white/10 text-white">
                                                            <span className="font-medium">{product.ctaText}</span>
                                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                        </div>
                                                    </div>
                                                </>
                                            ) : (
                                                <div className="flex flex-col items-center justify-center text-center space-y-6 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                                                    <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center bg-white/5">
                                                        <Sparkles className="w-8 h-8 text-white/30" />
                                                    </div>
                                                    <H3 className="text-xl font-medium tracking-widest uppercase text-muted-grey hover:text-white transition-colors">Coming Soon</H3>
                                                </div>
                                            )}

                                        </div>
                                    </CardWrapper>
                                </div>
                            </SectionTransition>
                        );
                    })}
                </div>

                <SectionTransition delay={0.4} className="mt-16 max-w-2xl mx-auto text-center">
                    <blockquote className="text-lg md:text-xl font-medium italic text-muted-grey leading-relaxed md:leading-[1.6] tracking-wide">
                        &quot;We don’t just work for businesses. <span className="font-medium text-white">We build like one.</span>&quot;
                    </blockquote>
                </SectionTransition>
            </div>
        </section>
    );
};
