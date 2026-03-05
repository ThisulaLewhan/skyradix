"use client";

import { motion } from "framer-motion";

export const PageTransition = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, filter: "blur(4px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(4px)" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full h-full"
        >
            {children}
        </motion.div>
    );
};

export const SectionTransition = ({ children, delay = 0, className }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
