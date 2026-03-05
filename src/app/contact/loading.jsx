import { Skeleton } from "@/components/ui/Skeleton";

export default function ContactLoading() {
    return (
        <div className="pt-32 pb-24 max-w-7xl mx-auto px-6 lgx:px-8 w-full">
            {/* Left-aligned header (not centered!) */}
            <div className="mb-16">
                <Skeleton className="h-12 md:h-16 w-72 mb-6 rounded-lg" />
                <Skeleton className="h-6 w-full max-w-2xl mb-2" />
                <Skeleton className="h-6 w-3/4 max-w-xl" />
            </div>

            {/* 12-column grid: 7-col form card + 5-col contact methods */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Form Card (col-span-7) */}
                <div className="lg:col-span-7 border border-glass-border bg-[#131313] rounded-xl p-6 md:p-8">
                    <Skeleton className="h-7 w-40 mb-6 rounded-md" />
                    <div className="space-y-6">
                        {/* Name + Email row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-24" />
                                <Skeleton className="h-14 w-full rounded-xl" />
                            </div>
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-32" />
                                <Skeleton className="h-14 w-full rounded-xl" />
                            </div>
                        </div>
                        {/* Phone */}
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-36" />
                            <Skeleton className="h-14 w-full rounded-xl" />
                        </div>
                        {/* Message textarea */}
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-24" />
                            <Skeleton className="h-32 w-full rounded-xl" />
                        </div>
                        {/* Clock notice */}
                        <div className="flex items-center gap-2">
                            <Skeleton className="h-4 w-4 rounded-full" />
                            <Skeleton className="h-4 w-72" />
                        </div>
                        {/* Submit button */}
                        <Skeleton className="h-12 w-40 rounded-lg" />
                    </div>
                </div>

                {/* Alternative Contact Methods (col-span-5): 3 stacked cards */}
                <div className="lg:col-span-5 space-y-6">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="bg-[#131313] border border-glass-border rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-3 mb-2">
                                    <Skeleton className="h-6 w-6 rounded-md" />
                                    <Skeleton className="h-6 w-28 rounded-md" />
                                </div>
                                <Skeleton className="h-4 w-full mb-1" />
                                <Skeleton className="h-4 w-3/4" />
                            </div>
                            <div className="flex items-center gap-3 shrink-0">
                                <Skeleton className="h-8 w-8 rounded-md" />
                                <Skeleton className="h-5 w-5 rounded-md" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
