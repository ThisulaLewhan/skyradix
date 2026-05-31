"use client";

import { useState, useEffect, useRef } from "react";
import {
    LayoutDashboard, Users, CreditCard, Dumbbell, BarChart3,
    MessageSquare, Settings, ChevronLeft, Search,
    Download, Plus, RefreshCw, UserPlus, Ticket,
    ArrowUpRight, ArrowDownRight, Filter, Check, ChevronDown,
    Megaphone, Package, Code2, Save, Sun, Moon, Monitor,
    TrendingUp, Wallet, UserCheck,
} from "lucide-react";

// ── Sample Data ───────────────────────────────────────────────────────────────

const MEMBERS = [
    { id: "ADM-001", name: "Ashan Perera",      photo: "AP", phone: "077 123 4567", package: "Premium 3M",  start: "2026-04-01", expiry: "2026-07-01", status: "Valid"  },
    { id: "ADM-002", name: "Kasun Silva",        photo: "KS", phone: "077 987 6543", package: "Standard 1M", start: "2026-05-01", expiry: "2026-06-01", status: "Lapsed" },
    { id: "ADM-003", name: "Nethmi Fernando",    photo: "NF", phone: "076 234 5678", package: "Premium 6M",  start: "2026-03-15", expiry: "2026-09-15", status: "Valid"  },
    { id: "ADM-004", name: "Dimuth Ratnayake",   photo: "DR", phone: "075 789 1234", package: "Annual",      start: "2026-01-01", expiry: "2027-01-01", status: "Valid"  },
    { id: "ADM-005", name: "Sachini Wickrama",   photo: "SW", phone: "071 654 3210", package: "Standard 1M", start: "2026-05-15", expiry: "2026-06-15", status: "Valid"  },
    { id: "ADM-006", name: "Buddhika Madusanka", photo: "BM", phone: "070 112 3344", package: "Premium 3M",  start: "2026-04-10", expiry: "2026-07-10", status: "Valid"  },
];

const PAYMENTS = [
    { trx: "TRX-001", adm: "ADM-001", name: "Ashan Perera",      package: "Premium 3M",  method: "Cash",          date: "2026-04-01", amount: "LKR 9,000"  },
    { trx: "TRX-002", adm: "ADM-002", name: "Kasun Silva",        package: "Standard 1M", method: "Card",          date: "2026-05-01", amount: "LKR 3,500"  },
    { trx: "TRX-003", adm: "ADM-003", name: "Nethmi Fernando",    package: "Premium 6M",  method: "Cash",          date: "2026-03-15", amount: "LKR 16,000" },
    { trx: "TRX-004", adm: "ADM-004", name: "Dimuth Ratnayake",   package: "Annual",      method: "Bank Transfer", date: "2026-01-01", amount: "LKR 28,000" },
    { trx: "TRX-005", adm: "ADM-005", name: "Sachini Wickrama",   package: "Standard 1M", method: "Cash",          date: "2026-05-15", amount: "LKR 3,500"  },
    { trx: "TRX-006", adm: "ADM-006", name: "Buddhika Madusanka", package: "Premium 3M",  method: "Cash",          date: "2026-04-10", amount: "LKR 9,000"  },
];

const PT_SESSIONS = [
    { adm: "ADM-001", name: "Ashan Perera",     coach: "Saman Bandara",    period: "8:00 AM – 9:00 AM", price: "LKR 1,500" },
    { adm: "ADM-003", name: "Nethmi Fernando",   coach: "Ruwan Jayasinghe", period: "6:00 PM – 7:00 PM", price: "LKR 2,000" },
    { adm: "ADM-004", name: "Dimuth Ratnayake",  coach: "Saman Bandara",    period: "7:00 AM – 8:00 AM", price: "LKR 1,500" },
    { adm: "ADM-006", name: "Buddhika Madusanka",coach: "Ruwan Jayasinghe", period: "5:00 PM – 6:00 PM", price: "LKR 2,000" },
];

const INITIAL_FEED = [
    { name: "Dimuth Ratnayake",  adm: "ADM-004", time: "5 min ago"  },
    { name: "Nethmi Fernando",   adm: "ADM-003", time: "12 min ago" },
    { name: "Ashan Perera",      adm: "ADM-001", time: "18 min ago" },
];

const LIVE_QUEUE = [
    { name: "Sachini Wickrama",   adm: "ADM-005" },
    { name: "Buddhika Madusanka", adm: "ADM-006" },
    { name: "Kasun Silva",        adm: "ADM-002" },
];

const ANALYTICS_DATA = {
    totalRevenue:    "LKR 69,500",
    activeMembers:   157,
    todayAttendance: 34,
    newSignups:      6,
    revenueSplit:    { "New Signups": "LKR 28,000", "Renewals": "LKR 36,000", "Day Passes": "LKR 5,500"  },
    paymentMethods:  { "Cash": "LKR 46,000", "Card": "LKR 3,500", "Bank Transfer": "LKR 20,000" },
};

// ── Toast ─────────────────────────────────────────────────────────────────────

function Toast({ message, onClose }) {
    useEffect(() => {
        const t = setTimeout(onClose, 3500);
        return () => clearTimeout(t);
    }, [onClose]);
    return (
        <div
            className="absolute top-4 right-4 z-50 w-[300px]"
            style={{ animation: "gymos-toast-in 0.3s cubic-bezier(0.34,1.56,0.64,1) both" }}
        >
            <div className="bg-[#1a1b26] border border-indigo-500/30 rounded-2xl shadow-2xl shadow-black/70 overflow-hidden">
                {/* Top strip */}
                <div className="flex items-start gap-3 px-4 pt-4 pb-3">
                    {/* Close */}
                    <button
                        onClick={onClose}
                        className="w-5 h-5 rounded-full bg-white/8 hover:bg-white/15 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors"
                    >
                        <span className="text-white/50 text-[10px] leading-none font-bold">✕</span>
                    </button>
                    {/* Message */}
                    <p className="text-white/80 text-xs leading-relaxed flex-1">{message}</p>
                    {/* Dismiss */}
                    <button
                        onClick={onClose}
                        className="flex-shrink-0 text-[11px] font-semibold text-white bg-white/10 hover:bg-white/18 rounded-lg px-3 py-1.5 transition-colors"
                    >
                        Dismiss
                    </button>
                </div>
                {/* Progress bar */}
                <div className="h-0.5 bg-white/5">
                    <div
                        className="h-full bg-indigo-500"
                        style={{ animation: "gymos-toast-progress 3.5s linear both" }}
                    />
                </div>
            </div>
        </div>
    );
}

// ── Custom Dropdown ───────────────────────────────────────────────────────────

function Dropdown({ options, value, onChange, className = "" }) {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        function handler(e) {
            if (ref.current && !ref.current.contains(e.target)) setOpen(false);
        }
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    return (
        <div ref={ref} className={`relative ${className}`}>
            <button
                onClick={() => setOpen(o => !o)}
                className="flex items-center gap-1.5 bg-[#0d0e14] rounded-lg px-2.5 py-1.5 text-white/60 text-xs cursor-pointer hover:bg-[#16171f] transition-colors min-w-[80px] justify-between"
            >
                <span>{value}</span>
                <ChevronDown className={`w-3 h-3 text-white/30 flex-shrink-0 transition-transform duration-150 ${open ? "rotate-180" : ""}`} />
            </button>
            {open && (
                <div className="absolute top-full left-0 mt-1 z-[100] bg-[#0d0e14] border border-indigo-500/30 rounded-lg overflow-hidden shadow-2xl shadow-black/60 min-w-full">
                    {options.map(opt => (
                        <button
                            key={opt}
                            onClick={() => { onChange(opt); setOpen(false); }}
                            className={`w-full text-left px-3 py-2 text-xs transition-colors whitespace-nowrap ${
                                value === opt
                                    ? "text-indigo-300 bg-indigo-600/20"
                                    : "text-white/55 hover:text-white hover:bg-white/5"
                            }`}
                        >
                            {opt}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

// ── Sidebar ───────────────────────────────────────────────────────────────────

const NAV = [
    { id: "dashboard", label: "Dashboard",  Icon: LayoutDashboard },
    { id: "members",   label: "Members",    Icon: Users           },
    { id: "payments",  label: "Payments",   Icon: CreditCard      },
    { id: "pttracker", label: "PT Tracker", Icon: Dumbbell        },
    { id: "analytics", label: "Analytics",  Icon: BarChart3       },
    { id: "sms",       label: "SMS",        Icon: MessageSquare   },
    { id: "settings",  label: "Settings",   Icon: Settings        },
];

function Sidebar({ active, setActive }) {
    return (
        <div className="w-[185px] min-w-[185px] bg-[#0b0c10] border-r border-white/5 flex flex-col">
            {/* Logo */}
            <div className="px-4 py-4 border-b border-white/5 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center flex-shrink-0">
                    <Dumbbell className="w-4 h-4 text-white" />
                </div>
                <div className="min-w-0">
                    <p className="text-white text-sm font-bold leading-none">Gym OS</p>
                    <p className="text-white/30 text-[11px] mt-0.5 truncate">Access Control</p>
                </div>
            </div>

            {/* Nav */}
            <nav className="flex-1 py-3 px-2.5 space-y-0.5">
                {NAV.map(({ id, label, Icon }) => (
                    <button
                        key={id}
                        onClick={() => setActive(id)}
                        className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs transition-all duration-150 ${
                            active === id
                                ? "bg-indigo-600/20 text-indigo-300 border border-indigo-500/25 font-medium"
                                : "text-white/45 hover:text-white/80 hover:bg-white/5 border border-transparent"
                        }`}
                    >
                        <Icon className="w-4 h-4 flex-shrink-0" />
                        {label}
                    </button>
                ))}
            </nav>

            {/* Collapse */}
            <div className="px-4 py-3.5 border-t border-white/5">
                <button className="flex items-center gap-2 text-white/25 text-xs hover:text-white/50 transition-colors">
                    <ChevronLeft className="w-4 h-4" />
                    Collapse
                </button>
            </div>
        </div>
    );
}

// ── Dashboard ─────────────────────────────────────────────────────────────────

function DashboardPage({ onToast }) {
    const [feed, setFeed] = useState(INITIAL_FEED);
    const [queueIdx, setQueueIdx] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            const next = LIVE_QUEUE[queueIdx % LIVE_QUEUE.length];
            setFeed(prev => [{ ...next, time: "Just now" }, ...prev].slice(0, 5));
            setQueueIdx(i => i + 1);
        }, 3500);
        return () => clearInterval(id);
    }, [queueIdx]);

    const actions = [
        { Icon: RefreshCw, label: "Renew Membership", sub: "Quick search & extend package",  msg: "Renew Membership opened",     iconBg: "bg-indigo-600/25", iconBorder: "border-indigo-500/25", iconColor: "text-indigo-400", hoverBg: "hover:border-indigo-500/40" },
        { Icon: UserPlus,  label: "New Registration",  sub: "Add member & capture photo",     msg: "New Registration form ready", iconBg: "bg-blue-600/25",   iconBorder: "border-blue-500/25",   iconColor: "text-blue-400",   hoverBg: "hover:border-blue-500/40"   },
        { Icon: Ticket,    label: "Sell Day Pass",     sub: "Log anonymous walk-in payment",  msg: "Day Pass: LKR 500 logged",    iconBg: "bg-emerald-600/25",iconBorder: "border-emerald-500/25",iconColor: "text-emerald-400",hoverBg: "hover:border-emerald-500/40" },
    ];

    return (
        <div className="flex-1 overflow-y-auto p-6">
            <div className="mb-5">
                <h1 className="text-white text-2xl font-bold">Dashboard</h1>
                <p className="text-white/40 text-sm mt-0.5">Overview of your gym&apos;s daily metrics.</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mb-3">
                <div className="bg-[#13141a] border border-white/5 rounded-xl p-5">
                    <div className="flex justify-between items-start mb-3">
                        <span className="text-white/50 text-xs">Active Members</span>
                        <Users className="w-4 h-4 text-indigo-400/50" />
                    </div>
                    <p className="text-white text-4xl font-bold">157</p>
                    <p className="text-green-400 text-xs mt-2 flex items-center gap-1"><ArrowUpRight className="w-3.5 h-3.5" />Valid</p>
                </div>
                <div className="bg-[#13141a] border border-white/5 rounded-xl p-5">
                    <div className="flex justify-between items-start mb-3">
                        <span className="text-white/50 text-xs">Expired</span>
                        <Users className="w-4 h-4 text-red-400/50" />
                    </div>
                    <p className="text-white text-4xl font-bold">23</p>
                    <p className="text-red-400 text-xs mt-2 flex items-center gap-1"><ArrowDownRight className="w-3.5 h-3.5" />Lapsed</p>
                </div>
                <div className="bg-indigo-950/60 border border-indigo-500/20 rounded-xl p-5">
                    <div className="flex justify-between items-start mb-2">
                        <span className="text-indigo-300 text-xs font-medium">Terminal</span>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                    </div>
                    <p className="text-white text-lg font-bold mt-2">Listening</p>
                    <p className="text-white/35 text-xs mt-1">Hardware sync ready</p>
                </div>
            </div>

            {/* Action cards */}
            <div className="grid grid-cols-3 gap-3 mb-3">
                {actions.map(({ Icon, label, sub, msg, iconBg, iconBorder, iconColor, hoverBg }) => (
                    <button
                        key={label}
                        onClick={() => onToast(msg)}
                        className={`bg-[#13141a] border border-white/5 rounded-xl p-4 text-left ${hoverBg} hover:bg-white/[0.03] transition-all duration-200 group flex items-center gap-3.5`}
                    >
                        <div className={`w-10 h-10 rounded-xl ${iconBg} border ${iconBorder} flex items-center justify-center flex-shrink-0 transition-colors`}>
                            <Icon className={`w-5 h-5 ${iconColor}`} />
                        </div>
                        <div className="min-w-0">
                            <p className="text-white text-sm font-semibold leading-tight">{label}</p>
                            <p className="text-white/35 text-xs mt-0.5 leading-tight">{sub}</p>
                        </div>
                    </button>
                ))}
            </div>

            {/* Live Feed */}
            <div className="bg-[#13141a] border border-white/5 rounded-xl p-4">
                <p className="text-white text-sm font-semibold mb-3">Live Activity Feed</p>
                <div>
                    {feed.map((e, i) => (
                        <div
                            key={`${e.adm}-${i}`}
                            className={`flex items-center gap-3 py-2.5 border-b border-indigo-500/35 last:border-0 transition-all duration-500 ${i === 0 ? "opacity-100" : "opacity-50"}`}
                        >
                            <div className="w-6 h-6 rounded-full bg-indigo-600/25 border border-indigo-500/25 flex items-center justify-center flex-shrink-0">
                                <Check className="w-3 h-3 text-indigo-400" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-white text-xs font-medium truncate">{e.name}</p>
                                <p className="text-white/30 text-[11px]">{e.adm} • checked in</p>
                            </div>
                            <p className="text-white/25 text-[11px] flex-shrink-0">{e.time}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// ── Members ───────────────────────────────────────────────────────────────────

function MembersPage({ onToast }) {
    const [search, setSearch] = useState("");
    const filtered = MEMBERS.filter(m =>
        m.name.toLowerCase().includes(search.toLowerCase()) ||
        m.id.toLowerCase().includes(search.toLowerCase()) ||
        m.phone.includes(search)
    );

    return (
        <div className="flex-1 overflow-y-auto p-6">
            <div className="flex items-start justify-between mb-5">
                <div>
                    <h1 className="text-white text-2xl font-bold">Members Matrix</h1>
                    <p className="text-indigo-400 text-sm mt-0.5">Register newcomers and manage existing access profiles.</p>
                </div>
                <button
                    onClick={() => onToast("New Registration form opened")}
                    className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium px-4 py-2 rounded-lg transition-colors"
                >
                    <Plus className="w-3.5 h-3.5" /> New Registration
                </button>
            </div>

            <div className="bg-[#13141a] border border-white/5 rounded-xl p-5">
                <p className="text-white text-sm font-semibold mb-0.5">Member Directory</p>
                <p className="text-white/30 text-xs mb-4">All enrolled profiles mapped to the scanner.</p>

                <div className="relative mb-4">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/25" />
                    <input
                        type="text"
                        placeholder="Search Name, Phone, NIC, Adm No..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        className="w-full bg-[#0d0e14] border border-transparent rounded-lg pl-9 pr-3 py-2 text-white text-xs placeholder-white/20 outline-none focus:border-indigo-500/40 transition-colors"
                    />
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-xs">
                        <thead>
                            <tr className="border-b border-white/5">
                                {["Photo", "Adm No", "Full Name", "Phone", "Package", "Start", "Expiry", "Status"].map(h => (
                                    <th key={h} className="text-left text-white/30 font-medium pb-2.5 pr-4 last:pr-0 whitespace-nowrap">{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.length === 0 ? (
                                <tr><td colSpan={8} className="text-white/20 text-center py-6">No members found.</td></tr>
                            ) : filtered.map(m => (
                                <tr key={m.id} className="border-b border-indigo-500/35 last:border-0 hover:bg-white/[0.015] transition-colors cursor-default">
                                    <td className="py-2 pr-4">
                                        <div className="w-7 h-7 rounded-full bg-indigo-600/25 border border-indigo-500/20 flex items-center justify-center text-indigo-300 text-[10px] font-bold">{m.photo}</div>
                                    </td>
                                    <td className="py-2 pr-4 text-indigo-400 whitespace-nowrap">{m.id}</td>
                                    <td className="py-2 pr-4 text-white whitespace-nowrap">{m.name}</td>
                                    <td className="py-2 pr-4 text-white/50 whitespace-nowrap">{m.phone}</td>
                                    <td className="py-2 pr-4 text-white/65 whitespace-nowrap">{m.package}</td>
                                    <td className="py-2 pr-4 text-white/35 whitespace-nowrap">{m.start}</td>
                                    <td className="py-2 pr-4 text-white/35 whitespace-nowrap">{m.expiry}</td>
                                    <td className="py-2">
                                        <span className={`px-2 py-0.5 rounded-md text-[11px] font-medium ${m.status === "Valid" ? "bg-green-500/12 text-green-400" : "bg-red-500/12 text-red-400"}`}>
                                            {m.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/5">
                    <p className="text-white/25 text-xs">Showing {filtered.length} of {MEMBERS.length} items</p>
                    <div className="flex items-center gap-3 text-xs text-white/25">
                        <button className="hover:text-white/55 transition-colors">Previous</button>
                        <span>Page 1/1</span>
                        <button className="hover:text-white/55 transition-colors">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ── Payments ──────────────────────────────────────────────────────────────────

function PaymentsPage({ onToast }) {
    const [period, setPeriod] = useState("Monthly");
    const PERIODS = ["Monthly", "Quarterly", "Yearly", "Custom Range"];
    const methodStyle = { Cash: "bg-green-500/10 text-green-400", Card: "bg-blue-500/10 text-blue-400", "Bank Transfer": "bg-indigo-500/10 text-indigo-400" };

    return (
        <div className="flex-1 overflow-y-auto p-6">
            <div className="flex items-start justify-between mb-5">
                <div>
                    <h1 className="text-white text-2xl font-bold">Billing & Payments</h1>
                    <p className="text-indigo-400 text-sm mt-0.5">Review revenue history and manage manual membership renewals.</p>
                </div>
                <button
                    onClick={() => onToast("Exporting PDF...")}
                    className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white/65 text-xs px-3 py-2 rounded-lg transition-colors"
                >
                    <Download className="w-3.5 h-3.5" /> Export PDF
                </button>
            </div>

            <div className="bg-[#13141a] border border-white/5 rounded-xl p-5">
                <div className="flex items-start justify-between mb-4">
                    <div>
                        <p className="text-white text-sm font-semibold flex items-center gap-2">
                            <CreditCard className="w-4 h-4 text-indigo-400" />
                            Historical Transactions ({PAYMENTS.length})
                        </p>
                        <p className="text-white/30 text-xs mt-0.5">June 2026 • Cash Basis: LKR 69,500</p>
                    </div>
                </div>

                <div className="flex items-center gap-2 mb-4 flex-wrap">
                    <span className="text-white/35 text-xs flex items-center gap-1.5"><Filter className="w-3.5 h-3.5" />Date Filters</span>
                    {PERIODS.map(p => (
                        <button key={p} onClick={() => setPeriod(p)}
                            className={`text-xs px-3 py-1.5 rounded-lg transition-all duration-150 ${period === p ? "bg-white text-black font-semibold" : "bg-white/5 text-white/45 hover:bg-white/10"}`}>
                            {p}
                        </button>
                    ))}
                </div>

                <table className="w-full text-xs">
                    <thead>
                        <tr className="border-b border-white/5">
                            {["Trx ID", "Adm No", "Member", "Package", "Method", "Date", "Amount"].map(h => (
                                <th key={h} className="text-left text-white/30 font-medium pb-2.5 pr-4 last:pr-0 whitespace-nowrap">{h}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {PAYMENTS.map(p => (
                            <tr key={p.trx} className="border-b border-indigo-500/35 last:border-0 hover:bg-white/[0.015] transition-colors cursor-default">
                                <td className="py-2 pr-4 text-indigo-400 whitespace-nowrap">{p.trx}</td>
                                <td className="py-2 pr-4 text-white/50 whitespace-nowrap">{p.adm}</td>
                                <td className="py-2 pr-4 text-white whitespace-nowrap">{p.name}</td>
                                <td className="py-2 pr-4 text-white/60 whitespace-nowrap">{p.package}</td>
                                <td className="py-2 pr-4">
                                    <span className={`px-2 py-0.5 rounded-md text-[11px] font-medium ${methodStyle[p.method] || "bg-white/10 text-white/50"}`}>{p.method}</span>
                                </td>
                                <td className="py-2 pr-4 text-white/40 whitespace-nowrap">{p.date}</td>
                                <td className="py-2 text-white font-semibold whitespace-nowrap">{p.amount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/5">
                    <p className="text-white/25 text-xs">Showing {PAYMENTS.length} of {PAYMENTS.length} transactions</p>
                    <div className="flex items-center gap-3 text-xs text-white/25">
                        <button className="hover:text-white/55 transition-colors">Previous</button>
                        <span>Page 1/1</span>
                        <button className="hover:text-white/55 transition-colors">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ── PT Tracker ────────────────────────────────────────────────────────────────

function PTTrackerPage({ onToast }) {
    const [timeFilter, setTimeFilter] = useState("This Month");
    const [search, setSearch] = useState("");
    const [coachFilter, setCoachFilter] = useState("All Coaches");
    const TIME_FILTERS = ["This Week", "This Month", "Last Month", "Custom Range"];

    const filtered = PT_SESSIONS.filter(s =>
        s.name.toLowerCase().includes(search.toLowerCase()) ||
        s.adm.toLowerCase().includes(search.toLowerCase())
    );
    const total = filtered.reduce((acc, s) => acc + parseInt(s.price.replace(/[^0-9]/g, "")), 0);

    return (
        <div className="flex-1 overflow-y-auto p-6">
            <div className="flex items-start justify-between mb-5">
                <div>
                    <h1 className="text-white text-2xl font-bold">Personal Training Tracker</h1>
                    <p className="text-indigo-400 text-sm mt-0.5">Log and analyze PT sessions with real-time totals.</p>
                </div>
                <div className="flex items-center gap-2">
                    <button onClick={() => onToast("PDF exported")} className="flex items-center gap-1.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white/60 text-xs px-3 py-2 rounded-lg transition-colors">
                        <Download className="w-3.5 h-3.5" /> Export PDF
                    </button>
                    <button onClick={() => onToast("Excel exported")} className="flex items-center gap-1.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white/60 text-xs px-3 py-2 rounded-lg transition-colors">
                        <Download className="w-3.5 h-3.5" /> Export Excel
                    </button>
                    <button onClick={() => onToast("Add Session form opened")} className="flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium px-3 py-2 rounded-lg transition-colors">
                        <Plus className="w-3.5 h-3.5" /> Add Session
                    </button>
                </div>
            </div>

            <div className="bg-[#13141a] border border-white/5 rounded-xl p-5">
                <p className="text-white text-sm font-semibold flex items-center gap-2 mb-4">
                    <Filter className="w-4 h-4 text-white/35" /> Filters
                </p>

                <div className="flex flex-wrap items-center gap-2.5 mb-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/25" />
                        <input
                            type="text"
                            placeholder="Search member or admission..."
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            className="bg-[#0d0e14] border border-transparent rounded-lg pl-9 pr-3 py-2 text-white text-xs placeholder-white/20 outline-none focus:border-indigo-500/40 transition-colors w-56"
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-white/35 text-xs">Coach</span>
                        <Dropdown
                            options={["All Coaches", "Saman Bandara", "Ruwan Jayasinghe"]}
                            value={coachFilter}
                            onChange={setCoachFilter}
                        />
                    </div>
                    <div className="flex items-center gap-1.5">
                        {TIME_FILTERS.map(f => (
                            <button key={f} onClick={() => setTimeFilter(f)}
                                className={`text-xs px-3 py-1.5 rounded-lg transition-all duration-150 ${timeFilter === f ? "bg-indigo-600 text-white font-medium" : "bg-white/5 text-white/40 hover:bg-white/10"}`}>
                                {f}
                            </button>
                        ))}
                    </div>
                </div>

                <p className="text-white/40 text-xs mb-4">
                    Total for selected range: <span className="text-white font-semibold">LKR {total.toLocaleString()}</span>
                    <span className="text-white/20 ml-2">• Showing {filtered.length} of {PT_SESSIONS.length} sessions</span>
                </p>

                <table className="w-full text-xs">
                    <thead>
                        <tr className="border-b border-white/5">
                            {["Admission No", "Member", "Coach", "Time Period", "Price"].map(h => (
                                <th key={h} className="text-left text-white/30 font-medium pb-2.5 pr-4 last:pr-0 whitespace-nowrap">{h}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.length === 0 ? (
                            <tr><td colSpan={5} className="text-white/20 text-center py-6">No sessions found.</td></tr>
                        ) : filtered.map((s, i) => (
                            <tr key={i} className="border-b border-indigo-500/35 last:border-0 hover:bg-white/[0.015] transition-colors cursor-default">
                                <td className="py-2 pr-4 text-indigo-400 whitespace-nowrap">{s.adm}</td>
                                <td className="py-2 pr-4 text-white whitespace-nowrap">{s.name}</td>
                                <td className="py-2 pr-4 text-white/60 whitespace-nowrap">{s.coach}</td>
                                <td className="py-2 pr-4 text-white/45 whitespace-nowrap">{s.period}</td>
                                <td className="py-2 text-white font-semibold whitespace-nowrap">{s.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/5">
                    <p className="text-white/25 text-xs">Showing {filtered.length} of {PT_SESSIONS.length} sessions</p>
                    <div className="flex items-center gap-3 text-xs text-white/25">
                        <button className="hover:text-white/55 transition-colors">Previous</button>
                        <span>Page 1/1</span>
                        <button className="hover:text-white/55 transition-colors">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ── Analytics ─────────────────────────────────────────────────────────────────

function AnalyticsPage({ onToast }) {
    const [timeFilter, setTimeFilter] = useState("Monthly");
    const [subTab, setSubTab] = useState("Financial");
    const TIME_FILTERS = ["Daily", "Weekly", "Monthly", "Quarterly", "Yearly", "Custom Range"];
    const SUB_TABS = ["Financial", "Attendance", "Membership", "Reports"];
    const recentTrx = PAYMENTS.slice(0, 4);

    return (
        <div className="flex-1 overflow-y-auto p-6">
            <div className="flex items-start justify-between mb-4">
                <div>
                    <h1 className="text-white text-2xl font-bold">Analytics</h1>
                    <p className="text-indigo-400 text-sm mt-0.5">Unified reporting workspace for finance, attendance, and membership insights.</p>
                </div>
                <button onClick={() => onToast("Data refreshed")} className="flex items-center gap-1.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white/60 text-xs px-3 py-2 rounded-lg transition-colors">
                    <RefreshCw className="w-3.5 h-3.5" /> Refresh
                </button>
            </div>

            <div className="bg-[#13141a] border border-white/5 rounded-xl p-4 mb-3">
                <div className="flex items-center gap-2 flex-wrap mb-3">
                    <Filter className="w-3.5 h-3.5 text-white/30" />
                    <span className="text-white/35 text-xs">Analytics Filters</span>
                    {TIME_FILTERS.map(f => (
                        <button key={f} onClick={() => setTimeFilter(f)}
                            className={`text-xs px-3 py-1.5 rounded-lg transition-all duration-150 ${timeFilter === f ? "bg-indigo-600 text-white font-medium" : "bg-white/5 text-white/40 hover:bg-white/10"}`}>
                            {f}
                        </button>
                    ))}
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-white/25 text-xs">Quick actions:</span>
                    {["Current Week", "Current Month", "Current Quarter", "Current Year", "Last 30 Days"].map(q => (
                        <button key={q} onClick={() => onToast(`Range set: ${q}`)}
                            className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-transparent text-white/40 hover:text-white/70 hover:bg-white/10 transition-all">{q}</button>
                    ))}
                </div>
                <p className="text-white/20 text-xs mt-2">Applied range: <span className="text-indigo-400">2026-06-01</span> to <span className="text-indigo-400">2026-06-30</span></p>
            </div>

            <div className="flex gap-2 mb-3">
                {SUB_TABS.map(t => (
                    <button key={t} onClick={() => setSubTab(t)}
                        className={`text-xs px-4 py-2 rounded-lg border transition-all duration-150 ${subTab === t ? "bg-indigo-600 border-indigo-500 text-white font-medium" : "bg-white/[0.03] border-transparent text-white/40 hover:bg-white/8"}`}>
                        {t}
                    </button>
                ))}
            </div>

            {subTab === "Financial" && (
                <div className="bg-[#13141a] border border-white/5 rounded-xl p-5">
                    <p className="text-white text-sm font-semibold text-center mb-4">Financial Analytics</p>
                    <div className="grid grid-cols-4 gap-3 mb-4">
                        {[
                            { label: "Total Revenue",      value: ANALYTICS_DATA.totalRevenue,    Icon: Wallet,     color: "text-indigo-400" },
                            { label: "Active Members",     value: ANALYTICS_DATA.activeMembers,   Icon: Users,      color: "text-green-400"  },
                            { label: "Today's Attendance", value: ANALYTICS_DATA.todayAttendance, Icon: UserCheck,  color: "text-blue-400"   },
                            { label: "New Signups",        value: ANALYTICS_DATA.newSignups,      Icon: TrendingUp, color: "text-indigo-300" },
                        ].map(({ label, value, Icon, color }) => (
                            <div key={label} className="bg-[#0d0e14] border border-white/5 rounded-xl p-3.5">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-white/40 text-xs">{label}</span>
                                    <Icon className={`w-3.5 h-3.5 ${color} opacity-60`} />
                                </div>
                                <p className="text-white text-xl font-bold">{value}</p>
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                        {[["Revenue Split", ANALYTICS_DATA.revenueSplit], ["Payment Methods", ANALYTICS_DATA.paymentMethods]].map(([title, data]) => (
                            <div key={title} className="bg-[#0d0e14] border border-white/5 rounded-xl p-4">
                                <p className="text-white text-xs font-semibold mb-2.5">{title}</p>
                                {Object.entries(data).map(([k, v]) => (
                                    <div key={k} className="flex justify-between items-center py-1.5 border-b border-indigo-500/35 last:border-0">
                                        <span className="text-white/45 text-xs">{k}</span>
                                        <span className="text-white text-xs font-medium">{v}</span>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className="bg-[#0d0e14] border border-white/5 rounded-xl p-4">
                        <p className="text-white text-xs font-semibold mb-2.5">Recent Transactions</p>
                        <table className="w-full text-xs">
                            <thead><tr className="border-b border-white/5">
                                {["Name", "Amount", "Method"].map(h => <th key={h} className="text-left text-white/30 font-medium pb-2 pr-4 last:pr-0">{h}</th>)}
                            </tr></thead>
                            <tbody>
                                {recentTrx.map(t => (
                                    <tr key={t.trx} className="border-b border-indigo-500/35 last:border-0">
                                        <td className="py-2 pr-4 text-white">{t.name}</td>
                                        <td className="py-2 pr-4 text-white font-semibold">{t.amount}</td>
                                        <td className="py-2">
                                            <span className={`px-2 py-0.5 rounded text-[11px] font-medium ${t.method === "Cash" ? "bg-green-500/10 text-green-400" : t.method === "Card" ? "bg-blue-500/10 text-blue-400" : "bg-indigo-500/10 text-indigo-400"}`}>{t.method}</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
            {subTab !== "Financial" && (
                <div className="bg-[#13141a] border border-white/5 rounded-xl p-10 flex flex-col items-center justify-center text-center">
                    <BarChart3 className="w-10 h-10 text-white/10 mb-3" />
                    <p className="text-white/20 text-sm">{subTab} analytics</p>
                    <p className="text-white/10 text-xs mt-1">Available in the full version</p>
                </div>
            )}
        </div>
    );
}

// ── SMS Broadcast ─────────────────────────────────────────────────────────────

function SMSPage({ onToast }) {
    const [search, setSearch] = useState("");
    const [selected, setSelected] = useState([]);
    const [statusFilter, setStatusFilter] = useState("All");
    const [period, setPeriod] = useState("June");
    const [year, setYear] = useState("2026");
    const [recentlyAttended, setRecentlyAttended] = useState("Any Attendance");
    const [haventAttended, setHaventAttended] = useState("Any Attendance");

    const filtered = MEMBERS.filter(m => {
        const matchSearch = m.name.toLowerCase().includes(search.toLowerCase()) ||
            m.phone.includes(search) || m.id.toLowerCase().includes(search.toLowerCase());
        const matchStatus = statusFilter === "All" || m.status === statusFilter;
        return matchSearch && matchStatus;
    });

    const toggleSelect = id => setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
    const toggleAll = () => setSelected(selected.length === filtered.length ? [] : filtered.map(m => m.id));
    const handleSendBulk = () => {
        if (selected.length === 0) { onToast("Select at least one member"); return; }
        onToast(`SMS sent to ${selected.length} member${selected.length > 1 ? "s" : ""}`);
        setSelected([]);
    };

    return (
        <div className="flex-1 overflow-y-auto p-6">
            <div className="flex items-start justify-between mb-4">
                <div>
                    <h1 className="text-white text-2xl font-bold flex items-center gap-2.5">
                        <Megaphone className="w-6 h-6 text-indigo-400" /> SMS Broadcast
                    </h1>
                    <p className="text-indigo-400 text-sm mt-0.5">Filter members, select recipients, and send bulk SMS instantly.</p>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-white/30 text-xs">Showing {filtered.length} of {MEMBERS.length}</span>
                    <button onClick={handleSendBulk} className="flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium px-4 py-2 rounded-lg transition-colors">
                        <Users className="w-3.5 h-3.5" /> Send Bulk
                    </button>
                </div>
            </div>

            <div className="relative mb-3">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/25" />
                <input type="text" placeholder="Smart Search: name, mobile, NIC, GYM-0001"
                    value={search} onChange={e => setSearch(e.target.value)}
                    className="w-full bg-[#13141a] border border-transparent rounded-xl pl-10 pr-3 py-2.5 text-white text-xs placeholder-white/20 outline-none focus:border-indigo-500/40 transition-colors" />
            </div>

            <div className="bg-[#13141a] border border-white/5 rounded-xl p-4 mb-3">
                <div className="flex flex-wrap items-center gap-2.5 mb-2.5">
                    <div className="flex items-center gap-1.5">
                        <span className="text-white/30 text-xs uppercase tracking-wide">Period</span>
                        <Dropdown options={["June", "May", "April"]} value={period} onChange={setPeriod} />
                    </div>
                    <div className="flex items-center gap-1.5">
                        <span className="text-white/30 text-xs uppercase tracking-wide">Year</span>
                        <Dropdown options={["2026", "2025"]} value={year} onChange={setYear} />
                    </div>
                    <button onClick={() => onToast("Custom range selected")} className="text-xs px-2.5 py-1.5 rounded-md bg-white/5 border border-white/10 text-white/50 hover:bg-white/10 transition-all">Custom Range</button>
                    <div className="flex items-center gap-1.5 ml-2">
                        <span className="text-white/30 text-xs uppercase tracking-wide">Status</span>
                        {["All", "Valid", "Lapsed"].map(s => (
                            <button key={s} onClick={() => setStatusFilter(s)}
                                className={`text-xs px-2.5 py-1 rounded-md transition-all ${statusFilter === s ? "bg-indigo-600 text-white" : "bg-white/5 text-white/40 hover:bg-white/10"}`}>{s}</button>
                        ))}
                    </div>
                </div>
                <div className="flex items-center gap-2.5">
                    <span className="text-white/25 text-xs">Engagement Filters</span>
                    <div className="flex items-center gap-1.5">
                        <span className="text-white/25 text-xs">Recently Attended</span>
                        <Dropdown
                            options={["Any Attendance", "Last 7 Days", "Last 30 Days"]}
                            value={recentlyAttended}
                            onChange={setRecentlyAttended}
                        />
                    </div>
                    <div className="flex items-center gap-1.5">
                        <span className="text-white/25 text-xs">Haven&apos;t Attended</span>
                        <Dropdown
                            options={["Any Attendance", "Over 7 Days", "Over 30 Days"]}
                            value={haventAttended}
                            onChange={setHaventAttended}
                        />
                    </div>
                </div>
            </div>

            <div className="bg-[#13141a] border border-white/5 rounded-xl overflow-hidden">
                <table className="w-full text-xs">
                    <thead>
                        <tr className="border-b border-white/5 bg-white/[0.01]">
                            <th className="w-10 py-2.5 pl-4">
                                <input type="checkbox" checked={selected.length === filtered.length && filtered.length > 0}
                                    onChange={toggleAll} className="w-3.5 h-3.5 accent-indigo-500 cursor-pointer" />
                            </th>
                            {["Member Name", "Mobile Number", "Admission No", "Package", "Start Date", "Package Expiry", "Status", "Action"].map(h => (
                                <th key={h} className="text-left text-white/30 font-medium py-2.5 pr-4 whitespace-nowrap">{h}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.length === 0 ? (
                            <tr><td colSpan={9} className="text-white/20 text-center py-8">No members match the current filters.</td></tr>
                        ) : filtered.map(m => (
                            <tr key={m.id} onClick={() => toggleSelect(m.id)}
                                className={`border-b border-indigo-500/35 last:border-0 cursor-pointer transition-colors ${selected.includes(m.id) ? "bg-indigo-600/8" : "hover:bg-white/[0.015]"}`}>
                                <td className="py-2 pl-4">
                                    <input type="checkbox" checked={selected.includes(m.id)} onChange={() => toggleSelect(m.id)}
                                        className="w-3.5 h-3.5 accent-indigo-500 cursor-pointer" onClick={e => e.stopPropagation()} />
                                </td>
                                <td className="py-2 pr-4 text-white whitespace-nowrap">{m.name}</td>
                                <td className="py-2 pr-4 text-white/50 whitespace-nowrap">{m.phone}</td>
                                <td className="py-2 pr-4 text-indigo-400 whitespace-nowrap">{m.id}</td>
                                <td className="py-2 pr-4 text-white/60 whitespace-nowrap">{m.package}</td>
                                <td className="py-2 pr-4 text-white/40 whitespace-nowrap">{m.start}</td>
                                <td className="py-2 pr-4 text-white/40 whitespace-nowrap">{m.expiry}</td>
                                <td className="py-2 pr-4">
                                    <span className={`px-2 py-0.5 rounded-md text-[11px] font-medium ${m.status === "Valid" ? "bg-green-500/12 text-green-400" : "bg-red-500/12 text-red-400"}`}>{m.status}</span>
                                </td>
                                <td className="py-2">
                                    <button onClick={e => { e.stopPropagation(); onToast(`SMS sent to ${m.name}`); }}
                                        className="text-xs px-2.5 py-1 rounded bg-indigo-600/20 border border-indigo-500/20 text-indigo-300 hover:bg-indigo-600/40 transition-colors">
                                        Send
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {selected.length > 0 && (
                    <div className="px-4 py-3 border-t border-white/5 flex items-center justify-between bg-indigo-600/8">
                        <p className="text-indigo-300 text-xs">{selected.length} member{selected.length > 1 ? "s" : ""} selected</p>
                        <button onClick={handleSendBulk} className="text-xs px-4 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors font-medium">
                            Send to Selected
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

// ── Settings ──────────────────────────────────────────────────────────────────

function SettingsPage({ onToast }) {
    const [subNav, setSubNav] = useState("Application Rules");
    const [theme, setTheme] = useState("Dark");
    const [gracePeriod, setGracePeriod] = useState(0);
    const [regFee, setRegFee] = useState(0);
    const [lapsePenalty, setLapsePenalty] = useState(6);

    const SUB_NAV = [
        { id: "Application Rules",  Icon: Settings },
        { id: "Packages", Icon: Package  },
        { id: "Dev Tools",          Icon: Code2    },
    ];

    return (
        <div className="flex-1 flex overflow-hidden">
            <div className="w-44 min-w-44 border-r border-white/5 bg-[#0f1014] py-3 px-2.5">
                {SUB_NAV.map(({ id, Icon }) => (
                    <button key={id} onClick={() => setSubNav(id)}
                        className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs transition-all mb-0.5 ${subNav === id ? "bg-indigo-600/15 text-indigo-300 border border-indigo-500/20" : "text-white/40 hover:text-white/70 hover:bg-white/5"}`}>
                        <Icon className="w-3.5 h-3.5 flex-shrink-0" />
                        {id}
                    </button>
                ))}
            </div>

            <div className="flex-1 overflow-y-auto p-6">
                <h1 className="text-white text-2xl font-bold mb-0.5">System Settings</h1>
                <p className="text-indigo-400 text-sm mb-1">Configure global application rules and membership packages.</p>
                <p className="text-white/20 text-xs mb-5">App Version: <span className="text-indigo-400">v2.0</span></p>

                {subNav === "Application Rules" && (
                    <div className="space-y-4">
                        {/* Appearance */}
                        <div className="bg-[#13141a] border border-white/5 rounded-xl p-5">
                            <p className="text-white text-sm font-semibold flex items-center gap-2 mb-1">
                                <Monitor className="w-4 h-4 text-indigo-400" /> Appearance
                            </p>
                            <p className="text-white/35 text-xs mb-4">Choose the visual theme for the application interface.</p>
                            <div className="flex bg-[#0d0e14] border border-transparent rounded-xl p-1">
                                {[[" Light", Sun], ["Dark", Moon], ["System", Monitor]].map(([label, Icon]) => (
                                    <button key={label} onClick={() => setTheme(label.trim())}
                                        className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs transition-all ${theme === label.trim() ? "bg-[#1a1b24] text-white font-medium border border-white/10" : "text-white/35 hover:text-white/60"}`}>
                                        <Icon className="w-3.5 h-3.5" /> {label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Global Settings */}
                        <div className="bg-[#13141a] border border-white/5 rounded-xl p-5">
                            <p className="text-white text-sm font-semibold flex items-center gap-2 mb-4">
                                <Settings className="w-4 h-4 text-indigo-400" /> Global Settings
                            </p>
                            <p className="text-white text-xs font-medium mb-0.5">System Grace Period (Days)</p>
                            <p className="text-white/30 text-xs mb-2.5">Number of days a member's portal remains active after their official end date before turning red.</p>
                            <div className="flex items-center gap-2">
                                <input type="number" value={gracePeriod} onChange={e => setGracePeriod(Number(e.target.value))}
                                    className="w-24 bg-[#0d0e14] border border-transparent rounded-lg px-3 py-1.5 text-white text-xs outline-none focus:border-indigo-500/40 transition-colors" />
                                <button onClick={() => setGracePeriod(g => Math.max(0, g - 1))} className="w-7 h-7 rounded-md bg-white/5 border border-transparent text-white/50 hover:bg-white/10 flex items-center justify-center text-base leading-none">−</button>
                                <button onClick={() => setGracePeriod(g => g + 1)} className="w-7 h-7 rounded-md bg-white/5 border border-transparent text-white/50 hover:bg-white/10 flex items-center justify-center text-base leading-none">+</button>
                            </div>
                        </div>

                        {/* Registration Fees */}
                        <div className="bg-[#13141a] border border-white/5 rounded-xl p-5">
                            <p className="text-white text-sm font-semibold flex items-center gap-2 mb-4">
                                <CreditCard className="w-4 h-4 text-indigo-400" /> Registration Fees
                            </p>
                            <p className="text-white/35 text-xs mb-4">Configure one-time registration fees and lapse penalties.</p>
                            <div className="space-y-5">
                                {[
                                    ["Registration Fee (LKR)", "The one-time admission fee charged to new members globally automatically.", regFee, setRegFee, 500, 0],
                                    ["Lapsed Membership Penalty (Months)", "If a member doesn't renew for this many months, they must pay the Registration Fee again.", lapsePenalty, setLapsePenalty, 1, 1],
                                ].map(([label, desc, val, setVal, step, min]) => (
                                    <div key={label}>
                                        <p className="text-white text-xs font-medium mb-0.5">{label}</p>
                                        <p className="text-white/30 text-xs mb-2.5">{desc}</p>
                                        <div className="flex items-center gap-2">
                                            <input type="number" value={val} onChange={e => setVal(Number(e.target.value))}
                                                className="w-28 bg-[#0d0e14] border border-transparent rounded-lg px-3 py-1.5 text-white text-xs outline-none focus:border-indigo-500/40 transition-colors" />
                                            <button onClick={() => setVal(v => Math.max(min, v - step))} className="w-7 h-7 rounded-md bg-white/5 border border-transparent text-white/50 hover:bg-white/10 flex items-center justify-center text-base leading-none">−</button>
                                            <button onClick={() => setVal(v => v + step)} className="w-7 h-7 rounded-md bg-white/5 border border-transparent text-white/50 hover:bg-white/10 flex items-center justify-center text-base leading-none">+</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <button onClick={() => onToast("Settings saved successfully")}
                                className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium px-5 py-2.5 rounded-lg transition-colors">
                                <Save className="w-3.5 h-3.5" /> Save Active Rules
                            </button>
                        </div>
                    </div>
                )}

                {subNav === "Package Management" && (
                    <div className="bg-[#13141a] border border-white/5 rounded-xl p-12 flex flex-col items-center justify-center text-center">
                        <Package className="w-12 h-12 text-white/10 mb-3" />
                        <p className="text-white/20 text-sm">Package Management</p>
                        <p className="text-white/10 text-xs mt-1">Configure membership packages in the full version.</p>
                    </div>
                )}

                {subNav === "Dev Tools" && (
                    <div className="bg-[#13141a] border border-white/5 rounded-xl p-12 flex flex-col items-center justify-center text-center">
                        <Code2 className="w-12 h-12 text-white/10 mb-3" />
                        <p className="text-white/20 text-sm">Developer Tools</p>
                        <p className="text-white/10 text-xs mt-1">Available in the full version.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

// ── Main Demo ─────────────────────────────────────────────────────────────────

export default function GymOSDemo() {
    const [activePage, setActivePage] = useState("dashboard");
    const [toast, setToast] = useState(null);

    return (
        <>
            <style>{`
                .gymos-demo *::-webkit-scrollbar { display: none; }
                .gymos-demo * { scrollbar-width: none; -ms-overflow-style: none; }
                .gymos-demo *:focus { outline: none !important; box-shadow: none !important; }
                .gymos-demo *:focus-visible { outline: none !important; box-shadow: none !important; }
                @keyframes gymos-toast-in {
                    from { opacity: 0; transform: translateX(16px) scale(0.96); }
                    to   { opacity: 1; transform: translateX(0)    scale(1);    }
                }
                @keyframes gymos-toast-progress {
                    from { width: 100%; }
                    to   { width: 0%;   }
                }
            `}</style>
            <div className="gymos-demo relative flex h-[660px] bg-[#0d0e14] rounded-b-xl overflow-hidden select-none">
                {toast && <Toast message={toast} onClose={() => setToast(null)} />}
                <Sidebar active={activePage} setActive={setActivePage} />
                <main className="flex-1 overflow-hidden flex">
                    {activePage === "dashboard" && <DashboardPage  onToast={setToast} />}
                    {activePage === "members"   && <MembersPage    onToast={setToast} />}
                    {activePage === "payments"  && <PaymentsPage   onToast={setToast} />}
                    {activePage === "pttracker" && <PTTrackerPage  onToast={setToast} />}
                    {activePage === "analytics" && <AnalyticsPage  onToast={setToast} />}
                    {activePage === "sms"       && <SMSPage        onToast={setToast} />}
                    {activePage === "settings"  && <SettingsPage   onToast={setToast} />}
                </main>
            </div>
        </>
    );
}
