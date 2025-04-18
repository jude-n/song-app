import React from 'react';
import ResultCard from './result-card';


export default function ResultGrid() {
    return (
        <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Results</h2>
                <span className="text-sm text-gray-400">128 covers found</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                    <ResultCard
                        count={i}
                        songTitle="Song Title"
                        originalSongArtist="Artist"
                        originalSongYear="1975"
                        coverSongArtist="Cover Artist"
                        coverSongYear="2010"
                        songType="Cover"
                        genres={['Rock', 'Pop']}
                        imageSrc="..."
                    />

                ))}
            </div>

            <button
                className="bg-transparent text-white font-bold py-2 px-6 rounded-full border border-white hover:bg-white/10 transition-colors w-full mt-6 cursor-pointer">
                Load More Results
            </button>
        </div>
    );
}
