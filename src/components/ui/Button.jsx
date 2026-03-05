"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const Button = ({
    children,
    className,
    variant = "primary",
    size = "md",
    ...props
}) => {
    const baseStyles =
        "inline-flex items-center justify-center font-semibold rounded-md transition-all duration-300 transform will-change-transform";

    const variants = {
        primary:
            "bg-white text-primary-black hover:bg-accent-cyan hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:-translate-y-1",
        secondary:
            "bg-soft-graphite text-white border border-glass-border hover:border-accent-cyan/30 hover:bg-soft-graphite/80 hover:shadow-[0_0_15px_rgba(0,229,255,0.15)] hover:-translate-y-1",
        ghost: "bg-transparent text-white hover:text-accent-cyan hover:bg-white/5",
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };

    return (
        <motion.button
            whileTap={{ scale: 0.97 }}
            className={cn(baseStyles, variants[variant], sizes[size], className)}
            {...props}
        >
            {children}
        </motion.button>
    );
};
