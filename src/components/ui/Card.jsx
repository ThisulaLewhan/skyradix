"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const Card = ({
    children,
    className,
    hoverEffect = false,
    ...props
}) => {
    return (
        <motion.div
            whileHover={hoverEffect ? { y: -5 } : {}}
            className={cn(
                "backdrop-blur-md rounded-xl p-6 md:p-8 transition-all duration-300",
                hoverEffect && "hover:border-accent-cyan/30 hover:shadow-[0_8px_30px_rgba(0,229,255,0.05)] cursor-default",
                className
            )}
            {...props}
        >
            {children}
        </motion.div>
    );
};
