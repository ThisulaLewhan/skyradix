"use client";

import { PageTransition, SectionTransition } from "@/components/ui/PageTransition";
import { H1, H2, H3, Body } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { AnimatedGradientCard } from "@/components/ui/AnimatedGradientCard";
import Link from "next/link";
import { Target, Eye, Users } from "lucide-react";

export default function AboutPage() {
    return (
        <PageTransition>
            <div className="pt-32 pb-32 max-w-7xl mx-auto px-6 lgx:px-8">

                <SectionTransition className="mb-24 text-center max-w-4xl mx-auto">
                    <H1 className="mb-8">About Skyradix</H1>
                    <Body variant="large" className="text-white">
                        Skyradix was founded with the belief that technology should create clarity, not noise. We build meaningful technology that solves real problems and turns ambitious ideas into reliable solutions.
                    </Body>
                </SectionTransition>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32 h-full">
                    <SectionTransition delay={0.1}>
                        <AnimatedGradientCard
                            theme="green"
                            icon={<Eye className="w-8 h-8" />}
                            title="Our Vision"
                            description="To reshape how people use technology, turning it from a source of distraction into a tool that helps people grow, create, and focus on what truly matters."
                        />
                    </SectionTransition>

                    <SectionTransition delay={0.2}>
                        <AnimatedGradientCard
                            theme="green"
                            icon={<Target className="w-8 h-8" />}
                            title="Our Mission"
                            description="To design and build meaningful technology that solves real problems and helps individuals and businesses use technology in a more purposeful and effective way."
                        />
                    </SectionTransition>
                </div>

                <SectionTransition delay={0.3} className="mb-32">
                    <div className="flex items-center gap-4 mb-12">
                        <Users className="text-accent-cyan" size={32} />
                        <H2 className="mb-0">Leadership & Team</H2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="md:col-span-1">
                            <div className="w-full aspect-square bg-soft-graphite/50 rounded-xl mb-6 flex items-center justify-center border border-glass-border overflow-hidden group">
                                {/* Fallback avatar if no image is present */}
                                <div className="w-24 h-24 rounded-full bg-primary-black border border-white/10 flex items-center justify-center group-hover:border-accent-cyan/50 transition-colors">
                                    <span className="text-3xl text-white/50 font-bold">T</span>
                                </div>
                            </div>
                            <H3 className="mb-1">Thisula Lewhan</H3>
                            <span className="text-accent-cyan text-sm block mb-4">Founder & Software Engineer, Skyradix</span>
                            <Body variant="small">
                                Ideas are everywhere. Execution is what creates the future. Speak less. Build more. Let the work prove the vision.
                            </Body>
                        </div>

                        <div className="md:col-span-2">
                            <AnimatedGradientCard
                                theme="green"
                                description={
                                    <span className="text-white/80 italic text-xl leading-relaxed">
                                        “Technology should do more than exist, it should matter. While much of the digital world is built for noise and distraction, our goal is different, to engineer technology that creates real value for people and meaningful progress for society.”
                                    </span>
                                }
                            />
                        </div>
                    </div>
                </SectionTransition>

                <SectionTransition delay={0.4} className="text-center bg-gradient-mesh rounded-3xl p-16 border border-glass-border relative overflow-hidden">
                    <div className="absolute inset-0 bg-grid-texture opacity-30 pointer-events-none" />
                    <div className="relative z-10">
                        <H2 className="mb-6">Built For Scale</H2>
                        <Body variant="large" className="text-white/80 mb-10 max-w-2xl mx-auto">
                            We partner with businesses that view technology as a real advantage. If you share this vision, let's talk.
                        </Body>
                        <Link href="/contact">
                            <Button size="lg">Collaborate With Us</Button>
                        </Link>
                    </div>
                </SectionTransition>

            </div>
        </PageTransition>
    );
}
