import React from 'react';
import SongAppLayout from '@/layouts/song-app-layout';
import ModeSelector from '@/components/songapp/mode-selector';
import SearchBar from '@/components/songapp/discovery/search-bar';
import GenreSelect from '@/components/songapp/discovery/filterbar/genre-select';
import EraSelect from '@/components/songapp/discovery/filterbar/era-select';
import SortSelect from '@/components/songapp/discovery/filterbar/sort-select';
import TransformationSlider from '@/components/songapp/discovery/filterbar/transformation-slider';
import ResultGrid from '@/components/songapp/discovery/resultgrid';
import RecommendationGrid from '@/components/songapp/discovery/RecommendationGrid';

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


                    {/* Recommendation Grid */}
                    <RecommendationGrid />
                </div>
            </div>
        </SongAppLayout>
    )
}
