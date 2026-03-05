import { Skeleton } from "@/components/ui/Skeleton";

export default function AboutLoading() {
    return (
        <div className="pt-32 pb-32 max-w-7xl mx-auto px-6 lgx:px-8 w-full">
            {/* Header (Center Aligned) */}
            <div className="text-center max-w-4xl mx-auto mb-24 flex flex-col items-center">
                <Skeleton className="h-12 w-80 mb-8 rounded-lg" />
                <Skeleton className="h-6 w-3/4 mb-6" />
                <Skeleton className="h-5 w-full mb-2" />
                <Skeleton className="h-5 w-5/6" />
            </div>

            {/* Mission / Vision 2-Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
                {[...Array(2)].map((_, i) => (
                    <div key={i} className="bg-soft-graphite/10 border border-white/5 p-10 rounded-2xl">
                        <Skeleton className="h-10 w-10 rounded-xl mb-6" />
                        <Skeleton className="h-8 w-48 mb-4 rounded-md" />
                        <Skeleton className="h-4 w-full mb-2" />
                        <Skeleton className="h-4 w-5/6 mb-2" />
                        <Skeleton className="h-4 w-4/6" />
                    </div>
                ))}
            </div>

            {/* Leadership Section */}
            <div className="mb-32">
                <div className="flex items-center gap-4 mb-12">
                    <Skeleton className="h-8 w-8 rounded-full" />
                    <Skeleton className="h-8 w-64 rounded-md" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                        <Skeleton className="w-full aspect-square rounded-xl mb-6" />
                        <Skeleton className="h-6 w-48 mb-2 rounded-md" />
                        <Skeleton className="h-4 w-32 mb-4 rounded-md" />
                        <Skeleton className="h-4 w-full mb-2" />
                        <Skeleton className="h-4 w-full mb-2" />
                        <Skeleton className="h-4 w-2/3" />
                    </div>
                    <div className="md:col-span-2 bg-soft-graphite/10 border border-white/5 p-8 rounded-xl flex items-center">
                        <div className="w-full">
                            <Skeleton className="h-6 w-full mb-4" />
                            <Skeleton className="h-6 w-full mb-4" />
                            <Skeleton className="h-6 w-3/4" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
