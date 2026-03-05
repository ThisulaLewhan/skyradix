"use client";

import { PageTransition, SectionTransition } from "@/components/ui/PageTransition";
import { H1, H2, Body } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { LockOpen, Zap, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function EasterEggPage() {
    const slotsTotal = 3;
    const slotsUsed = 0; // Slots taken

    return (
        <PageTransition>
            <div className="min-h-[80vh] flex items-center justify-center relative overflow-hidden py-24">

                {/* Intense background glow to signify a hidden area */}
                <div className="absolute inset-0 bg-primary-black z-0" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-cyan/10 rounded-full blur-[150px] z-0 pointer-events-none" />

                <div className="max-w-3xl mx-auto px-6 relative z-10 w-full">
                    <SectionTransition className="text-center mb-12">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 mb-8 mx-auto">
                            <LockOpen className="text-accent-cyan" size={28} />
                        </div>
                        <H1 className="text-5xl md:text-6xl text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] mb-4">You Found It.</H1>
                        <Body variant="large" className="text-white/80">
                            Not everyone looks closely. We appreciate those who do. As a reward for your curiosity, you've unlocked priority access.
                        </Body>
                    </SectionTransition>

                    <SectionTransition delay={0.2}>
                        <Card className="bg-soft-graphite/60 border border-accent-cyan/30 backdrop-blur-xl p-8 md:p-12 relative overflow-hidden">


                            <div className="relative z-10">
                                <H2 className="text-3xl mb-2 flex items-center gap-3">
                                    <Zap className="text-accent-cyan fill-accent-cyan" size={24} />
                                    Priority Project Protocol
                                </H2>
                                <div className="h-[1px] w-full bg-accent-cyan/50 my-6" />

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                                    <div>
                                        <h4 className="text-white font-semibold mb-2">The Reward:</h4>
                                        <ul className="space-y-3">
                                            <li className="flex items-center text-sm text-white/80">
                                                <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan mr-3" />
                                                10% discount on any service or package
                                            </li>
                                            <li className="flex items-center text-sm text-white/80">
                                                <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan mr-3" />
                                                Skip the standard waitlist
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-primary-black/50 p-6 rounded-lg border border-glass-border">
                                        <div className="text-center">
                                            <span className="block text-xs text-white/50 uppercase tracking-widest mb-2">Slots Remaining</span>
                                            <span className="text-4xl font-bold font-mono text-accent-cyan drop-shadow-[0_0_10px_rgba(0,229,255,0.4)]">
                                                {slotsTotal - slotsUsed} / {slotsTotal}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <Link href="/contact?ref=priority-protocol">
                                    <Button size="lg" className="w-full text-lg shadow-[0_0_20px_rgba(0,229,255,0.3)] bg-accent-cyan text-primary-black hover:bg-white hover:text-primary-black">
                                        Claim Priority Access
                                    </Button>
                                </Link>
                                <p className="text-center text-sm text-white/60 mt-4">
                                    Mention "Priority Protocol" when submitting your inquiry.
                                </p>
                            </div>
                        </Card>
                    </SectionTransition>
                </div>
            </div>
        </PageTransition>
    );
}
