import React from 'react';
import { Search } from 'lucide-react';

export default function SearchBar() {
    return (
            <div className="relative flex-grow">
                <input
                    type="search"
                    placeholder="Search for songs, artists, or albums"
                    className="w-full bg-[#242424] text-white pl-12 pr-4 py-3 rounded-full border border-white border-opacity-10 focus:outline-none focus:ring-2 focus:ring-[#1DB954]"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
    );
}
