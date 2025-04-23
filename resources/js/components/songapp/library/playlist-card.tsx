import type { ReactNode } from "react"
import { PlayCircle } from "lucide-react"

interface PlaylistCardProps {
    name: string
    songCount: number
    icon: ReactNode
}

export default function PlaylistCard({ name, songCount, icon }: PlaylistCardProps) {
    return (
        <div className="bg-[#181818] rounded-lg p-4 hover:bg-[#282828] transition-colors cursor-pointer group">
            <div className="relative mb-4">
                <div className="bg-[#282828] h-40 rounded-md flex items-center justify-center">{icon}</div>
                <button className="absolute bottom-2 right-2 bg-[#1DB954] text-black p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                    <PlayCircle size={24} />
                </button>
            </div>
            <h3 className="font-bold text-lg">{name}</h3>
            <p className="text-sm text-gray-400">{songCount} songs</p>
        </div>
    )
}
