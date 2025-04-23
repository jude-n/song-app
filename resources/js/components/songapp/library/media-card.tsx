import { Heart, PlayCircle } from "lucide-react"
import { MediaType } from '@/types/songapp/library';

interface MediaCardProps {
    title: string
    subtitle: string
    imageSrc: string
    badgeText: string
    badgeColor: string
    iconColor: string
    savedTime: string
    type?: MediaType // Optional since not all cards might have a type
}

export default function MediaCard({
  title,
  subtitle,
  imageSrc,
  badgeText,
  badgeColor,
  iconColor,
  savedTime,
}: MediaCardProps) {
    return (
        <div className="bg-[#181818] rounded-lg p-3 hover:bg-[#282828] transition-colors cursor-pointer group">
            <div className="relative mb-3">
                <img
                    src={imageSrc || "/placeholder.svg"}
                    alt={title}
                    className="w-full aspect-square object-cover rounded-md"
                />
                <button className="absolute bottom-2 right-2 bg-[#1DB954] text-black p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                    <PlayCircle size={20} />
                </button>
                <div
                    className="absolute top-2 left-2 text-xs px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: badgeColor, color: badgeColor === "#1DB954" ? "black" : "white" }}
                >
                    {badgeText}
                </div>
            </div>
            <h4 className="font-bold text-sm truncate">{title}</h4>
            <p className="text-xs text-gray-400 truncate">{subtitle}</p>
            <div className="flex justify-between items-center mt-2">
                <span className="text-xs text-gray-500">Saved {savedTime}</span>
                <Heart size={14} style={{ color: iconColor }} />
            </div>
        </div>
    )
}
