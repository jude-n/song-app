import { ChevronRight } from "lucide-react"
import MediaCard from "./media-card"
import ArtistCard from "./artist-card"

export default function SavedItemsView() {
    return (
        <div>
            {/* Saved Covers Section */}
            <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold">Saved Covers</h2>
                    <button className="text-sm text-gray-400 hover:text-white flex items-center">
                        See All <ChevronRight size={16} />
                    </button>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <MediaCard
                            key={i}
                            title={`Saved Cover ${i}`}
                            subtitle="Original • Cover"
                            imageSrc={`/images/round-icons-dj_vJ7FR06U-unsplash.svg?height=160&width=160`}
                            badgeText="Cover"
                            badgeColor="#1DB954"
                            iconColor="#1DB954"
                            savedTime="3d ago"
                        />
                    ))}
                </div>
            </div>

            {/* Saved Samples Section */}
            <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold">Saved Samples</h2>
                    <button className="text-sm text-gray-400 hover:text-white flex items-center">
                        See All <ChevronRight size={16} />
                    </button>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <MediaCard
                            key={i}
                            title={`Saved Sample ${i}`}
                            subtitle="Original • Sampling"
                            imageSrc={`/images/round-icons-dj_vJ7FR06U-unsplash.svg?height=160&width=160`}
                            badgeText="Sample"
                            badgeColor="#AF2896"
                            iconColor="#AF2896"
                            savedTime="1w ago"
                        />
                    ))}
                </div>
            </div>

            {/* Favorite Artists */}
            <div>
                <h2 className="text-xl font-bold mb-4">Favorite Artists</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <ArtistCard
                            key={i}
                            name={`Artist Name ${i}`}
                            imageSrc={`/images/round-icons-dj_vJ7FR06U-unsplash.svg?height=96&width=96`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
