export const metadata = {
    title: "Gym OS | Skyradix",
    description: "Gym OS by Skyradix — a purpose-built gym management system. Manage members, track payments, log PT sessions, broadcast SMS, and control door access hardware from a single dashboard.",
    keywords: [
        "Gym OS", "Gym Management Software", "Gym Management System", "Skyradix",
        "Member Management", "PT Tracker", "Door Access Control", "SMS Broadcast",
        "Fitness Business Software", "Gym Dashboard"
    ],
    openGraph: {
        title: "Gym OS | Skyradix",
        description: "A purpose-built gym management system — members, payments, PT sessions, SMS broadcast, and door access control in one dashboard.",
        type: "website",
    },
};

export default function GymOSLayout({ children }) {
    return (
        <>
            <style>{`
                ::-webkit-scrollbar-thumb {
                    background: #4f46e5;
                    border-radius: 4px;
                }
                ::-webkit-scrollbar-thumb:hover {
                    background: #6366f1;
                }
            `}</style>
            {children}
        </>
    );
}
