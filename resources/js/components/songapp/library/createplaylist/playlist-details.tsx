import React from 'react';
import { X, Save, ImageIcon, Music } from 'lucide-react';
import { Link } from '@inertiajs/react';

export default function PlaylistDetails() {
    return (
        <div className="col-span-1">
            <div className="bg-[#181818] rounded-lg p-6">
                {/* Cover Image & Upload */}
                <div className="mb-6">
                    <div className="bg-[#282828] rounded-lg aspect-square flex items-center justify-center mb-4 relative group">
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                            <button className="bg-[#1DB954] text-black font-bold py-2 px-4 rounded-full hover:bg-[#1ED760] transition-colors flex items-center">
                                <ImageIcon size={16} className="mr-2" />
                                Choose Image
                            </button>
                        </div>
                        <Music size={64} className="text-gray-500" />
                    </div>
                    {/* Name & Description */}
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
                        <label htmlFor="playlist-description" className="block text-sm font-medium text-gray-400 mb-1">
                            Description (Optional)
                        </label>
                        <textarea
                            id="playlist-description"
                            placeholder="Add an optional description"
                            rows={3}
                            className="w-full bg-[#282828] border border-[#3E3E3E] rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#1DB954] focus:border-transparent"
                        />
                    </div>
                    {/* Type */}
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Playlist Type</label>
                        <div className="flex space-x-3">
                            <label className="flex items-center">
                                <input type="radio" name="playlist-type" className="mr-2 accent-[#1DB954]" defaultChecked />
                                <span className="text-sm">Public</span>
                            </label>
                            <label className="flex items-center">
                                <input type="radio" name="playlist-type" className="mr-2 accent-[#1DB954]" />
                                <span className="text-sm">Private</span>
                            </label>
                        </div>
                    </div>
                </div>
                {/* Actions */}
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
    );
}
