"use client";

import { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import Image from "next/image";

import logoImg from "./images/TechNest-black-logo.svg";
import logoImgWhite from "./images/TechNest-white-logo.svg";
import heroImg1 from "./images/hero-image1.svg";
import heroImg2 from "./images/hero-image2.svg";
import bestSelling1 from "./images/bestselling1.svg";
import bestSelling2 from "./images/bestselling2.svg";
import bestSelling3 from "./images/bestselling3.svg";
import listeningToMusic from "./images/listening-to-music.svg";
import mobileHeroImg1 from "./images/mobile-hero-image1.svg";
import mobileHeroImg2 from "./images/mobile-hero-image2.svg";

// Featured Product SVGs
import iphoneImage from "./images/iphone16.svg";
import airpodsMax from "./images/airpods-max.svg";
import airpodsPro from "./images/airpods-pro.svg";
import jblTunebeam from "./images/jbl-tunebeam.svg";
import appleWatch from "./images/apple-watch.svg";
import asusRog from "./images/asus-rog.svg";
import keychronKeyboard from "./images/Keychron-keyboard.svg";
import logitechMouse from "./images/logitech-mouse.svg";
import sonyCamera from "./images/sony-camera.svg";
import nvidiaRtx from "./images/nvidia-rtx.svg";

// Flash Deals SVGs
import samsungS24 from "./images/samsung-s24.svg";
import samsungOdyssey from "./images/samsung-odyssey.svg";
import playstation5 from "./images/playstation-5.svg";
import boseQuietcomfort from "./images/bose-quitecomfort.svg";

// Optimize Google Font
const inter = Inter({ subsets: ["latin"] });

// --- MOCK DATA FOR PROTOTYPE ---
const CATEGORIES = [
    { name: "Computer Parts", icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" },
    { name: "Laptops", icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
    { name: "Phones", icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" },
    { name: "Earphones", icon: "M 7 20 V 12 H 9 A 2 2 0 0 0 11 10 A 3 3 0 0 0 8 7 H 6 A 4 4 0 0 0 2 11 V 12 H 4 V 20 A 1.5 1.5 0 0 0 7 20 Z M 17 20 V 12 H 15 A 2 2 0 0 1 13 10 A 3 3 0 0 1 16 7 H 18 A 4 4 0 0 1 22 11 V 12 H 20 V 20 A 1.5 1.5 0 0 1 17 20 Z" },
    { name: "Headsets", icon: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" },
    { name: "Keyboards", icon: "M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z M6 10h.01 M10 10h.01 M14 10h.01 M18 10h.01 M6 14h.01 M10 14h4 M18 14h.01" },
    { name: "Mice", icon: "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" },
    { name: "Cameras", icon: "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9zM15 13a3 3 0 11-6 0 3 3 0 016 0z" },
    { name: "Smart Watches", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
];

const FEATURED_PRODUCTS = [
    { id: 1, name: "Apple iPhone 14 Pro", price: "288,900", originalPrice: null, rating: 5, reviews: 120, image: iphoneImage, isNew: false, liked: true },
    { id: 2, name: "Apple AirPods Max 2", price: "188,000", originalPrice: null, rating: 5, reviews: 85, image: airpodsMax, isNew: false, liked: true },
    { id: 3, name: "Apple AirPods Pro", price: "65,000", originalPrice: null, rating: 4, reviews: 320, image: airpodsPro, isNew: false, liked: false },
    { id: 4, name: "JBL Wave Beam", price: "28,500", originalPrice: null, rating: 4, reviews: 45, image: jblTunebeam, isNew: false, liked: true },
    { id: 5, name: "Apple Watch Ultra 2", price: "257,000", originalPrice: null, rating: 5, reviews: 210, image: appleWatch, isNew: false, liked: false },
    { id: 6, name: "Asus ROG Strix G16", price: "789,300", originalPrice: null, rating: 5, reviews: 67, image: asusRog, isNew: true, liked: false },
    { id: 7, name: "Keychron V5 Keyboard", price: "56,000", originalPrice: null, rating: 5, reviews: 142, image: keychronKeyboard, isNew: false, liked: false },
    { id: 8, name: "Logitech MX Master 3S", price: "47,500", originalPrice: null, rating: 5, reviews: 503, image: logitechMouse, isNew: false, liked: true },
    { id: 9, name: "Sony a7 III Camera", price: "605,500", originalPrice: null, rating: 5, reviews: 312, image: sonyCamera, isNew: false, liked: false },
    { id: 10, name: "NVIDIA GeForce RTX 4090", price: "805,000", originalPrice: null, rating: 5, reviews: 88, image: nvidiaRtx, isNew: true, liked: true },
];

const FLASH_DEALS = [
    { id: 101, name: "Samsung Galaxy S24 Ultra", price: "390,000", originalPrice: "450,000", discount: "SAVE 13%", rating: 5, reviews: 320, image: samsungS24 },
    { id: 102, name: "Samsung Odyssey G9 Monitor", price: "420,000", originalPrice: "500,000", discount: "SAVE 16%", rating: 5, reviews: 110, image: samsungOdyssey },
    { id: 103, name: "PlayStation 5 Console", price: "185,000", originalPrice: "210,000", discount: "SAVE 12%", rating: 5, reviews: 890, image: playstation5 },
    { id: 104, name: "Bose QuietComfort 45", price: "95,000", originalPrice: "125,000", discount: "SAVE 24%", rating: 4, reviews: 245, image: boseQuietcomfort },
];

// Reusable Product Card Component
const ProductCard = ({ product, isFlash = false }) => {
    const [isLiked, setIsLiked] = useState(product.liked || false);
    const [isAnimatingLike, setIsAnimatingLike] = useState(false);

    const handleLikeClick = (e) => {
        e.preventDefault();
        e.stopPropagation(); // Avoid triggering card click if it were wrapped in a link
        setIsLiked(!isLiked);
        setIsAnimatingLike(true);
        setTimeout(() => setIsAnimatingLike(false), 300); // 300ms pop animation
    };

    return (
        <div className="bg-white rounded-2xl border border-gray-100 p-3 sm:p-4 transition-all shadow-lg duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 relative group flex flex-col h-full">
            {/* Top Badges & Wishlist */}
            <div className="flex justify-between items-start mb-4 z-10 relative">
                <div>
                    {isFlash && product.discount && (
                        <span className="bg-[#ff3b3b] text-white text-[10px] font-bold px-2 py-1 rounded-md tracking-wider">{product.discount}</span>
                    )}
                    {!isFlash && product.isNew && (
                        <span className="bg-[#AAFF00] text-black text-[10px] font-bold px-2 py-1 rounded-md tracking-wider">NEW</span>
                    )}
                </div>
                <button
                    onClick={handleLikeClick}
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isLiked ? 'bg-white text-[#FF3B3B] shadow-[0_0px_10px_rgba(0,0,0,0.1)]' : 'bg-white shadow-[0_0px_10px_rgba(0,0,0,0.1)] hover:text-black hover:border-black'}`}
                >
                    <svg className={`w-4 h-4 transition-all duration-300 ease-out ${isAnimatingLike ? 'scale-[1.35]' : 'scale-100'} ${isLiked ? 'drop-shadow-[0_3px_3px_rgba(255,59,59,0.8)]' : ''}`} fill={isLiked ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={isLiked ? "1.5" : "2"} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                </button>
            </div>

            {/* Product Image */}
            <div className="w-full h-32 sm:h-48 mb-3 sm:mb-4 relative flex justify-center items-center p-2">
                <img src={product.image?.src || product.image} alt={product.name} className="max-h-full max-w-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105" />
            </div>

            {/* Product Info */}
            <div className="mt-auto flex flex-col">
                <h4 className="font-semibold text-gray-800 text-sm mb-1 line-clamp-2 leading-snug">{product.name}</h4>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-2">
                    <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} className={`w-3 h-3 ${i < product.rating ? 'fill-current' : 'text-gray-300 fill-current'}`} viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                        ))}
                    </div>
                    <span className="text-[10px] text-gray-500 font-medium">({product.reviews})</span>
                </div>

                {/* Price */}
                <div className="flex flex-col lg:flex-row items-start lg:items-end gap-0.5 lg:gap-2 mb-3 lg:mb-4">
                    <span className="text-base sm:text-lg font-black tracking-tight whitespace-nowrap">Rs {product.price}</span>
                    {isFlash && product.originalPrice && (
                        <span className="text-[10px] sm:text-xs text-gray-400 line-through lg:mb-1 font-medium whitespace-nowrap">Rs {product.originalPrice}</span>
                    )}
                </div>

                {/* Add to Cart Button */}
                <button className="w-full bg-black text-white py-2 sm:py-2.5 rounded-xl font-bold text-[11px] sm:text-xs tracking-wide hover:bg-gray-800 transition-colors mt-auto">
                    Add To Cart
                </button>
            </div>
        </div>
    );
};

export default function EcommerceApp() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const heroSlides = [heroImg1, heroImg2];
    const mobileHeroSlides = [mobileHeroImg1, mobileHeroImg2];

    const [timeLeft, setTimeLeft] = useState(12 * 3600 + 45 * 60 + 30); // 2h 45m 30s in seconds
    const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
    const [selectedCategoryName, setSelectedCategoryName] = useState("All Category");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileCategoryDropdownOpen, setIsMobileCategoryDropdownOpen] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;

    const formatTime = (time) => String(time).padStart(2, '0');

    return (
        <div className={`min-h-screen bg-white text-[#1a1a1a] overflow-x-hidden ${inter.className}`}>
            {/* Hide Global Navbar & Footer from the preview */}
            <style dangerouslySetInnerHTML={{
                __html: `
        body > nav { display: none !important; }
        body > footer { display: none !important; }
      `}} />

            {/* BACK BUTTON (Subtle Floating Pill) */}
            <div className="fixed bottom-4 left-4 z-[100] group pointer-events-auto">
                <a
                    href="/prototypes"
                    className="bg-black/80 backdrop-blur-md border border-white/20 text-[#B0B0B0] px-4 py-2 rounded-full text-[10px] sm:text-xs font-bold tracking-widest uppercase shadow-[0_4px_12px_rgba(0,0,0,0.5)] transition-all flex items-center gap-2 hover:border-white hover:text-white"
                >
                    <svg className="w-3 h-3 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Prototypes
                </a>
            </div>

            {/* DEMO BANNER (Subtle Floating Pill) */}
            <div className="fixed bottom-4 right-4 z-[100] group pointer-events-auto">
                <div className="bg-black/80 backdrop-blur-md border border-[#00E5FF]/30 text-[#00E5FF] px-4 py-2 rounded-full text-[10px] sm:text-xs font-bold tracking-widest uppercase shadow-[0_4px_12px_rgba(0,0,0,0.5)] transition-all flex items-center gap-2 hover:border-[#00E5FF]">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E5FF] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00E5FF]"></span>
                    </span>
                    Prototype Demo
                    <span className="hidden group-hover:inline-block ml-2 text-white/70 font-normal normal-case tracking-normal">
                        - Conceptual Interface
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
                    <a href="#" className="shrink-0">
                        <Image src={logoImg} alt="TechNest Logo" className="h-7 md:h-8 w-auto object-contain" priority />
                    </a>

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

            {/* 2. Hero Carousel Section */}
            <section className="relative w-full overflow-hidden bg-[#ffffff] flex flex-col md:block pt-24 md:pt-0 h-[1000px] md:h-auto md:min-h-0">

                {/* Content Overlay Container - Relative first on mobile, Absolute overlay on desktop */}
                <div className="relative md:absolute md:inset-0 z-10 max-w-[1400px] mx-auto px-4 sm:px-6 w-full h-auto md:h-full flex flex-col justify-start items-center md:items-start text-center md:text-left pt-6 md:pt-40 order-1 md:order-none">
                    <span className="text-[#1a1a1a] font-bold mb-3 tracking-widest text-sm md:text-base opacity-80">#Headphones</span>
                    <h2 className="text-5xl sm:text-5xl lg:text-7xl font-medium text-[#1a1a1a] leading-tight mb-2 tracking-tight">
                        Limited Time Offer!
                    </h2>
                    <h1 className="text-5xl sm:text-5xl lg:text-7xl font-extrabold text-[#1a1a1a] leading-[1] mb-6 tracking-tight">
                        AirPods Max 2
                    </h1>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg max-w-xs sm:max-w-sm lg:max-w-md mb-8 leading-relaxed font-medium md:font-semibold">
                        AirPods Max 2 - A perfect brilliance of high fidelity audio and the effortless magic of the AirPods
                    </p>
                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-4 sm:px-0">
                        <button
                            onClick={() => document.getElementById('explore-section')?.scrollIntoView({ behavior: 'smooth' })}
                            className="w-[300px] sm:w-auto px-6 py-3 border-[3px] border-black text-black font-bold rounded-full hover:bg-black hover:text-white transition-all text-sm tracking-wide bg-transparent"
                        >
                            Explore More
                        </button>
                        <button className="w-[300px] sm:w-auto px-10 py-3.5 bg-black text-white font-bold rounded-full hover:bg-gray-800 transition-all text-sm tracking-wide shadow-lg shadow-black/20">
                            Buy Now
                        </button>
                    </div>
                </div>

                {/* Background Full Width Slider Image - Absolute overlay beneath text on mobile, stretches to bounds on desktop */}
                <div className="w-full absolute inset-0 top-[500px] md:top-0 h-[calc(100%-450px)] sm:h-[500px] md:h-auto overflow-hidden z-0 md:relative md:order-none">
                    {/* Desktop Hero Image */}
                    <Image
                        src={heroSlides[currentSlide]}
                        alt="Hero Slide"
                        className="hidden md:block w-full h-full md:h-auto object-cover object-right-bottom md:object-center transition-all duration-700 md:scale-100"
                        priority
                    />

                    {/* Mobile Hero Image */}
                    <Image
                        src={mobileHeroSlides[currentSlide]}
                        alt="Hero Slide Mobile"
                        className="block md:hidden w-full h-full object-cover object-center transition-all duration-700"
                        priority
                    />
                </div>

                {/* Carousel Controls - Absolutely positioned bottom center on all responsive breakpoints */}
                <div className="absolute bottom-6 md:bottom-6 left-0 translate-x-0 md:left-1/2 md:-translate-x-1/2 lg:bottom-36 flex flex-row items-center justify-center gap-4 lg:gap-6 z-20 w-full md:w-auto">
                    <button
                        onClick={() => setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))}
                        className="w-10 h-10 flex flex-shrink-0 items-center justify-center rounded-full border-2 border-black/40 text-black/40 hover:bg-black hover:text-white transition-all "
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <div className="flex items-center gap-2 lg:gap-3 font-black text-[11px] lg:text-xs tracking-widest text-gray-500 uppercase whitespace-nowrap">
                        <span className="text-black/40 cursor-pointer" onClick={() => setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))}>Previous</span>
                        <span className="text-black/40 text-base">/</span>
                        <span className="text-black/40 cursor-pointer" onClick={() => setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1))}>Next</span>
                    </div>
                    <button
                        onClick={() => setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1))}
                        className="w-10 h-10 flex flex-shrink-0 items-center justify-center rounded-full border-2 border-black/40 text-black/40 hover:bg-black hover:text-white transition-all"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                    </button>
                </div>
            </section>

            {/* 3. Trust Signal Bar */}
            <section className="bg-white border border-gray-200 py-6">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 divide-x-0 md:divide-x divide-gray-200">
                        <div className="flex items-center justify-center md:justify-start gap-4 px-4">
                            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-sm">Free Shipping</h4>
                                <p className="text-xs text-gray-500">On all orders over Rs 5000</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center md:justify-start gap-4 px-4">
                            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-sm">Secure Payment</h4>
                                <p className="text-xs text-gray-500">100% secure checkout</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center md:justify-start gap-4 px-4">
                            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-sm">Easy Returns</h4>
                                <p className="text-xs text-gray-500">30-day return policy</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center md:justify-start gap-4 px-4">
                            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-sm">24/7 Support</h4>
                                <p className="text-xs text-gray-500">Dedicated customer service</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Best Selling Grid */}
            <section id="explore-section" className="py-16 bg-white overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
                    <h3 className="text-3xl md:text-4xl font-black text-center mb-12">Best Selling</h3>

                    {/* Flex layout for allowing images to define their own varying widths */}
                    <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-4">
                        <div className="flex justify-center cursor-pointer">
                            <Image src={bestSelling1} alt="Best Selling 1" className="w-[331px] max-w-full h-auto object-contain" />
                        </div>
                        <div className="flex justify-center cursor-pointer">
                            <Image src={bestSelling2} alt="Best Selling 2" className="w-[331px] md:w-[510px] max-w-full h-auto object-contain" />
                        </div>
                        <div className="flex justify-center cursor-pointer">
                            <Image src={bestSelling3} alt="Best Selling 3" className="w-[335px] max-w-full h-auto object-contain" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Shop By Category */}
            <section className="py-12 bg-gray-50 border-y border-gray-300 overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
                    <h3 className="text-2xl font-black text-center mb-10">Shop By Category</h3>

                    {/* Horizontal scroll container */}
                    <div className="flex xl:justify-center overflow-x-auto pb-6 -mx-4 px-4 sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] gap-4 md:gap-8">
                        {CATEGORIES.map((cat, index) => (
                            <div key={index} className="flex flex-col items-center gap-3 shrink-0 cursor-pointer group w-24">
                                <div className="w-20 h-20 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 group-hover:border-black group-hover:text-black group-hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] transition-all">
                                    <svg className="w-8 h-8 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={cat.icon} />
                                    </svg>
                                </div>
                                <span className="text-xs font-bold text-center text-gray-800 group-hover:text-black transition-colors">{cat.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Flash Deals Section */}
            <section className="py-16 bg-[#f8f9fa]">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
                    <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
                        <h3 className="text-2xl font-black flex items-center gap-3">
                            Flash Deals
                            <span className="bg-[#ff3b3b] text-white text-xs px-2 py-1 rounded tracking-wide align-middle">Ends Soon!</span>
                        </h3>
                        <div className="flex items-center gap-2 text-sm font-bold">
                            <span className="bg-black text-white px-3 py-1.5 rounded-lg">{formatTime(hours)}<span className="text-[10px] ml-0.5 font-normal text-gray-300">h</span></span>
                            <span className="text-black">:</span>
                            <span className="bg-black text-white px-3 py-1.5 rounded-lg">{formatTime(minutes)}<span className="text-[10px] ml-0.5 font-normal text-gray-300">m</span></span>
                            <span className="text-black">:</span>
                            <span className="bg-[#ff3b3b] text-white px-3 py-1.5 rounded-lg animate-pulse">{formatTime(seconds)}<span className="text-[10px] ml-0.5 font-normal text-red-200">s</span></span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {FLASH_DEALS.map(product => (
                            <ProductCard key={product.id} product={product} isFlash={true} />
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. Featured Products Section */}
            <section className="py-16 bg-white">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
                    <h3 className="text-3xl md:text-4xl font-black text-center mb-12">Featured</h3>

                    {/* 2x5 Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                        {FEATURED_PRODUCTS.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                    <div className="mt-12 flex justify-center">
                        <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-black px-6 py-3 rounded-full font-bold text-sm transition-colors">
                            Load More
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                        </button>
                    </div>
                </div>
            </section>


            {/* 9. Popular Brands Section */}
            <section className="py-12 bg-white border-y border-gray-300">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
                    <h3 className="text-xl font-bold text-center mb-8 text-gray-600 uppercase tracking-widest">Popular Brands</h3>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                        {/* Real Brand Logos */}
                        <img src="https://cdn.simpleicons.org/samsung" alt="Samsung" className="h-12 md:h-16 w-auto max-w-[160px] object-contain " />
                        <img src="https://cdn.simpleicons.org/sony/000000" alt="Sony" className="h-12 md:h-16 w-auto max-w-[160px] object-contain " />
                        <img src="https://cdn.simpleicons.org/asus" alt="ASUS" className="h-11 md:h-16 w-auto max-w-[160px] object-contain " />
                        <img src="https://cdn.simpleicons.org/jbl" alt="JBL" className="h-10 md:h-10 w-auto max-w-[160px] object-contain " />
                        <img src="https://cdn.simpleicons.org/apple/000000" alt="Apple" className="h-8 md:h-8 w-auto max-w-[160px] object-contain " />
                        <img src="https://cdn.simpleicons.org/lenovo/E2231A" alt="Lenovo" className="h-10 md:h-14 w-auto max-w-[160px] object-contain " />
                    </div>
                </div>
            </section>

            {/* 10. Newsletter Subscription */}
            <section className="py-20 bg-white -mt-36">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative">
                    <div className="w-full bg-[#00A2C5] rounded-[40px] flex flex-col md:flex-row items-center justify-between h-auto md:h-[320px] relative px-8 md:px-0 mt-10 md:mt-24">
                        {/* Left Side: SVG Image Overflowing */}
                        <div className="w-full md:w-[45%] flex justify-start md:items-end md:pt-0 pt-8 order-2 md:order-1 self-end relative z-10 pointer-events-none">
                            <img
                                src={listeningToMusic?.src || listeningToMusic}
                                alt="Listening to Music"
                                className="w-[130%] md:w-[135%] max-w-[800px] object-contain -ml-16 md:-ml-20 "
                            />
                        </div>

                        {/* Right Side: Text & Form */}
                        <div className="w-full md:w-[55%] text-white py-8 md:py-10 md:pr-16 lg:pr-24 order-1 md:order-2 flex flex-col md:pl-12 md:ml-20 lg:ml-32">
                            <h2 className="text-3xl sm:text-4xl lg:text-[44px] leading-[1.1] mb-2 font-light tracking-tight">
                                Subscribe to Get Our <br />
                                <span className="font-bold text-white">Latest Offers!</span>
                            </h2>
                            <p className="text-white/80 text-sm mb-8">Be the first one to get <span className="hidden md:inline"><br />notifications about our new products</span></p>

                            <div className="flex bg-white rounded-xl p-1.5 w-full max-w-sm -mb-12 md:mb-0" suppressHydrationWarning>
                                <input
                                    type="email"
                                    placeholder="Enter your email..."
                                    className="flex-1 min-w-0 bg-transparent px-4 py-2.5 text-black placeholder:text-gray-400 focus:outline-none text-sm font-medium"
                                />
                                <button className="bg-black text-white px-4 sm:px-8 py-2 sm:py-2.5 shrink-0 rounded-lg font-bold text-xs sm:text-sm tracking-wide hover:bg-gray-800 transition-colors">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 11. Footer Section */}
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

            {/* Back Button (For Prototype Navigation) */}
            <div className="fixed bottom-4 left-4 z-[100] group pointer-events-auto">
                <a
                    href="/prototypes"
                    className="bg-black/80 backdrop-blur-md border border-white/20 text-[#B0B0B0] px-4 py-2 rounded-full text-[10px] sm:text-xs font-bold tracking-widest uppercase shadow-[0_4px_12px_rgba(0,0,0,0.5)] transition-all flex items-center gap-2 hover:border-white hover:text-white"
                >
                    <svg className="w-3 h-3 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Prototypes
                </a>
            </div>

        </div>
    );
}
