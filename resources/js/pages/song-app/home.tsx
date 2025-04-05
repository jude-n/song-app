import { ReactNode } from 'react';
import SongAppLayout from '@/layouts/song-app-layout';

export default function Home() {
    return (
        <SongAppLayout title="Home">
            <section className="px-8 pt-12 pb-8 bg-gradient-to-b from-[#2E77D0] to-[#121212]">
                <h2 className="text-5xl font-bold mb-6">Discover Music Evolution</h2>
                <p className="text-xl mb-8 max-w-2xl">
                    Explore how music transforms through covers and samples. Track the journey of songs across genres,
                    eras, and
                    artists.
                </p>
                <div className="relative max-w-2xl">
                    <input
                        type="search"
                        placeholder="Search for songs, artists, or genres"
                        className="w-full bg-white bg-opacity-10 text-white pl-12 pr-4 py-3 rounded-full border border-white border-opacity-20 focus:outline-none focus:ring-2 focus:ring-[#1DB954]"
                    />
                    {/*<Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-300" size={20} />*/}
                </div>
            </section>
        </SongAppLayout>
    );
}
