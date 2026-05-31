"use client";

import Image from "next/image";
import { PageTransition, SectionTransition } from "@/components/ui/PageTransition";
import { H1, H2, Body } from "@/components/ui/Typography";
import Link from "next/link";
import {
    Dumbbell,
    ArrowLeft,
    Users,
    BarChart3,
    CreditCard,
    DoorOpen,
    MessageSquare,
    ArrowRight,
    CheckCircle2,
} from "lucide-react";
import GymOSDemo from "@/components/gym-os/GymOSDemo";

const features = [
    {
        icon: <Users className="w-6 h-6 text-indigo-400" />,
        title: "Member Management",
        desc: "Register members with photo, NIC, phone, and package details. Track admission numbers, active status, start & end dates and search across all records instantly.",
    },
    {
        icon: <CreditCard className="w-6 h-6 text-indigo-300" />,
        title: "Payments & Renewals",
        desc: "Log registrations, renewals, and day passes. Every transaction gets full member linkage and payment type tracking.",
    },
    {
        icon: <DoorOpen className="w-6 h-6 text-indigo-300" />,
        title: "Hardware Access Control",
        desc: "Built-in terminal sync for door access hardware. Only members with active packages are granted entry. The dashboard shows live hardware connection status.",
    },
    {
        icon: <Dumbbell className="w-6 h-6 text-indigo-400" />,
        title: "PT Session Tracker",
        desc: "Track personal training sessions per member and coach. Filter by time period, view session totals, and monitor revenue from PT services separately.",
    },
    {
        icon: <MessageSquare className="w-6 h-6 text-indigo-400" />,
        title: "SMS Broadcast",
        desc: "Send bulk SMS to filtered member segments by period, status, or attendance engagement. Target recently attended or members who haven't visited in weeks.",
    },
    {
        icon: <BarChart3 className="w-6 h-6 text-indigo-300" />,
        title: "Analytics Dashboard",
        desc: "See total revenue, active members, today's attendance, and new sign-ups at a glance. Drill into revenue splits across new registrations, renewals, and day passes.",
    },
    
    
];

const highlights = [
    "Admission-based member tracking",
    "Bulk SMS broadcast with member engagement filters",
    "Separate PT session tracking with coach assignment",
    "Live activity feed showing real-time member check-ins",
    "Package management Monthly, Quarterly, Annual plans",
    "Hardware terminal sync for smart door access control",
    "Configurable grace periods, registration fees & lapse penalties",
];


export default function GymOSPage() {
    return (
        <PageTransition>
            <div className="bg-primary-black min-h-screen overflow-hidden">

                {/* ── HERO ─────────────────────────────────────────────── */}
                <section className="relative pt-36 pb-24 px-6 overflow-hidden">
                    {/* Background glows */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-indigo-600/12 rounded-full blur-[180px] pointer-events-none" />
                    <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-indigo-400/6 rounded-full blur-[160px] pointer-events-none" />
                    <div className="absolute top-20 left-0 w-[350px] h-[350px] bg-indigo-700/8 rounded-full blur-[140px] pointer-events-none" />

                    <div className="max-w-7xl mx-auto relative z-10">

                        <div className="text-center max-w-4xl mx-auto">

                            <SectionTransition delay={0.1}>
                                <H1 className="mb-6 leading-tight">
                                    The{" "}
                                    <span className="bg-gradient-to-r from-indigo-600 via-indigo-300 to-indigo-600 bg-clip-text text-transparent">
                                        Complete Operating System
                                    </span>
                                    {" "}for Modern Gyms
                                </H1>
                            </SectionTransition>

                            <SectionTransition delay={0.15}>
                                <Body variant="large" className="text-white/60 leading-relaxed max-w-2xl mx-auto mb-10">
                                    Manage members, track payments, log PT sessions, broadcast SMS, and control door access hardware. All from a single, purpose-built dashboard designed for gyms.
                                </Body>
                            </SectionTransition>

                            <SectionTransition delay={0.2}>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
                                    <Link href="/">
                                        <button className="min-w-[180px] inline-flex items-center justify-center gap-2 border border-white/10 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white rounded-xl px-6 py-3 text-sm font-medium transition-all duration-300 group">
                                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                            Back to Home
                                        </button>
                                    </Link>
                                    <Link href="/contact">
                                        <button className="min-w-[180px] inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-xl px-6 py-3 text-sm transition-all duration-300 hover:shadow-lg hover:shadow-indigo-600/30 hover:-translate-y-0.5 group">
                                            Request Access
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </Link>
                                </div>
                            </SectionTransition>
                        </div>

                        {/* ── INTERACTIVE DEMO — desktop only ──────────── */}
                        <SectionTransition delay={0.25}>

                            {/* Mobile — screenshot */}
                            <div className="md:hidden relative">
                                <div className="absolute inset-0 bg-indigo-600/15 rounded-3xl blur-3xl scale-105 pointer-events-none" />
                                <div className="relative rounded-2xl border border-indigo-500/20 bg-gradient-to-b from-indigo-500/5 to-transparent p-1.5 shadow-2xl shadow-indigo-900/40">
                                    {/* Address bar */}
                                    <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/5 bg-white/[0.02] rounded-t-xl">
                                        <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                                        <div className="flex-1 mx-4 h-5 bg-white/5 rounded border border-white/5 flex items-center px-3">
                                            <span className="text-white/20 text-[11px]">skyradix.com/gym-os</span>
                                        </div>
                                    </div>
                                    <Image
                                        src="/images/gym-os-screenshot.png"
                                        alt="Gym OS dashboard screenshot"
                                        width={1280}
                                        height={720}
                                        className="w-full rounded-b-xl"
                                        priority
                                    />
                                </div>
                                <p className="text-center text-white/25 text-xs mt-3">Open in desktop device to explore the interactive version</p>
                            </div>

                            {/* Desktop demo */}
                            <div className="hidden md:block relative">
                                {/* Glow behind the demo */}
                                <div className="absolute inset-0 bg-indigo-600/15 rounded-3xl blur-3xl scale-105 pointer-events-none" />
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-24 bg-indigo-500/8 blur-3xl pointer-events-none" />

                                {/* Browser chrome frame */}
                                <div className="relative rounded-2xl border border-indigo-500/20 bg-gradient-to-b from-indigo-500/5 to-transparent p-1.5 shadow-2xl shadow-indigo-900/40">
                                    {/* Address bar */}
                                    <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/5 bg-white/[0.02] rounded-t-xl">
                                        <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                                        <div className="flex-1 mx-4 h-5 bg-white/5 rounded border border-white/5 flex items-center px-3">
                                            <span className="text-white/20 text-[11px]">skyradix.com/gym-os</span>
                                        </div>
                                    </div>

                                    {/* Interactive Demo */}
                                    <GymOSDemo />
                                </div>

                                {/* Helper label */}
                                <p className="text-center text-white/30 text-sm mt-4">
                                    Interactive preview. Click the sidebar to explore different pages
                                </p>
                            </div>

                        </SectionTransition>
                    </div>
                </section>

                {/* ── FEATURES GRID ────────────────────────────────────── */}
                <section className="py-32 px-6 relative border-t border-white/5">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-700/8 rounded-full blur-[120px] pointer-events-none" />

                    <div className="max-w-7xl mx-auto relative z-10">
                        <SectionTransition className="text-center max-w-2xl mx-auto mb-20">
                            <H2 className="mb-5">
                                Every Module Your Gym{" "}
                                <span className="bg-gradient-to-r from-indigo-300 to-indigo-600 bg-clip-text text-transparent">
                                    Actually Needs
                                </span>
                            </H2>
                            <Body className="text-white/50 leading-relaxed">
                                Gym OS ships with fully integrated features. Members, Payments, PT Tracker, Analytics, SMS Broadcast and Door Access Control. No add-ons. No hidden tiers.
                            </Body>
                        </SectionTransition>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {features.map((feature, i) => (
                                <SectionTransition key={i} delay={i * 0.08} className="h-full">
                                    <div className="group relative bg-white/[0.02] border border-white/[0.06] hover:border-indigo-500/30 rounded-2xl p-7 transition-all duration-500 hover:bg-white/[0.04] overflow-hidden h-full min-h-[280px] flex flex-col">
                                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
                                        <div className="relative z-10">
                                            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                                                {feature.icon}
                                            </div>
                                            <h3 className="text-lg font-semibold mb-3 text-white">{feature.title}</h3>
                                            <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                                                {feature.desc}
                                            </p>
                                        </div>
                                    </div>
                                </SectionTransition>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── HIGHLIGHTS ───────────────────────────────────────── */}
                <section className="py-24 px-6 border-t border-white/5">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <SectionTransition>
                                <H2 className="mb-6">
                                    Designed Around How{" "}
                                    <span className="bg-gradient-to-r from-indigo-300 to-indigo-600 bg-clip-text text-transparent">
                                        Local Gyms Work
                                    </span>
                                </H2>
                                <Body className="text-white/50 leading-relaxed mb-10">
                                    Gym OS is built from the ground up for fitness businesses. Every feature from membership management to SMS broadcast and hardware door sync, reflects real gym workflows.
                                </Body>
                                <ul className="space-y-4">
                                    {highlights.map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-white/70 text-sm">
                                            <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </SectionTransition>

                            <SectionTransition delay={0.15}>
                                <div className="relative rounded-2xl border border-indigo-500/20 bg-gradient-to-br from-indigo-500/8 via-transparent to-indigo-400/5 p-10 overflow-hidden">
                                    <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
                                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-400/8 rounded-full blur-2xl pointer-events-none" />
                                    <div className="relative z-10 text-center">
                                        <div className="w-16 h-16 rounded-2xl border border-indigo-500/30 bg-indigo-500/10 flex items-center justify-center mx-auto mb-6">
                                            <Dumbbell className="w-8 h-8 text-indigo-400" />
                                        </div>
                                        <p className="text-2xl font-bold text-white mb-3">Gym OS</p>
                                        <p className="text-white/40 text-sm leading-relaxed mb-8 max-w-xs mx-auto">
                                            Be among the first gyms to run on Gym OS. We&apos;re onboarding a limited number of early partners.
                                        </p>
                                        <Link href="/contact">
                                            <button className="w-full inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-xl px-6 py-3.5 text-sm transition-all duration-300 hover:shadow-lg hover:shadow-indigo-600/30 group">
                                                Get in Touch
                                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </SectionTransition>
                        </div>
                    </div>
                </section>

                {/* ── FOOTER CTA ───────────────────────────────────────── */}
                <section className="py-32 px-6 border-t border-white/5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/5 to-transparent pointer-events-none" />
                    <div className="max-w-3xl mx-auto text-center relative z-10">
                        <SectionTransition>
                            <H2 className="mb-6">
                                Ready to Modernize{" "}
                                <span className="bg-gradient-to-r from-indigo-300 to-indigo-600 bg-clip-text text-transparent">
                                    Your Gym?
                                </span>
                            </H2>
                            <Body className="text-white/50 leading-relaxed mb-10">
                                Gym OS is currently in early access. If you run a gym and want to be among the first to deploy it, get in touch with the Skyradix team.
                            </Body>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link href="/contact">
                                    <button className="min-w-[180px] inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-600/30 hover:-translate-y-0.5 group">
                                        Contact Us
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </Link>
                                <Link href="/">
                                    <button className="min-w-[180px] inline-flex items-center justify-center gap-2 border border-white/10 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white rounded-xl px-8 py-4 text-sm font-medium transition-all duration-300 group">
                                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                        Back to Home
                                    </button>
                                </Link>
                            </div>
                        </SectionTransition>
                    </div>
                </section>

            </div>
        </PageTransition>
    );
}
