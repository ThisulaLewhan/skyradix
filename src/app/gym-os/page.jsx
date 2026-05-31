"use client";

import { PageTransition, SectionTransition } from "@/components/ui/PageTransition";
import { H1, Body } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Dumbbell, ArrowLeft, Sparkles } from "lucide-react";

export default function GymOSPage() {
    return (
        <PageTransition>
            <div className="min-h-screen flex flex-col items-center justify-center pt-24 pb-32 px-6 relative overflow-hidden bg-primary-black">

                {/* Background glows */}
                <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[180px] pointer-events-none" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-pink-500/8 rounded-full blur-[150px] pointer-events-none" />

                <SectionTransition className="text-center max-w-2xl mx-auto relative z-10">

                    {/* Icon */}
                    <div className="w-24 h-24 rounded-3xl border border-purple-500/30 bg-purple-500/10 flex items-center justify-center mx-auto mb-8 shadow-xl shadow-purple-500/10">
                        <Dumbbell className="w-12 h-12 text-purple-400" />
                    </div>

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 border border-purple-500/30 bg-purple-500/10 rounded-full px-4 py-2 mb-8">
                        <Sparkles className="w-4 h-4 text-purple-400" />
                        <span className="text-purple-300 text-sm font-medium">Coming Soon</span>
                    </div>

                    <H1 className="mb-6 text-white">Gym OS</H1>

                    <Body variant="large" className="text-muted-grey leading-relaxed mb-12">
                        A complete gym management platform is on its way. Handle memberships, track attendance, schedule classes, manage trainers, and access real-time analytics — all from one powerful dashboard.
                    </Body>

                    <p className="text-white/40 text-sm mb-10">
                        This page is under construction. Check back soon for the full Gym OS experience.
                    </p>

                    <Link href="/">
                        <Button variant="secondary" size="lg" className="inline-flex items-center gap-2">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Home
                        </Button>
                    </Link>

                </SectionTransition>
            </div>
        </PageTransition>
    );
}
