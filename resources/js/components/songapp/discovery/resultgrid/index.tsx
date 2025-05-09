import React from 'react';
import ResultCard from './result-card';
import type { CoverItem } from '@/types/songapp/cover-item';

interface ResultGridProps {
    items: CoverItem[];
    totalCount: number;
    onLoadMore: () => void;
}

export default function ResultGrid({ items, totalCount = items.length, onLoadMore }: ResultGridProps) {
    return (
        <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-white">Results</h2>
                <span className="text-sm text-gray-400">{totalCount} covers found</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
                {items.map((item, index) => (
                    <ResultCard key={index} item={item} />
                ))}
            </div>

            <button
                onClick={onLoadMore}
                className="bg-transparent text-white font-bold py-2 px-6 rounded-full border border-white hover:bg-white hover:bg-opacity-10 transition-colors w-full mt-6"
            >
                Load More Results
            </button>
        </div>
    );
}
