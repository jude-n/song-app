import * as React from 'react';
import {
    Home,
    Library,
    Search,
    User,
} from "lucide-react"
import { Link, usePage } from '@inertiajs/react';
import NavItem from '@/components/ui/songapp/navigation-menu';

export function Header() {
    const { auth } = usePage().props;
    return (
        <header className="bg-black p-4 flex items-center justify-between">
            <div className="flex items-center space-x-6">
                <h1 className="text-2xl font-bold text-white">MusicEvolution</h1>
                <nav className="flex space-x-2">
                    <button
                        className="px-3 py-2 text-sm font-medium text-white rounded-full flex items-center">
                        <NavItem href="/" icon={Home} label="Home" iconSize={18} iconClass="text-[#1DB954]" />
                    </button>
                    <button
                        className="px-3 py-2 text-sm font-medium text-gray-400 hover:text-white rounded-full flex items-center">
                        <NavItem href="/discover" icon={Search} label="Search" iconSize={18} />

                    </button>
                    <button
                        className="px-3 py-2 text-sm font-medium text-gray-400 hover:text-white rounded-full flex items-center">
                        <NavItem href="/library" icon={Library} label="Library" iconSize={16} />
                    </button>
                </nav>
            </div>
            <div className="flex items-center space-x-4">
                {auth?.user ? (
                    <Link href="/profile" className="text-white hover:text-[#1DB954] cursor-pointer">
                        <User size={28} />
                    </Link>
                ) : (
                    <>
                        <Link
                            href="/register"
                            className="bg-[#1DB954] text-black font-bold py-2 px-6 rounded-full hover:bg-[#1ED760] transition-colors"
                        >
                            Sign Up
                        </Link>
                        <Link
                            href="/login"
                            className="bg-transparent text-white font-bold py-2 px-6 rounded-full border border-white hover:bg-white hover:bg-opacity-10 transition-colors"
                        >
                            Log In
                        </Link>
                    </>
                )}
            </div>
        </header>
    );
}
