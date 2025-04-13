import React from 'react';
import { ChevronRight, Disc3, PlayCircle } from 'lucide-react';

export default function FeaturedCovers() {
    return (
        <section className="px-8 py-6">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold">Featured Cover Comparisons</h3>
                <button className="text-sm text-gray-400 hover:text-white flex items-center">
                    See All
                    <ChevronRight size={16} />
                </button>
            </div>
            <div className="grid grid-cols-3 gap-6">
                {[
                    {
                        original: "Hallelujah",
                        originalArtist: "Leonard Cohen",
                        cover: "Hallelujah",
                        coverArtist: "Jeff Buckley",
                        image: "/images/round-icons-dj_vJ7FR06U-unsplash.svg?height=200&width=200",
                    },
                    {
                        original: "Nothing Compares 2 U",
                        originalArtist: "Prince",
                        cover: "Nothing Compares 2 U",
                        coverArtist: "Sinéad O'Connor",
                        image: "/images/round-icons-dj_vJ7FR06U-unsplash.svg?height=200&width=200",
                    },
                    {
                        original: "Hurt",
                        originalArtist: "Nine Inch Nails",
                        cover: "Hurt",
                        coverArtist: "Johnny Cash",
                        image: "/images/round-icons-dj_vJ7FR06U-unsplash.svg?height=200&width=200",
                    },
                ].map((item, i) => (
                    <div
                        key={i}
                        className="bg-[#181818] rounded-lg p-4 hover:bg-[#282828] transition-colors cursor-pointer group"
                    >
                        <div className="relative mb-4">
                            <img
                                src={item.image || "/placeholder.svg"}
                                alt={item.original}
                                className="w-full aspect-square object-cover rounded-md"
                            />
                            <button
                                className="absolute bottom-2 right-2 bg-[#1DB954] text-black p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                                <PlayCircle size={24} />
                            </button>
                            <div
                                className="absolute top-2 left-2 bg-[#1DB954] text-black text-xs px-2 py-1 rounded-full">
                                Cover
                            </div>
                        </div>
                        <div className="flex justify-between items-start">
                            <div>
                                <h4 className="font-bold">{item.original}</h4>
                                <p className="text-sm text-gray-400">{item.originalArtist}</p>
                            </div>
                            <Disc3 className="text-[#1DB954]" />
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-700">
                            <h4 className="font-bold">{item.cover}</h4>
                            <p className="text-sm text-gray-400">{item.coverArtist}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
