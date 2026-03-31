import React from 'react';
import { ArrowRight, Music, Mic, Guitar, Radio, Headphones, Disc, Piano, Waves } from 'lucide-react';

const genres = [
    {
        name: "Hip Hop",
        gradient: "from-[#E13300] to-[#FF6B35]",
        icon: Mic,
        songs: "12.5K",
        covers: "3.2K"
    },
    {
        name: "Rock",
        gradient: "from-[#8B5CF6] to-[#A78BFA]",
        icon: Guitar,
        songs: "18.3K",
        covers: "5.8K"
    },
    {
        name: "Pop",
        gradient: "from-[#EC4899] to-[#F472B6]",
        icon: Music,
        songs: "25.1K",
        covers: "8.4K"
    },
    {
        name: "Electronic",
        gradient: "from-[#06B6D4] to-[#22D3EE]",
        icon: Radio,
        songs: "9.7K",
        covers: "2.1K"
    },
    {
        name: "R&B",
        gradient: "from-[#8B5A2B] to-[#CD853F]",
        icon: Headphones,
        songs: "14.2K",
        covers: "4.6K"
    },
    {
        name: "Jazz",
        gradient: "from-[#1E3A5F] to-[#3B82F6]",
        icon: Piano,
        songs: "8.9K",
        covers: "2.8K"
    },
    {
        name: "Country",
        gradient: "from-[#CA8A04] to-[#FACC15]",
        icon: Disc,
        songs: "11.4K",
        covers: "3.9K"
    },
    {
        name: "Folk",
        gradient: "from-[#059669] to-[#34D399]",
        icon: Waves,
        songs: "6.8K",
        covers: "1.9K"
    }
];

export default function Genres() {
    return (
        <section className="px-8 py-8 mb-24">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="text-2xl font-bold text-white">Browse by Genre</h3>
                    <p className="text-gray-400 text-sm mt-1">Discover covers across different music styles</p>
                </div>
                <button className="text-sm text-[#1DB954] hover:text-[#1ED760] flex items-center gap-1 font-medium transition-colors group">
                    All Genres
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {genres.map((genre, i) => {
                    const Icon = genre.icon;
                    return (
                        <div
                            key={i}
                            className={`
                                relative bg-gradient-to-br ${genre.gradient}
                                rounded-2xl aspect-[4/3] overflow-hidden
                                cursor-pointer group transition-all duration-300
                                hover:scale-[1.03] hover:shadow-xl hover:shadow-black/30
                            `}
                        >
                            {/* Decorative background pattern */}
                            <div className="absolute inset-0 opacity-20">
                                <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white/20" />
                                <div className="absolute -left-4 -bottom-4 w-24 h-24 rounded-full bg-black/20" />
                            </div>

                            {/* Content */}
                            <div className="relative h-full flex flex-col justify-between p-5">
                                <div className="flex justify-between items-start">
                                    <h4 className="text-xl font-bold text-white drop-shadow-lg">{genre.name}</h4>
                                    <div className="bg-white/20 backdrop-blur-sm p-2 rounded-xl group-hover:bg-white/30 transition-colors">
                                        <Icon size={20} className="text-white" />
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div>
                                        <p className="text-white/70 text-xs">Songs</p>
                                        <p className="text-white font-semibold text-sm">{genre.songs}</p>
                                    </div>
                                    <div>
                                        <p className="text-white/70 text-xs">Covers</p>
                                        <p className="text-white font-semibold text-sm">{genre.covers}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
