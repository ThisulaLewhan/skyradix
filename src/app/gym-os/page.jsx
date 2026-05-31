"use client";

import { PageTransition, SectionTransition } from "@/components/ui/PageTransition";
import { H1, H2, H3, Body } from "@/components/ui/Typography";
import Link from "next/link";
import Image from "next/image";
import {
    Dumbbell,
    ArrowLeft,
    Users,
    BarChart3,
    CalendarCheck,
    ShieldCheck,
    DoorOpen,
    BellRing,
    ArrowRight,
    CheckCircle2,
    Zap,
} from "lucide-react";

const features = [
    {
        icon: <Users className="w-6 h-6 text-indigo-400" />,
        title: "Membership Management",
        desc: "Onboard members, manage plans, renewals, and payment history — all in one place.",
    },
    {
        icon: <CalendarCheck className="w-6 h-6 text-indigo-300" />,
        title: "Class Scheduling",
        desc: "Create and manage class timetables. Let members book sessions directly from their app.",
    },
    {
        icon: <BarChart3 className="w-6 h-6 text-indigo-400" />,
        title: "Real-Time Analytics",
        desc: "Track revenue, attendance trends, peak hours, and member retention at a glance.",
    },
    {
        icon: <DoorOpen className="w-6 h-6 text-indigo-300" />,
        title: "Door Access Control",
        desc: "Seamlessly integrate smart door access — only active members get in, automatically.",
    },
    {
        icon: <ShieldCheck className="w-6 h-6 text-indigo-400" />,
        title: "Trainer Management",
        desc: "Assign trainers to classes, manage schedules, and track performance metrics.",
    },
    {
        icon: <BellRing className="w-6 h-6 text-indigo-300" />,
        title: "Automated Notifications",
        desc: "Send renewal reminders, class alerts, and announcements automatically.",
    },
];

const highlights = [
    "Cloud-based, access from anywhere",
    "Mobile app for members & staff",
    "Multi-branch support",
    "Stripe & local payment integrations",
    "Role-based access control",
    "Daily automated backups",
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
                        {/* Back link */}
                        <SectionTransition>
                            <Link href="/" className="inline-flex items-center gap-2 text-white/40 hover:text-white/80 transition-colors text-sm mb-12 group">
                                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                Back to Home
                            </Link>
                        </SectionTransition>

                        <div className="text-center max-w-4xl mx-auto">
                            <SectionTransition delay={0.05}>
                                {/* Product badge */}
                                <div className="inline-flex items-center gap-2 border border-indigo-500/30 bg-indigo-500/10 rounded-full px-5 py-2 mb-8">
                                    <Dumbbell className="w-4 h-4 text-indigo-400" />
                                    <span className="text-indigo-300 text-sm font-medium tracking-wide">Gym OS — by Skyradix</span>
                                </div>
                            </SectionTransition>

                            <SectionTransition delay={0.1}>
                                <H1 className="mb-6 leading-tight">
                                    The{" "}
                                    <span className="bg-gradient-to-r from-indigo-300 via-indigo-400 to-indigo-200 bg-clip-text text-transparent">
                                        Complete Operating System
                                    </span>
                                    {" "}for Modern Gyms
                                </H1>
                            </SectionTransition>

                            <SectionTransition delay={0.15}>
                                <Body variant="large" className="text-white/60 leading-relaxed max-w-2xl mx-auto mb-10">
                                    Run your entire gym from a single dashboard. Manage memberships, schedule classes, control door access, track analytics, and keep your members engaged — all in one powerful platform.
                                </Body>
                            </SectionTransition>

                            <SectionTransition delay={0.2}>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
                                    <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 text-white/50 rounded-xl px-6 py-3 text-sm cursor-default">
                                        <Zap className="w-4 h-4 text-indigo-400" />
                                        Early access launching soon
                                    </div>
                                    <Link href="/contact">
                                        <button className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-xl px-6 py-3 text-sm transition-all duration-300 hover:shadow-lg hover:shadow-indigo-600/30 hover:-translate-y-0.5 group">
                                            Request Early Access
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </Link>
                                </div>
                            </SectionTransition>
                        </div>

                        {/* ── SCREENSHOT SHOWCASE ───────────────────────── */}
                        <SectionTransition delay={0.25}>
                            <div className="relative">
                                {/* Glow behind screenshot */}
                                <div className="absolute inset-0 bg-indigo-600/15 rounded-3xl blur-3xl scale-105 pointer-events-none" />
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-24 bg-indigo-500/8 blur-3xl pointer-events-none" />

                                {/* Outer frame */}
                                <div className="relative rounded-2xl border border-indigo-500/20 bg-gradient-to-b from-indigo-500/5 to-transparent p-1.5 shadow-2xl shadow-indigo-900/40">
                                    {/* Browser-chrome bar */}
                                    <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02] rounded-t-xl">
                                        <div className="w-3 h-3 rounded-full bg-white/10" />
                                        <div className="w-3 h-3 rounded-full bg-white/10" />
                                        <div className="w-3 h-3 rounded-full bg-white/10" />
                                        <div className="flex-1 mx-4 h-6 bg-white/5 rounded-md border border-white/5 flex items-center px-3">
                                            <span className="text-white/20 text-xs">app.gymos.skyradix.com</span>
                                        </div>
                                    </div>

                                    {/* Screenshot */}
                                    <div className="relative w-full aspect-[16/9] bg-[#0d0d10] rounded-b-xl overflow-hidden">
                                        <Image
                                            src="/images/gym-os-screenshot.png"
                                            alt="Gym OS Dashboard Screenshot"
                                            fill
                                            className="object-cover object-top"
                                            priority
                                        />
                                    </div>
                                </div>
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
                                Everything a Gym Needs,{" "}
                                <span className="bg-gradient-to-r from-indigo-400 to-amber-400 bg-clip-text text-transparent">
                                    Nothing it Doesn&apos;t
                                </span>
                            </H2>
                            <Body className="text-white/50 leading-relaxed">
                                Built specifically for fitness businesses — from boutique studios to large multi-branch gyms.
                            </Body>
                        </SectionTransition>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {features.map((feature, i) => (
                                <SectionTransition key={i} delay={i * 0.08}>
                                    <div className="group relative bg-white/[0.02] border border-white/[0.06] hover:border-indigo-500/30 rounded-2xl p-7 transition-all duration-500 hover:bg-white/[0.04] overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
                                        <div className="relative z-10">
                                            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                                                {feature.icon}
                                            </div>
                                            <H3 className="text-lg font-semibold mb-3 text-white">{feature.title}</H3>
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
                                    Built for the Way{" "}
                                    <span className="bg-gradient-to-r from-indigo-400 to-indigo-200 bg-clip-text text-transparent">
                                        Real Gyms Operate
                                    </span>
                                </H2>
                                <Body className="text-white/50 leading-relaxed mb-10">
                                    Gym OS isn&apos;t a generic SaaS tool. It&apos;s engineered from the ground up for fitness businesses — with every feature shaped by real operational needs.
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
                                        <p className="text-2xl font-bold text-white mb-3">Early Access</p>
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
                                <span className="bg-gradient-to-r from-indigo-400 to-amber-400 bg-clip-text text-transparent">
                                    Your Gym?
                                </span>
                            </H2>
                            <Body className="text-white/50 leading-relaxed mb-10">
                                Gym OS is launching soon. Contact us to learn more or to get early access for your fitness business.
                            </Body>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link href="/contact">
                                    <button className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-600/30 hover:-translate-y-0.5 group">
                                        Contact Us
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </Link>
                                <Link href="/">
                                    <button className="inline-flex items-center gap-2 border border-white/10 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white rounded-xl px-8 py-4 text-sm font-medium transition-all duration-300 group">
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
