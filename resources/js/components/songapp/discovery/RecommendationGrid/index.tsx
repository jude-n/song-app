import React from 'react';
import RecommendationCard from './recommendationCard';
import { RecommendationItem } from '@/types/songapp/discovery/recommendation-item';

interface RecommendationGridProps {
    items: RecommendationItem[];
}
export default function RecommendationGrid({ items }: RecommendationGridProps) {
        return (
            <div>
                <h2 className="text-xl font-bold mb-4">You Might Also Like</h2>
                <div className="grid grid-cols-3 gap-4">
                    {items.map((item, index) => (
                        <RecommendationCard key={index} {...item} />
                    ))}
                </div>
            </div>
        )
}
