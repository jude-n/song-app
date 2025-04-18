import React from 'react';
import SongAppLayout from '@/layouts/song-app-layout';
import ModeSelector from '@/components/songapp/mode-selector';
import SearchBar from '@/components/songapp/discovery/search-bar';
import GenreSelect from '@/components/songapp/discovery/filterbar/genre-select';
import EraSelect from '@/components/songapp/discovery/filterbar/era-select';
import SortSelect from '@/components/songapp/discovery/filterbar/sort-select';
import TransformationSlider from '@/components/songapp/discovery/filterbar/transformation-slider';
import ResultGrid from '@/components/songapp/discovery/resultgrid';

import { Search, Filter, Disc3, Scissors, Music, PlayCircle, Heart } from 'lucide-react';


export default function DiscoverySearch() {
    return (
        <SongAppLayout title="Discovery">
            <div className="bg-[#121212] text-white min-h-screen">
                <div className="container mx-auto px-8 py-8">
                    <h1 className="text-3xl font-bold mb-6">Discover Music Evolution</h1>

                    <div className="flex gap-4 mb-8">
                    <SearchBar />
                        <button className="bg-[#282828] text-white px-4 py-2 rounded-full flex items-center">
                            <Filter size={16} className="mr-2" />
                            Filters
                        </button>
                    </div>

                    {/* Mode Selector */}
                    <ModeSelector />

                    <div className="grid grid-cols-4 gap-6 mb-8">
                        <GenreSelect />
                        <EraSelect />
                        <SortSelect />
                        <TransformationSlider />

                    </div>

                    {/* Result Grid */}
                    <ResultGrid />


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
                                            src={`/images/round-icons-dj_vJ7FR06U-unsplash.svg?height=160&width=160`}
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
