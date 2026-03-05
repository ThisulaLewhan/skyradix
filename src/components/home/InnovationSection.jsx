"use client";

import { SectionTransition } from "@/components/ui/PageTransition";
import { H2, Body } from "@/components/ui/Typography";
import { Search, Clock, Eye, TrendingDown } from "lucide-react";
import Loader from "@/components/ui/Loader";

const stats = [
    { icon: Clock, label: "First impression", value: "0.05s", pos: "top-4 right-3" },
    { icon: Eye, label: "Judge by design", value: "94%", pos: "top-24 left-3" },
    { icon: TrendingDown, label: "Poor UX bounce", value: "88%", pos: "bottom-4 right-3" },
];

export const InnovationSection = () => {
    return (
        <section className="py-32 relative bg-primary-black overflow-hidden border-t border-white/5">

            {/* Atmospheric background glows */}
            <div className="absolute top-0 left-1/4 w-[800px] h-[700px] bg-blue-600/6 rounded-full blur-[200px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[500px] bg-purple-700/6 rounded-full blur-[180px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lgx:px-8 relative z-10">

                {/* Section Title */}
                <SectionTransition className="text-center mb-10">
                    <H2 className="font-bold tracking-tight text-white drop-shadow-md">
                        Your Digital Presence Speaks Before You
                    </H2>
                    <Body variant="large" className="text-muted-grey max-w-2xl mx-auto mt-4 text-lg">
                        Before someone calls you, visits you, or trusts you, they search you.
                    </Body>
                </SectionTransition>

                {/* Two-column layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Browser animation with stat overlays */}
                    <SectionTransition delay={0.15} className="relative">

                        {/* Outer ambient glow */}
                        <div className="absolute -inset-6 rounded-3xl bg-blue-500/4 blur-2xl pointer-events-none" />

                        {/* Browser card */}
                        <div className="relative rounded-2xl border border-white/[0.07] bg-[#080808] overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.9),0_0_0_1px_rgba(255,255,255,0.04)]">

                            {/* Browser chrome bar */}
                            <div className="flex items-center gap-2 px-4 py-3 bg-[#0f0f0f] border-b border-white/[0.05]">
                                <div className="flex gap-1.5 flex-shrink-0">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>
                                {/* Address bar */}
                                <div className="flex-1 mx-3 bg-white/[0.04] rounded-md px-3 py-1.5 flex items-center gap-2 border border-white/[0.04]">
                                    <Search size={11} className="text-white/40 flex-shrink-0" />
                                    <span className="text-xs text-white/40 font-mono tracking-wide truncate">
                                        your business name...
                                    </span>
                                </div>
                                {/* Live badge */}
                                <div className="flex items-center gap-1.5 flex-shrink-0">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                                    <span className="text-[10px] text-blue-400/50 font-mono tracking-widest">LIVE</span>
                                </div>
                            </div>

                            {/* Loader animation viewport */}
                            <div className="relative h-72 lg:h-80 overflow-hidden">
                                <Loader />

                                {/* Floating stat pills — positioned over the loader */}
                                {stats.map(({ icon: Icon, label, value, pos }, i) => (
                                    <SectionTransition key={i} delay={0.5 + i * 0.15} className={`absolute z-10 ${pos}`}>
                                        <div className="bg-black/85 backdrop-blur-md border border-white/20 rounded-xl px-3.5 py-2.5 shadow-xl shadow-black/80">
                                            <div className="flex items-center gap-1.5 text-white/35 mb-1">
                                                <Icon size={11} />
                                                <span className="text-[9px] uppercase tracking-widest font-medium">{label}</span>
                                            </div>
                                            <p className="text-2xl font-bold text-white font-mono leading-none">{value}</p>
                                        </div>
                                    </SectionTransition>
                                ))}
                            </div>
                        </div>
                    </SectionTransition>

                    {/* Right: Numbered ring list — same UI as WhySkyradixSection */}
                    <div className="w-full divide-y divide-white/15">
                        {[
                            "People check you online before they contact you.",
                            "What they see shapes how they judge your quality.",
                            "A weak digital presence makes even a good business look average.",
                            "A strong digital presence builds trust before you speak.",
                            "If your business is strong, your digital presence should show it.",
                        ].map((point, index) => (
                            <SectionTransition key={index} delay={0.1 + (index * 0.1)}>
                                <div className="group flex items-center gap-5 py-5 lg:py-6 transition-all duration-500 cursor-default">
                                    {/* Glowing Number Ring */}
                                    <div className="flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-blue-500/40 group-hover:border-blue-400/70 bg-blue-500/10 group-hover:bg-blue-500/20 flex items-center justify-center transition-all duration-500 shadow-[0_0_12px_2px_rgba(0,120,255,0.08)] group-hover:shadow-[0_0_20px_4px_rgba(0,120,255,0.18)]">
                                        <span className="text-xs lg:text-sm font-mono font-bold text-blue-400/70 group-hover:text-blue-300 transition-colors duration-300">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                    </div>
                                    {/* Point Text */}
                                    <span className="flex-1 text-base lg:text-lg text-white/80 group-hover:text-white font-medium leading-snug tracking-wide transition-colors duration-500">
                                        {point}
                                    </span>
                                    {/* Trailing arrow */}
                                    <span className="flex-shrink-0 text-blue-400/0 group-hover:text-blue-400/60 translate-x-3 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-400 text-lg">
                                        →
                                    </span>
                                </div>
                            </SectionTransition>
                        ))}
                    </div>

                </div>


            </div>
        </section>
    );
};
