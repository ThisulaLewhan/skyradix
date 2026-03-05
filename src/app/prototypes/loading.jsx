import { Skeleton } from "@/components/ui/Skeleton";

export default function PrototypesLoading() {
    return (
        <div className="pt-24 pb-24 max-w-7xl mx-auto px-6 lgx:px-8 w-full">
            {/* Header (Center Aligned) */}
            <div className="mb-20 flex flex-col items-center text-center">
                <Skeleton className="h-6 w-32 rounded-full mb-6" />
                <Skeleton className="h-16 w-80 mb-6 rounded-xl" />
                <Skeleton className="h-5 w-full max-w-3xl mb-2" />
                <Skeleton className="h-5 w-3/4 max-w-2xl" />
            </div>

            {/* Prototypes Grid (3 Columns) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(3)].map((_, i) => (
                    <div key={i} className="bg-soft-graphite/10 border border-white/5 p-8 rounded-2xl h-[380px] flex flex-col">
                        <Skeleton className="h-16 w-16 rounded-2xl mb-6" />
                        <Skeleton className="h-8 w-3/4 mb-3 rounded-md" />
                        <Skeleton className="h-4 w-full mb-2" />
                        <Skeleton className="h-4 w-full mb-2" />
                        <Skeleton className="h-4 w-5/6 mb-8 flex-grow" />

                        <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                            <Skeleton className="h-6 w-16 rounded-md" />
                            <Skeleton className="h-6 w-20 rounded-md" />
                            <Skeleton className="h-6 w-24 rounded-md" />
                        </div>

                        <div className="pt-4 border-t border-white/5">
                            <Skeleton className="h-5 w-32 rounded-md" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
