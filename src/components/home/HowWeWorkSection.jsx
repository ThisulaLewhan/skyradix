"use client";

import { SectionTransition } from "@/components/ui/PageTransition";
import { H2, Body } from "@/components/ui/Typography";
import { Search, PenTool, Rocket } from "lucide-react";

export const HowWeWorkSection = () => {
    const steps = [
        {
            num: "01",
            title: "Understand",
            desc: "We learn about your business, your customers, and your overarching goals. No assumptions, just deep insights.",
            icon: <Search className="w-7 h-7 text-cyan-400" />,
            glowColor: "bg-cyan-500",
            lineColor: "bg-cyan-500",
            delay: 0.1
        },
        {
            num: "02",
            title: "Plan",
            desc: "We architect a clear, scalable structure that perfectly fits your exact needs and anticipates market demand.",
            icon: <PenTool className="w-7 h-7 text-purple-400" />,
            glowColor: "bg-purple-500",
            lineColor: "bg-purple-500",
            delay: 0.2
        },
        {
            num: "03",
            title: "Build & Improve",
            desc: "We build it carefully with state-of-the-art tech and continually improve it based on real user feedback.",
            icon: <Rocket className="w-7 h-7 text-orange-400" />,
            glowColor: "bg-orange-500",
            lineColor: "bg-orange-500",
            delay: 0.3
        }
    ];

    return (
        <section className="py-32 relative bg-primary-black overflow-hidden border-t border-white/5">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-electric-blue/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />

            <div className="max-w-7xl mx-auto px-6 lgx:px-8 relative z-10">
                <SectionTransition className="text-center mb-24">
                    <div className="inline-flex items-center justify-center border border-white/10 rounded-full px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest text-muted-grey uppercase bg-white/5 backdrop-blur-md">
                        Our Process
                    </div>
                    <H2 className="mb-6 font-bold tracking-tight text-white drop-shadow-md">How We Work</H2>
                    <Body variant="large" className="text-muted-grey max-w-2xl mx-auto text-lg">
                        A streamlined, transparent approach to turning your complex ideas into elegant digital realities.
                    </Body>
                </SectionTransition>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
                    {steps.map((step, index) => (
                        <SectionTransition key={index} delay={step.delay} className="h-full">
                            <div className="group relative h-full bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-10 hover:bg-white/[0.04] transition-all duration-500 overflow-hidden flex flex-col hover:-translate-y-2 hover:shadow-2xl hover:shadow-black">

                                {/* Massive Background Number */}
                                <div className="absolute -right-6 -bottom-12 text-[180px] font-black text-white/[0.08] group-hover:text-white/[0.16] transition-colors duration-700 leading-none select-none pointer-events-none">
                                    {step.num}
                                </div>

                                {/* Animated Top Line */}
                                <div className="h-1 w-12 bg-white/10 rounded-full mb-10 overflow-hidden relative">
                                    <div className={`absolute top-0 left-0 w-full h-full ${step.lineColor} -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out`} />
                                </div>

                                {/* Icon with Glowing Orb */}
                                <div className="relative mb-8 inline-flex">
                                    <div className={`absolute inset-0 ${step.glowColor} blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-full`} />
                                    <div className="relative w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md group-hover:scale-110 transition-transform duration-500 shadow-xl">
                                        {step.icon}
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-2xl font-bold text-white mb-4 relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all duration-300">
                                    {step.title}
                                </h3>
                                <p className="text-muted-grey leading-relaxed relative z-10 group-hover:text-white/80 transition-colors duration-300">
                                    {step.desc}
                                </p>
                            </div>
                        </SectionTransition>
                    ))}
                </div>

                <SectionTransition delay={0.6} className="mt-16 max-w-2xl mx-auto text-center">
                    <blockquote className="text-lg md:text-xl font-medium italic text-muted-grey leading-relaxed md:leading-[1.6] tracking-wide">
                        &quot;We focus on what your customers <span className="font-medium text-white">actually need</span>,<br className="hidden md:block" /> not just what looks impressive.&quot;
                    </blockquote>
                </SectionTransition>
            </div>
        </section>
    );
};
