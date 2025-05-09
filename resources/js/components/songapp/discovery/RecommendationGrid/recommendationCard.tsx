import React from 'react';
import { RecommendationItem } from '@/types/songapp/discovery/recommendation-item';

export default function RecommendationCard({ title, description, generations, covers }: RecommendationItem) {
    return (
        <div className="bg-[#181818] rounded-lg p-4 hover:bg-[#282828] transition-colors cursor-pointer group">
            <h3 className="font-bold text-lg mb-2">{title}</h3>
            <p className="text-sm text-gray-400 mb-4">{description}</p>
            <div className="flex space-x-2 mb-4">
                <div className="w-4 h-4 bg-[#2E77D0] rounded-full"></div>
                <div className="w-4 h-4 bg-[#1DB954] rounded-full"></div>
                {generations > 1 && <div className="w-4 h-4 bg-[#AF2896] rounded-full"></div>}
                {generations > 2 && <div className="w-4 h-4 bg-[#E1AD01] rounded-full"></div>}
            </div>
            <div className="flex justify-between text-sm">
                <span>{generations} generations</span>
                <span>{covers} total covers</span>
            </div>
        </div>
    )
}
