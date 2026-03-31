import React from 'react';
import { ChevronRight, Disc3, PlayCircle, GitBranch, ArrowRight, TrendingUp } from 'lucide-react';

export default function FeaturedCoverEvolutions() {
    const coverData = [
        {
            original: "All Along the Watchtower",
            originalArtist: "Bob Dylan",
            year: 1967,
            generations: 3,
            covers: 12,
            trending: true,
            image: "/images/round-icons-dj_vJ7FR06U-unsplash.svg?height=200&width=200",
        },
        {
            original: "Hallelujah",
            originalArtist: "Leonard Cohen",
            year: 1984,
            generations: 2,
            covers: 8,
            trending: false,
            image: "/images/round-icons-dj_vJ7FR06U-unsplash.svg?height=200&width=200",
        },
    ];

    return (
        <section className="px-8 py-8">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="text-2xl font-bold text-white">Featured Cover Evolutions</h3>
                    <p className="text-gray-400 text-sm mt-1">Explore how iconic songs evolved through generations</p>
                </div>
                <button className="text-sm text-[#1DB954] hover:text-[#1ED760] flex items-center gap-1 font-medium transition-colors group">
                    See All
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {coverData.map((item, i) => (
                    <div
                        key={i}
                        className="bg-gradient-to-br from-[#181818] to-[#121212] rounded-2xl p-5 hover:from-[#202020] hover:to-[#181818] transition-all duration-300 cursor-pointer group border border-white/5 hover:border-white/10 hover:shadow-xl hover:shadow-black/20"
                    >
                        <div className="flex gap-5">
                            <div className="relative flex-shrink-0">
                                <img
                                    src={item.image || "/placeholder.svg"}
                                    alt={item.original}
                                    className="w-36 h-36 object-cover rounded-xl shadow-lg"
                                />
                                <button
                                    className="absolute bottom-3 right-3 bg-[#1DB954] text-black p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg hover:scale-110 hover:bg-[#1ED760]">
                                    <PlayCircle size={22} />
                                </button>
                                <div
                                    className="absolute top-3 left-3 bg-[#2E77D0] text-white text-xs font-medium px-2.5 py-1 rounded-full shadow-lg">
                                    Original
                                </div>
                                {item.trending && (
                                    <div className="absolute top-3 right-3 bg-orange-500 text-white p-1.5 rounded-full shadow-lg">
                                        <TrendingUp size={12} />
                                    </div>
                                )}
                            </div>

                            <div className="flex-1 min-w-0">
                                <h4 className="font-bold text-lg text-white truncate">{item.original}</h4>
                                <p className="text-sm text-gray-400 mb-1">{item.originalArtist}</p>
                                <p className="text-xs text-gray-500 mb-4">{item.year}</p>

                                <div className="space-y-2.5">
                                    <div className="flex items-center gap-3">
                                        <div className="relative">
                                            <div className="w-3 h-3 bg-[#1DB954] rounded-full"></div>
                                            <div className="absolute inset-0 bg-[#1DB954] rounded-full animate-ping opacity-25"></div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-center mb-1">
                                                <span className="text-xs text-gray-400">1st Generation</span>
                                                <span className="text-xs font-medium text-white">{Math.floor(item.covers / 2)} covers</span>
                                            </div>
                                            <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                                                <div className="h-full bg-[#1DB954] rounded-full" style={{ width: '60%' }}></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 bg-[#AF2896] rounded-full"></div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-center mb-1">
                                                <span className="text-xs text-gray-400">2nd Generation</span>
                                                <span className="text-xs font-medium text-white">{Math.floor(item.covers / 3)} covers</span>
                                            </div>
                                            <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                                                <div className="h-full bg-[#AF2896] rounded-full" style={{ width: '40%' }}></div>
                                            </div>
                                        </div>
                                    </div>

                                    {item.generations > 2 && (
                                        <div className="flex items-center gap-3">
                                            <div className="w-3 h-3 bg-[#E1AD01] rounded-full"></div>
                                            <div className="flex-1">
                                                <div className="flex justify-between items-center mb-1">
                                                    <span className="text-xs text-gray-400">3rd Generation</span>
                                                    <span className="text-xs font-medium text-white">{Math.floor(item.covers / 6)} covers</span>
                                                </div>
                                                <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                                                    <div className="h-full bg-[#E1AD01] rounded-full" style={{ width: '20%' }}></div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="mt-5 pt-4 border-t border-white/5 flex justify-between items-center">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2 text-gray-400">
                                    <GitBranch size={14} />
                                    <span className="text-sm">{item.generations} generations</span>
                                </div>
                                <div className="w-px h-4 bg-gray-700"></div>
                                <div className="flex items-center gap-2 text-gray-400">
                                    <Disc3 size={14} />
                                    <span className="text-sm">{item.covers} total covers</span>
                                </div>
                            </div>
                            <button className="text-xs text-[#1DB954] font-medium hover:underline flex items-center gap-1">
                                View Tree <ChevronRight size={12} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
