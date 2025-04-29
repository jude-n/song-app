import { Disc3, Music, Scissors } from 'lucide-react';
import ArtistCard from "./artist-card"
import SavedSection from '@/components/songapp/library/saved-section';
import React from 'react';

export default function SavedItemsView() {
    return (
        <div>

            <div className="flex space-x-4 mb-6">
                <button
                    className="bg-[#1DB954] text-black font-bold py-2 px-6 rounded-full hover:bg-[#1ED760] transition-colors flex items-center">
                    <Music size={16} className="mr-2" />
                    All
                </button>
                <button
                    className="bg-transparent text-white font-bold py-2 px-6 rounded-full border border-white hover:bg-white hover:bg-opacity-10 transition-colors flex items-center">
                    <Disc3 size={16} className="mr-2" />
                    Covers
                </button>
                <button
                    className="bg-transparent text-white font-bold py-2 px-6 rounded-full border border-white hover:bg-white hover:bg-opacity-10 transition-colors flex items-center">
                    <Scissors size={16} className="mr-2" />
                    Samples
                </button>
            </div>
            {/* Saved Covers Section */}
            <SavedSection title="Saved Covers" subtitle="Saved Cover" badgeText="Cover" badgeColor="#1DB954" iconColor="#1DB954" itemType="cover" />

            {/* Saved Samples Section */}
            <SavedSection title="Saved Samples" subtitle="Saved Sample" badgeText="Sample" badgeColor="#AF2896" iconColor="#AF2896" itemType="sample" />


            {/* Favorite Artists */}
            <div>
                <h2 className="text-xl font-bold mb-4">Favorite Artists</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <ArtistCard
                            key={i}
                            name={`Artist Name ${i}`}
                            imageSrc={`/images/round-icons-dj_vJ7FR06U-unsplash.svg?height=96&width=96`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
