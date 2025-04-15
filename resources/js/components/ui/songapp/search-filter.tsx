import React from 'react';
import { Search } from 'lucide-react';

export default function SearchFilter() {
    return (
        <section>
            <div className="relative max-w-2xl">
                {/*White background with 10% opacity*/}
                <input
                    type="search"
                    placeholder="Search for songs, artists, or genres"
                    className="w-full bg-white/10 backdrop-blur-md text-white placeholder:text-gray-300 pl-12 pr-4 py-3 rounded-full border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#1DB954] shadow-sm"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-300" size={20} />
            </div>
        </section>
    )
}
