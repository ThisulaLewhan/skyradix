"use client";

import { useState, useRef, useEffect } from "react";
import { PageTransition, SectionTransition } from "@/components/ui/PageTransition";
import { H1, H2, Body } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Phone, ArrowRight, Clock, Mail, Copy, Check } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        details: ""
    });
    const [status, setStatus] = useState("idle"); // idle, submitting, success, error
    const [emailError, setEmailError] = useState("");
    const [copiedItem, setCopiedItem] = useState(null);

    const copyTimeoutRef = useRef(null);
    useEffect(() => () => clearTimeout(copyTimeoutRef.current), []);

    const handleCopy = async (text, type) => {
        try {
            await navigator.clipboard.writeText(text);
        } catch {
            return; // Clipboard unavailable (e.g. insecure context or permission denied)
        }
        setCopiedItem(type);
        clearTimeout(copyTimeoutRef.current);
        copyTimeoutRef.current = setTimeout(() => setCopiedItem(null), 2000);
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handlePhoneChange = (e) => {
        let input = e.target.value;
        // Allow digits, plus, spaces, dashes, and parentheses
        input = input.replace(/[^\d+\s()\-]/g, '');
        setFormData(prev => ({ ...prev, phone: input }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateEmail(formData.email)) {
            setEmailError("Please enter a valid email address.");
            return;
        }

        setEmailError("");
        setStatus("submitting");

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", phone: "", details: "" });
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    return (
        <PageTransition>
            <div className="pt-32 pb-24 max-w-7xl mx-auto px-6 lgx:px-8">

                <SectionTransition className="mb-16">
                    <H1>Start the Conversation</H1>
                    <Body variant="large" className="text-muted-grey max-w-2xl">
                        Whether you have a fully scoped project or just a raw concept, let&apos;s architect the right system for it.
                    </Body>
                </SectionTransition>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Form Section */}
                    <SectionTransition delay={0.1} className="lg:col-span-7">
                        <Card className="bg-[#131313] border border-glass-border">
                            <H2 className="text-2xl mb-6">Contact Us</H2>
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="contact-name" className="text-xs font-semibold uppercase tracking-wider text-white/90">Full Name</label>
                                        <input
                                            id="contact-name"
                                            name="name"
                                            autoComplete="name"
                                            type="text"
                                            className="w-full bg-primary-black border border-glass-border rounded-xl px-4 py-4 text-white focus:outline-none focus:border-accent-cyan/50 transition-colors"
                                            placeholder="Enter Your Name"
                                            value={formData.name}
                                            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="contact-email" className="text-xs font-semibold uppercase tracking-wider text-white/90">Email Address</label>
                                        <input
                                            id="contact-email"
                                            name="email"
                                            autoComplete="email"
                                            type="email"
                                            className="w-full bg-primary-black border border-glass-border rounded-xl px-4 py-4 text-white focus:outline-none focus:border-accent-cyan/50 transition-colors"
                                            placeholder="yourname@company.com"
                                            value={formData.email}
                                            onChange={(e) => {
                                                setFormData(prev => ({ ...prev, email: e.target.value }));
                                                if (emailError) setEmailError("");
                                            }}
                                            required
                                        />

                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="contact-phone" className="text-xs font-semibold uppercase tracking-wider text-white/90">Contact Number</label>
                                    <input
                                        id="contact-phone"
                                        name="phone"
                                        autoComplete="tel"
                                        type="tel"
                                        className="w-full bg-primary-black border border-glass-border rounded-xl px-4 py-4 text-white focus:outline-none focus:border-accent-cyan/50 transition-colors"
                                        placeholder="+94 70 000 0000"
                                        value={formData.phone}
                                        onChange={handlePhoneChange}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="contact-details" className="text-xs font-semibold uppercase tracking-wider text-white/90">Message</label>
                                    <textarea
                                        id="contact-details"
                                        name="details"
                                        rows="4"
                                        className="w-full bg-primary-black border border-glass-border rounded-xl px-4 py-4 text-white focus:outline-none focus:border-accent-cyan/50 transition-colors resize-none"
                                        placeholder="Briefly describe what you're looking for..."
                                        value={formData.details}
                                        onChange={(e) => setFormData(prev => ({ ...prev, details: e.target.value }))}
                                        required
                                    ></textarea>
                                </div>

                                <div className="flex items-center gap-2 mt-2 text-muted-grey text-sm mb-6">
                                    <Clock size={16} />
                                    <span>We review all inquiries and respond within 24 hours.</span>
                                </div>

                                <Button type="submit" className="w-full md:w-auto" disabled={status === "submitting"}>
                                    {status === "submitting" ? "Sending..." : "Submit Inquiry"}
                                </Button>
                                {status === "success" && <p className="text-green-400 mt-4 text-sm font-medium">Message sent successfully! We&apos;ll be in touch soon.</p>}
                                {status === "error" && <p className="text-red-400 mt-4 text-sm font-medium">There was an error sending your message. Please try again.</p>}
                            </form>
                        </Card>
                    </SectionTransition>

                    {/* Alternative Contact Methods */}
                    <SectionTransition delay={0.2} className="lg:col-span-5 space-y-6">
                        <div className="block group">
                            <Card hoverEffect className="relative bg-[#131313] border border-glass-border cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                <a href="https://wa.me/94702708220" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="absolute inset-0 z-0 rounded-[inherit] outline-none" />
                                <div className="min-w-0 w-full sm:w-auto pr-2">
                                    <H2 className="text-xl mb-1 flex items-center gap-3">
                                        <FaWhatsapp className="text-green-400 shrink-0" size={24} />
                                        WhatsApp
                                    </H2>
                                    <Body variant="small" className="break-words">Fastest for quick questions or immediate support.</Body>
                                </div>
                                <div className="flex items-center justify-end gap-4 w-full sm:w-auto shrink-0 mt-2 sm:mt-0">
                                    <button
                                        type="button"
                                        onClick={() => handleCopy("070 270 8220", "whatsapp")}
                                        className="relative z-10 p-2 rounded-md hover:bg-white/10 transition-colors"
                                        title="Copy WhatsApp number"
                                        aria-label="Copy WhatsApp number"
                                    >
                                        {copiedItem === "whatsapp" ? <Check className="text-green-400" size={18} /> : <Copy className="text-white/50 hover:text-white" size={18} />}
                                    </button>
                                    <ArrowRight className="text-white/50 group-hover:text-green-400 transition-colors" />
                                </div>
                            </Card>
                        </div>

                        <div className="block group">
                            <Card hoverEffect className="relative bg-[#131313] border border-glass-border cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                <a href="tel:+94702708220" aria-label="Call 070 270 8220" className="absolute inset-0 z-0 rounded-[inherit] outline-none" />
                                <div className="min-w-0 w-full sm:w-auto pr-2">
                                    <H2 className="text-xl mb-1 flex items-center gap-3">
                                        <Phone className="text-green-400 shrink-0" size={20} />
                                        Direct Line
                                    </H2>
                                    <Body variant="small" className="break-words">Available all 7 days, 8-AM to 12-AM (SLST)<br />070 270 8220</Body>
                                </div>
                                <div className="flex items-center justify-end gap-4 w-full sm:w-auto shrink-0 mt-2 sm:mt-0">
                                    <button
                                        type="button"
                                        onClick={() => handleCopy("070 270 8220", "phone")}
                                        className="relative z-10 p-2 rounded-md hover:bg-white/10 transition-colors"
                                        title="Copy number"
                                        aria-label="Copy number"
                                    >
                                        {copiedItem === "phone" ? <Check className="text-green-400" size={18} /> : <Copy className="text-white/50 hover:text-white" size={18} />}
                                    </button>
                                    <ArrowRight className="text-white/50 group-hover:text-green-400 transition-colors" />
                                </div>
                            </Card>
                        </div>

                        <div className="block group">
                            <Card hoverEffect className="relative bg-[#131313] border border-glass-border cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                <a href="mailto:skyradixsolutions@gmail.com" aria-label="Email skyradixsolutions@gmail.com" className="absolute inset-0 z-0 rounded-[inherit] outline-none" />
                                <div className="min-w-0 w-full sm:w-auto pr-2">
                                    <H2 className="text-xl mb-1 flex items-center gap-3">
                                        <Mail className="text-green-400 shrink-0" size={20} />
                                        Email Us
                                    </H2>
                                    <Body variant="small" className="break-all sm:break-normal">Drop us a line anytime.<br />skyradixsolutions@gmail.com</Body>
                                </div>
                                <div className="flex items-center justify-end gap-4 w-full sm:w-auto shrink-0 mt-2 sm:mt-0">
                                    <button
                                        type="button"
                                        onClick={() => handleCopy("skyradixsolutions@gmail.com", "email")}
                                        className="relative z-10 p-2 rounded-md hover:bg-white/10 transition-colors"
                                        title="Copy email"
                                        aria-label="Copy email"
                                    >
                                        {copiedItem === "email" ? <Check className="text-green-400" size={18} /> : <Copy className="text-white/50 hover:text-white" size={18} />}
                                    </button>
                                    <ArrowRight className="text-white/50 group-hover:text-green-400 transition-colors" />
                                </div>
                            </Card>
                        </div>


                    </SectionTransition>

                </div>
            </div>
        </PageTransition>
    );
}
