import { Plus, Disc3, Scissors, Music } from "lucide-react"
import PlaylistCard from "./playlist-card"
import FollowedPlaylists, { FollowedPlaylist } from '@/components/songapp/library/followed-playlists';

export default function PlaylistsView() {
    const playlists = [
        { name: "Best Cover Songs", count: 24, createdAt: "2 months ago", icon: <Disc3 size={24} /> },
        { name: "Hip Hop Samples", count: 18, createdAt: "3 weeks ago", icon: <Scissors size={24} /> },
        { name: "Evolution of Rock", count: 32, createdAt: "1 month ago", icon: <Music size={24} /> },
        { name: "Acoustic Covers", count: 15, createdAt: "2 days ago", icon: <Disc3 size={24} /> },
        { name: "Electronic Samples", count: 27, createdAt: "5 months ago", icon: <Scissors size={24} /> },
        { name: "Jazz Transformations", count: 12, createdAt: "1 week ago", icon: <Music size={24} /> },
        { name: "90s Reimagined", count: 20, createdAt: "1 Year ago", icon: <Disc3 size={2} /> },
    ]
    const followed: FollowedPlaylist[] = [
        { title: "Evolution of Hip‑Hop Samples", creator: "MusicEvolution", tracks: 56, slug: "hip-hop-samples" },
        { title: "Iconic Covers Through Decades", creator: "Spotify", tracks: 78, slug: "iconic-covers" },
        { title: "Reimagined Classics", creator: "CoverLovers", tracks: 42, slug: "reimagined-classics" },
        { title: "From Original to Cover", creator: "MusicHistory", tracks: 35, slug: "original-to-cover" },
        { title: "Generation Spanning Hits", creator: "MusicEvolution", tracks: 63, slug: "spanning-hits" },
    ];

    return (
        <div className="p-6">
            {/* Your Playlists */}
            <h2 className="text-xl font-bold mb-4">Your Playlists</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
                {/* Create New Playlist Card */}
                <div
                    className="bg-gradient-to-br from-[#2E77D0] to-[#1DB954] rounded-lg p-4 cursor-pointer hover:opacity-90 transition-opacity">
                    <div className="flex items-center justify-center h-40">
                        <Plus size={48} className="text-white" />
                    </div>
                    <h3 className="font-bold text-lg mt-2">Create New Playlist</h3>
                    <p className="text-sm text-white text-opacity-80">
                        Start collecting your favorite music
                    </p>
                </div>

                {/* Existing Playlists */}
                {playlists.map((playlist, i) => (
                    <PlaylistCard
                        key={i}
                        name={playlist.name}
                        songCount={playlist.count}
                        playlistCreatedAt={playlist.createdAt}
                        icon={playlist.icon}
                    />
                ))}
            </div>

            {/* Followed Playlists */}
            <FollowedPlaylists playlists={followed} />
        </div>
    )
}
