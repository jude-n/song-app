import React from 'react';
import RecommendationCard from './recommendationCard';
import { PlayCircle } from 'lucide-react';

export default function RecommendationGrid() {
        return (
            <div>
                <h2 className="text-xl font-bold mb-4">You Might Also Like</h2>
                <div className="grid grid-cols-5 gap-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <RecommendationCard
                            count={i}/>
                    ))}
                </div>
            </div>
        )
}
