import { cn } from "@/lib/utils";

export const H1 = ({ children, className, ...props }) => {
    return (
        <h1
            className={cn(
                "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6",
                className
            )}
            {...props}
        >
            {children}
        </h1>
    );
};

export const H2 = ({ children, className, ...props }) => {
    return (
        <h2
            className={cn(
                "text-3xl md:text-4xl font-bold tracking-tight text-white mb-4",
                className
            )}
            {...props}
        >
            {children}
        </h2>
    );
};

export const H3 = ({ children, className, ...props }) => {
    return (
        <h3
            className={cn(
                "text-xl md:text-2xl font-semibold tracking-tight text-white mb-3",
                className
            )}
            {...props}
        >
            {children}
        </h3>
    );
};

export const Body = ({ children, className, variant = "default", ...props }) => {
    const variants = {
        default: "text-base text-foreground",
        muted: "text-base text-muted-grey",
        large: "text-lg md:text-xl text-foreground",
        small: "text-sm text-muted-grey",
    };

    return (
        <p
            className={cn("leading-relaxed", variants[variant], className)}
            {...props}
        >
            {children}
        </p>
    );
};
