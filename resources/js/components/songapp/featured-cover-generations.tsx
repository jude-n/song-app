import React from 'react';
import { ArrowRight, PlayCircle, Headphones, Clock } from 'lucide-react';

const coverData = [
    {
        title: 'Hurt',
        artist: 'Johnny Cash',
        original: 'Nine Inch Nails',
        generation: 1,
        duration: '3:38',
        plays: '2.1M',
        image: '/images/round-icons-dj_vJ7FR06U-unsplash.svg?height=200&width=200'
    },
    {
        title: 'I Will Always Love You',
        artist: 'Whitney Houston',
        original: 'Dolly Parton',
        generation: 1,
        duration: '4:31',
        plays: '5.8M',
        image: '/images/round-icons-dj_vJ7FR06U-unsplash.svg?height=200&width=200'
    },
    {
        title: 'Valerie',
        artist: 'Amy Winehouse',
        original: 'The Zutons',
        generation: 1,
        duration: '3:53',
        plays: '3.2M',
        image: '/images/round-icons-dj_vJ7FR06U-unsplash.svg?height=200&width=200'
    },
    {
        title: "Knockin' on Heaven's Door",
        artist: 'Avril Lavigne',
        original: 'Bob Dylan',
        generation: 2,
        duration: '4:12',
        plays: '1.5M',
        image: '/images/round-icons-dj_vJ7FR06U-unsplash.svg?height=200&width=200'
    },
    {
        title: 'Tainted Love',
        artist: 'Marilyn Manson',
        original: 'Gloria Jones',
        generation: 2,
        duration: '4:45',
        plays: '890K',
        image: '/images/round-icons-dj_vJ7FR06U-unsplash.svg?height=200&width=200'
    },
    {
        title: 'Sweet Dreams',
        artist: 'Marilyn Manson',
        original: 'Eurythmics',
        generation: 1,
        duration: '5:20',
        plays: '4.1M',
        image: '/images/round-icons-dj_vJ7FR06U-unsplash.svg?height=200&width=200'
    }
];

const getGenerationStyles = (gen: number) => {
    switch (gen) {
        case 1:
            return {
                bg: 'bg-gradient-to-r from-[#1DB954] to-[#169c46]',
                text: 'text-black',
                label: '1st Gen',
                glow: 'shadow-[#1DB954]/30'
            };
        case 2:
            return {
                bg: 'bg-gradient-to-r from-[#AF2896] to-[#9a2284]',
                text: 'text-white',
                label: '2nd Gen',
                glow: 'shadow-[#AF2896]/30'
            };
        default:
            return {
                bg: 'bg-gradient-to-r from-[#E1AD01] to-[#c99a01]',
                text: 'text-black',
                label: '3rd Gen',
                glow: 'shadow-[#E1AD01]/30'
            };
    }
};

export default function FeaturedCoverGenerations() {
    return (
        <section className="px-8 py-8 bg-gradient-to-b from-transparent to-[#0a0a0a]/50">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="text-2xl font-bold text-white">Popular Covers by Generation</h3>
                    <p className="text-gray-400 text-sm mt-1">Trending covers that defined their era</p>
                </div>
                <button className="text-sm text-[#1DB954] hover:text-[#1ED760] flex items-center gap-1 font-medium transition-colors group">
                    See All
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
                {coverData.map((item, i) => {
                    const genStyle = getGenerationStyles(item.generation);

                    return (
                        <div
                            key={i}
                            className="group cursor-pointer"
                        >
                            <div className="bg-[#181818] rounded-xl p-4 transition-all duration-300 hover:bg-[#282828] hover:shadow-xl hover:shadow-black/30 hover:-translate-y-1">
                                <div className="relative mb-4">
                                    <div className="relative overflow-hidden rounded-lg">
                                        <img
                                            src={item.image || '/images/round-icons-dj_vJ7FR06U-unsplash.svg'}
                                            alt={item.title}
                                            className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>

                                    <button
                                        className="absolute bottom-3 right-3 bg-[#1DB954] text-black p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg hover:scale-110 hover:bg-[#1ED760] transform translate-y-2 group-hover:translate-y-0">
                                        <PlayCircle size={22} />
                                    </button>

                                    <div
                                        className={`absolute top-2 left-2 ${genStyle.bg} ${genStyle.text} text-xs font-semibold px-2.5 py-1 rounded-full shadow-lg ${genStyle.glow}`}
                                    >
                                        {genStyle.label}
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <h4 className="font-bold text-sm text-white truncate group-hover:text-[#1DB954] transition-colors">
                                        {item.title}
                                    </h4>
                                    <p className="text-xs text-gray-400 truncate">{item.artist}</p>
                                </div>

                                <div className="mt-3 pt-3 border-t border-white/5">
                                    <div className="flex items-center justify-between text-xs text-gray-500">
                                        <span className="flex items-center gap-1">
                                            <Headphones size={10} />
                                            {item.plays}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Clock size={10} />
                                            {item.duration}
                                        </span>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-2 truncate">
                                        Original: <span className="text-gray-400">{item.original}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
