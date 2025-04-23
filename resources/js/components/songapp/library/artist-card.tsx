interface ArtistCardProps {
    name: string
    imageSrc: string
}

export default function ArtistCard({ name, imageSrc }: ArtistCardProps) {
    return (
        <div className="bg-[#181818] rounded-lg p-4 hover:bg-[#282828] transition-colors cursor-pointer text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-[#2E77D0] to-[#AF2896] mx-auto mb-3 overflow-hidden">
                <img src={imageSrc || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
            </div>
            <h4 className="font-bold text-sm sm:text-base">{name}</h4>
            <p className="text-xs text-gray-400">Artist</p>
        </div>
    )
}
