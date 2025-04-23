import { Clock, Heart, PlayCircle } from "lucide-react"
import { MediaType } from '@/types/songapp/library';
interface HistoryItemProps {
    title: string
    original: string
    cover: string
    type: MediaType
    time: string
}

export default function HistoryItem({ title, original, cover, type, time }: HistoryItemProps) {
    return (
        <div className="bg-[#242424] rounded-lg p-3 hover:bg-[#2A2A2A] transition-colors cursor-pointer flex items-center">
            <div className="w-10 h-10 flex items-center justify-center text-gray-400 mr-3">
                <Clock size={20} />
            </div>
            <img
                src={`/images/round-icons-dj_vJ7FR06U-unsplash.svg?height=40&width=40`}
                alt={title}
                className="w-10 h-10 rounded-md mr-4"
            />
            <div className="flex-grow min-w-0">
                <div className="flex items-center flex-wrap gap-2">
                    <h4 className="font-bold text-sm truncate">{title}</h4>
                    {type === "cover" ? (
                        <span className="bg-[#1DB954] text-black text-xs px-2 py-0.5 rounded-full">Cover</span>
                    ) : (
                        <span className="bg-[#AF2896] text-white text-xs px-2 py-0.5 rounded-full">Sample</span>
                    )}
                </div>
                <p className="text-xs text-gray-400 truncate">
                    {original} • {cover}
                </p>
            </div>
            <span className="text-xs text-gray-500 mr-4 hidden sm:block">{time}</span>
            <button className="text-gray-400 hover:text-white mr-2">
                <Heart size={16} />
            </button>
            <button className="text-gray-400 hover:text-white">
                <PlayCircle size={20} />
            </button>
        </div>
    )
}
