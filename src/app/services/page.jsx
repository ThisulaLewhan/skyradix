"use client";

import { useEffect } from "react";
import { PageTransition, SectionTransition } from "@/components/ui/PageTransition";
import { H1, H2, H3, Body } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import Link from "next/link";
import { ArrowRight, Code, Terminal, Smartphone, Database, Cloud, LineChart, PenTool } from "lucide-react";

export default function ServicesPage() {
    useEffect(() => {
        if (typeof window !== "undefined") {
            const hash = window.location.hash;
            if (hash) {
                const targetId = hash.replace(/[^A-Za-z0-9_-]/g, "");
                let attempts = 0;
                const scrollChecker = setInterval(() => {
                    const el = document.getElementById(targetId);
                    if (el) {
                        el.scrollIntoView({ behavior: 'smooth' });
                        clearInterval(scrollChecker);
                    }
                    if (attempts++ > 15) clearInterval(scrollChecker);
                }, 100);
            }
        }
    }, []);

    const services = [
        {
            id: "web-dev",
            title: "Web Development",
            icon: <Code className="text-accent-cyan mb-6" size={40} />,
            problem: "Many websites look fine but fail to keep visitors interested or turn them into customers.",
            approach: "We build custom websites designed around how people actually behave online. Every page is structured to guide visitors clearly toward the next step.",
            difference: "Your website becomes more than an online page, it becomes a tool that helps attract, inform, and convert customers.",
        },
        {
            id: "software-dev",
            title: "Software & Systems Development",
            icon: <Terminal className="text-accent-cyan mb-6" size={40} />,
            problem: "Ready-made software rarely fits the exact way a business works, which creates inefficiencies and limitations.",
            approach: "We build custom software designed specifically around your operations, workflows, and business goals.",
            difference: "Systems that fit your business perfectly and support long-term growth.",
        },
        {
            id: "mobile-dev",
            title: "Mobile Application Development",
            icon: <Smartphone className="text-accent-cyan mb-6" size={40} />,
            problem: "Many mobile apps are downloaded once and quickly forgotten.",
            approach: "We design mobile apps that are simple, useful, and easy to return to. The experience is carefully planned so users feel comfortable using it regularly.",
            difference: "Apps people actually enjoy using, not apps that get deleted after a week.",
        },
        {
            id: "erp",
            title: "ERP & Enterprise Solutions",
            icon: <Database className="text-accent-cyan mb-6" size={40} />,
            problem: "Large business systems often become complicated and difficult for teams to use.",
            approach: "We simplify complex business processes into clear, easy-to-use systems that help teams work more efficiently.",
            difference: "Powerful systems behind the scenes, with simple interfaces your team can use comfortably.",
        },
        {
            id: "saas",
            title: "SaaS & Platform Development",
            icon: <Cloud className="text-accent-cyan mb-6" size={40} />,
            problem: "Many platforms launch but struggle to keep users engaged or generate long-term value.",
            approach: "We build scalable platforms designed for real users and real business growth from the start.",
            difference: "A platform technically ready to scale and psychologically designed to sell.",
        },
        {
            id: "digital-marketing",
            title: "Digital Marketing & Growth Strategy",
            icon: <LineChart className="text-accent-cyan mb-6" size={40} />,
            problem: "Even great products struggle when the right people never discover them.",
            approach: "We help position your business where your customers are already searching, while improving how your digital presence communicates your value.",
            difference: "Technology and marketing working together, not as separate efforts.",
        },
        {
            id: "ui-ux",
            title: "UI/UX & Product Design",
            icon: <PenTool className="text-accent-cyan mb-6" size={40} />,
            problem: "Pretty designs often fail because they completely ignore user psychology and business goals.",
            approach: "We design clear, simple interfaces that make it easy for users to understand, trust, and take action.",
            difference: "Interface design that looks premium but acts as a psychological marketing tool.",
        }
    ];

    return (
        <PageTransition>
            <div className="pt-32 pb-24 max-w-7xl mx-auto px-6 lgx:px-8 relative z-10">
                <SectionTransition className="text-center max-w-4xl mx-auto mb-20">
                    <H1>Our Services</H1>
                    <Body variant="large" className="text-muted-grey mt-6">
                        We don't just build software. What makes us truly unique is how we apply marketing strategies and behavioral psychology directly to our products. Every website, mobile app, and system we deliver is engineered specifically to capture attention and increase user engagement.
                    </Body>
                </SectionTransition>

                <div className="space-y-16">
                    {services.map((service, idx) => (
                        <SectionTransition key={service.id} delay={0.1 * (idx % 3)}>
                            <div id={service.id} className="scroll-mt-32">
                                <Card hoverEffect className="bg-soft-graphite/70 border border-glass-border">
                                    <div className="flex flex-col lg:flex-row gap-12">
                                        <div className="lg:w-1/3">
                                            {service.icon}
                                            <H2 className="text-3xl mb-4">{service.title}</H2>
                                                                                        <Link href="/contact" className="inline-flex items-center gap-2 mt-2 px-4 py-2 rounded-lg border border-white/20 bg-white/[0.03] hover:bg-white/10 hover:border-[#00FF98]/40 text-white/90 hover:text-[#00FF98] text-md transition-all duration-200 group">
                                                Let’s discuss your project
                                                <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={14} />
                                            </Link>
                                        </div>

                                        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-8">
                                            <div>
                                                <H3 className="text-lg text-white/80 mb-2 border-b border-white/10 pb-2">The Problem</H3>
                                                <Body variant="small">{service.problem}</Body>
                                            </div>
                                            <div>
                                                <H3 className="text-lg text-white/80 mb-2 border-b border-white/10 pb-2">Our Approach</H3>
                                                <Body variant="small">{service.approach}</Body>
                                            </div>
                                            <div>
                                                <H3 className="text-lg text-accent-cyan mb-2 border-b border-accent-cyan/20 pb-2">The Difference</H3>
                                                <Body variant="small">{service.difference}</Body>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </SectionTransition>
                    ))}
                </div>

                <SectionTransition delay={0.4} className="mt-24 text-center">
                    <H2 className="mb-6">Ready to build something better?</H2>
                    <Link href="/contact">
                        <Button size="md" className="w-[200px]">Let’s Talk</Button>
                    </Link>
                </SectionTransition>
            </div>
        </PageTransition>
    );
}


