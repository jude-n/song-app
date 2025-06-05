import React from 'react';
import { ChevronLeft } from 'lucide-react';
import SongAppLayout from '@/layouts/song-app-layout';
import { Link } from '@inertiajs/react';
import PlaylistDetails from '@/components/songapp/library/createplaylist/playlist-details';
import SongSearch from '@/components/songapp/library/createplaylist/song-search';
import RecommendedSongs from '@/components/songapp/library/createplaylist/recommended-songs';
import PopularCovers from '@/components/songapp/library/createplaylist/popular-covers';


export default function CreatePlaylist() {
    return (
        <SongAppLayout title="Library">
            <div className="container mx-auto px-8 py-8">
                <div className="flex items-center mb-6">
                    <Link href="/library" className="mr-4 text-gray-400 hover:text-white">
                        <ChevronLeft size={24} />
                    </Link>
                    <h1 className="text-3xl font-bold">Create New Playlist</h1>
                </div>
                <div className="grid grid-cols-3 gap-8">
                    <PlaylistDetails />
                    <div className="col-span-2 space-y-8">
                        <SongSearch />
                        <RecommendedSongs />
                        <PopularCovers />
                    </div>
                </div>
            </div>
        </SongAppLayout>
    );
}
