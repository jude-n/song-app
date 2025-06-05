import { Disc3, Music, Scissors } from 'lucide-react';
import ArtistCard from "./artist-card"
import SavedSection from '@/components/songapp/library/saved-section';
import React from 'react';
import { SavedItem } from '@/types/songapp/discovery/saved-item';

const savedCovers: SavedItem[] = [
    {
        title: "Hurt",
        artist: "Johnny Cash",
        original: "Nine Inch Nails",
        generation: 1,
        slug: "hurt-johnny-cash",
        itemType: "cover",
        savedAgo: "3d ago",
    },
    {
        title: "Sound of Silence",
        artist: "Disturbed",
        original: "Simon & Garfunkel",
        generation: 1,
        slug: "sound-of-silence-disturbed",
        itemType: "cover",
        savedAgo: "3d ago",
    },
    {
        title: "All Along the Watchtower",
        artist: "Jimi Hendrix",
        original: "Bob Dylan",
        generation: 1,
        slug: "all-along-the-watchtower-jimi-hendrix",
        itemType: "cover",
        savedAgo: "3d ago",
    },
    {
        title: "Knockin' on Heaven's Door",
        artist: "Guns N' Roses",
        original: "Bob Dylan",
        generation: 2,
        slug: "knockin-on-heavens-door-guns-n-roses",
        itemType: "cover",
        savedAgo: "3d ago",
    },
    {
        title: "Hallelujah",
        artist: "Jeff Buckley",
        original: "Leonard Cohen",
        generation: 1,
        slug: "hallelujah-jeff-buckley",
        itemType: "cover",
        savedAgo: "3d ago",
    }
    // …other covers
];

const savedSamples: SavedItem[] = [
    {
        title: "Stronger",
        artist: "Kanye West",
        original: "Daft Punk",
        slug: "stronger-kanye-west",
        itemType: "sample",
        savedAgo: "1w ago",
    },
    {
        title: "Ice Ice Baby",
        artist: "Vanilla Ice",
        original: "Queen & David Bowie",
        slug: "ice-ice-baby-vanilla-ice",
        itemType: "sample",
        savedAgo: "1w ago",
    },
    {
        title: "Mo Money Mo Problems",
        artist: "Notorious B.I.G.",
        original: "Diana Ross",
        slug: "mo-money-mo-problems-notorious-big",
        itemType: "sample",
        savedAgo: "1w ago",
    },
    {
        title: "Bitter Sweet Symphony",
        artist: "The Verve",
        original: "The Rolling Stones",
        slug: "bitter-sweet-symphony-the-verve",
        itemType: "sample",
        savedAgo: "1w ago",
    },
    {
        title: "U Can't Touch This",
        artist: "MC Hammer",
        original: "Rick James",
        slug: "u-cant-touch-this-mc-hammer",
        itemType: "sample",
        savedAgo: "1w ago",
    },
    // …other samples
];
export default function SavedItemsView() {
    return (
        <div>

            <div className="flex space-x-4 mb-6">
                <button
                    className="bg-[#1DB954] text-black font-bold py-2 px-6 rounded-full hover:bg-[#1ED760] cursor-pointer transition-colors flex items-center">
                    <Music size={16} className="mr-2" />
                    All
                </button>
                <button
                    className="bg-transparent text-white font-bold py-2 px-6 rounded-full border border-white hover:bg-[#282828] hover:bg-opacity-10 cursor-pointer transition-colors flex items-center">
                    <Disc3 size={16} className="mr-2" />
                    Covers
                </button>
                <button
                    className="bg-transparent text-white font-bold py-2 px-6 rounded-full border border-white hover:bg-[#282828] hover:bg-opacity-10 cursor-pointer transition-colors flex items-center">
                    <Scissors size={16} className="mr-2" />
                    Samples
                </button>
            </div>
            {/* Saved Covers Section */}
            <SavedSection title="Saved Covers" seeAllHref="/library/covers" items={savedCovers} />

            {/* Saved Samples Section */}
            <SavedSection title="Saved Samples" seeAllHref="/library/samples" items={savedSamples} />


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
