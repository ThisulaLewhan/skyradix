"use client";

import { SectionTransition } from "@/components/ui/PageTransition";

// Numbered ring list shared by WhySkyradixSection and InnovationSection
export const NumberedPointList = ({ points }) => {
    return (
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
    );
};
