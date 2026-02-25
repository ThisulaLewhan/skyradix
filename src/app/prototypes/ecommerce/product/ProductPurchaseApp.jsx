"use client";

import { useState, useRef } from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

// Reuse assets from the parent Ecommerce prototype
import logoImg from "../images/TechNest-black-logo.svg";
import logoImgWhite from "../images/TechNest-white-logo.svg";
import mobileHeroImg1 from "../images/mobile-hero-image1.svg"; // Dark Variant
import mobileHeroImg2 from "../images/mobile-hero-image2.svg"; // Light Variant

// Featured Product SVGs
import iphoneImage from "../images/iphone16.svg";
import airpodsMax from "../images/airpods-max.svg";
import airpodsPro from "../images/airpods-pro.svg";
import jblTunebeam from "../images/jbl-tunebeam.svg";
import appleWatch from "../images/apple-watch.svg";
import asusRog from "../images/asus-rog.svg";
import keychronKeyboard from "../images/Keychron-keyboard.svg";
import logitechMouse from "../images/logitech-mouse.svg";
import sonyCamera from "../images/sony-camera.svg";
import nvidiaRtx from "../images/nvidia-rtx.svg";

const FEATURED_PRODUCTS = [
    { id: 1, name: "Apple iPhone 14 Pro", price: "288,900", brand: "APPLE", image: iphoneImage },
    { id: 2, name: "Apple AirPods Max", price: "188,000", brand: "APPLE", image: airpodsMax },
    { id: 3, name: "Apple AirPods Pro", price: "65,000", brand: "APPLE", image: airpodsPro },
    { id: 4, name: "JBL Wave Beam", price: "28,500", brand: "JBL", image: jblTunebeam },
    { id: 5, name: "Apple Watch Ultra 2", price: "257,000", brand: "APPLE", image: appleWatch },
    { id: 6, name: "Asus ROG Strix G16", price: "789,300", brand: "ASUS", image: asusRog },
    { id: 7, name: "Keychron V5 Keyboard", price: "56,000", brand: "KEYCHRON", image: keychronKeyboard },
    { id: 8, name: "Logitech MX Master 3S", price: "47,500", brand: "LOGITECH", image: logitechMouse },
    { id: 9, name: "Sony a7 III Camera", price: "605,500", brand: "SONY", image: sonyCamera },
    { id: 10, name: "NVIDIA GeForce RTX 4090", price: "805,000", brand: "NVIDIA", image: nvidiaRtx },
];

const inter = Inter({ subsets: ["latin"] });

export default function ProductPurchaseApp() {
    const [quantity, setQuantity] = useState(1);
    const [openAccordion, setOpenAccordion] = useState("details");

    // Carousel Reference
    const carouselRef = useRef(null);

    const scrollProducts = (direction) => {
        if (carouselRef.current) {
            const scrollAmount = 350; // Approximated card width + gap
            carouselRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
        }
    };

    // Header states
    const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
    const [selectedCategoryName, setSelectedCategoryName] = useState("All Category");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileCategoryDropdownOpen, setIsMobileCategoryDropdownOpen] = useState(false);

    // Categories array from main app
    const CATEGORIES = [
        { name: "Computer Parts", icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" },
        { name: "Laptops", icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
        { name: "Phones", icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" },
        { name: "Earphones", icon: "M 7 20 V 12 H 9 A 2 2 0 0 0 11 10 A 3 3 0 0 0 8 7 H 6 A 4 4 0 0 0 2 11 V 12 H 4 V 20 A 1.5 1.5 0 0 0 7 20 Z M 17 20 V 12 H 15 A 2 2 0 0 1 13 10 A 3 3 0 0 1 16 7 H 18 A 4 4 0 0 1 22 11 V 12 H 20 V 20 A 1.5 1.5 0 0 1 17 20 Z" },
        { name: "Headsets", icon: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" },
        { name: "Keyboards", icon: "M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z M6 10h.01 M10 10h.01 M14 10h.01 M18 10h.01 M6 14h.01 M10 14h4 M18 14h.01" },
        { name: "Mice", icon: "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" },
        { name: "Cameras", icon: "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9zM15 13a3 3 0 11-6 0 3 3 0 016 0z" },
        { name: "Smart Watches", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" }
    ];

    // Map the colors directly to the existing responsive Hero SVGs
    const COLOR_VARIANTS = [
        { id: "blue", name: "Midnight Blue", hex: "#345570", image: mobileHeroImg1 },
        { id: "red", name: "Product Red", hex: "#E3534C", image: mobileHeroImg2 }
    ];

    const [activeColor, setActiveColor] = useState(COLOR_VARIANTS[0]);

    return (
        <div className={`min-h-screen bg-white text-[#1a1a1a] overflow-x-hidden ${inter.className}`}>
            {/* Hide Global Navbar & Footer from the preview */}
            <style dangerouslySetInnerHTML={{
                __html: `
        body > nav { display: none !important; }
        body > footer { display: none !important; }
      `}} />

            {/* SAFETY BANNER: BACK BUTTON */}
            <div className="fixed bottom-4 left-4 z-[100] group pointer-events-auto">
                <Link
                    href="/prototypes/ecommerce"
                    className="bg-black/80 backdrop-blur-md border border-white/20 text-[#B0B0B0] px-4 py-2 rounded-full text-[10px] sm:text-xs font-bold tracking-widest uppercase shadow-[0_4px_12px_rgba(0,0,0,0.5)] transition-all flex items-center gap-2 hover:border-white hover:text-white"
                >
                    <svg className="w-3 h-3 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Store
                </Link>
            </div>

            {/* SAFETY BANNER: DEMO BADGE */}
            <div className="fixed bottom-4 right-4 z-[110] group pointer-events-auto">
                <div className="bg-black/80 backdrop-blur-md border border-[#00E5FF]/30 text-[#00E5FF] px-4 py-2 rounded-full text-[10px] sm:text-xs font-bold tracking-widest uppercase shadow-[0_4px_12px_rgba(0,0,0,0.5)] transition-all flex items-center gap-2 hover:border-[#00E5FF]">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E5FF] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00E5FF]"></span>
                    </span>
                    Prototype Demo
                    <span className="hidden group-hover:inline-block ml-2 text-white/70 font-normal normal-case tracking-normal">
                        - Checkout Flow
                    </span>
                </div>
            </div>

            {/* 1. Header Section (Fixed overlaying the Hero) */}
            <header className="fixed top-0 left-0 w-full z-50 bg-white backdrop-blur-md border-b border-gray-300 shadow-sm">

                {/* Top Bar (Thin) */}
                <div className="w-full bg-[#f8f9fa] border-b border-gray-300">
                    <div className="max-w-[1400px] mx-auto text-xs py-2 px-4 sm:px-6 flex justify-between items-center text-gray-600">
                        <div className="flex items-center gap-2 font-medium cursor-pointer hover:text-black transition-colors">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                            <span>Download TechNest App</span>
                        </div>
                        <div className="hidden sm:flex items-center gap-6 font-bold text-[13px] tracking-wide text-[#1a1a1a]">
                            <a href="#" className="text-gray-500 hover:text-black transition-colors">Home</a>
                            <a href="#" className="text-gray-500 hover:text-black transition-colors">About Us</a>
                            <a href="#" className="text-gray-500 hover:text-black transition-colors">Store</a>
                            <a href="#" className="text-gray-500 hover:text-black transition-colors">Promo</a>
                            <div className="flex items-center gap-4 border-l-2 border-gray-300 pl-4 ml-2">
                                <a href="#" className="hover:text-gray-500 transition-colors">Sign Up</a>
                                <span className="text-gray-300">|</span>
                                <a href="#" className="hover:text-gray-500 transition-colors">Login</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Navigation Bar */}
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4 lg:gap-8">

                    {/* Logo */}
                    <Link href="/prototypes/ecommerce" className="shrink-0">
                        <Image src={logoImg} alt="TechNest Logo" className="h-7 md:h-8 w-auto object-contain" priority />
                    </Link>

                    {/* Search Bar (Hidden on Mobile) */}
                    <div className="hidden md:flex flex-1 max-w-4xl border border-gray-400 rounded-xl focus-within:ring-2 focus-within:ring-black focus-within:border-transparent transition-shadow relative" suppressHydrationWarning>
                        {/* Dropdown Toggle */}
                        <div
                            className="bg-gray-50 rounded-l-xl border-r border-gray-400 px-4 py-2.5 flex items-center justify-between gap-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 transition-colors w-[160px] shrink-0"
                            onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
                        >
                            <span className="truncate flex-1 font-medium">{selectedCategoryName}</span>
                            <svg className={`w-4 h-4 text-gray-500 transition-transform ${isCategoryDropdownOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>

                        {/* Dropdown Menu */}
                        {isCategoryDropdownOpen && (
                            <div className="absolute top-[110%] left-0 w-64 bg-white border border-gray-200 shadow-xl rounded-lg py-2 z-50 flex flex-col max-h-80 overflow-y-auto">
                                <button
                                    className={`text-left px-4 py-2.5 text-sm transition-colors ${selectedCategoryName === "All Category" ? "bg-gray-100 font-bold" : "hover:bg-gray-50 font-medium"}`}
                                    onClick={() => { setSelectedCategoryName("All Category"); setIsCategoryDropdownOpen(false); }}
                                >
                                    All Category
                                </button>
                                {CATEGORIES.map((cat, i) => (
                                    <button
                                        key={i}
                                        className={`text-left px-4 py-2.5 text-sm transition-colors flex items-center gap-3 ${selectedCategoryName === cat.name ? "bg-gray-100 font-bold" : "hover:bg-gray-50 font-medium"}`}
                                        onClick={() => { setSelectedCategoryName(cat.name); setIsCategoryDropdownOpen(false); }}
                                    >
                                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={cat.icon} />
                                        </svg>
                                        {cat.name}
                                    </button>
                                ))}
                            </div>
                        )}

                        <input
                            type="text"
                            placeholder="Search product or brand here..."
                            className="w-full px-4 py-2.5 text-sm focus:outline-none"
                        />
                        <button className="px-4 text-gray-500 hover:text-black transition-colors rounded-r-xl bg-white">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>

                    {/* Icons & Mobile Toggle */}
                    <div className="flex items-center gap-4 sm:gap-6 shrink-0">
                        <button className="relative text-gray-700 hover:text-black transition-colors">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                                3
                            </span>
                        </button>
                        <button className="hidden sm:block text-gray-700 hover:text-black transition-colors">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        </button>

                        {/* Hamburger Menu Button (Mobile Only) */}
                        <button
                            className="md:hidden text-gray-700 hover:text-black transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle mobile menu"
                        >
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Slide-out Menu Overlay */}
                <div
                    className={`absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-xl overflow-hidden transition-all duration-300 md:hidden ${isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                    <div className="flex flex-col px-4 py-6 space-y-6">
                        {/* Mobile Search Input */}
                        <div className="flex items-center w-full border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-black relative bg-white" suppressHydrationWarning>
                            {/* Mobile Dropdown Toggle */}
                            <div
                                className="bg-gray-50 rounded-l-lg border-r border-gray-300 px-3 py-3 flex items-center justify-between gap-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 transition-colors w-[140px] shrink-0"
                                onClick={() => setIsMobileCategoryDropdownOpen(!isMobileCategoryDropdownOpen)}
                            >
                                <span className="truncate flex-1 font-medium">{selectedCategoryName}</span>
                                <svg className={`w-4 h-4 text-gray-500 transition-transform ${isMobileCategoryDropdownOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>

                            {/* Mobile Dropdown Menu */}
                            {isMobileCategoryDropdownOpen && (
                                <div className="absolute top-[110%] left-0 w-[240px] bg-white border border-gray-200 shadow-xl rounded-lg py-2 z-[60] flex flex-col max-h-64 overflow-y-auto">
                                    <button
                                        className={`text-left px-4 py-2.5 text-sm transition-colors ${selectedCategoryName === "All Category" ? "bg-gray-100 font-bold" : "hover:bg-gray-50 font-medium"}`}
                                        onClick={() => {
                                            setSelectedCategoryName("All Category");
                                            setIsMobileCategoryDropdownOpen(false);
                                        }}
                                    >
                                        All Category
                                    </button>
                                    {CATEGORIES.map((cat, i) => (
                                        <button
                                            key={i}
                                            className={`text-left px-4 py-2.5 text-sm transition-colors flex items-center gap-3 ${selectedCategoryName === cat.name ? "bg-gray-100 font-bold" : "hover:bg-gray-50 font-medium"}`}
                                            onClick={() => {
                                                setSelectedCategoryName(cat.name);
                                                setIsMobileCategoryDropdownOpen(false);
                                            }}
                                        >
                                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={cat.icon} />
                                            </svg>
                                            {cat.name}
                                        </button>
                                    ))}
                                </div>
                            )}

                            <input type="text" placeholder="Search product..." className="w-full px-4 py-3 text-sm focus:outline-none rounded-r-lg" />
                            <button className="px-4 text-gray-500 bg-gray-50 border-l border-gray-300 h-full rounded-r-lg">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>

                        {/* Mobile Nav Links */}
                        <div className="flex flex-col space-y-4 font-bold text-[15px] text-[#1a1a1a]">
                            <a href="#" className="flex justify-between items-center border-b border-gray-100 pb-4" onClick={() => setIsMobileMenuOpen(false)}>Home <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg></a>
                            <a href="#" className="flex justify-between items-center border-b border-gray-100 pb-4" onClick={() => setIsMobileMenuOpen(false)}>About Us <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg></a>
                            <a href="#" className="flex justify-between items-center border-b border-gray-100 pb-4" onClick={() => setIsMobileMenuOpen(false)}>Store <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg></a>
                            <a href="#" className="flex justify-between items-center border-b border-gray-100 pb-4" onClick={() => setIsMobileMenuOpen(false)}>Promo <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg></a>

                            <div className="flex justify-between items-center pt-2">
                                <button className="w-[48%] py-3 border border-gray-300 rounded-lg text-sm text-center font-bold" onClick={() => setIsMobileMenuOpen(false)}>Sign Up</button>
                                <button className="w-[48%] py-3 bg-black text-white rounded-lg text-sm text-center font-bold" onClick={() => setIsMobileMenuOpen(false)}>Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Product Layout */}
            <main className="pt-16 pb-32 md:pt-16 md:pb-24 max-w-[1400px] mx-auto px-4 sm:px-6">

                {/* Breadcrumbs */}
                <div className="flex items-center gap-2 text-xs md:text-sm text-gray-500 mb-8 font-medium mt-[60px] md:mt-[80px]">
                    <Link href="/prototypes/ecommerce" className="hover:text-black transition-colors">Home</Link>
                    <span>/</span>
                    <Link href="/prototypes/ecommerce" className="hover:text-black transition-colors">Audio</Link>
                    <span>/</span>
                    <span className="text-black font-bold">Apple AirPods Max</span>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 xl:gap-20">

                    {/* LEFT PANEL: Interactive Image Gallery */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-4">
                        <div className="w-full aspect-square bg-[#f8f9fa] rounded-3xl border border-gray-200 flex items-center justify-center p-8 relative overflow-hidden group">
                            {/* Decorative studio lighting radial gradients */}
                            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.8)_0%,transparent_60%)] pointer-events-none"></div>

                            {/* The active mapped SVG element */}
                            <Image
                                src={activeColor.image}
                                alt={`Apple AirPods Max in ${activeColor.name}`}
                                className="w-full h-full object-contain filter rounded-2xl drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)] transition-transform duration-500 ease-out group-hover:scale-105 z-10"
                            />

                            {/* Floating "In Stock" badge */}
                            <div className="absolute top-6 left-6 z-20">
                                <span className="bg-[#AAFF00] text-black text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-full tracking-wider uppercase shadow-sm">In Stock</span>
                            </div>
                        </div>

                        {/* Thumbnail Selector */}
                        <div className="grid grid-cols-4 gap-4">
                            {COLOR_VARIANTS.map((variant) => (
                                <button
                                    key={variant.id}
                                    onClick={() => setActiveColor(variant)}
                                    className={`w-full aspect-square bg-gray-50 rounded-xl border flex items-center justify-center p-3 transition-all ${activeColor.id === variant.id ? 'border-black bg-white ring-1 ring-black shadow-md scale-105' : 'border-gray-200 hover:border-gray-400 hover:scale-105'}`}
                                >
                                    <Image
                                        src={variant.image}
                                        alt={`${variant.name} thumbnail`}
                                        className={`w-full h-full object-contain transition-all duration-300 ${activeColor.id === variant.id ? 'opacity-100 grayscale-0' : 'opacity-60 grayscale group-hover:opacity-100 hover:grayscale-0'}`}
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT PANEL: Checkout Interaction UI */}
                    <div className="w-full lg:w-1/2 flex flex-col">

                        {/* Heading & Price */}
                        <div className="mb-6">
                            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight mb-2 text-[#1a1a1a]">
                                Apple AirPods Max
                            </h1>

                            <div className="flex items-center gap-2 mb-6">
                                <span className="flex text-[#facc15]">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                                    ))}
                                </span>
                                <span className="text-sm font-medium text-[#3b82f6]">4.9 (1,280 Reviews)</span>
                            </div>

                            <div className="flex items-center gap-3 pb-6 border-b border-gray-200">
                                <span className="text-4xl font-extrabold tracking-tighter text-[#1a1a1a]">Rs 188,000</span>
                                <span className="text-base text-gray-500 line-through font-medium mt-1">Rs 205,000</span>
                                <span className="bg-[#ff3b3b] text-white text-[10px] font-bold px-2.5 py-1 rounded-md tracking-wider mt-1 border border-[#e89086]">SAVE 8%</span>
                            </div>
                        </div>

                        {/* Variant Selection: Color Toggle */}
                        <div className="mb-6 mt-2">
                            <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#1a1a1a] mb-3 flex items-center gap-1.5">
                                SELECT COLOR: <span className="font-extrabold">{activeColor.name}</span>
                            </h3>
                            <div className="flex gap-3">
                                {COLOR_VARIANTS.map((color) => (
                                    <button
                                        key={color.id}
                                        onClick={() => setActiveColor(color)}
                                        className={`group relative w-12 h-12 rounded-full flex items-center justify-center transition-all ${activeColor.id === color.id ? 'ring-[1.5px] ring-black ring-offset-[3px]' : 'ring-1 ring-gray-200 hover:ring-gray-400'}`}
                                    >
                                        <span className="w-[42px] h-[42px] rounded-full border border-black/5" style={{ backgroundColor: color.hex }}></span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Purchase Actions */}
                        <div className="flex items-center gap-4 mb-8 pt-2">
                            <div className="flex bg-[#f3f4f6] rounded-xl px-1 w-[120px] h-[52px]" suppressHydrationWarning>
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="w-10 h-full flex items-center justify-center text-xl text-gray-400 hover:text-black transition-colors"
                                >
                                    −
                                </button>
                                <div className="flex-1 flex items-center justify-center font-bold text-sm select-none text-[#1a1a1a]">
                                    {quantity}
                                </div>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="w-10 h-full flex items-center justify-center text-xl text-gray-400 hover:text-black transition-colors"
                                >
                                    +
                                </button>
                            </div>

                            <button className="flex-1 bg-black text-white h-[52px] rounded-xl font-bold text-[11px] tracking-widest uppercase hover:bg-gray-800 transition-all hover:shadow-lg relative overflow-hidden group flex items-center justify-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                                Add To Cart
                            </button>
                        </div>

                        {/* Feature Accordions (Interactive) */}
                        <div className="border border-gray-200 rounded-2xl overflow-hidden text-sm divide-y divide-gray-200">
                            {/* Product Details Accordion */}
                            <div>
                                <div
                                    className="p-5 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors"
                                    onClick={() => setOpenAccordion(openAccordion === 'details' ? null : 'details')}
                                >
                                    <div className="flex items-center gap-3 font-bold text-gray-800">
                                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        Product Details
                                    </div>
                                    <svg className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${openAccordion === 'details' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                                </div>
                                <div
                                    className={`grid transition-all duration-300 ease-in-out ${openAccordion === 'details' ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                                >
                                    <div className="overflow-hidden">
                                        <div className="px-5 pb-5 bg-white text-gray-600 leading-relaxed font-medium">
                                            A perfect balance of exhilarating high-fidelity audio and the effortless magic of AirPods. The ultimate personal listening experience is here. Features Active Noise Cancellation, personalized Spatial Audio, and up to 20 hours of battery life.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Shipping & Returns Accordion */}
                            <div>
                                <div
                                    className="p-5 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors"
                                    onClick={() => setOpenAccordion(openAccordion === 'shipping' ? null : 'shipping')}
                                >
                                    <div className="flex items-center gap-3 font-bold text-gray-800">
                                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                                        Shipping & Returns
                                    </div>
                                    <svg className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${openAccordion === 'shipping' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                                </div>
                                <div
                                    className={`grid transition-all duration-300 ease-in-out ${openAccordion === 'shipping' ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                                >
                                    <div className="overflow-hidden">
                                        <div className="px-5 pb-5 bg-white text-gray-600 leading-relaxed font-medium">
                                            Free Next-Day Delivery on all orders. Returns are accepted within 14 days of purchase in their original, unopened packaging. A restocking fee may apply for opened products.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Secure Payment Methods */}
                        <div className="mt-8 flex flex-col items-center gap-4 bg-[#f8f9fa] rounded-[20px] p-6 border border-gray-100">
                            <span className="text-[11px] font-bold text-[#A1A1A6] uppercase tracking-[0.2em] flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7a4 4 0 00-8 0v4h8z" /></svg>
                                Guaranteed Safe Checkout
                            </span>
                            <div className="flex justify-center gap-3 opacity-90 mix-blend-multiply">
                                {/* Visa */}
                                <div className="w-14 h-9 bg-white rounded-md border border-gray-200 flex items-center justify-center shadow-sm relative overflow-hidden">
                                    <span className="text-[13px] font-black tracking-tighter text-[#1a1f71] italic">VISA</span>
                                </div>
                                {/* Mastercard */}
                                <div className="w-14 h-9 bg-white rounded-md border border-gray-200 flex items-center justify-center shadow-sm relative">
                                    <div className="flex -space-x-2.5">
                                        <div className="w-5 h-5 rounded-full bg-[#eb001b] mix-blend-multiply"></div>
                                        <div className="w-5 h-5 rounded-full bg-[#f79e1b] mix-blend-multiply"></div>
                                    </div>
                                </div>
                                {/* Amex */}
                                <div className="w-14 h-9 bg-[#2E77BC] rounded-md border border-gray-200 flex items-center justify-center shadow-sm">
                                    <span className="text-[8.5px] font-bold tracking-tighter text-white uppercase leading-none text-center">Amex</span>
                                </div>
                                {/* PayPal */}
                                <div className="w-14 h-9 bg-white rounded-md border border-gray-200 flex items-center justify-center shadow-sm">
                                    <span className="text-[12px] font-black italic text-[#003087]">Pay<span className="text-[#0079C1]">Pal</span></span>
                                </div>
                                {/* Apple Pay */}
                                <div className="w-14 h-9 bg-black rounded-md border border-gray-800 flex items-center justify-center shadow-sm">
                                    <span className="text-[11px] font-semibold text-white flex items-center gap-0.5">
                                        <svg className="w-3.5 h-3.5 pb-0.5" fill="currentColor" viewBox="0 0 384 512"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-1.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" /></svg>Pay
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>

            {/* You May Also Like Section */}
            <section className="w-full bg-[#f5f5f7] py-16 md:py-24">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-[28px] md:text-[34px] font-bold text-[#1a1a1a] tracking-tight">You may also like</h2>
                        <div className="flex gap-3">
                            <button
                                onClick={() => scrollProducts('left')}
                                className="w-10 h-10 rounded-full border border-[#d2d2d7] bg-transparent flex items-center justify-center text-gray-800 hover:bg-black hover:text-white transition-colors"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                            </button>
                            <button
                                onClick={() => scrollProducts('right')}
                                className="w-10 h-10 rounded-full border border-[#d2d2d7] bg-transparent flex items-center justify-center text-gray-800 hover:bg-black hover:text-white transition-colors"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                            </button>
                        </div>
                    </div>

                    {/* Scroll Container */}
                    <div
                        ref={carouselRef}
                        className="flex overflow-x-auto gap-4 md:gap-6 pb-6 pt-2 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                    >
                        {FEATURED_PRODUCTS.map((prod) => (
                            <Link href="/prototypes/ecommerce/product" key={prod.id} className="min-w-[280px] w-[280px] md:min-w-[310px] md:w-[310px] bg-white rounded-[24px] p-6 md:p-8 flex flex-col items-center justify-between snap-start hover:scale-[1.01] transition-all cursor-pointer group">
                                <div className="w-full h-[180px] md:h-[220px] mb-8 relative flex items-center justify-center">
                                    <Image src={prod.image} alt={prod.name} className="max-w-full max-h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="text-center w-full">
                                    <h4 className="text-[10px] md:text-[11px] text-[#A1A1A6] font-semibold uppercase tracking-[0.15em] mb-2">{prod.brand}</h4>
                                    <h3 className="text-[15px] md:text-[17px] font-semibold text-[#1d1d1f] mb-2 leading-tight">{prod.name}</h3>
                                    <p className="text-[13px] md:text-[14px] text-[#1d1d1f] font-normal">Rs {prod.price}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="bg-[#1F242C] text-white pt-20 pb-6">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                        {/* Col 1 */}
                        <div className="flex flex-col gap-6 col-span-2 md:col-span-1">
                            <Image src={logoImgWhite} alt="TechNest Logo" className="h-6 md:h-8 w-auto object-contain object-left mr-auto cursor-pointer mb-2" />
                            <p className="text-gray-400 italic text-sm">"Shop Beyond Boundaries"</p>
                            <div className="flex gap-4">
                                {/* Social Icons */}
                                <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                                </a>
                                <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#1877F2] transition-all">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                                </a>
                                <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#E4405F] transition-all">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                                </a>

                            </div>
                        </div>

                        {/* Col 2 */}
                        <div>
                            <h4 className="text-lg font-bold mb-6 text-white leading-none">TechNest</h4>
                            <ul className="flex flex-col gap-4 text-sm text-gray-400">
                                <li><a href="#" className="hover:text-[#AAFF00] transition-colors">About TechNest</a></li>
                                <li><a href="#" className="hover:text-[#AAFF00] transition-colors">Contact Us</a></li>
                                <li><a href="#" className="hover:text-[#AAFF00] transition-colors">B2B Digital</a></li>
                            </ul>
                        </div>

                        {/* Col 3 */}
                        <div>
                            <h4 className="text-lg font-bold mb-6 text-white leading-none">Buy</h4>
                            <ul className="flex flex-col gap-4 text-sm text-gray-400">
                                <li><a href="#" className="hover:text-[#AAFF00] transition-colors">Bill & Top Up</a></li>
                                <li><a href="#" className="hover:text-[#AAFF00] transition-colors">Promo</a></li>
                                <li><a href="#" className="hover:text-[#AAFF00] transition-colors">Latest Products</a></li>
                            </ul>
                        </div>

                        {/* Col 4 */}
                        <div>
                            <h4 className="text-lg font-bold mb-6 text-white leading-none">Guide and Help</h4>
                            <ul className="flex flex-col gap-4 text-sm text-gray-400">
                                <li><a href="#" className="hover:text-[#AAFF00] transition-colors">TechNest Care</a></li>
                                <li><a href="#" className="hover:text-[#AAFF00] transition-colors">Term and Condition</a></li>
                                <li><a href="#" className="hover:text-[#AAFF00] transition-colors">Privacy</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                        <p>&copy; 2025 Skyradix. All rights reserved.</p>
                        <div className="flex gap-3">
                            {/* Payment Method Mock Icons (Visa, Mastercard, etc. text) */}
                            <span className="font-bold border border-gray-700 rounded px-2 py-0.5">VISA</span>
                            <span className="font-bold border border-gray-700 rounded px-2 py-0.5">MC</span>
                            <span className="font-bold border border-gray-700 rounded px-2 py-0.5">AMEX</span>
                            <span className="font-bold border border-gray-700 rounded px-2 py-0.5">PayPal</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
