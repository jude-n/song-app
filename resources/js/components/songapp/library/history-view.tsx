import { useState } from "react"
import HistoryItem from "./history-item"
import ListeningStats from '@/components/songapp/library/listening-stats';
import { MediaType } from '@/types/songapp/library';
import {
    Clock,
    FolderHeart,
    Star,
} from "lucide-react"
interface HistoryItemData {
    title: string
    original: string
    cover: string
    type: MediaType
    time: string
}

export default function HistoryView() {
    const [filter, setFilter] = useState("recent")

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
            {/* Filter Buttons */}
            <div className="flex space-x-4 mb-6">
                <button
                    onClick={() => setFilter("recent")}
                    className={`py-2 px-6 rounded-full flex items-center font-bold ${
                        filter === "recent"
                            ? "bg-[#1DB954] text-black"
                            : "bg-transparent text-white border border-white hover:bg-white hover:bg-opacity-10"
                    }`}
                >
                    <Clock size={16} className="mr-2" />
                    Recent
                </button>
                <button
                    onClick={() => setFilter("mostPlayed")}
                    className={`py-2 px-6 rounded-full flex items-center font-bold ${
                        filter === "mostPlayed"
                            ? "bg-[#1DB954] text-black"
                            : "bg-transparent text-white border border-white hover:bg-white hover:bg-opacity-10"
                    }`}
                >
                    <FolderHeart size={16} className="mr-2" />
                    Most Played
                </button>
                <button
                    onClick={() => setFilter("topRated")}
                    className={`py-2 px-6 rounded-full flex items-center font-bold ${
                        filter === "topRated"
                            ? "bg-[#1DB954] text-black"
                            : "bg-transparent text-white border border-white hover:bg-white hover:bg-opacity-10"
                    }`}
                >
                    <Star size={16} className="mr-2" />
                    Top Rated
                </button>
            </div>
            {/* Recently Played Section */}
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

            {/* Listening Stats*/}
            <ListeningStats />

        </div>
    )
}
