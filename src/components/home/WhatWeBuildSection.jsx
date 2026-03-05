"use client";

import { SectionTransition } from "@/components/ui/PageTransition";
import { H2, H3, Body } from "@/components/ui/Typography";
import { Card } from "@/components/ui/Card";
import { MonitorSmartphone, TrendingUp, Layers, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export const WhatWeBuildSection = () => {
    const services = [
        {
            icon: <MonitorSmartphone className="text-blue-400" size={28} />,
            title: "Web & Mobile Development",
            description: "We don't just write code, we engineer digital experiences. By integrating behavioral psychology and marketing strategies directly into our UI/UX, we build websites and apps designed to maximize user engagement and conversion rates."
        },
        {
            icon: <TrendingUp className="text-orange-400" size={28} />,
            title: "Digital Marketing & Growth Strategy",
            description: "Great products need visibility. We apply psychological triggers and data-driven marketing to ensure your systems perform perfectly in the market, driving sustained growth."
        },
        {
            icon: <Layers className="text-emerald-400" size={28} />,
            title: "Enterprise & SaaS Solutions",
            description: "From ERP systems to bespoke SaaS platforms, we architect scalable software that solves complex operational challenges while maintaining cognitive fluency for the end-user."
        }
    ];

    const detailedServices = [
        {
            id: "web-dev",
            title: "Web Development",
            description: "Modern websites built to attract, inform, and convert visitors."
        },
        {
            id: "software-dev",
            title: "Software & Systems Development",
            description: "Custom systems that organize your operations and save time."
        },
        {
            id: "mobile-dev",
            title: "Mobile Application Development",
            description: "Apps that connect you directly with your customers."
        },
        {
            id: "erp",
            title: "ERP & Enterprise Solutions",
            description: "All-in-one systems to manage sales, staff, finance, and operations."
        },
        {
            id: "saas",
            title: "SaaS & Platform Development",
            description: "Scalable platforms you can grow into real digital products."
        },
        {
            id: "digital-marketing",
            title: "Digital Marketing & Growth Strategy",
            description: "We don't just build, we help people find you."
        },
        {
            id: "ui-ux",
            title: "UI/UX & Product Design",
            description: "Clear, simple design that makes your business easy to understand."
        }
    ];

    return (
        <section className="py-24 relative z-20 bg-primary-black overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('/grid-background.svg')] bg-center opacity-10 pointer-events-none z-0" />
            <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
                <SectionTransition className="text-center mb-16">
                    <H2>Digital Systems Engineered for Engagement</H2>
                    <Body variant="muted" className="mt-4 max-w-2xl mx-auto text-lg">
                        What makes us unique? We embed deep psychological principles and growth marketing strategies directly into our technical architecture.
                    </Body>
                </SectionTransition>

                {/* Circuit Board Layout */}
                <div className="relative flex flex-col items-center mt-12">

                    {/* Central "Powered By" Node */}
                    <SectionTransition delay={0.1}>
                        <div className="relative z-10 bg-[#0A0A0A] border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.05)] rounded-xl px-8 py-4 flex flex-col items-center">
                            <span className="text-white font-bold tracking-widest uppercase text-sm">Powered By Design & Psychology</span>
                        </div>
                    </SectionTransition>

                    {/* SVG Connecting Lines (Visible mainly on md+ screens) */}
                    <div className="hidden md:block w-full h-24 relative -mt-4">
                        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 100">
                            {/* Left Branch (Blue) — rounded corners via bezier */}
                            <path d="M500 0 V28 C500 42 500 42 486 42 H180 C166 42 166 42 166 56 V100" fill="none" stroke="rgba(59,130,246,0.25)" strokeWidth="2" />
                            <motion.path
                                d="M500 0 V28 C500 42 500 42 486 42 H180 C166 42 166 42 166 56 V100" fill="none" stroke="#3b82f6" strokeWidth="2"
                                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 3, ease: "easeInOut" }}
                            />

                            {/* Center Branch (Orange) */}
                            <path d="M500 0 V100" fill="none" stroke="rgba(249,115,22,0.25)" strokeWidth="2" />
                            <motion.path
                                d="M500 0 V100" fill="none" stroke="#f97316" strokeWidth="2"
                                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 3, ease: "easeInOut", delay: 0.4 }}
                            />

                            {/* Right Branch (Emerald) — rounded corners via bezier */}
                            <path d="M500 0 V28 C500 42 500 42 514 42 H820 C833 42 833 42 833 56 V100" fill="none" stroke="rgba(16,185,129,0.25)" strokeWidth="2" />
                            <motion.path
                                d="M500 0 V28 C500 42 500 42 514 42 H820 C833 42 833 42 833 56 V100" fill="none" stroke="#10b981" strokeWidth="2"
                                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 3, ease: "easeInOut", delay: 0.4 }}
                            />
                        </svg>
                    </div>

                    {/* Mobile spacer if lines are hidden */}
                    <div className="md:hidden h-12 w-px bg-gradient-to-b from-white/20 to-transparent -mt-2" />

                    {/* Service Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full relative z-10">
                        {services.map((service, index) => {
                            // Assign unique glowing colors per card based on index
                            const colors = [
                                "border-blue-500/50 shadow-[0_0_40px_rgba(59,130,246,0.3)] hover:border-blue-400 hover:shadow-[0_0_60px_rgba(59,130,246,0.4)] hover:-translate-y-2", // Blue
                                "border-orange-500/50 shadow-[0_0_40px_rgba(249,115,22,0.3)] hover:border-orange-400 hover:shadow-[0_0_60px_rgba(249,115,22,0.4)] hover:-translate-y-2", // Orange
                                "border-emerald-500/50 shadow-[0_0_40px_rgba(16,185,129,0.3)] hover:border-emerald-400 hover:shadow-[0_0_60px_rgba(16,185,129,0.4)] hover:-translate-y-2" // Emerald
                            ];

                            return (
                                <SectionTransition key={index} delay={0.6 + (index * 0.1)}>
                                    <Card className={`h-full bg-[#0A0A0A] border-white/5 flex flex-col items-start px-8 py-10 transition-all duration-500 ease-out cursor-default ${colors[index]}`}>
                                        <div className="w-14 h-14 flex items-center justify-center bg-white/5 rounded-xl border border-white/10 mb-6 flex-shrink-0">
                                            {service.icon}
                                        </div>
                                        <H3 className="text-xl mb-3">{service.title}</H3>
                                        <Body variant="muted" className="leading-relaxed">{service.description}</Body>
                                    </Card>
                                </SectionTransition>
                            );
                        })}
                    </div>

                    {/* Detailed Services Grid */}
                    <div className="mt-24 w-full relative z-10">
                        <SectionTransition className="text-center mb-12">
                            <H3 className="text-3xl md:text-4xl mb-4">What We Can Build For You</H3>
                        </SectionTransition>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl mx-auto text-left">
                            {detailedServices.map((service, index) => (
                                <SectionTransition key={index} delay={0.2 + (index * 0.1)} className="h-full">
                                    <Link href={`/services#${service.id}`} className="block w-full h-full">
                                        <div className="p-6 rounded-xl border border-white/5 bg-[#0B0F14] shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:bg-white/[0.04] hover:shadow-[0_0_40px_rgba(0,249,154,0.25)] transition-all duration-300 group cursor-pointer h-full border-b-2 hover:border-b-[#00F99A] flex flex-col justify-center">
                                            <h4 className="text-white font-semibold mb-2 group-hover:text-accent-cyan transition-colors flex items-center justify-between">
                                                {service.title}
                                                <ArrowRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent-cyan" />
                                            </h4>
                                            <p className="text-muted-grey text-sm">{service.description}</p>
                                        </div>
                                    </Link>
                                </SectionTransition>
                            ))}

                            {/* Collaborate CTA Card - Col Span 2 */}
                            <SectionTransition delay={0.2 + (detailedServices.length * 0.1)} className="lg:col-span-2 h-full">
                                <Link href="/contact" className="block w-full h-full">
                                    <div className="p-6 md:p-8 rounded-xl bg-gradient-to-br from-[#0B0F14] to-[#00F99A]/10 hover:bg-[#00F99A]/15 transition-all duration-300 group cursor-pointer h-full flex flex-col justify-center">
                                        <h4 className="text-white font-bold mb-3 group-hover:text-accent-cyan transition-colors flex items-center gap-3">
                                            Collaborate With Us

                                        </h4>
                                        <p className="text-muted-grey text-sm md:text-sm max-w-3xl leading-relaxed">
                                            The world is constantly evolving, and entrepreneurs need more than just technology, they need a partner to help them reimagine their business.
                                        </p>
                                    </div>
                                </Link>
                            </SectionTransition>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
