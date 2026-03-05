import { Skeleton } from "@/components/ui/Skeleton";

export default function EasterEggLoading() {
    return (
        <div className="min-h-[80vh] flex items-center justify-center relative overflow-hidden py-24">
            {/* Background elements (static placeholders) */}
            <div className="absolute inset-0 bg-primary-black z-0" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-cyan/10 rounded-full blur-[150px] z-0 pointer-events-none" />

            <div className="max-w-3xl mx-auto px-6 relative z-10 w-full">
                <div className="text-center mb-12 flex flex-col items-center">
                    <Skeleton className="w-16 h-16 rounded-full border border-accent-cyan/30 mb-8" />
                    <Skeleton className="h-12 md:h-16 w-3/4 max-w-sm mb-6 rounded-lg" />
                    <Skeleton className="h-6 w-full max-w-xl mb-2" />
                    <Skeleton className="h-6 w-4/5 max-w-lg" />
                </div>

                <div className="bg-soft-graphite/60 border border-accent-cyan/30 backdrop-blur-xl p-8 md:p-12 rounded-[1.5rem] relative overflow-hidden">
                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-2">
                            <Skeleton className="w-6 h-6 rounded-md" />
                            <Skeleton className="h-8 w-60 rounded-md" />
                        </div>
                        <div className="h-[1px] w-full bg-accent-cyan/20 my-6" />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                            <div>
                                <Skeleton className="h-5 w-32 mb-4" />
                                <div className="space-y-4">
                                    <Skeleton className="h-4 w-full" />
                                    <Skeleton className="h-4 w-4/5" />
                                </div>
                            </div>

                            <div className="bg-primary-black/50 p-6 rounded-lg border border-glass-border flex flex-col items-center justify-center">
                                <Skeleton className="h-3 w-32 mb-3" />
                                <Skeleton className="h-10 w-24" />
                            </div>
                        </div>

                        <Skeleton className="h-14 w-full rounded-lg mb-4" />
                        <Skeleton className="h-4 w-64 mx-auto" />
                    </div>
                </div>
            </div>
        </div>
    );
}
