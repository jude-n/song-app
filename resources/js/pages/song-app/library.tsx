import React from 'react';
import { useState } from "react"
import LibraryTabs from '@/components/songapp/library/library-tabs';
import { libraryTabs, getDefaultTabId } from '@/data/library-tabs';
import {
    Heart,
    PlayCircle,
    Clock,
    Plus,
    Music,
    Disc3,
    Scissors,
    ChevronRight,
    FolderHeart,
    Star,
} from "lucide-react"
import SongAppLayout from '@/layouts/song-app-layout';
export default function Library() {
    const [activeTabId, setActiveTabId] = useState<string>(getDefaultTabId())
    // Find the currently active tab
    const activeTab = libraryTabs.find((tab) => tab.id === activeTabId) || libraryTabs[0]
    return (
        <SongAppLayout title="Library">
            <div className="bg-[#121212] text-white min-h-screen">
                <div className="container mx-auto px-8 py-8">
                    <div className="flex items-center justify-between mb-6">
                        <h1 className="text-3xl font-bold">Your Library</h1>
                        <button className="bg-[#1DB954] text-black font-bold py-2 px-6 rounded-full hover:bg-[#1ED760] transition-colors flex items-center">
                            <Plus size={16} className="mr-2" />
                            Create Playlist
                        </button>
                    </div>

                    {/* Library Tabs */}
                    <LibraryTabs tabs={libraryTabs} activeTabId={activeTabId} setActiveTabId={setActiveTabId} />

                    {/* Saved Items View */}
                    {activeTab === "saved" && (
                        <div>
                            {/* Filter Options */}
                            <div className="flex space-x-4 mb-6">
                                <button className="bg-[#1DB954] text-black font-bold py-2 px-6 rounded-full hover:bg-[#1ED760] transition-colors flex items-center">
                                    <Music size={16} className="mr-2" />
                                    All
                                </button>
                                <button className="bg-transparent text-white font-bold py-2 px-6 rounded-full border border-white hover:bg-white hover:bg-opacity-10 transition-colors flex items-center">
                                    <Disc3 size={16} className="mr-2" />
                                    Covers
                                </button>
                                <button className="bg-transparent text-white font-bold py-2 px-6 rounded-full border border-white hover:bg-white hover:bg-opacity-10 transition-colors flex items-center">
                                    <Scissors size={16} className="mr-2" />
                                    Samples
                                </button>
                            </div>

                            {/* Saved Covers Section */}
                            <div className="mb-8">
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-xl font-bold">Saved Covers</h2>
                                    <button className="text-sm text-gray-400 hover:text-white flex items-center">
                                        See All <ChevronRight size={16} />
                                    </button>
                                </div>
                                <div className="grid grid-cols-5 gap-4">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <div
                                            key={i}
                                            className="bg-[#181818] rounded-lg p-3 hover:bg-[#282828] transition-colors cursor-pointer group"
                                        >
                                            <div className="relative mb-3">
                                                <img
                                                    src={`/images/round-icons-dj_vJ7FR06U-unsplash.svg?height=160&width=160`}
                                                    alt={`Cover ${i}`}
                                                    className="w-full aspect-square object-cover rounded-md"
                                                />
                                                <button className="absolute bottom-2 right-2 bg-[#1DB954] text-black p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                                                    <PlayCircle size={20} />
                                                </button>
                                                <div className="absolute top-2 left-2 bg-[#1DB954] text-black text-xs px-2 py-0.5 rounded-full">
                                                    Cover
                                                </div>
                                            </div>
                                            <h4 className="font-bold text-sm truncate">Saved Cover {i}</h4>
                                            <p className="text-xs text-gray-400 truncate">Original • Cover</p>
                                            <div className="flex justify-between items-center mt-2">
                                                <span className="text-xs text-gray-500">Saved 3d ago</span>
                                                <Heart size={14} className="text-[#1DB954]" />
                                            </div>
                                        </div>
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
                                <div className="grid grid-cols-5 gap-4">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <div
                                            key={i}
                                            className="bg-[#181818] rounded-lg p-3 hover:bg-[#282828] transition-colors cursor-pointer group"
                                        >
                                            <div className="relative mb-3">
                                                <img
                                                    src={`/images/round-icons-dj_vJ7FR06U-unsplash.svg?height=160&width=160`}
                                                    alt={`Sample ${i}`}
                                                    className="w-full aspect-square object-cover rounded-md"
                                                />
                                                <button className="absolute bottom-2 right-2 bg-[#AF2896] text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                                                    <PlayCircle size={20} />
                                                </button>
                                                <div className="absolute top-2 left-2 bg-[#AF2896] text-white text-xs px-2 py-0.5 rounded-full">
                                                    Sample
                                                </div>
                                            </div>
                                            <h4 className="font-bold text-sm truncate">Saved Sample {i}</h4>
                                            <p className="text-xs text-gray-400 truncate">Original • Sampling</p>
                                            <div className="flex justify-between items-center mt-2">
                                                <span className="text-xs text-gray-500">Saved 1w ago</span>
                                                <Heart size={14} className="text-[#AF2896]" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Favorite Artists */}
                            <div>
                                <h2 className="text-xl font-bold mb-4">Favorite Artists</h2>
                                <div className="grid grid-cols-6 gap-4">
                                    {[1, 2, 3, 4, 5, 6].map((i) => (
                                        <div
                                            key={i}
                                            className="bg-[#181818] rounded-lg p-4 hover:bg-[#282828] transition-colors cursor-pointer text-center"
                                        >
                                            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#2E77D0] to-[#AF2896] mx-auto mb-3 overflow-hidden">
                                                <img
                                                    src={`/images/round-icons-dj_vJ7FR06U-unsplash.svg?height=96&width=96`}
                                                    alt={`Artist ${i}`}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <h4 className="font-bold">Artist Name {i}</h4>
                                            <p className="text-xs text-gray-400">Artist</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Playlists View */}
                    {activeTab === "playlists" && (
                        <div>
                            <div className="grid grid-cols-4 gap-6">
                                {/* Create Playlist Card */}
                                <div className="bg-gradient-to-br from-[#2E77D0] to-[#1DB954] rounded-lg p-4 cursor-pointer hover:opacity-90 transition-opacity">
                                    <div className="flex items-center justify-center h-40">
                                        <Plus size={48} className="text-white" />
                                    </div>
                                    <h3 className="font-bold text-lg mt-2">Create New Playlist</h3>
                                    <p className="text-sm text-white text-opacity-80">Start collecting your favorite music</p>
                                </div>

                                {/* Existing Playlists */}
                                {[
                                    { name: "Best Cover Songs", count: 24, icon: <Disc3 size={24} /> },
                                    { name: "Hip Hop Samples", count: 18, icon: <Scissors size={24} /> },
                                    { name: "Evolution of Rock", count: 32, icon: <Music size={24} /> },
                                    { name: "Acoustic Covers", count: 15, icon: <Disc3 size={24} /> },
                                    { name: "Electronic Samples", count: 27, icon: <Scissors size={24} /> },
                                    { name: "Jazz Transformations", count: 12, icon: <Music size={24} /> },
                                    { name: "90s Reimagined", count: 20, icon: <Disc3 size={24} /> },
                                ].map((playlist, i) => (
                                    <div
                                        key={i}
                                        className="bg-[#181818] rounded-lg p-4 hover:bg-[#282828] transition-colors cursor-pointer group"
                                    >
                                        <div className="relative mb-4">
                                            <div className="bg-[#282828] h-40 rounded-md flex items-center justify-center">{playlist.icon}</div>
                                            <button className="absolute bottom-2 right-2 bg-[#1DB954] text-black p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                                                <PlayCircle size={24} />
                                            </button>
                                        </div>
                                        <h3 className="font-bold text-lg">{playlist.name}</h3>
                                        <p className="text-sm text-gray-400">{playlist.count} songs</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* History View */}
                    {activeTab === "history" && (
                        <div>
                            <div className="flex space-x-4 mb-6">
                                <button className="bg-[#1DB954] text-black font-bold py-2 px-6 rounded-full hover:bg-[#1ED760] transition-colors flex items-center">
                                    <Clock size={16} className="mr-2" />
                                    Recent
                                </button>
                                <button className="bg-transparent text-white font-bold py-2 px-6 rounded-full border border-white hover:bg-white hover:bg-opacity-10 transition-colors flex items-center">
                                    <FolderHeart size={16} className="mr-2" />
                                    Most Played
                                </button>
                                <button className="bg-transparent text-white font-bold py-2 px-6 rounded-full border border-white hover:bg-white hover:bg-opacity-10 transition-colors flex items-center">
                                    <Star size={16} className="mr-2" />
                                    Top Rated
                                </button>
                            </div>

                            <div className="bg-[#181818] rounded-lg p-4 mb-8">
                                <h2 className="text-xl font-bold mb-4">Recently Played</h2>
                                <div className="space-y-2">
                                    {[
                                        {
                                            title: "Sound of Silence",
                                            original: "Simon & Garfunkel",
                                            cover: "Disturbed",
                                            type: "cover",
                                            time: "3:45",
                                        },
                                        {
                                            title: "Harder, Better, Faster, Stronger",
                                            original: "Daft Punk",
                                            cover: "Kanye West",
                                            type: "sample",
                                            time: "5:12",
                                        },
                                        {
                                            title: "Nothing Compares 2 U",
                                            original: "Prince",
                                            cover: "Sinéad O'Connor",
                                            type: "cover",
                                            time: "4:10",
                                        },
                                        {
                                            title: "Funky Drummer",
                                            original: "James Brown",
                                            cover: "Public Enemy",
                                            type: "sample",
                                            time: "3:30",
                                        },
                                        {
                                            title: "Hurt",
                                            original: "Nine Inch Nails",
                                            cover: "Johnny Cash",
                                            type: "cover",
                                            time: "3:38",
                                        },
                                    ].map((item, i) => (
                                        <div
                                            key={i}
                                            className="bg-[#242424] rounded-lg p-3 hover:bg-[#2A2A2A] transition-colors cursor-pointer flex items-center"
                                        >
                                            <div className="w-10 h-10 flex items-center justify-center text-gray-400 mr-3">
                                                <Clock size={20} />
                                            </div>
                                            <img
                                                src={`/images/round-icons-dj_vJ7FR06U-unsplash.svg?height=40&width=40`}
                                                alt={item.title}
                                                className="w-10 h-10 rounded-md mr-4"
                                            />
                                            <div className="flex-grow">
                                                <div className="flex items-center">
                                                    <h4 className="font-bold text-sm">{item.title}</h4>
                                                    {item.type === "cover" ? (
                                                        <span className="ml-2 bg-[#1DB954] text-black text-xs px-2 py-0.5 rounded-full">Cover</span>
                                                    ) : (
                                                        <span className="ml-2 bg-[#AF2896] text-white text-xs px-2 py-0.5 rounded-full">Sample</span>
                                                    )}
                                                </div>
                                                <p className="text-xs text-gray-400">
                                                    {item.original} • {item.cover}
                                                </p>
                                            </div>
                                            <span className="text-xs text-gray-500 mr-4">{item.time}</span>
                                            <button className="text-gray-400 hover:text-white mr-2">
                                                <Heart size={16} />
                                            </button>
                                            <button className="text-gray-400 hover:text-white">
                                                <PlayCircle size={20} />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-[#181818] rounded-lg p-4">
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-xl font-bold">Listening Stats</h2>
                                    <select className="bg-[#282828] text-white border border-[#3E3E3E] rounded-md p-1 text-sm">
                                        <option>Last 7 Days</option>
                                        <option>Last 30 Days</option>
                                        <option>Last 90 Days</option>
                                        <option>All Time</option>
                                    </select>
                                </div>

                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="text-lg font-medium mb-3">Top Genres</h3>
                                        <div className="space-y-2">
                                            {[
                                                { name: "Rock", percentage: 35 },
                                                { name: "Hip Hop", percentage: 25 },
                                                { name: "Electronic", percentage: 20 },
                                                { name: "Pop", percentage: 15 },
                                                { name: "Jazz", percentage: 5 },
                                            ].map((genre, i) => (
                                                <div key={i} className="flex items-center">
                                                    <span className="w-24 text-sm">{genre.name}</span>
                                                    <div className="h-2 bg-[#3E3E3E] rounded-full flex-grow">
                                                        <div
                                                            className="h-2 bg-[#1DB954] rounded-full"
                                                            style={{ width: `${genre.percentage}%` }}
                                                        ></div>
                                                    </div>
                                                    <span className="w-10 text-right text-sm text-gray-400">{genre.percentage}%</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-medium mb-3">Covers vs. Samples</h3>
                                        <div className="flex items-center justify-center h-40">
                                            <div className="relative w-40 h-40">
                                                <div
                                                    className="absolute inset-0 bg-[#1DB954] rounded-full"
                                                    style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
                                                ></div>
                                                <div
                                                    className="absolute inset-0 bg-[#AF2896] rounded-full"
                                                    style={{ clipPath: "polygon(50% 50%, 100% 0, 100% 100%)" }}
                                                ></div>
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <div className="bg-[#181818] w-24 h-24 rounded-full flex items-center justify-center flex-col">
                                                        <span className="text-xs text-gray-400">Total</span>
                                                        <span className="text-xl font-bold">127</span>
                                                    </div>
                                                </div>
                                                <div className="absolute top-4 right-0 text-sm font-medium">
                                                    <span className="text-[#AF2896]">Samples</span>
                                                    <span className="text-gray-400 ml-2">35%</span>
                                                </div>
                                                <div className="absolute bottom-4 left-0 text-sm font-medium">
                                                    <span className="text-[#1DB954]">Covers</span>
                                                    <span className="text-gray-400 ml-2">65%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </SongAppLayout>
    )
}
