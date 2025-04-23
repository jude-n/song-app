import HistoryItem from "./history-item"
import { MediaType } from '@/types/songapp/library';

interface HistoryItemData {
    title: string
    original: string
    cover: string
    type: MediaType
    time: string
}

export default function HistoryView() {
    const recentlyPlayed: HistoryItemData[] = [
        {
            title: "Sound of Silence",
            original: "Simon & Garfunkel",
            cover: "Disturbed",
            type: "cover",
            time: "3:45",
        },
        {
            title: "Harder, Better, Faster, Stronger",
            original: "Daft Punk",
            cover: "Kanye West",
            type: "sample",
            time: "5:12",
        },
        {
            title: "Nothing Compares 2 U",
            original: "Prince",
            cover: "Sinéad O'Connor",
            type: "cover",
            time: "4:10",
        },
        {
            title: "Funky Drummer",
            original: "James Brown",
            cover: "Public Enemy",
            type: "sample",
            time: "3:30",
        },
        {
            title: "Hurt",
            original: "Nine Inch Nails",
            cover: "Johnny Cash",
            type: "cover",
            time: "3:38",
        },
    ]

    const genres = [
        { name: "Rock", percentage: 35 },
        { name: "Hip Hop", percentage: 25 },
        { name: "Electronic", percentage: 20 },
        { name: "Pop", percentage: 15 },
        { name: "Jazz", percentage: 5 },
    ]

    return (
        <div>
            <div className="bg-[#181818] rounded-lg p-4 mb-8">
                <h2 className="text-xl font-bold mb-4">Recently Played</h2>
                <div className="space-y-2">
                    {recentlyPlayed.map((item, i) => (
                        <HistoryItem
                            key={i}
                            title={item.title}
                            original={item.original}
                            cover={item.cover}
                            type={item.type}
                            time={item.time}
                        />
                    ))}
                </div>
            </div>

            <div className="bg-[#181818] rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold">Listening Stats</h2>
                    <select className="bg-[#282828] text-white border border-[#3E3E3E] rounded-md p-1 text-sm">
                        <option>Last 7 Days</option>
                        <option>Last 30 Days</option>
                        <option>Last 90 Days</option>
                        <option>All Time</option>
                    </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="text-lg font-medium mb-3">Top Genres</h3>
                        <div className="space-y-2">
                            {genres.map((genre, i) => (
                                <div key={i} className="flex items-center">
                                    <span className="w-24 text-sm">{genre.name}</span>
                                    <div className="h-2 bg-[#3E3E3E] rounded-full flex-grow">
                                        <div className="h-2 bg-[#1DB954] rounded-full" style={{ width: `${genre.percentage}%` }}></div>
                                    </div>
                                    <span className="w-10 text-right text-sm text-gray-400">{genre.percentage}%</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-medium mb-3">Covers vs. Samples</h3>
                        <div className="flex items-center justify-center h-40">
                            <div className="relative w-40 h-40">
                                <div
                                    className="absolute inset-0 bg-[#1DB954] rounded-full"
                                    style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
                                ></div>
                                <div
                                    className="absolute inset-0 bg-[#AF2896] rounded-full"
                                    style={{ clipPath: "polygon(50% 50%, 100% 0, 100% 100%)" }}
                                ></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="bg-[#181818] w-24 h-24 rounded-full flex items-center justify-center flex-col">
                                        <span className="text-xs text-gray-400">Total</span>
                                        <span className="text-xl font-bold">127</span>
                                    </div>
                                </div>
                                <div className="absolute top-4 right-0 text-sm font-medium">
                                    <span className="text-[#AF2896]">Samples</span>
                                    <span className="text-gray-400 ml-2">35%</span>
                                </div>
                                <div className="absolute bottom-4 left-0 text-sm font-medium">
                                    <span className="text-[#1DB954]">Covers</span>
                                    <span className="text-gray-400 ml-2">65%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
