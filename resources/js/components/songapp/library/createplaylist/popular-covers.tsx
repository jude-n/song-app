import React from 'react';
import { Plus } from 'lucide-react';

const covers = [
    { title: 'Zombie', artist: 'Bad Wolves', original: 'The Cranberries', generation: 1 },
    /* ...more items */
];

export default function PopularCovers() {
    return (
        <div className="bg-[#181818] rounded-lg p-6">
            <h3 className="text-lg font-bold mb-3">Popular Covers</h3>
            <div className="grid grid-cols-4 gap-4">
                {covers.map((item, i) => (
                    <div key={i} className="bg-[#242424] rounded-lg p-3 hover:bg-[#3E3E3E] cursor-pointer">
                        <div className="relative mb-3">
                            <img src={`/images/cover-${i}.jpg`} alt={item.title} className="w-full aspect-square object-cover rounded-md" />
                            <button className="absolute bottom-2 right-2 bg-[#1DB954] text-black p-1.5 rounded-full opacity-0 group-hover:opacity-100">
                                <Plus size={16} />
                            </button>
                            <div className="absolute top-2 left-2 bg-[#1DB954] text-black text-xs px-2 py-0.5 rounded-full">
                                {item.generation}st Gen
                            </div>
                        </div>
                        <h4 className="font-bold text-sm truncate">{item.title}</h4>
                        <p className="text-xs text-gray-400 truncate">{item.artist}</p>
                        <p className="text-xs text-gray-500 truncate">Original: {item.original}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
