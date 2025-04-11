import * as React from 'react';
import {
    Home,
    Library,
    Search,
} from "lucide-react"
export function Header() {
    return (
        <header className="bg-black p-4 flex items-center justify-between">
            <div className="flex items-center space-x-6">
                <h1 className="text-2xl font-bold text-white">MusicEvolution</h1>
                <nav className="flex space-x-2">
                    <button
                        className="px-3 py-2 text-sm font-medium text-white bg-[#282828] rounded-full flex items-center">
                        <Home size={16} className="mr-2" />
                        Home
                    </button>
                    <button
                        className="px-3 py-2 text-sm font-medium text-gray-400 hover:text-white rounded-full flex items-center">
                        <Search size={16} className="mr-2" />
                        Search
                    </button>
                    <button
                        className="px-3 py-2 text-sm font-medium text-gray-400 hover:text-white rounded-full flex items-center">
                        <Library size={16} className="mr-2" />
                        Library
                    </button>
                </nav>
            </div>
            <div className="flex items-center space-x-4">
                <button
                    className="bg-[#1DB954] text-black font-bold py-2 px-6 rounded-full hover:bg-[#1ED760] transition-colors">
                    Sign Up
                </button>
                <button
                    className="bg-transparent text-white font-bold py-2 px-6 rounded-full border border-white hover:bg-white hover:bg-opacity-10 transition-colors">
                    Log In
                </button>
            </div>
        </header>
    );
}
