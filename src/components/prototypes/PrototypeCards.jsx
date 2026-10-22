"use client";

import { SectionTransition } from "@/components/ui/PageTransition";
import { Card } from "@/components/ui/Card";
import Link from "next/link";

const prototypes = [
    {
        id: "fitness",
        title: "Fitness & Gym",
        icon: <img src="/images/fluent-weights.png" alt="Fitness" className="w-10 h-10 object-contain drop-shadow-sm" />,
        desc: "A modern gym and fitness centre website with class schedules, membership plans, and trainer profiles.",
        tags: ["Health", "Gym", "Membership"],
        link: "/prototypes/fitness",
        bgClass: "",
        borderClass: "!border-orange-500/50 hover:!border-orange-400",
        shadowClass: "shadow-none hover:shadow-[0_0_30px_rgba(249,115,22,0.6)]"
    },
    {
        id: "ecommerce",
        title: "E-Commerce Store",
        icon: <img src="/images/fluent-cart.png" alt="E-Commerce" className="w-10 h-10 object-contain drop-shadow-sm" />,
        desc: "A sleek online storefront with product listings, a shopping cart, and a smooth checkout experience.",
        tags: ["Shopping", "Retail", "Online Store"],
        link: "/prototypes/ecommerce",
        bgClass: "",
        borderClass: "!border-indigo-500/50 hover:!border-indigo-400",
        shadowClass: "shadow-none hover:shadow-[0_0_30px_rgba(99,102,241,0.6)]"
    }
];

// Prototype card grid shared by the home page section and the /prototypes page.
// `linkQuery` is appended to each prototype link (e.g. "?from=home" for the back button).
export const PrototypeCards = ({ linkQuery = "" }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Active Prototype Cards */}
            {prototypes.map((proto, index) => (
                <SectionTransition key={proto.id} delay={index * 0.1}>
                    <Link href={`${proto.link}${linkQuery}`} className="block h-full group">
                        <Card className={`glass h-full flex flex-col ${proto.bgClass} border ${proto.borderClass} ${proto.shadowClass} p-8 rounded-2xl transition-all duration-500 ease-out transform group-hover:-translate-y-2`}>
                            <div className="text-4xl mb-6 bg-white/5 w-16 h-16 flex items-center justify-center rounded-2xl border border-white/5 group-hover:scale-110 transition-transform duration-500">{proto.icon}</div>
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-white transition-colors">{proto.title}</h3>
                            <p className="text-muted-grey text-sm mb-8 flex-grow leading-relaxed group-hover:text-white/80 transition-colors">
                                {proto.desc}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                                {proto.tags.map((tag, i) => (
                                    <div key={i} className="px-3 py-1.5 text-xs text-white/60 bg-white/5 rounded-md border border-white/5 group-hover:bg-white/10 group-hover:border-white/10 transition-colors">
                                        {tag}
                                    </div>
                                ))}
                            </div>

                            <div className="text-sm font-medium text-white/50 group-hover:text-white transition-colors flex items-center mt-auto pt-4 border-t border-white/5">
                                View prototype
                                <svg className="ml-2 w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </Card>
                    </Link>
                </SectionTransition>
            ))}

            {/* Coming Soon Card */}
            <SectionTransition delay={0.2} className="h-full">
                <div className="h-full min-h-[380px] flex flex-col items-center justify-center border border-dashed border-white/50 rounded-2xl bg-black/20 backdrop-blur-sm group hover:border-white/80 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-500 cursor-default">
                    <div className="mb-6 opacity-40 group-hover:opacity-80 transition-opacity duration-500">
                        {/* Sparkle 3D Emoji */}
                        <img src="/images/fluent-sparkles.png" alt="Sparkles" className="w-8 h-8 object-contain drop-shadow-md group-hover:animate-pulse" />
                    </div>
                    <span className="text-sm font-medium text-white/30 group-hover:text-white/50 transition-colors duration-500 tracking-wide uppercase">More prototypes coming soon</span>
                </div>
            </SectionTransition>
        </div>
    );
};
