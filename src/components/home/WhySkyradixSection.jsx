"use client";

import { useState, useEffect } from "react";
import { SectionTransition } from "@/components/ui/PageTransition";
import { H2, Body } from "@/components/ui/Typography";

export const WhySkyradixSection = () => {
    const points = [
        "We think about your customers, not just design.",
        "We build systems that support growth.",
        "We focus on long-term results, not quick fixes.",
        "We explain everything clearly.",
        "We treat your business like it’s our own."
    ];

    // Real-time clock: accumulate total seconds to avoid 360°→0° jumps
    const [ticks, setTicks] = useState(0);
    useEffect(() => {
        const now = new Date();
        const s = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
        setTicks(s);
        const timer = setInterval(() => setTicks(t => t + 1), 1000);
        return () => clearInterval(timer);
    }, []);
    const secondDeg = ticks * 6;
    const minuteDeg = (ticks / 60) * 6;
    const hourDeg = (ticks / 3600) * 30;

    return (
        <section className="py-32 relative bg-primary-black overflow-hidden border-t border-white/5">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-electric-blue/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
            <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />

            <div className="max-w-7xl mx-auto px-6 lgx:px-8 relative z-10 flex flex-col items-center">

                {/* Section Title */}
                <SectionTransition delay={0.1} className="text-center w-full mb-10 lg:mb-10 mt-8">
                    <H2 className="font-bold tracking-tight text-white drop-shadow-md">
                        Why Businesses Work With Us
                    </H2>
                </SectionTransition>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 w-full items-center mb-20 lg:mb-20">

                    {/* Left Column: List of Points */}
                    <div className="w-full divide-y divide-white/15">
                        {points.map((point, index) => (
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

                    {/* Right Column: Hyper-Realistic Custom Smartwatch Face */}
                    <SectionTransition delay={0.3} className="flex justify-center lg:justify-center w-full relative mt-12 lg:mt-0">
                        {/* Dramatic Ambient Flares Splitting the Canvas */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] lg:w-[800px] pointer-events-none -rotate-12 opacity-50 mix-blend-screen">
                            <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-blue-600/50 to-blue-400/10 blur-3xl" />
                            <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-transparent via-orange-600/50 to-orange-400/10 blur-3xl" />
                        </div>

                        {/* Watch Assembly Wrapper to handle proper layering */}
                        <div className="relative w-80 h-80 lg:w-[400px] lg:h-[400px] flex items-center justify-center isolate">

                            {/* The Crown / Dial on the right (Sibling to casing now, pushing it perfectly underneath) */}
                            <div className="absolute top-1/2 -right-4 lg:-right-5 -translate-y-1/2 w-6 h-14 lg:w-7 lg:h-16 bg-gradient-to-b from-[#222] via-[#111] to-[#050505] rounded-r-lg border-y border-r border-[#333] shadow-[inset_-2px_0_4px_rgba(255,255,255,0.1),2px_0_10px_rgba(0,0,0,0.8)] flex flex-col justify-evenly py-1 overflow-hidden z-0">
                                {/* Crown Ridges (Knurling) */}
                                {Array.from({ length: 9 }).map((_, i) => (
                                    <div key={i} className="w-full h-[1px] bg-black/80 shadow-[0_1px_0_rgba(255,255,255,0.05)]" />
                                ))}
                            </div>

                            {/* The Watch Casing (Main watch body, elevated above crown) */}
                            <div className="absolute inset-0 z-10 rounded-full bg-[#111111] shadow-[0_20px_50px_rgba(0,0,0,1),inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_-20px_20px_rgba(0,0,0,0.8)] border border-[#222]">

                                {/* The Watch Dial Recess */}
                                <div className="absolute inset-[10px] rounded-full bg-[#050505] shadow-[inset_0_10px_30px_rgba(0,0,0,1),inset_0_-5px_15px_rgba(255,255,255,0.02)] border border-black overflow-hidden flex items-center justify-center">

                                    {/* Inner Bezel Ring */}
                                    <div className="absolute inset-2 border border-white/[0.03] rounded-full" />
                                    <div className="absolute inset-8 border border-white/[0.02] rounded-full" />

                                    {/* Dotted Mesh/Carbon Texture */}
                                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8Y2lyY2xlIGN4PSIxIiBjeT0iMSIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPgo8L3N2Zz4=')] opacity-100" />

                                    {/* Blue Glowing Arc (Left Side) */}
                                    <svg className="absolute inset-[30px] lg:inset-[35px] w-[calc(100%-60px)] h-[calc(100%-60px)] lg:w-[calc(100%-70px)] lg:h-[calc(100%-70px)] pointer-events-none drop-shadow-[0_0_10px_rgba(0,120,255,0.8)]" viewBox="0 0 100 100" style={{ transform: 'rotate(-135deg)' }}>
                                        <circle cx="50" cy="50" r="48" fill="none" stroke="url(#blue-arc)" strokeWidth="1.5" strokeDasharray="80 222" strokeLinecap="round" />
                                        <defs>
                                            <linearGradient id="blue-arc" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" stopColor="#0044ff" opacity="0.1" />
                                                <stop offset="50%" stopColor="#00aaff" />
                                                <stop offset="100%" stopColor="#00ffff" />
                                            </linearGradient>
                                        </defs>
                                    </svg>

                                    {/* Orange Glowing Arc (Right Side) */}
                                    <svg className="absolute inset-[30px] lg:inset-[35px] w-[calc(100%-60px)] h-[calc(100%-60px)] lg:w-[calc(100%-70px)] lg:h-[calc(100%-70px)] pointer-events-none drop-shadow-[0_0_10px_rgba(255,80,0,0.8)]" viewBox="0 0 100 100" style={{ transform: 'rotate(15deg)' }}>
                                        <circle cx="50" cy="50" r="48" fill="none" stroke="url(#orange-arc)" strokeWidth="1.5" strokeDasharray="100 202" strokeLinecap="round" />
                                        <defs>
                                            <linearGradient id="orange-arc" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#ff1100" />
                                                <stop offset="50%" stopColor="#ff6600" />
                                                <stop offset="100%" stopColor="#ffaa00" opacity="0.1" />
                                            </linearGradient>
                                        </defs>
                                    </svg>

                                    {/* Tiny Numbers around the dial */}
                                    <div className="absolute inset-0 pointer-events-none select-none">
                                        {Array.from({ length: 12 }).map((_, i) => {
                                            const angle = (i * 30 - 90) * (Math.PI / 180);
                                            const radius = 45;
                                            const x = +(50 + radius * Math.cos(angle)).toFixed(4);
                                            const y = +(50 + radius * Math.sin(angle)).toFixed(4);
                                            return (
                                                <div
                                                    key={i}
                                                    className="absolute w-6 h-6 flex items-center justify-center text-[11px] lg:text-xs font-medium text-white/50 tracking-widest"
                                                    style={{ left: `calc(${x}% - 12px)`, top: `calc(${y}% - 12px)` }}
                                                >
                                                    {i === 0 ? 12 : i}
                                                </div>
                                            );
                                        })}
                                    </div>

                                    {/* Massive Embossed Dark Abstract Logo (The 'X') */}
                                    <div className="absolute inset-0 flex items-center justify-center scale-110 sm:scale-125 lg:scale-150 pointer-events-none opacity-80 z-0">
                                        <div className="relative w-28 h-28 flex items-center justify-center rotate-45">
                                            <div className="absolute w-8 h-28 bg-[#181818] rounded-xl shadow-[inset_1px_1px_3px_rgba(255,255,255,0.05),-5px_-5px_15px_rgba(0,0,0,1),5px_5px_15px_rgba(0,0,0,1)] border border-black/50" />
                                            <div className="absolute w-28 h-8 bg-[#181818] rounded-xl shadow-[inset_1px_1px_3px_rgba(255,255,255,0.05),-5px_-5px_15px_rgba(0,0,0,1),5px_5px_15px_rgba(0,0,0,1)] border border-black/50" />
                                        </div>
                                    </div>

                                    {/* Watch Hands */}

                                    {/* Blue (Hour) Hand */}
                                    <div className="absolute inset-0 z-10 pointer-events-none" style={{ transform: `rotate(${hourDeg}deg)`, transition: 'transform 0.6s ease-in-out' }}>
                                        <div className="absolute top-1/2 left-1/2 w-[4px] lg:w-[5px] h-[35%] bg-gradient-to-t from-[#2a2a2a] to-[#444] rounded-full origin-bottom shadow-[0_2px_5px_rgba(0,0,0,0.8)]" style={{ transform: 'translate(-50%, -100%)' }}>
                                            <div className="absolute top-1.5 lg:top-2 inset-x-0.5 lg:inset-x-1 bottom-6 lg:bottom-8 bg-blue-300/80 rounded-full blur-[0.5px] shadow-[0_0_5px_rgba(0,150,255,0.8)]" />
                                        </div>
                                    </div>

                                    {/* Orange (Minute) Hand */}
                                    <div className="absolute inset-0 z-10 pointer-events-none" style={{ transform: `rotate(${minuteDeg}deg)`, transition: 'transform 0.6s ease-in-out' }}>
                                        <div className="absolute top-1/2 left-1/2 w-[3px] lg:w-[4px] h-[45%] bg-gradient-to-t from-[#2a2a2a] to-[#555] rounded-full origin-bottom shadow-[0_4px_8px_rgba(0,0,0,0.8)]" style={{ transform: 'translate(-50%, -100%)' }}>
                                            <div className="absolute top-2 lg:top-3 inset-x-px lg:inset-x-1 bottom-8 lg:bottom-12 bg-orange-300/80 rounded-full blur-[0.5px] shadow-[0_0_5px_rgba(255,100,0,0.8)]" />
                                        </div>
                                    </div>

                                    {/* Gray (Second) Hand */}
                                    <div className="absolute inset-0 z-20 pointer-events-none" style={{ transform: `rotate(${secondDeg}deg)`, transition: 'transform 0.35s cubic-bezier(0.4, 2.2, 0.55, 0.44)' }}>
                                        <div className="absolute top-1/2 left-1/2 w-[1px] lg:w-[2px] h-[50%] bg-[#aaa] shadow-[0_2px_4px_rgba(0,0,0,0.6)] origin-bottom" style={{ transform: 'translate(-50%, -100%)' }} />
                                        <div className="absolute top-1/2 left-1/2 w-[2px] lg:w-[3px] h-[12%] bg-[#666] origin-top" style={{ transform: 'translate(-50%, 0)' }} />
                                    </div>

                                    {/* Center Pin Cap */}
                                    <div className="absolute w-5 h-5 lg:w-7 lg:h-7 bg-gradient-to-b from-[#333] to-[#111] rounded-full shadow-[0_4px_8px_rgba(0,0,0,1),inset_0_1px_1px_rgba(255,255,255,0.2)] z-30 flex items-center justify-center">
                                        <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-black rounded-full" />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </SectionTransition>
                </div>

                {/* Closing Quote */}
                <SectionTransition delay={0.1} className="w-full text-center">
                    <blockquote className="text-xl md:text-2xl font-medium italic text-muted-grey leading-relaxed tracking-wide">
                        &quot;If we build it, <span className="font-medium text-white">it’s built properly.</span>&quot;
                    </blockquote>
                </SectionTransition>

            </div>
        </section>
    );
};
