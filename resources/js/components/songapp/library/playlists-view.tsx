import { Plus, Disc3, Scissors, Music } from "lucide-react"
import PlaylistCard from "./playlist-card"

export default function PlaylistsView() {
    const playlists = [
        { name: "Best Cover Songs", count: 24, icon: <Disc3 size={24} /> },
        { name: "Hip Hop Samples", count: 18, icon: <Scissors size={24} /> },
        { name: "Evolution of Rock", count: 32, icon: <Music size={24} /> },
        { name: "Acoustic Covers", count: 15, icon: <Disc3 size={24} /> },
        { name: "Electronic Samples", count: 27, icon: <Scissors size={24} /> },
        { name: "Jazz Transformations", count: 12, icon: <Music size={24} /> },
        { name: "90s Reimagined", count: 20, icon: <Disc3 size={24} /> },
    ]

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {/* Create Playlist Card */}
                <div className="bg-gradient-to-br from-[#2E77D0] to-[#1DB954] rounded-lg p-4 cursor-pointer hover:opacity-90 transition-opacity">
                    <div className="flex items-center justify-center h-40">
                        <Plus size={48} className="text-white" />
                    </div>
                    <h3 className="font-bold text-lg mt-2">Create New Playlist</h3>
                    <p className="text-sm text-white text-opacity-80">Start collecting your favorite music</p>
                </div>

                {/* Existing Playlists */}
                {playlists.map((playlist, i) => (
                    <PlaylistCard key={i} name={playlist.name} songCount={playlist.count} icon={playlist.icon} />
                ))}
            </div>
        </div>
    )
}
