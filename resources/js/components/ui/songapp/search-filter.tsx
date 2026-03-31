import React, { useState } from 'react';
import { Search, X, Sliders } from 'lucide-react';

export default function SearchFilter() {
    const [searchValue, setSearchValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    return (
        <section>
            <div className={`
                relative max-w-2xl transition-all duration-300
                ${isFocused ? 'scale-[1.02]' : ''}
            `}>
                <div className={`
                    relative flex items-center
                    bg-white/10 backdrop-blur-lg
                    rounded-2xl border transition-all duration-300
                    ${isFocused
                        ? 'border-[#1DB954] ring-2 ring-[#1DB954]/30 bg-white/15'
                        : 'border-white/20 hover:border-white/40'
                    }
                `}>
                    <Search
                        className={`absolute left-4 transition-colors ${
                            isFocused ? 'text-[#1DB954]' : 'text-gray-300'
                        }`}
                        size={20}
                    />
                    <input
                        type="search"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        placeholder="Search for songs, artists, or genres..."
                        className="w-full bg-transparent text-white placeholder:text-gray-400 pl-12 pr-28 py-4 rounded-2xl focus:outline-none text-base"
                    />

                    <div className="absolute right-3 flex items-center gap-2">
                        {searchValue && (
                            <button
                                onClick={() => setSearchValue('')}
                                className="p-1.5 text-gray-400 hover:text-white transition-colors"
                            >
                                <X size={16} />
                            </button>
                        )}
                        <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-lg text-sm text-gray-300 hover:text-white transition-colors">
                            <Sliders size={14} />
                            <span className="hidden sm:inline">Filters</span>
                        </button>
                    </div>
                </div>

                {/* Quick filters */}
                <div className="flex flex-wrap gap-2 mt-4">
                    {['Covers', 'Samples', 'Originals', 'Trending'].map((filter) => (
                        <button
                            key={filter}
                            className="px-4 py-1.5 bg-white/10 hover:bg-white/20 text-sm text-white rounded-full transition-colors border border-white/10 hover:border-white/20"
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Keyboard shortcut hint */}
                <div className="hidden sm:flex items-center gap-1 mt-3 text-xs text-gray-500">
                    <span>Press</span>
                    <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-gray-400 font-mono">/</kbd>
                    <span>to search</span>
                </div>
            </div>
        </section>
    );
}
