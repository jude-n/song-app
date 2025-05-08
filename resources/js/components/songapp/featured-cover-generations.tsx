import React from 'react';
import { ChevronRight, PlayCircle } from 'lucide-react';

export default function FeaturedCoverGenerations() {
    return (
        <section className="px-8 py-6">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold">Popular Covers by Generation</h3>
                <button className="text-sm text-gray-400 hover:text-white flex items-center">
                    See All <ChevronRight size={16} />
                </button>
            </div>
            <div className="grid grid-cols-3 gap-6">
                {[
                    {
                        title: 'Hurt',
                        artist: 'Johnny Cash',
                        original: 'Nine Inch Nails',
                        generation: 1,
                        image: '/images/round-icons-dj_vJ7FR06U-unsplash.svg?height=200&width=200'
                    },
                    {
                        title: 'I Will Always Love You',
                        artist: 'Whitney Houston',
                        original: 'Dolly Parton',
                        generation: 1,
                        image: '/images/round-icons-dj_vJ7FR06U-unsplash.svg?height=200&width=200'
                    },
                    {
                        title: 'Valerie',
                        artist: 'Amy Winehouse',
                        original: 'The Zutons',
                        generation: 1,
                        image: '/images/round-icons-dj_vJ7FR06U-unsplash.svg?height=200&width=200'
                    },
                    {
                        title: 'Knockin\' on Heaven\'s Door',
                        artist: 'Avril Lavigne',
                        original: 'Bob Dylan',
                        generation: 2,
                        image: '/images/round-icons-dj_vJ7FR06U-unsplash.svg?height=200&width=200'
                    },
                    {
                        title: 'Tainted Love',
                        artist: 'Marilyn Manson',
                        original: 'Gloria Jones',
                        generation: 2,
                        image: '/images/round-icons-dj_vJ7FR06U-unsplash.svg?height=200&width=200'
                    },
                    {
                        title: 'Sweet Dreams',
                        artist: 'Marilyn Manson',
                        original: 'Eurythmics',
                        generation: 1,
                        image: '/images/round-icons-dj_vJ7FR06U-unsplash.svg?height=200&width=200'
                    }
                ].map((item, i) => (
                    <div
                        key={i}
                        className="bg-[#181818] rounded-lg p-3 hover:bg-[#282828] transition-colors cursor-pointer group"
                    >
                        <div className="relative mb-3">
                            <img
                                src={item.image || '/images/round-icons-dj_vJ7FR06U-unsplash.svg'}
                                alt={item.title}
                                className="w-full aspect-square object-cover rounded-md"
                            />
                            <button
                                className="absolute bottom-2 right-2 bg-[#1DB954] text-black p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                                <PlayCircle size={20} />
                            </button>
                            <div
                                className={`absolute top-2 left-2 ${
                                    item.generation === 1
                                        ? 'bg-[#1DB954] text-black'
                                        : item.generation === 2
                                            ? 'bg-[#AF2896] text-white'
                                            : 'bg-[#E1AD01] text-black'
                                } text-xs px-2 py-1 rounded-full`}
                            >
                                {item.generation === 1
                                    ? "1st Generation"
                                    : item.generation === 2
                                        ? "2nd Generation"
                                        : "3rd Generation"}
                            </div>
                        </div>
                        <h4 className="font-bold text-sm truncate">{item.title}</h4>
                        <p className="text-xs text-gray-400 truncate">{item.artist}</p>
                        <div className="mt-2 text-xs text-gray-500 flex items-center">
                            <span>Original by: {item.original}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
