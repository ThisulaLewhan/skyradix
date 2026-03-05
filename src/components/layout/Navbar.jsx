"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Prototypes", path: "/prototypes" },

    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [hoveredPath, setHoveredPath] = useState(null);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 border-b border-white/15 py-3.5 ${isScrolled ? "bg-black/60 backdrop-blur-md" : "bg-black/60 backdrop-blur-sm"
                    }`}
                style={{ fontFamily: "'Poppins', sans-serif" }}
            >
                <div className="max-w-[92rem] mx-auto px-4 lg:px-6 flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <Image src="/images/white-logo.svg" alt="Skyradix Logo" width={100} height={28} className="h-3.5 w-auto object-contain brightness-0 invert" />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center">
                        <div
                            className="flex items-center relative py-1"
                            onMouseLeave={() => setHoveredPath(null)}
                        >
                            {/* The Slidebar (Background highlight) */}
                            <div
                                className="absolute top-1 bottom-1 bg-white/10 rounded-lg -z-10 transition-all duration-300 ease-[cubic-bezier(0.33,0.83,0.99,0.98)]"
                                style={{
                                    opacity: (hoveredPath || navLinks.some(l => l.path === pathname)) ? 1 : 0,
                                    width: (() => {
                                        const path = hoveredPath || pathname;
                                        const index = navLinks.findIndex(l => l.path === path);
                                        const el = typeof document !== 'undefined' ? document.getElementById(`nav-link-${index}`) : null;
                                        return el ? `${el.offsetWidth}px` : '100px';
                                    })(),
                                    transform: `translateX(${(() => {
                                            const path = hoveredPath || pathname;
                                            const activeIndex = navLinks.findIndex(l => l.path === path);
                                            if (activeIndex === -1) return 0;
                                            let offset = 0;
                                            if (typeof document !== 'undefined') {
                                                for (let i = 0; i < activeIndex; i++) {
                                                    const el = document.getElementById(`nav-link-${i}`);
                                                    if (el) offset += el.offsetWidth;
                                                }
                                            }
                                            return offset;
                                        })()
                                        }px)`
                                }}
                            />

                            {navLinks.map((link, index) => {
                                const isActive = pathname === link.path;
                                const isHovered = hoveredPath === link.path;

                                return (
                                    <Link
                                        key={link.name}
                                        id={`nav-link-${index}`}
                                        href={link.path}
                                        onMouseEnter={() => setHoveredPath(link.path)}
                                        className={`relative px-5 py-2.5 text-sm font-semibold transition-colors z-20 flex items-center justify-center min-w-[100px] ${isActive || isHovered ? "text-white" : "text-white/60"
                                            }`}
                                    >
                                        <span className="relative z-10">{link.name}</span>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden text-white p-2"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </nav>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-primary-black/95 backdrop-blur-xl lg:hidden"
                    >
                        <div className="flex flex-col h-full p-6">
                            <div className="flex justify-between items-center mb-12">
                                <span className="font-bold text-xl text-white">Menu</span>
                                <button
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-white p-2"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            <div className="flex flex-col gap-6 items-start">
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                    >
                                        <Link
                                            href={link.path}
                                            className={`text-2xl font-semibold tracking-tight ${pathname === link.path ? "text-accent-cyan" : "text-white/70 hover:text-white"
                                                }`}
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
