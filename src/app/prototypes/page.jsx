import { poppins400 } from "@/app/fonts";

export const metadata = {
    title: "Prototypes | Skyradix Solutions",
    description:
        "Explore website prototypes built by Skyradix from gym & fitness platforms to e-commerce stores and more.",
    alternates: {
        canonical: "/prototypes",
    },
};

const prototypes = [
    {
        slug: "fitness",
        title: "Fitness & Gym",
        description:
            "A modern gym and fitness centre website with class schedules, membership plans, and trainer profiles.",
        emoji: "🏋️",
        tags: ["Health", "Gym", "Membership"],
        color: "from-orange-500/20 to-red-500/20",
        accent: "border-orange-500/40",
    },
    {
        slug: "ecommerce",
        title: "E-Commerce Store",
        description:
            "A sleek online storefront with product listings, a shopping cart, and a smooth checkout experience.",
        emoji: "🛒",
        tags: ["Shopping", "Retail", "Online Store"],
        color: "from-blue-500/20 to-purple-500/20",
        accent: "border-blue-500/40",
    },
];

export default function PrototypesPage() {
    return (
        <main className="min-h-screen bg-black text-white">
            {/* Hero */}
            <section className="relative overflow-hidden py-24 px-6 text-center">
                {/* Background glow blobs */}
                <div className="pointer-events-none absolute inset-0 -z-10">
                    <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/4 rounded-full bg-white/5 blur-3xl" />
                </div>

                <p
                    className={`mb-4 inline-block rounded-full border border-white/20 bg-white/5 px-4 py-1 text-sm tracking-widest text-white/60 uppercase ${poppins400.className}`}
                >
                    Our Work
                </p>
                <h1
                    className={`text-4xl font-bold leading-tight sm:text-5xl md:text-6xl ${poppins400.className}`}
                >
                    Live Prototypes
                </h1>
                <p
                    className={`mx-auto mt-6 max-w-2xl text-base text-white/60 sm:text-lg ${poppins400.className}`}
                >
                    Real websites built by Skyradix, click any card to explore a live
                    demo and see what we can build for your business.
                </p>
            </section>

            {/* Grid */}
            <section className="mx-auto max-w-6xl px-6 pb-24">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {prototypes.map((p) => (
                        <a
                            key={p.slug}
                            href={`/prototypes/${p.slug}`}
                            className={`group relative flex flex-col rounded-2xl border ${p.accent} bg-gradient-to-br ${p.color} p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/5`}
                        >
                            {/* Emoji icon */}
                            <span className="mb-4 text-5xl">{p.emoji}</span>

                            <h2
                                className={`mb-2 text-xl font-semibold text-white ${poppins400.className}`}
                            >
                                {p.title}
                            </h2>
                            <p
                                className={`flex-1 text-sm leading-relaxed text-white/60 ${poppins400.className}`}
                            >
                                {p.description}
                            </p>

                            {/* Tags */}
                            <div className="mt-4 flex flex-wrap gap-2">
                                {p.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className={`rounded-full border border-white/15 bg-white/5 px-3 py-0.5 text-xs text-white/50 ${poppins400.className}`}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Arrow indicator */}
                            <div className="mt-5 flex items-center gap-1 text-sm font-medium text-white/40 transition-all group-hover:gap-2 group-hover:text-white/80">
                                View prototype
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </div>
                        </a>
                    ))}

                    {/* "More coming soon" placeholder card */}
                    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-6 text-center">
                        <span className="mb-3 text-4xl opacity-30">✦</span>
                        <p className={`text-sm text-white/30 ${poppins400.className}`}>
                            More prototypes coming soon
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
