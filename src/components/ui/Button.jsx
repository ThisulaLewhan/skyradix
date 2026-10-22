"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const MotionLink = motion.create(Link);

export const Button = ({
    children,
    className,
    variant = "primary",
    size = "md",
    href,
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

    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    // With an href, render the link itself as the button (a <button> inside a link is invalid HTML)
    if (href) {
        return (
            <MotionLink href={href} whileTap={{ scale: 0.97 }} className={classes} {...props}>
                {children}
            </MotionLink>
        );
    }

    return (
        <motion.button
            whileTap={{ scale: 0.97 }}
            className={classes}
            {...props}
        >
            {children}
        </motion.button>
    );
};
