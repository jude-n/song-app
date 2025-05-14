import React from 'react';
import { PlayCircle, Users } from 'lucide-react';

export interface FollowedPlaylist {
    title: string;
    creator: string;
    tracks: number;
    slug: string;
    icon?: string; // optional custom icon URL
}

interface FollowedPlaylistsProps {
    playlists: FollowedPlaylist[];
}

export default function FollowedPlaylists({ playlists }: FollowedPlaylistsProps) {
    return (
        <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Followed Playlists</h2>

            {/* MATCHES “Your Playlists” grid: 1→2→3→4 cols, gap‑6 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {playlists.map((pl, i) => (
                    <a
                        key={i}
                        href={`/library/playlists/followed/${pl.slug}`}
                        className="bg-[#181818] rounded-lg p-3 hover:bg-[#282828] transition-colors cursor-pointer group"
                    >
                        <div className="relative mb-3">
                            <img
                                src={pl.icon ?? `/images/round-icons-dj_vJ7FR06U-unsplash.svg?height=160&width=160`}
                                alt={pl.title}
                                className="w-full aspect-square object-cover rounded-md"
                            />
                            <button className="absolute bottom-2 right-2 bg-[#1DB954] text-black p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                                <PlayCircle size={20} />
                            </button>
                        </div>

                        <h4 className="font-bold text-sm truncate">{pl.title}</h4>
                        <p className="text-xs text-gray-400 truncate">By {pl.creator}</p>
                        <div className="flex justify-between items-center mt-2">
                            <span className="text-xs text-gray-500">{pl.tracks} tracks</span>
                            <Users size={14} className="text-gray-400" />
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}
