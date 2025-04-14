import React from 'react';
import SongAppLayout from '@/layouts/song-app-layout';
import ModeSelector from '@/components/songapp/mode-selector';

import { Search, Filter, Disc3, Scissors, Music, PlayCircle, Heart } from 'lucide-react';


export default function DiscoverySearch() {
    return (
        <SongAppLayout title="Discovery">
            <div className="bg-[#121212] text-white min-h-screen">
                <div className="container mx-auto px-8 py-8">
                    <h1 className="text-3xl font-bold mb-6">Discover Music Evolution</h1>

                    <div className="flex gap-4 mb-8">
                        <div className="relative flex-grow">
                            <input
                                type="search"
                                placeholder="Search for songs, artists, or albums"
                                className="w-full bg-[#242424] text-white pl-12 pr-4 py-3 rounded-full border border-white border-opacity-10 focus:outline-none focus:ring-2 focus:ring-[#1DB954]"
                            />
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        </div>
                        <button className="bg-[#282828] text-white px-4 py-2 rounded-full flex items-center">
                            <Filter size={16} className="mr-2" />
                            Filters
                        </button>
                    </div>

                    {/* Mode Selector */}
                    <ModeSelector />

                    <div className="grid grid-cols-4 gap-6 mb-8">
                        <div>
                            <label className="block mb-2 text-sm font-medium">Genre</label>
                            <select className="w-full bg-[#282828] text-white border border-[#3E3E3E] rounded-md p-2">
                                <option>All Genres</option>
                                <option>Rock</option>
                                <option>Pop</option>
                                <option>Hip Hop</option>
                                <option>R&B</option>
                                <option>Country</option>
                                <option>Jazz</option>
                                <option>Electronic</option>
                            </select>
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium">Era</label>
                            <select className="w-full bg-[#282828] text-white border border-[#3E3E3E] rounded-md p-2">
                                <option>All Time</option>
                                <option>2020s</option>
                                <option>2010s</option>
                                <option>2000s</option>
                                <option>1990s</option>
                                <option>1980s</option>
                                <option>1970s</option>
                                <option>1960s</option>
                                <option>Pre-1960s</option>
                            </select>
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium">Sort By</label>
                            <select className="w-full bg-[#282828] text-white border border-[#3E3E3E] rounded-md p-2">
                                <option>Popularity</option>
                                <option>Recently Added</option>
                                <option>Release Date (Newest)</option>
                                <option>Release Date (Oldest)</option>
                                <option>Alphabetical (A-Z)</option>
                            </select>
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium">Transformation Level</label>
                            <div className="w-full h-2 bg-[#3E3E3E] rounded-full mt-4 relative">
                                <div className="h-2 bg-[#1DB954] rounded-full w-3/4"></div>
                                <div
                                    className="absolute h-4 w-4 bg-white rounded-full top-1/2 transform -translate-y-1/2"
                                    style={{ left: "75%" }}
                                ></div>
                            </div>
                            <div className="flex justify-between mt-1 text-xs text-gray-400">
                                <span>Similar</span>
                                <span>Reimagined</span>
                            </div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-bold">Results</h2>
                            <span className="text-sm text-gray-400">128 covers found</span>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div
                                    key={i}
                                    className="bg-[#181818] rounded-lg p-4 hover:bg-[#282828] transition-colors cursor-pointer group flex"
                                >
                                    <div className="relative mr-4">
                                        <img
                                            src={`/placeholder.svg?height=120&width=120`}
                                            alt={`Cover ${i}`}
                                            className="w-24 h-24 object-cover rounded-md"
                                        />
                                        <button className="absolute bottom-2 right-2 bg-[#1DB954] text-black p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                                            <PlayCircle size={16} />
                                        </button>
                                        <div className="absolute top-2 left-2 bg-[#1DB954] text-black text-xs px-2 py-0.5 rounded-full">
                                            Cover
                                        </div>
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="font-bold">Song Title {i}</h3>
                                        <div className="flex items-center text-sm text-gray-400 mb-2">
                                            <span className="mr-2">Original: Artist Name</span>
                                            <span>1975</span>
                                        </div>
                                        <div className="flex items-center text-sm text-gray-400 mb-3">
                                            <span className="mr-2">Cover: Cover Artist</span>
                                            <span>2010</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex space-x-2">
                                                <span className="bg-[#2E77D0] text-xs px-2 py-1 rounded-full">Rock</span>
                                                <span className="bg-[#AF2896] text-xs px-2 py-1 rounded-full">Pop</span>
                                            </div>
                                            <button className="text-gray-400 hover:text-white">
                                                <Heart size={16} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="bg-transparent text-white font-bold py-2 px-6 rounded-full border border-white hover:bg-white hover:bg-opacity-10 transition-colors w-full mt-6">
                            Load More Results
                        </button>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold mb-4">You Might Also Like</h2>
                        <div className="grid grid-cols-5 gap-4">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div
                                    key={i}
                                    className="bg-[#181818] rounded-lg p-3 hover:bg-[#282828] transition-colors cursor-pointer group"
                                >
                                    <div className="relative mb-3">
                                        <img
                                            src={`/placeholder.svg?height=160&width=160`}
                                            alt={`Item ${i}`}
                                            className="w-full aspect-square object-cover rounded-md"
                                        />
                                        <button className="absolute bottom-2 right-2 bg-[#1DB954] text-black p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                                            <PlayCircle size={20} />
                                        </button>
                                        {i % 2 === 0 ? (
                                            <div className="absolute top-2 left-2 bg-[#1DB954] text-black text-xs px-2 py-0.5 rounded-full">
                                                Cover
                                            </div>
                                        ) : (
                                            <div className="absolute top-2 left-2 bg-[#AF2896] text-white text-xs px-2 py-0.5 rounded-full">
                                                Sample
                                            </div>
                                        )}
                                    </div>
                                    <h4 className="font-bold text-sm truncate">Recommended {i}</h4>
                                    <p className="text-xs text-gray-400 truncate">Original • New Version</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </SongAppLayout>
    )
}
