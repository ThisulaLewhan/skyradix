"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { FaWhatsapp, FaInstagram, FaFacebook, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="relative bg-soft-graphite/50 border-t border-glass-border pt-16 min-h-[550px] overflow-hidden flex flex-col justify-between" style={{ fontFamily: "'Poppins', sans-serif" }}>
            {/* Background grid for footer */}
            <div className="absolute inset-0 bg-grid-texture opacity-20 pointer-events-none" />

            {/* Massive Styled Background Text - Centered vertically & horizontally */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
                <span className="text-[20vw] mt-[650px] md:mt-[580px] lg:mt-24 font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/[0.1] to-transparent" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
                    Skyradix
                </span>
            </div>

            <div className="max-w-7xl mx-auto px-6 lgx:px-8 relative z-10 w-full mb-12">
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
                    {/* Logo & Intro */}
                    <div className="col-span-2 lg:col-span-4 pr-4">
                        <Link href="/" className="inline-block mb-6">
                            <Image src="/images/white-logo.svg" alt="Skyradix Logo" width={120} height={34} className="h-5 w-auto object-contain brightness-0 invert" />
                        </Link>
                        <p className="text-muted-grey mb-6 max-w-sm text-sm leading-relaxed text-justify">
                            <span className="text-white font-medium">Rooted in Innovation, Skyward in Possibilities</span><br /><br />
                            “Sky” represents limitless potential. “Radix” means root or foundation.
                            We build digital systems grounded in strong fundamentals and designed to grow without limits.
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div className="col-span-2 lg:col-span-3 lg:col-start-6">
                        <h4 className="text-white font-semibold mb-6">Contact Us</h4>
                        <div className="flex flex-col gap-4">
                            <a href="mailto:skyradixsolutions@gmail.com" className="flex items-center gap-3 text-sm text-muted-grey hover:text-accent-cyan transition-colors">
                                <Mail size={16} />
                                skyradixsolutions@gmail.com
                            </a>
                            <a href="tel:+94702708220" className="flex items-center gap-3 text-sm text-muted-grey hover:text-accent-cyan transition-colors">
                                <Phone size={16} />
                                070 270 8220
                            </a>
                            <a href="https://wa.me/94702708220" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-grey hover:text-accent-cyan transition-colors">
                                <FaWhatsapp size={16} />
                                Chat on WhatsApp
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="lg:col-span-2">
                        <h4 className="text-white font-semibold mb-6">Navigation</h4>
                        <ul className="space-y-4">
                            <li><Link href="/" className="text-muted-grey hover:text-white transition-colors text-sm">Home</Link></li>
                            <li><Link href="/services" className="text-muted-grey hover:text-white transition-colors text-sm">Services</Link></li>
                            <li><Link href="/prototypes" className="text-muted-grey hover:text-white transition-colors text-sm">Prototypes</Link></li>

                        </ul>
                    </div>

                    {/* Connect */}
                    <div className="lg:col-span-1 text-left">
                        <h4 className="text-white font-semibold mb-6">Connect</h4>
                        <ul className="space-y-4">
                            <li><Link href="/about" className="text-muted-grey hover:text-white transition-colors text-sm">About Us</Link></li>
                            <li><Link href="/contact" className="text-muted-grey hover:text-white transition-colors text-sm">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div className="lg:col-span-2 text-left">
                        <h4 className="text-white font-semibold mb-6">Follow Us</h4>
                        <div className="flex gap-4">
                            <a href="https://www.instagram.com/skyradix_" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-white/5 hover:bg-zinc-800 text-muted-grey hover:text-white transition-all">
                                <FaInstagram size={16} />
                            </a>
                            <a href="https://www.facebook.com/share/187FdwH5w9/" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-white/5 hover:bg-zinc-800 text-muted-grey hover:text-white transition-all">
                                <FaFacebook size={16} />
                            </a>
                            <a href="https://www.linkedin.com/company/skyradix/" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-white/5 hover:bg-zinc-800 text-muted-grey hover:text-white transition-all">
                                <FaLinkedinIn size={16} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section (Links, Copyright, Easter Egg) */}
            <div className="w-full relative z-10 border-t border-white/5 bg-transparent mt-auto backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-6 lgx:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-muted-grey text-xs">
                        © {new Date().getFullYear()} Skyradix. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-xs text-muted-grey">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>

                {/* Easter Egg Node */}
                <div className="absolute right-4 bottom-4 w-12 h-12 flex justify-end items-end p-2 opacity-20 hover:opacity-80 transition-opacity">
                    <Link href="/easter-egg">
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.5, 0.8, 0.5]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="w-1.5 h-1.5 rounded-full bg-accent-cyan cursor-crosshair shadow-[0_0_8px_rgba(0,229,255,0.8)]"
                            title="Nothing to see here..."
                        />
                    </Link>
                </div>
            </div>
        </footer>
    );
}
