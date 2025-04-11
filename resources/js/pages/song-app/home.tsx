import SongAppLayout from '@/layouts/song-app-layout';
import {
    Search,
    PlayCircle,
    ChevronRight,
    Disc3,
    Scissors,
    Music,
} from "lucide-react"
export default function Home() {
    return (
        <SongAppLayout title="Home">
            <section className="px-8 pt-12 pb-8 bg-gradient-to-b from-[#2E77D0] to-[#121212]">
                <h2 className="text-5xl font-bold mb-6">Discover Music Evolution</h2>
                <p className="text-xl mb-8 max-w-2xl">
                    Explore how music transforms through covers and samples. Track the journey of songs across genres,
                    eras, and
                    artists.
                </p>
                <div className="relative max-w-2xl">
                    {/*White background with 10% opacity*/}
                    <input
                        type="search"
                        placeholder="Search for songs, artists, or genres"
                        className="w-full bg-white/10 backdrop-blur-md text-white placeholder:text-gray-300 pl-12 pr-4 py-3 rounded-full border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#1DB954] shadow-sm"
                    />
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-300" size={20} />
                </div>

            </section>

            {/* Mode Selector */}
            <section className="px-8 py-6">
                <div className="flex space-x-4 mb-6">
                    <button
                        className="bg-[#1DB954] text-black font-bold py-3 px-8 rounded-lg hover:bg-[#1ED760] transition-colors flex items-center">
                        <Disc3 size={20} className="mr-2" />
                        Covers
                    </button>
                    <button className="bg-[#AF2896] text-white font-bold py-3 px-8 rounded-lg hover:bg-[#C42BA5] transition-colors flex items-center">
                        <Scissors size={20} className="mr-2" />
                        Samples
                    </button>
                    <button className="bg-[#2E77D0] text-white font-bold py-3 px-8 rounded-lg hover:bg-[#4687D6] transition-colors flex items-center">
                        <Music size={20} className="mr-2" />
                        All Music
                    </button>
                </div>
            </section>

            {/* Featured Covers */}
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
                                <button className="absolute bottom-2 right-2 bg-[#1DB954] text-black p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                                    <PlayCircle size={24} />
                                </button>
                                <div className="absolute top-2 left-2 bg-[#1DB954] text-black text-xs px-2 py-1 rounded-full">
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

            {/* Featured Samples */}
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
                                <button className="absolute bottom-2 right-2 bg-[#AF2896] text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                                    <PlayCircle size={24} />
                                </button>
                                <div className="absolute top-2 left-2 bg-[#AF2896] text-white text-xs px-2 py-1 rounded-full">
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

            {/* Browse by Genre */}
            <section className="px-8 py-6">
                <h3 className="text-2xl font-bold mb-4">Browse by Genre</h3>
                <div className="grid grid-cols-4 gap-4">
                    {["Hip Hop", "Rock", "Pop", "Electronic", "R&B", "Jazz", "Country", "Folk"].map((genre, i) => (
                        <div
                            key={i}
                            className="bg-gradient-to-br from-[#2E77D0] to-[#AF2896] rounded-lg aspect-square flex items-center justify-center p-6 cursor-pointer hover:scale-[1.02] transition-transform"
                        >
                            <h4 className="text-xl font-bold text-center">{genre}</h4>
                        </div>
                    ))}
                </div>
            </section>
        </SongAppLayout>
    );
}
