import React from 'react';
import { cn } from "@/lib/utils"; // Assuming cn is available, or use a simple string concatenation if not

export const Skeleton = ({ className = "", ...props }) => {
    return (
        <>
            <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 1.5s infinite;
        }
      `}</style>
            <div
                className={`relative overflow-hidden bg-white/5 rounded-md ${className}`}
                {...props}
            >
                <div
                    className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent"
                />
            </div>
        </>
    );
};
