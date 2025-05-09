import React from 'react';
import { Heart, PlayCircle } from 'lucide-react';
import { CoverItem } from '@/types/songapp/cover-item';
interface ResultCardProps {
    item: CoverItem;
}
export default function ResultCard({item}: ResultCardProps) {
    return (
        <div className="bg-[#181818] rounded-lg p-4 hover:bg-[#282828] transition-colors cursor-pointer group flex">
            <div className="relative mr-4">
                <img
                    src={item.imageSrc || `/images/round-icons-dj_vJ7FR06U-unsplash.svg?height=120&width=120`}
                    alt={`Cover art for ${item.title}`}
                    className="w-24 h-24 object-cover rounded-md"
                />
                <button
                    className="absolute bottom-2 right-2 bg-[#1DB954] text-black p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                    <PlayCircle size={16} />
                </button>
                <div
                    className={`absolute top-2 left-2 text-xs px-2 py-0.5 rounded-full ${
                        item.generation === 1 ? 'bg-[#1DB954] text-black'
                            : item.generation === 2 ? 'bg-[#AF2896] text-white'
                                : 'bg-[#E1AD01] text-black'
                    }`}
                >
                    {item.generation === 1 ? '1st Gen' : item.generation === 2 ? '2nd Gen' : '3rd Gen'}
                </div>
            </div>
            <div className="flex-grow">
                <h3 className="font-bold text-white">{item.title}</h3>
                <div className="flex items-center text-sm text-gray-400 mb-2">
                    <span className="mr-2">Original: {item.originalArtist}</span>
                    <span>{item.year}</span>
                </div>
                <div className="flex items-center text-sm text-gray-400 mb-3">
                    <span className="mr-2">Cover: {item.coverArtist}</span>
                    <span>{item.coverYear}</span>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                        {item.genres.map((genre, j) => (
                            <span
                                key={j}
                                className={`text-xs px-2 py-1 rounded-full text-white ${
                                    j % 2 === 0 ? 'bg-[#2E77D0]' : 'bg-[#AF2896]'
                                }`}
                            >
              {genre}
            </span>
                        ))}
                    </div>
                    <button className="text-gray-400 hover:text-white">
                        <Heart size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
}
