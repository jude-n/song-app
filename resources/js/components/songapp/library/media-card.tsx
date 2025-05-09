import { Heart, PlayCircle } from "lucide-react"
import { SavedItem } from '@/types/songapp/discovery/saved-item';



export default function MediaCard({
                                      title,
                                      artist,
                                      original,
                                      generation,
                                      slug,
                                      itemType,
                                  savedAgo,
}: SavedItem) {
    const badgeText =
        itemType === 'cover'
            ? generation === 1 ? '1st Gen' : `${generation}nd Gen`
            : 'Sample';
    const badgeClass =
        itemType === 'cover'
            ? generation === 1
                ? 'bg-[#1DB954] text-black'
                : 'bg-[#AF2896] text-white'
            : 'bg-[#AF2896] text-white';
    const playBg = itemType === 'cover' ? '#1DB954' : '#AF2896';
    const heartColor = itemType === 'cover' ? '#1DB954' : '#AF2896';

    return (
        <a
            href={`/comparison/${slug}`}
            className="bg-[#181818] rounded-lg p-3 hover:bg-[#282828] transition-colors group"
        >
            <div className="relative mb-3">
                <img
                    src={`/images/round-icons-dj_vJ7FR06U-unsplash.svg?height=160&width=160`}
                    alt={title}
                    className="w-full aspect-square object-cover rounded-md"
                />
                <button
                    className="absolute bottom-2 right-2 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                    style={{ backgroundColor: playBg }}
                >
                    <PlayCircle size={20} />
                </button>
                <div className={`absolute top-2 left-2 text-xs px-2 py-0.5 rounded-full ${badgeClass}`}>
                    {badgeText}
                </div>
            </div>
            <h4 className="font-bold text-sm truncate">{title}</h4>
            <p className="text-xs text-gray-400 truncate">{artist}</p>
            <div className="flex justify-between items-center mt-2">
                <span className="text-xs text-gray-500">Saved {savedAgo}</span>
                <Heart size={14} style={{ color: heartColor }} />
            </div>
        </a>
    );
}
