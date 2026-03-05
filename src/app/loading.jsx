import { Skeleton } from "@/components/ui/Skeleton";

export default function Loading() {
    return (
        <div className="w-full flex flex-col">
            {/* ── Hero Section ── full-screen, centered, 2-line headline + 2 buttons */}
            <div className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-20 pb-20 bg-primary-black">
                <div className="max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center mt-10 md:mt-28">
                    {/* 2-line gradient headline */}
                    <Skeleton className="h-14 md:h-16 lg:h-[65px] w-[90%] max-w-3xl mb-2 rounded-xl" />
                    <Skeleton className="h-14 md:h-16 lg:h-[65px] w-[60%] max-w-xl mb-10 rounded-xl" />
                    {/* Sub-body text */}
                    <Skeleton className="h-6 w-4/5 max-w-2xl mb-3" />
                    <Skeleton className="h-6 w-3/5 max-w-xl mb-12" />
                    {/* 2 CTA buttons side by side */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Skeleton className="h-14 w-[200px] rounded-xl" />
                        <Skeleton className="h-14 w-[200px] rounded-xl" />
                    </div>
                </div>
            </div>

            {/* ── What We Build Section ── header + 3 feature cards + 7 service links below */}
            <div className="py-24 max-w-7xl mx-auto w-full px-6">
                <div className="text-center mb-16 flex flex-col items-center">
                    <Skeleton className="h-10 w-[400px] mb-4 rounded-md" />
                    <Skeleton className="h-5 w-full max-w-2xl mb-2" />
                    <Skeleton className="h-5 w-4/5 max-w-xl" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="border border-white/5 rounded-xl bg-white/[0.02] p-8 flex flex-col min-h-[220px]">
                            <Skeleton className="h-8 w-8 rounded-md mb-4" />
                            <Skeleton className="h-6 w-3/4 mb-4 rounded-md" />
                            <Skeleton className="h-4 w-full mb-2" />
                            <Skeleton className="h-4 w-full mb-2" />
                            <Skeleton className="h-4 w-4/5" />
                        </div>
                    ))}
                </div>
                {/* 7 small service link rows */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                    {[...Array(7)].map((_, i) => (
                        <Skeleton key={i} className="h-12 rounded-xl" />
                    ))}
                </div>
            </div>

            {/* ── Prototype Preview Section ── heading + 2 prototype cards */}
            <div className="py-24 max-w-7xl mx-auto w-full px-6">
                <div className="text-center mb-16 flex flex-col items-center">
                    <Skeleton className="h-10 w-[350px] mb-4 rounded-md" />
                    <Skeleton className="h-5 w-full max-w-xl mb-2" />
                    <Skeleton className="h-5 w-3/5 max-w-lg mb-8" />
                    <Skeleton className="h-11 w-[200px] rounded-lg" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[1, 2].map(i => (
                        <div key={i} className="border border-white/5 rounded-2xl p-8 flex flex-col min-h-[300px]">
                            <Skeleton className="h-10 w-10 rounded-md mb-6" />
                            <Skeleton className="h-7 w-2/3 mb-4 rounded-md" />
                            <Skeleton className="h-4 w-full mb-2" />
                            <Skeleton className="h-4 w-5/6 mb-8" />
                            <div className="flex gap-2 mt-auto">
                                <Skeleton className="h-6 w-16 rounded-md" />
                                <Skeleton className="h-6 w-20 rounded-md" />
                                <Skeleton className="h-6 w-24 rounded-md" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── How We Work Section ── badge + heading + 3 step cards */}
            <div className="py-32 max-w-7xl mx-auto w-full px-6">
                <div className="text-center mb-24 flex flex-col items-center">
                    <Skeleton className="h-7 w-32 rounded-full mb-6" />
                    <Skeleton className="h-10 w-60 mb-6 rounded-md" />
                    <Skeleton className="h-5 w-full max-w-2xl mb-2" />
                    <Skeleton className="h-5 w-4/5 max-w-xl" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="border border-white/10 rounded-3xl p-8 min-h-[260px] flex flex-col">
                            <Skeleton className="h-7 w-7 rounded-md mb-6" />
                            <Skeleton className="h-7 w-2/3 mb-4 rounded-md" />
                            <Skeleton className="h-4 w-full mb-2" />
                            <Skeleton className="h-4 w-full mb-2" />
                            <Skeleton className="h-4 w-4/5" />
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Our Products Section ── heading + 3-column product grid */}
            <div className="py-32 max-w-7xl mx-auto w-full px-6">
                <div className="text-center mb-20 flex flex-col items-center">
                    <Skeleton className="h-10 w-[360px] mb-6 rounded-md" />
                    <Skeleton className="h-5 w-full max-w-2xl mb-2" />
                    <Skeleton className="h-5 w-4/5 max-w-xl" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3].map(i => (
                        <Skeleton key={i} className="h-[280px] rounded-2xl" />
                    ))}
                </div>
            </div>

            {/* ── Why Skyradix Section ── title + 2-col (5-bullet-list + clock graphic) */}
            <div className="py-32 max-w-7xl mx-auto w-full px-6">
                <div className="text-center mb-10 flex flex-col items-center">
                    <Skeleton className="h-10 w-[360px] mb-4 rounded-md" />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="divide-y divide-white/15">
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className="py-5 flex items-center gap-5">
                                <Skeleton className="h-5 w-5 rounded-full shrink-0" />
                                <Skeleton className="h-5 flex-1" />
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center justify-center">
                        <Skeleton className="w-64 h-64 rounded-full" />
                    </div>
                </div>
            </div>

            {/* ── Innovation Section ── title + 2-col (browser mock + stat cards) */}
            <div className="py-32 max-w-7xl mx-auto w-full px-6">
                <div className="text-center mb-10 flex flex-col items-center">
                    <Skeleton className="h-10 w-[450px] mb-4 rounded-md" />
                    <Skeleton className="h-5 w-full max-w-2xl" />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <Skeleton className="h-[360px] rounded-2xl" />
                    <div className="flex flex-col gap-6">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="border border-white/5 rounded-xl p-6 flex items-center gap-4">
                                <Skeleton className="h-10 w-10 rounded-md shrink-0" />
                                <div className="flex-1">
                                    <Skeleton className="h-4 w-3/4 mb-2" />
                                    <Skeleton className="h-4 w-1/2" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Final CTA Section ── centered large heading + 2 buttons */}
            <div className="py-40 flex flex-col items-center justify-center border-t border-white/5">
                <Skeleton className="h-14 md:h-20 w-3/4 max-w-md mb-6 rounded-xl mx-auto" />
                <Skeleton className="h-6 w-full max-w-xl mb-12 mx-auto" />
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Skeleton className="h-14 w-[200px] rounded-xl" />
                    <Skeleton className="h-14 w-[200px] rounded-xl" />
                </div>
            </div>
        </div>
    );
}
