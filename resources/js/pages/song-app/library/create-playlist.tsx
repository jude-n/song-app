import React from 'react';
import { ChevronLeft, Plus, Save, Search, X, ImageIcon, Music } from 'lucide-react';
import SongAppLayout from '@/layouts/song-app-layout';
import { Link } from '@inertiajs/react';


export default function CreatePlaylist() {
    return (
        <SongAppLayout title="Library">

        <div className="container mx-auto px-8 py-8">
            <div className="flex items-center mb-6">
                <Link href="/library/playlists" className="mr-4 text-gray-400 hover:text-white">
                    <ChevronLeft size={24} />
                </Link>
                <h1 className="text-3xl font-bold">Create New Playlist</h1>
            </div>

            <div className="grid grid-cols-3 gap-8">
                {/* Playlist Details */}
                <div className="col-span-1">
                    <div className="bg-[#181818] rounded-lg p-6">
                        <div className="mb-6">
                            <div
                                className="bg-[#282828] rounded-lg aspect-square flex items-center justify-center mb-4 relative group">
                                <div
                                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                                    <button
                                        className="bg-[#1DB954] text-black font-bold py-2 px-4 rounded-full hover:bg-[#1ED760] transition-colors flex items-center">
                                        <ImageIcon size={16} className="mr-2" />
                                        Choose Image
                                    </button>
                                </div>
                                <Music size={64} className="text-gray-500" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="playlist-name" className="block text-sm font-medium text-gray-400 mb-1">
                                    Playlist Name
                                </label>
                                <input
                                    type="text"
                                    id="playlist-name"
                                    placeholder="My Awesome Playlist"
                                    className="w-full bg-[#282828] border border-[#3E3E3E] rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#1DB954] focus:border-transparent"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="playlist-description"
                                       className="block text-sm font-medium text-gray-400 mb-1">
                                    Description (Optional)
                                </label>
                                <textarea
                                    id="playlist-description"
                                    placeholder="Add an optional description"
                                    rows={3}
                                    className="w-full bg-[#282828] border border-[#3E3E3E] rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#1DB954] focus:border-transparent"
                                ></textarea>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">Playlist Type</label>
                                <div className="flex space-x-3">
                                    <label className="flex items-center">
                                        <input type="radio" name="playlist-type" className="mr-2 accent-[#1DB954]"
                                               defaultChecked />
                                        <span className="text-sm">Public</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="radio" name="playlist-type" className="mr-2 accent-[#1DB954]" />
                                        <span className="text-sm">Private</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="flex space-x-3">
                            <Link
                                href="/library/playlists"
                                className="flex-1 bg-transparent border border-white text-white font-bold py-2 px-4 rounded-full hover:bg-white hover:bg-opacity-10 transition-colors flex items-center justify-center"
                            >
                                <X size={16} className="mr-2" />
                                Cancel
                            </Link>
                            <Link
                                href="/library/playlists"
                                className="flex-1 bg-[#1DB954] text-black font-bold py-2 px-4 rounded-full hover:bg-[#1ED760] transition-colors flex items-center justify-center"
                            >
                                <Save size={16} className="mr-2" />
                                Save
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Search and Add Songs */}
                <div className="col-span-2">
                    <div className="bg-[#181818] rounded-lg p-6">
                        <div className="mb-6">
                            <h2 className="text-xl font-bold mb-4">Add Songs to Your Playlist</h2>
                            <div className="relative mb-6">
                                <input
                                    type="search"
                                    placeholder="Search for songs, artists, or albums"
                                    className="bg-[#242424] text-white pl-10 pr-4 py-3 rounded-md text-sm w-full"
                                />
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                        size={18} />
                            </div>

                            {/* Recommended Songs */}
                            <div className="mb-6">
                                <h3 className="text-lg font-bold mb-3">Recommended Songs</h3>
                                <div className="bg-[#242424] rounded-lg overflow-hidden">
                                    <table className="w-full">
                                        <thead className="border-b border-[#3E3E3E]">
                                        <tr>
                                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-400 w-12">#</th>
                                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Title</th>
                                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Artist</th>
                                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Generation</th>
                                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-400 w-24">Duration</th>
                                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-400 w-16">Add</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {[
                                            {
                                                title: "Sound of Silence",
                                                artist: "Disturbed",
                                                original: "Simon & Garfunkel",
                                                generation: 1,
                                                duration: "4:08",
                                            },
                                            {
                                                title: "Hurt",
                                                artist: "Johnny Cash",
                                                original: "Nine Inch Nails",
                                                generation: 1,
                                                duration: "3:38",
                                            },
                                            {
                                                title: "All Along the Watchtower",
                                                artist: "Jimi Hendrix",
                                                original: "Bob Dylan",
                                                generation: 1,
                                                duration: "4:01",
                                            },
                                            {
                                                title: "Knockin' on Heaven's Door",
                                                artist: "Guns N' Roses",
                                                original: "Bob Dylan",
                                                generation: 2,
                                                duration: "5:36",
                                            },
                                            {
                                                title: "Hallelujah",
                                                artist: "Jeff Buckley",
                                                original: "Leonard Cohen",
                                                generation: 1,
                                                duration: "6:53",
                                            },
                                        ].map((item, i) => (
                                            <tr key={i}
                                                className="hover:bg-[#3E3E3E] border-b border-[#3E3E3E] last:border-b-0 group">
                                                <td className="px-4 py-3 text-sm">{i + 1}</td>
                                                <td className="px-4 py-3">
                                                    <div className="flex items-center">
                                                        <img
                                                            src={`/images/round-icons-dj_vJ7FR06U-unsplash.svg?height=40&width=40`}
                                                            alt={item.title}
                                                            className="w-10 h-10 mr-3 rounded"
                                                        />
                                                        <div>
                                                            <h4 className="font-medium">{item.title}</h4>
                                                            {item.original &&
                                                                <p className="text-xs text-gray-400">Original: {item.original}</p>}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-3 text-sm">{item.artist}</td>
                                                <td className="px-4 py-3">
                                                    {item.generation === 1 ? (
                                                        <span
                                                            className="text-xs bg-[#1DB954] text-black px-2 py-0.5 rounded-full">
                                  1st Gen
                                </span>
                                                    ) : (
                                                        <span
                                                            className="text-xs bg-[#E8115B] text-white px-2 py-0.5 rounded-full">
                                  2nd Gen
                                </span>
                                                    )}
                                                </td>
                                                <td className="px-4 py-3 text-sm text-gray-400">{item.duration}</td>
                                                <td className="px-4 py-3 text-center">
                                                    <button
                                                        className="text-gray-400 hover:text-[#1DB954] transition-colors">
                                                        <Plus size={18} />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Popular Covers */}
                            <div>
                                <h3 className="text-lg font-bold mb-3">Popular Covers</h3>
                                <div className="grid grid-cols-4 gap-4">
                                    {[
                                        {
                                            title: "Zombie",
                                            artist: "Bad Wolves",
                                            original: "The Cranberries",
                                            generation: 1
                                        },
                                        {
                                            title: "I Will Always Love You",
                                            artist: "Whitney Houston",
                                            original: "Dolly Parton",
                                            generation: 1,
                                        },
                                        {
                                            title: "Respect",
                                            artist: "Aretha Franklin",
                                            original: "Otis Redding",
                                            generation: 1
                                        },
                                        {
                                            title: "Tainted Love",
                                            artist: "Soft Cell",
                                            original: "Gloria Jones",
                                            generation: 1
                                        },
                                    ].map((item, i) => (
                                        <div
                                            key={i}
                                            className="bg-[#242424] rounded-lg p-3 hover:bg-[#3E3E3E] transition-colors cursor-pointer group"
                                        >
                                            <div className="relative mb-3">
                                                <img
                                                    src={`/images/round-icons-dj_vJ7FR06U-unsplash.svg?height=120&width=120`}
                                                    alt={item.title}
                                                    className="w-full aspect-square object-cover rounded-md"
                                                />
                                                <button
                                                    className="absolute bottom-2 right-2 bg-[#1DB954] text-black p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                                                    <Plus size={16} />
                                                </button>
                                                <div
                                                    className="absolute top-2 left-2 bg-[#1DB954] text-black text-xs px-2 py-0.5 rounded-full">
                                                    1st Gen
                                                </div>
                                            </div>
                                            <h4 className="font-bold text-sm truncate">{item.title}</h4>
                                            <p className="text-xs text-gray-400 truncate">{item.artist}</p>
                                            <p className="text-xs text-gray-500 truncate">Original: {item.original}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </SongAppLayout>
    );
}
