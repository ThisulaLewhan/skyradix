import { Skeleton } from "@/components/ui/Skeleton";

export default function ServicesLoading() {
    return (
        <div className="pt-32 pb-24 max-w-7xl mx-auto px-6 lgx:px-8 w-full">
            {/* Header (Center Aligned) */}
            <div className="text-center max-w-4xl mx-auto mb-20 flex flex-col items-center">
                <Skeleton className="h-12 w-64 mb-6 rounded-lg" />
                <Skeleton className="h-5 w-full mb-3" />
                <Skeleton className="h-5 w-full mb-3" />
                <Skeleton className="h-5 w-3/4" />
            </div>

            {/* Services Vertical List */}
            <div className="space-y-16">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="bg-soft-graphite/10 border border-white/5 rounded-2xl p-8 flex flex-col lg:flex-row gap-12">
                        {/* Left Column */}
                        <div className="lg:w-1/3">
                            <Skeleton className="h-10 w-10 rounded-xl mb-6" />
                            <Skeleton className="h-8 w-3/4 mb-4 rounded-md" />
                            <Skeleton className="h-6 w-40 rounded-md" />
                        </div>

                        {/* Right Column (3 grids) */}
                        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[...Array(3)].map((_, j) => (
                                <div key={j}>
                                    <Skeleton className="h-6 w-24 mb-4 rounded-md border-b border-white/5 pb-2" />
                                    <Skeleton className="h-4 w-full mb-2" />
                                    <Skeleton className="h-4 w-full mb-2" />
                                    <Skeleton className="h-4 w-5/6" />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
