import * as React from 'react';
import {
    Home,
    Library,
    Search,
    User,
    Bell,
    ChevronDown,
} from "lucide-react"
import { Link, usePage } from '@inertiajs/react';
import NavItem from '@/components/ui/songapp/navigation-menu';
import { type User as UserType } from '@/types';

interface HeaderPageProps {
    auth: {
        user?: UserType | null;
    };
    [key: string]: unknown;
}

export function Header() {
    const { auth } = usePage<HeaderPageProps>().props;
    return (
        <header className="bg-gradient-to-b from-black/90 to-black/70 backdrop-blur-md sticky top-0 z-50 px-6 py-3 flex items-center justify-between border-b border-white/5">
            <div className="flex items-center gap-8">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#1DB954] to-[#169c46] rounded-xl flex items-center justify-center shadow-lg shadow-[#1DB954]/20 group-hover:shadow-[#1DB954]/40 transition-shadow">
                        <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                    </div>
                    <span className="text-xl font-bold text-white">MusicEvolution</span>
                </Link>

                {/* Navigation */}
                <nav className="flex items-center gap-1">
                    <NavItem
                        href="/"
                        icon={Home}
                        label="Home"
                        iconSize={18}
                        iconClass="text-[#1DB954]"
                    />
                    <NavItem
                        href="/discover"
                        icon={Search}
                        label="Search"
                        iconSize={18}
                    />
                    <NavItem
                        href="/library"
                        icon={Library}
                        label="Library"
                        iconSize={16}
                    />
                </nav>
            </div>

            <div className="flex items-center gap-3">
                {auth?.user ? (
                    <div className="flex items-center gap-4">
                        {/* Notification Bell */}
                        <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
                            <Bell size={20} />
                            <span className="absolute top-1 right-1 w-2 h-2 bg-[#1DB954] rounded-full"></span>
                        </button>

                        {/* User Profile */}
                        <Link
                            href="/profile"
                            className="flex items-center gap-2 bg-[#282828] hover:bg-[#333333] text-white py-1.5 px-3 rounded-full transition-colors group"
                        >
                            <div className="w-7 h-7 bg-gradient-to-br from-[#AF2896] to-[#1DB954] rounded-full flex items-center justify-center">
                                <User size={16} />
                            </div>
                            <ChevronDown size={16} className="text-gray-400 group-hover:text-white transition-colors" />
                        </Link>
                    </div>
                ) : (
                    <div className="flex items-center gap-3">
                        <Link
                            href="/register"
                            className="bg-white text-black font-semibold py-2.5 px-6 rounded-full hover:bg-gray-100 hover:scale-105 transition-all shadow-lg"
                        >
                            Sign Up
                        </Link>
                        <Link
                            href="/login"
                            className="text-gray-300 hover:text-white font-semibold py-2.5 px-6 transition-colors"
                        >
                            Log In
                        </Link>
                    </div>
                )}
            </div>
        </header>
    );
}
