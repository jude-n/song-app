import React from 'react';
import { ChevronRight, PlayCircle, Scissors } from 'lucide-react';

export default function FeaturedSamples() {
    return (
        <section className="px-8 py-6">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold">Popular Samples</h3>
                <button className="text-sm text-gray-400 hover:text-white flex items-center">
                    See All <ChevronRight size={16} />
                </button>
            </div>
            <div className="grid grid-cols-3 gap-6">
                {[
                    {
                        sampled: "Funky Drummer",
                        sampledArtist: "James Brown",
                        sampling: "Fight the Power",
                        samplingArtist: "Public Enemy",
                        image: "/images/round-icons-dj_vJ7FR06U-unsplash.svg?height=200&width=200",
                    },
                    {
                        sampled: "Under Pressure",
                        sampledArtist: "Queen & David Bowie",
                        sampling: "Ice Ice Baby",
                        samplingArtist: "Vanilla Ice",
                        image: "/images/round-icons-dj_vJ7FR06U-unsplash.svg?height=200&width=200",
                    },
                    {
                        sampled: "Harder, Better, Faster, Stronger",
                        sampledArtist: "Daft Punk",
                        sampling: "Stronger",
                        samplingArtist: "Kanye West",
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
                                alt={item.sampled}
                                className="w-full aspect-square object-cover rounded-md"
                            />
                            <button
                                className="absolute bottom-2 right-2 bg-[#AF2896] text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                                <PlayCircle size={24} />
                            </button>
                            <div
                                className="absolute top-2 left-2 bg-[#AF2896] text-white text-xs px-2 py-1 rounded-full">
                                Sample
                            </div>
                        </div>
                        <div className="flex justify-between items-start">
                            <div>
                                <h4 className="font-bold">{item.sampled}</h4>
                                <p className="text-sm text-gray-400">{item.sampledArtist}</p>
                            </div>
                            <Scissors className="text-[#AF2896]" />
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-700">
                            <h4 className="font-bold">{item.sampling}</h4>
                            <p className="text-sm text-gray-400">{item.samplingArtist}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
