import React from 'react';
import { useState } from "react"
import LibraryTabs from '@/components/songapp/library/library-tabs';
import PlaylistsView from '@/components/songapp/library/playlists-view';
import SavedItemsView from '@/components/songapp/library/saved-items-view';
import { libraryTabs, getDefaultTabId } from '@/data/library-tabs';
import {
    Plus,
} from "lucide-react"
import SongAppLayout from '@/layouts/song-app-layout';
import HistoryView from '@/components/songapp/library/history-view';
import { Link } from '@inertiajs/react';
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
                        <Link href={route('playlists.create')} className="bg-[#1DB954] text-black font-bold py-2 px-6 rounded-full hover:bg-[#1ED760] transition-colors flex items-center">
                            <button className="bg-[#1DB954] text-black font-bold py-2 px-6 rounded-full hover:bg-[#1ED760] transition-colors cursor-pointer flex items-center">
                                <Plus size={16} className="mr-2" />
                                Create Playlist
                            </button>
                        </Link>
                    </div>

                    {/* Library Tabs */}
                    <LibraryTabs tabs={libraryTabs} activeTabId={activeTabId} setActiveTabId={setActiveTabId} />

                    {/* Saved Items View */}
                    {activeTab.id === "saved" && <SavedItemsView/>}

                    {/* Playlists View */}
                    {activeTab.id === "playlists" && <PlaylistsView />}

                    {/* History View */}
                    {activeTab.id === "history" && <HistoryView />}
                </div>

            </div>
        </SongAppLayout>
    )
}
