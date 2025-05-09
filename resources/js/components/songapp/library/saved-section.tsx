import React from 'react';
import { ChevronRight } from 'lucide-react';
import MediaCard from '@/components/songapp/library/media-card';
import { SavedItem } from '@/types/songapp/discovery/saved-item';

type SavedSectionProps = {
    title: string;
    seeAllHref: string;
    items: SavedItem[];
    columns?: number;
}
export default function SavedSection({ title, seeAllHref, items, columns = 5}: SavedSectionProps) {

    return (
        <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">{title}</h2>
                {/*<button href={seeLLHref} className="text-sm text-gray-400 hover:text-white flex items-center">*/}
                <button className="text-sm text-gray-400 hover:text-white flex items-center">
                    See All <ChevronRight size={16} />
                </button>
            </div>
            <div className={`grid grid-cols-${columns} gap-4`}>
                {items.map((item, idx) => (
                    <MediaCard key={idx} {...item} />
                ))}
            </div>
        </div>
    )
}
