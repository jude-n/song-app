import React from 'react';
import { PlayCircle } from 'lucide-react';

interface recommendationCardProps{
    count: number;
    songType: 'Original' | 'Cover' | 'Sample';
}
export default function RecommendationCard({count, songType}: recommendationCardProps) {
    return (
        <div
            key={count}
            className="bg-[#181818] rounded-lg p-3 hover:bg-[#282828] transition-colors cursor-pointer group"
        >
            <div className="relative mb-3">
                <img
                    src={`/images/round-icons-dj_vJ7FR06U-unsplash.svg?height=160&width=160`}
                    alt={`Item ${count}`}
                    className="w-full aspect-square object-cover rounded-md"
                />
                <button
                    className="absolute bottom-2 right-2 bg-[#1DB954] text-black p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                    <PlayCircle size={20} />
                </button>
                {count % 2 === 0 ? (
                    <div
                        className="absolute top-2 left-2 bg-[#1DB954] text-black text-xs px-2 py-0.5 rounded-full">
                        Cover
                    </div>
                ) : (
                    <div
                        className="absolute top-2 left-2 bg-[#AF2896] text-white text-xs px-2 py-0.5 rounded-full">
                        Sample
                    </div>
                )}
            </div>
            <h4 className="font-bold text-sm truncate">Recommended {count}</h4>
            <p className="text-xs text-gray-400 truncate">Original • New Version</p>
        </div>
    )
}
