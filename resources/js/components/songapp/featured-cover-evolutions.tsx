import React from 'react';
import { ChevronRight, Disc3, PlayCircle, GitBranch } from 'lucide-react';

export default function FeaturedCoverEvolutions() {
    return (
        <section className="px-8 py-6">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold">Featured Cover Evolutions</h3>
                <button className="text-sm text-gray-400 hover:text-white flex items-center">
                    See All <ChevronRight size={16} />
                </button>
            </div>
            <div className="grid grid-cols-2 gap-6">
                {[
                    {
                        original: "All Along the Watchtower",
                        originalArtist: "Bob Dylan",
                        generations: 3,
                        covers: 12,
                        image: "/images/round-icons-dj_vJ7FR06U-unsplash.svg?height=200&width=200",
                    },
                    {
                        original: "Hallelujah",
                        originalArtist: "Leonard Cohen",
                        generations: 2,
                        covers: 8,
                        image: "/images/round-icons-dj_vJ7FR06U-unsplash.svg?height=200&width=200",
                    },
                ].map((item, i) => (
                    <div
                        key={i}
                        className="bg-[#181818] rounded-lg p-4 hover:bg-[#282828] transition-colors cursor-pointer group"
                    >
                        <div className="flex">
                            <div className="relative mr-4">
                                <img
                                    src={item.image || "/placeholder.svg"}
                                    alt={item.original}
                                    className="w-32 h-32 object-cover rounded-md"
                                />
                                <button
                                    className="absolute bottom-2 right-2 bg-[#1DB954] text-black p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                                    <PlayCircle size={20} />
                                </button>
                                <div
                                    className="absolute top-2 left-2 bg-[#2E77D0] text-white text-xs px-2 py-1 rounded-full">
                                    Original
                                </div>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">{item.original}</h4>
                                <p className="text-sm text-gray-400">{item.originalArtist}</p>
                                <div className="mt-4 space-y-2">
                                    <div className="flex items-center">
                                        <div className="w-4 h-4 bg-[#1DB954] rounded-full mr-2"></div>
                                        <span
                                            className="text-sm">1st Generation: {Math.floor(item.covers / 2)} covers</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-4 h-4 bg-[#AF2896] rounded-full mr-2"></div>
                                        <span
                                            className="text-sm">2nd Generation: {Math.floor(item.covers / 3)} covers</span>
                                    </div>
                                    {item.generations > 2 && (
                                        <div className="flex items-center">
                                            <div className="w-4 h-4 bg-[#E1AD01] rounded-full mr-2"></div>
                                            <span
                                                className="text-sm">3rd Generation: {Math.floor(item.covers / 6)} covers</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-700 flex justify-between items-center">
                            <div className="flex items-center">
                                <GitBranch size={16} className="mr-2 text-gray-400" />
                                <span className="text-sm">{item.generations} generations</span>
                            </div>
                            <div className="flex items-center">
                                <Disc3 size={16} className="mr-2 text-gray-400" />
                                <span className="text-sm">{item.covers} total covers</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
