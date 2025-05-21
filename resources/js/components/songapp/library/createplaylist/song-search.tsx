import React from 'react';
import { Search } from 'lucide-react';

export default function SongSearch() {
    return (
        <div className="bg-[#181818] rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Add Songs to Your Playlist</h2>
            <div className="relative mb-6">
                <input
                    type="search"
                    placeholder="Search for songs, artists, or albums"
                    className="bg-[#242424] text-white pl-10 pr-4 py-3 rounded-md text-sm w-full"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
        </div>
    );
}
