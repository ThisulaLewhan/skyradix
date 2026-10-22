// The `animate-shimmer` keyframes live in tailwind.config.mjs
export const Skeleton = ({ className = "", ...props }) => {
    return (
        <div
            className={`relative overflow-hidden bg-white/5 rounded-md ${className}`}
            {...props}
        >
            <div
                className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent"
            />
        </div>
    );
};
