import { Skeleton } from "@/components/ui/Skeleton";

export default function GenericTextPageLoading() {
    return (
        <div className="pt-32 pb-24 min-h-screen">
            <div className="max-w-4xl mx-auto px-6">
                <Skeleton className="h-10 md:h-12 w-64 mb-4 rounded-md" />
                <Skeleton className="h-5 w-48 mb-12" />

                <div className="space-y-12">
                    {[...Array(6)].map((_, i) => (
                        <section key={i}>
                            {i > 0 && <Skeleton className="h-8 w-48 mb-4 rounded-md" />}
                            <div className="space-y-3">
                                <Skeleton className="h-5 w-full" />
                                <Skeleton className="h-5 w-11/12" />
                                {i % 2 === 0 && <Skeleton className="h-5 w-4/5" />}
                                {i % 3 === 0 && <Skeleton className="h-5 w-full" />}
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </div>
    );
}
