import React from 'react';
import { Heart, PlayCircle } from 'lucide-react';

interface ResultCardProps {
    count: number;
    songTitle: string;
    originalSongArtist: string;
    originalSongYear: string;
    coverSongArtist: string;
    coverSongYear: string;
    songType: 'Original' | 'Cover' | 'Sample';
    genres: string[];
    imageSrc: string;
}
export default function ResultCard({ count, songTitle, originalSongArtist, originalSongYear, coverSongArtist, coverSongYear, songType, genres, imageSrc }: ResultCardProps) {
    const fallbackColors = [
        'bg-pink-600',
        'bg-blue-600',
        'bg-green-600',
        'bg-yellow-600',
        'bg-purple-600',
        'bg-red-600',
        'bg-indigo-600',
    ]; // this is for genres. initial thought is to use random colors for genres but if i want consistency i either have to map in the front maybe with enums or set colors in back

    return (
        <div
            key={count}
            className="bg-[#181818] rounded-lg p-4 hover:bg-[#282828] transition-colors cursor-pointer group flex"
        >
            <div className="relative mr-4">
                <img
                    src={`/images/round-icons-dj_vJ7FR06U-unsplash.svg?height=120&width=120`}
                    alt={`Cover ${count}`}
                    className="w-24 h-24 object-cover rounded-md"
                />
                <button
                    className="absolute bottom-2 right-2 bg-[#1DB954] text-black p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                    <PlayCircle size={16} />
                </button>
                <div
                    className="absolute top-2 left-2 bg-[#1DB954] text-black text-xs px-2 py-0.5 rounded-full">
                    Cover
                </div>
            </div>
            <div className="flex-grow">
                <h3 className="font-bold">Song Title {count}</h3>
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
                                                <span
                                                    className="bg-[#2E77D0] text-xs px-2 py-1 rounded-full">Rock</span>
                        <span className="bg-[#AF2896] text-xs px-2 py-1 rounded-full">Pop</span>
                    </div>
                    <button className="text-gray-400 hover:text-white">
                        <Heart size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
}
