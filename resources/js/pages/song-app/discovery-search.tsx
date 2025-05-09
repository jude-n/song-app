import React, { useState } from 'react';
import SongAppLayout from '@/layouts/song-app-layout';
import ModeSelector from '@/components/songapp/mode-selector';
import SearchBar from '@/components/songapp/discovery/search-bar';
import GenreSelect from '@/components/songapp/discovery/filterbar/genre-select';
import EraSelect from '@/components/songapp/discovery/filterbar/era-select';
import SortSelect from '@/components/songapp/discovery/filterbar/sort-select';
import TransformationSlider from '@/components/songapp/discovery/filterbar/transformation-slider';
import ResultGrid from '@/components/songapp/discovery/resultgrid';
import RecommendationGrid from '@/components/songapp/discovery/RecommendationGrid';

import { Filter} from 'lucide-react';
import GenerationSelect from '@/components/songapp/discovery/filterbar/generation';
import { RecommendationItem } from '@/types/songapp/discovery/recommendation-item';

interface CoverItem {
    title: string;
    originalArtist: string;
    coverArtist: string;
    year: string;
    coverYear: string;
    generation: number;
    genres: string[];
    imageSrc?: string;
}

const dummyCovers: CoverItem[] = [
    {
        title: "All Along the Watchtower",
        originalArtist: "Bob Dylan",
        coverArtist: "Jimi Hendrix",
        year: "1968",
        coverYear: "1968",
        generation: 1,
        genres: ["Rock", "Psychedelic"],
    },
    {
        title: "Hurt",
        originalArtist: "Nine Inch Nails",
        coverArtist: "Johnny Cash",
        year: "1994",
        coverYear: "2002",
        generation: 1,
        genres: ["Rock", "Country"],
    },
    {
        title: "Sound of Silence",
        originalArtist: "Simon & Garfunkel",
        coverArtist: "Disturbed",
        year: "1964",
        coverYear: "2015",
        generation: 1,
        genres: ["Rock", "Metal"],
    },
    {
        title: "Knockin' on Heaven's Door",
        originalArtist: "Bob Dylan",
        coverArtist: "Guns N' Roses",
        year: "1973",
        coverYear: "1991",
        generation: 2,
        genres: ["Rock"],
    },
];

const dummyRecommendations: RecommendationItem[] = [
    {
        title: "All Along the Watchtower",
        description: "From Dylan to Hendrix to Dave Matthews",
        generations: 3,
        covers: 12
    },
    {
        title: "Hallelujah",
        description: "Cohen's masterpiece across generations",
        generations: 2,
        covers: 8
    },
    {
        title: "Hurt",
        description: "Nine Inch Nails to Johnny Cash and beyond",
        generations: 2,
        covers: 5
    }
];

export default function DiscoverySearch() {
    const [items, setItems] = useState<CoverItem[]>(dummyCovers);
    const totalCount = 128; // Placeholder total count

    const handleLoadMore = (): void => {
        // TODO: fetch more results from the API and append
        console.log('Load more clicked');
    };
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
                        <GenerationSelect />
                        <TransformationSlider />

                    </div>

                    {/* Result Grid */}
                    <ResultGrid
                        items={items}
                        totalCount={totalCount}
                        onLoadMore={handleLoadMore}
                    />


                    {/* Recommendation Grid */}
                    <RecommendationGrid items={dummyRecommendations} />
                </div>
            </div>
        </SongAppLayout>
    )
}
