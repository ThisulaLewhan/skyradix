"use client";
import React, { useEffect, useState } from "react";
import { Montserrat, Inter } from "next/font/google";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "700", "900"],
});
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function FitnessApp() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        // Setup simple intersection observer for fade-up animations (continuous replay)
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-fade-in-up");
                        entry.target.classList.remove("opacity-0", "translate-y-8");
                    } else {
                        // Remove the class when it leaves the viewport so it can replay when it re-enters
                        entry.target.classList.remove("animate-fade-in-up");
                        entry.target.classList.add("opacity-0", "translate-y-8");
                    }
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <div
            className={`min-h-screen bg-[#121212] text-white selection:bg-[#AAFF00] selection:text-black overflow-x-hidden scroll-smooth ${inter.className}`}
        >
            {/* Hide Global Navbar & Footer from the preview */}
            <style dangerouslySetInnerHTML={{
                __html: `
        body > nav { display: none !important; }
        body > footer { display: none !important; }
        .grid-bg { 
          background-image: linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scrollMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-fade-in-up {
          animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-marquee {
          animation: scrollMarquee 20s linear infinite;
        }
        .text-stroke {
          -webkit-text-stroke: 1px rgba(255,255,255,0.1);
          color: transparent;
        }
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
                <div className="bg-black/80 backdrop-blur-md border border-[#AAFF00]/30 text-[#AAFF00] px-4 py-2 rounded-full text-[10px] sm:text-xs font-bold tracking-widest uppercase shadow-[0_4px_12px_rgba(0,0,0,0.5)] transition-all flex items-center gap-2 hover:border-[#AAFF00]">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#AAFF00] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#AAFF00]"></span>
                    </span>
                    Prototype Demo
                    <span className="hidden group-hover:inline-block ml-2 text-white/70 font-normal normal-case tracking-normal">
                        Conceptual Interface
                    </span>
                </div>
            </div>

            {/* 1. Header Navigation (Fixed) */}
            <header
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/90 backdrop-blur-md border-b border-[#AAFF00]" : "bg-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <a href="#" className={`text-2xl tracking-tighter flex items-center gap-1 ${montserrat.className} font-black`}>
                        VANGUARD
                        <svg viewBox="0 0 24 24" fill="none" stroke="#AAFF00" strokeWidth="3" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </a>

                    <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide text-[#B0B0B0]">
                        <a href="#home" className="hover:text-white transition-colors">HOME</a>
                        <a href="#about" className="hover:text-white transition-colors">THE METHOD</a>
                        <a href="#programs" className="hover:text-white transition-colors">PROGRAMS</a>
                        <a href="#testimonials" className="hover:text-white transition-colors">SUCCESS STORIES</a>
                        <a href="#blog" className="hover:text-white transition-colors">THE HUB</a>
                        <a href="#contact" className="hover:text-white transition-colors">CONTACT</a>
                    </nav>

                    <a href="#pricing" className="hidden md:inline-flex bg-[#AAFF00] text-black px-6 py-3 font-bold text-sm tracking-widest hover:bg-white hover:-translate-y-1 transition-all shadow-[0_0_15px_rgba(170,255,0,0.3)]">
                        JOIN THE TRIBE
                    </a>

                    <button className="md:hidden text-[#AAFF00] relative z-50" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? (
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                <div
                    className={`md:hidden absolute top-20 left-0 w-full bg-black/95 backdrop-blur-lg border-b border-[#AAFF00]/30 transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-[400px] py-6 opacity-100" : "max-h-0 py-0 opacity-0"
                        }`}
                >
                    <nav className="flex flex-col items-center gap-6 text-sm font-bold tracking-widest text-[#B0B0B0]">
                        <a href="#home" onClick={() => setMenuOpen(false)} className="hover:text-white transition-colors">HOME</a>
                        <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-white transition-colors">THE METHOD</a>
                        <a href="#programs" onClick={() => setMenuOpen(false)} className="hover:text-white transition-colors">PROGRAMS</a>
                        <a href="#testimonials" onClick={() => setMenuOpen(false)} className="hover:text-white transition-colors">SUCCESS STORIES</a>
                        <a href="#blog" onClick={() => setMenuOpen(false)} className="hover:text-white transition-colors">THE HUB</a>
                        <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-white transition-colors">CONTACT</a>

                        <a href="#pricing" onClick={() => setMenuOpen(false)} className="mt-4 bg-[#AAFF00] text-black px-8 py-3 w-4/5 text-center font-bold text-sm tracking-widest hover:bg-white transition-all">
                            JOIN THE TRIBE
                        </a>
                    </nav>
                </div>
            </header>

            {/* 2. Hero Section */}
            <section id="home" className="relative min-h-screen flex items-center border-b border-white/10 group">
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1920&q=80"
                        alt="Intense Workout"
                        className="w-full h-full object-cover object-[80%_center] grayscale contrast-125 transition-transform duration-[10s] ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#121212]/95 via-[#121212]/80 to-transparent"></div>
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>

                <div className="absolute inset-0 pointer-events-none flex items-center overflow-hidden opacity-10 select-none z-0">
                    <h1 className={`text-[15vw] whitespace-nowrap text-stroke font-black ${montserrat.className} animate-marquee`}>
                        VANGUARD • STRENGTH • VANGUARD • STRENGTH •
                    </h1>
                </div>

                <div className="w-full max-w-7xl mx-auto px-6 z-10 flex flex-col justify-center reveal opacity-0 translate-y-8 mt-20">
                    <p className="text-[#AAFF00] font-bold tracking-[0.05em] text-xl md:text-2xl mb-2 uppercase">
                        Customized Performance
                    </p>
                    <h1 className={`text-6xl sm:text-7xl lg:text-[6rem] font-black leading-[1] text-white uppercase mb-6 ${montserrat.className} max-w-3xl`}>
                        Unleash Your Primal Potential.
                    </h1>
                    <p className="text-[#B0B0B0] text-base md:text-xl max-w-lg mb-10 leading-relaxed font-medium">
                        Vanguard is more than a gym. It&apos;s a crucible for transformation.
                        Expert coaching, elite environment, undeniable results.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="#pricing" className="bg-[#AAFF00] text-black px-12 py-4 font-bold text-sm tracking-widest text-center hover:bg-white transition-all shadow-none">
                            START YOUR TRIAL
                        </a>
                        <a href="#about" className="border border-white/30 bg-transparent text-[#AAFF00] px-12 py-4 font-bold text-sm tracking-widest text-center hover:border-[#AAFF00] transition-colors">
                            VIEW OUR METHOD
                        </a>
                    </div>
                </div>
            </section>

            {/* 3. Marquee Banner */}
            <div className="bg-[#AAFF00] text-black overflow-hidden py-4 border-y border-white flex relative">
                <div className="flex whitespace-nowrap animate-marquee font-bold tracking-widest uppercase">
                    <span className="mx-4">// NEW MEMBER OFFER</span>
                    <span className="mx-4">// 30% OFF ANNUAL MEMBERSHIPS</span>
                    <span className="mx-4">// FREE ASSESSMENT INCLUDED</span>
                    <span className="mx-4">// JOIN THE VANGUARD MOVEMENT</span>
                    <span className="mx-4">// NEW MEMBER OFFER</span>
                    <span className="mx-4">// 30% OFF ANNUAL MEMBERSHIPS</span>
                    <span className="mx-4">// FREE ASSESSMENT INCLUDED</span>
                    <span className="mx-4">// JOIN THE VANGUARD MOVEMENT</span>
                    <span className="mx-4">// NEW MEMBER OFFER</span>
                    <span className="mx-4">// 30% OFF ANNUAL MEMBERSHIPS</span>
                    <span className="mx-4">// FREE ASSESSMENT INCLUDED</span>
                    <span className="mx-4">// JOIN THE VANGUARD MOVEMENT</span>
                </div>
            </div>

            {/* 4. About Section */}
            <section id="about" className="py-32 px-6 relative grid-bg">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
                    <div className="w-full md:w-1/2 relative reveal opacity-0 translate-y-8">
                        <div className="absolute -inset-4 border border-[#AAFF00]/30 -z-10 translate-x-4 translate-y-4"></div>
                        <img
                            src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80"
                            alt="The Vanguard Foundation"
                            className="w-full aspect-[4/5] object-cover grayscale contrast-125"
                        />
                    </div>
                    <div className="w-full md:w-1/2 reveal opacity-0 translate-y-8" style={{ animationDelay: '200ms' }}>
                        <h2 className={`text-4xl md:text-6xl font-black uppercase text-white mb-6 ${montserrat.className}`}>
                            Forge a<br />Perfect<br /><span className="text-[#AAFF00]">Balance.</span>
                        </h2>
                        <p className="text-[#B0B0B0] text-lg mb-8 leading-relaxed max-w-lg">
                            We don&apos;t just build muscle, we engineer athletes. Our philosophy blends raw strength training with functional mobility and metabolic conditioning. At Vanguard, you don&apos;t just look better, you move better, feel powerful, and live stronger.
                        </p>
                        <a href="#about" className="inline-block border border-[#AAFF00] text-[#AAFF00] px-8 py-4 font-bold text-sm tracking-widest hover:bg-[#AAFF00] hover:text-black transition-all">
                            DISCOVER THE FACILITY
                        </a>
                    </div>
                </div>
            </section>

            {/* 5. Programs Section */}
            <section id="programs" className="py-32 bg-black px-6 border-y border-white/5">
                <div className="max-w-7xl mx-auto text-center mb-20 reveal opacity-0 translate-y-8">
                    <h2 className={`text-5xl md:text-6xl font-black uppercase text-white mb-4 ${montserrat.className}`}>
                        Our Training <span className="text-[#AAFF00]">Disciplines</span>
                    </h2>
                    <p className="text-[#B0B0B0] text-lg">Tailored paths to reach your specific peak.</p>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "HYBRID STRENGTH",
                            desc: "Powerbuilding & aesthetics to build raw, functional mass.",
                            img: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=500&q=80",
                            delay: "100ms"
                        },
                        {
                            title: "METABOLIC ENGINE",
                            desc: "High-intensity intervals, endurance, and extreme fat loss.",
                            img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&q=80",
                            delay: "200ms"
                        },
                        {
                            title: "PERFORMANCE NUTRITION",
                            desc: "Fueling protocols and recovery strategies for optimal output.",
                            img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500&q=80",
                            delay: "300ms"
                        }
                    ].map((program, i) => (
                        <div key={i} className="group bg-[#121212] border border-white/5 hover:border-[#AAFF00]/50 transition-colors reveal opacity-0 translate-y-8" style={{ animationDelay: program.delay }}>
                            <div className="h-64 overflow-hidden relative">
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors z-10"></div>
                                <img
                                    src={program.img}
                                    alt={program.title}
                                    className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0"
                                />
                            </div>
                            <div className="p-8">
                                <h3 className={`text-2xl font-black uppercase text-white mb-3 ${montserrat.className}`}>{program.title}</h3>
                                <p className="text-[#B0B0B0]">{program.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 6. Testimonial Section */}
            <section id="testimonials" className="py-32 grid-bg relative px-6 overflow-hidden">
                <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-16">
                    <div className="w-full md:w-3/5 reveal opacity-0 translate-y-8">
                        <svg className="w-20 h-20 text-[#AAFF00] opacity-50 mb-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                        <p className="text-2xl md:text-4xl text-white leading-tight font-medium mb-8">
                            "Vanguard isn't a gym, it's an intervention. They pushed me past mental barriers I didn't know I had. The environment is intoxicating, the coaches are world-class. I'm in the best shape of my life."
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-[2px] bg-[#AAFF00]"></div>
                            <p className="font-bold text-sm tracking-widest text-[#B0B0B0] uppercase">
                                <span className="text-white">Marcus T.</span> • Vanguard Elite Member
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-2/5 relative reveal opacity-0 translate-y-8" style={{ animationDelay: '200ms' }}>
                        <div className="absolute -inset-6 border-2 border-[#AAFF00] rotate-3 -z-10 transition-transform hover:rotate-6 duration-500"></div>
                        <img
                            src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500&q=80"
                            alt="Testimonial Portrait"
                            className="w-full h-[500px] object-cover grayscale contrast-125"
                        />
                    </div>
                </div>
            </section>

            {/* 7. Blog Section */}
            <section id="blog" className="py-32 bg-black px-6 border-t border-white/5">
                <div className="max-w-7xl mx-auto mb-16 flex justify-between items-end reveal opacity-0 translate-y-8">
                    <h2 className={`text-4xl md:text-5xl font-black uppercase text-white ${montserrat.className}`}>Latest Intel</h2>
                    <a href="#" className="hidden md:block text-[#AAFF00] font-bold text-sm tracking-widest hover:text-white transition-colors">VIEW ALL</a>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { title: "The Myth of Overtraining vs. Under-recovering.", img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80" },
                        { title: "5 Mobility Drills You Need Before Squatting.", img: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=400&q=80" },
                        { title: "Fueling the Fire: Pre-Workout Nutrition Basics.", img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&q=80" },
                        { title: "Why Consistency Beats Intensity Every Time.", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80" }
                    ].map((blog, i) => (
                        <div key={i} className="group cursor-pointer reveal opacity-0 translate-y-8" style={{ animationDelay: `${i * 100}ms` }}>
                            <div className="overflow-hidden h-48 mb-4">
                                <img src={blog.img} alt={blog.title} className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                            </div>
                            <p className="text-[#AAFF00] text-xs font-bold tracking-widest mb-2">OCT 24, 2025</p>
                            <h3 className="text-white font-bold text-lg leading-snug mb-3 group-hover:text-[#AAFF00] transition-colors">{blog.title}</h3>
                            <span className="text-sm font-semibold text-[#B0B0B0] group-hover:text-white transition-colors flex items-center gap-1">
                                Read More <span className="text-[#AAFF00] group-hover:translate-x-1 transition-transform">→</span>
                            </span>
                        </div>
                    ))}
                </div>
            </section>

            {/* 8. Pricing Section */}
            <section id="pricing" className="py-32 grid-bg px-6 border-t border-white/5">
                <div className="max-w-7xl mx-auto text-center mb-20 reveal opacity-0 translate-y-8">
                    <h2 className={`text-5xl md:text-6xl font-black uppercase text-white mb-4 ${montserrat.className}`}>Invest In <span className="text-[#AAFF00]">Yourself</span></h2>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {/* Basic */}
                    <div className="bg-[#121212]/80 backdrop-blur-sm border border-white/10 p-10 flex flex-col items-center text-center reveal opacity-0 translate-y-8 md:hover:-translate-y-2 transition-transform h-fit">
                        <h3 className={`text-2xl font-black text-white uppercase mb-4 ${montserrat.className}`}>Base Camp</h3>
                        <div className="text-4xl font-black text-white mb-6">LKR 15,000<span className="text-sm text-[#B0B0B0] font-normal">/mo.</span></div>
                        <p className="text-[#B0B0B0] mb-8 text-sm h-16">Standard facility access, 1 group class per week.</p>
                        <a href="#" className="w-full border border-white/30 text-white py-3 font-bold text-sm tracking-widest hover:border-[#AAFF00] hover:text-[#AAFF00] transition-colors">CHOOSE PLAN</a>
                    </div>

                    {/* Pro */}
                    <div className="bg-[#121212] border-2 border-[#AAFF00] p-12 flex flex-col items-center text-center relative shadow-[0_0_30px_rgba(170,255,0,0.1)] reveal opacity-0 translate-y-8 z-10 md:-translate-y-4 md:hover:-translate-y-6 transition-transform">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#AAFF00] text-black text-xs font-black px-4 py-1 tracking-widest uppercase">
                            MOST POPULAR
                        </div>
                        <h3 className={`text-3xl font-black text-[#AAFF00] uppercase mb-4 ${montserrat.className}`}>The Ascent</h3>
                        <div className="text-4xl font-black text-white mb-6">LKR 28,000<span className="text-base text-[#B0B0B0] font-normal">/mo.</span></div>
                        <p className="text-[#B0B0B0] mb-8 text-sm h-16">Unlimited access to facility & all classes, 1 PT session/month.</p>
                        <a href="#" className="w-full bg-[#AAFF00] text-black py-4 font-bold text-sm tracking-widest hover:bg-white transition-colors shadow-[0_0_15px_rgba(170,255,0,0.2)]">CHOOSE PLAN</a>
                    </div>

                    {/* Elite */}
                    <div className="bg-[#121212]/80 backdrop-blur-sm border border-white/10 p-10 flex flex-col items-center text-center reveal opacity-0 translate-y-8 md:hover:-translate-y-2 transition-transform h-fit">
                        <h3 className={`text-2xl font-black text-white uppercase mb-4 ${montserrat.className}`}>Apex Predator</h3>
                        <div className="text-4xl font-black text-white mb-6">LKR 45,000<span className="text-sm text-[#B0B0B0] font-normal">/mo.</span></div>
                        <p className="text-[#B0B0B0] mb-8 text-sm h-16">All-inclusive access, weekly PT, personalized nutrition plan, priority class booking.</p>
                        <a href="#" className="w-full border border-white/30 text-white py-3 font-bold text-sm tracking-widest hover:border-[#AAFF00] hover:text-[#AAFF00] transition-colors">CHOOSE PLAN</a>
                    </div>
                </div>
            </section>

            {/* 9. Footer & Contact */}
            <footer id="contact" className="bg-black border-t border-white/5 pt-24 pb-8 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 mb-20">
                    <div className="w-full md:w-1/2">
                        <h2 className={`text-3xl font-black uppercase text-white mb-8 ${montserrat.className}`}>Mission Control</h2>
                        <div className="space-y-4 text-[#B0B0B0] mb-8 text-sm">
                            <p className="flex items-start gap-3"><strong className="text-white w-20">Address:</strong> 12/4 Vanguard Tower, Galle Road, Colombo 03, Sri Lanka</p>
                            <p className="flex items-center gap-3"><strong className="text-white w-20">Phone:</strong> +94 11 234 5678</p>
                            <p className="flex items-center gap-3"><strong className="text-white w-20">Email:</strong> join@vanguardfitness.lk</p>
                            <p className="flex items-center gap-3"><strong className="text-white w-20">Hours:</strong> Mon-Sun: 05:00 AM - 11:00 PM</p>
                        </div>
                        {/* Fake Map */}
                        <div className="w-full h-48 bg-[#121212] border border-white/10 flex items-center justify-center grayscale relative overflow-hidden group cursor-pointer">
                            <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&q=80" alt="Map" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity" />
                            <span className="relative z-10 font-black tracking-widest text-[#AAFF00] bg-black/80 px-4 py-2 text-xs">VIEW ON MAP</span>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2">
                        <h2 className={`text-3xl font-black uppercase text-white mb-8 ${montserrat.className}`}>Ignite Your Journey</h2>
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-2 gap-4">
                                <input type="text" placeholder="YOUR NAME" className="bg-[#121212] border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#AAFF00] transition-colors w-full" />
                                <input type="email" placeholder="YOUR EMAIL" className="bg-[#121212] border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#AAFF00] transition-colors w-full" />
                            </div>
                            <select defaultValue="" className="bg-[#121212] border border-white/10 text-[#B0B0B0] px-4 py-3 text-sm focus:outline-none focus:border-[#AAFF00] transition-colors w-full appearance-none rounded-none">
                                <option value="" disabled>SELECT YOUR GOAL</option>
                                <option value="muscle">Build Muscle</option>
                                <option value="fatloss">Fat Loss & Conditioning</option>
                                <option value="strength">Raw Strength</option>
                            </select>
                            <textarea placeholder="ANYTHING WE SHOULD KNOW?" rows="4" className="bg-[#121212] border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#AAFF00] transition-colors w-full resize-none"></textarea>
                            <button type="submit" className="w-full bg-[#AAFF00] text-black py-4 font-bold text-sm tracking-widest hover:bg-white transition-colors">SEND APPLICATION</button>
                        </form>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto border-t border-white/10 pt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Col 1 */}
                    <div>
                        <div className={`text-2xl font-black tracking-tighter text-white mb-4 flex items-center gap-2 ${montserrat.className}`}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="#AAFF00" strokeWidth="3" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            VANGUARD
                        </div>
                        <p className="text-[#B0B0B0] text-sm mb-6 leading-relaxed pr-8">
                            Forging elite human performance. Join the ranks and redefine your limits. Your journey to the apex starts here.
                        </p>
                        <div className="flex items-center gap-3">
                            <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#AAFF00] hover:text-black hover:border-[#AAFF00] transition-all">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-[#AAFF00] flex items-center justify-center text-black hover:bg-white transition-all">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#AAFF00] hover:text-black hover:border-[#AAFF00] transition-all">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.082 0 12 0 12s0 3.918.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.918 24 12 24 12s0-3.918-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Col 2 */}
                    <div>
                        <h4 className={`text-white font-black text-xl mb-6 uppercase tracking-widest ${montserrat.className}`}>MENU</h4>
                        <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-[#B0B0B0] text-sm">
                            <a href="#home" className="hover:text-[#AAFF00] transition-colors">Home</a>
                            <a href="#blog" className="hover:text-[#AAFF00] transition-colors">Blog</a>
                            <a href="#about" className="hover:text-[#AAFF00] transition-colors">About</a>
                            <a href="#contact" className="hover:text-[#AAFF00] transition-colors">Contact</a>
                            <a href="#programs" className="hover:text-[#AAFF00] transition-colors">Programs</a>
                        </div>
                    </div>

                    {/* Col 3 */}
                    <div>
                        <h4 className={`text-white font-black text-xl mb-6 uppercase tracking-widest ${montserrat.className}`}>NEWSLETTER</h4>
                        <form className="flex mb-6" onSubmit={(e) => e.preventDefault()}>
                            <input type="email" placeholder="Enter your email" className="bg-transparent border border-white/20 text-white px-4 py-3 text-xs w-[65%] focus:outline-none focus:border-[#AAFF00] transition-colors" />
                            <button type="submit" className="bg-[#AAFF00] text-black px-4 py-3 font-bold text-xs hover:bg-white transition-colors w-[35%] tracking-widest">Subscribe</button>
                        </form>
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-[#B0B0B0] text-sm font-medium">
                            <span className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-[#AAFF00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                +94 11 234 5678
                            </span>
                            <span className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-[#AAFF00] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                info@vanguardfitness.lk
                            </span>
                        </div>
                    </div>
                </div>

                {/* Bottom Green Bar */}
                <div className="-mx-6 -mb-8 mt-16 bg-[#AAFF00] py-4 text-center text-black font-semibold text-sm tracking-wide">
                    &copy; 2025 Skyradix. All Rights Reserved
                </div>
            </footer>
        </div>
    );
}
