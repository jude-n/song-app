import * as React from 'react';
import {
    Heart,
    PlayCircle,
    SkipBack,
    SkipForward,
    Volume2
} from "lucide-react"

// components/PlayerBar.jsx

export function PlayerBar() {
    return (
        <div className="bg-[#181818] border-t border-[#282828] fixed bottom-0 left-0 right-0 px-4 py-3 flex items-center justify-between z-50">
            <div className="flex items-center space-x-4">
                <img src="/images/round-icons-dj_vJ7FR06U-unsplash.svg?height=56&width=56" alt="Now playing" className="w-14 h-14 rounded" />
                <div>
                    <h4 className="font-bold">Sound of Silence</h4>
                    <p className="text-xs text-gray-400">Simon & Garfunkel • Disturbed</p>
                    <span className="text-xs bg-[#1DB954] text-black px-2 py-0.5 rounded-full">Cover</span>
                </div>
                <button className="text-gray-400 hover:text-white">
                    <Heart size={16} />
                </button>
            </div>

            <div className="flex flex-col items-center max-w-xl w-full">
                <div className="flex items-center space-x-4 mb-1">
                    <button className="text-gray-400 hover:text-white">
                        <SkipBack size={16} />
                    </button>
                    <button className="bg-white rounded-full p-2 hover:scale-105 transition-transform">
                        <PlayCircle size={24} className="text-black" />
                    </button>
                    <button className="text-gray-400 hover:text-white">
                        <SkipForward size={16} />
                    </button>
                </div>
                <div className="flex items-center space-x-2 w-full">
                    <span className="text-xs text-gray-400">1:23</span>
                    <div className="h-1 bg-gray-600 rounded-full flex-grow">
                        <div className="h-1 bg-gray-200 rounded-full w-1/3"></div>
                    </div>
                    <span className="text-xs text-gray-400">3:45</span>
                </div>
            </div>

            <div className="flex items-center space-x-2">
                <Volume2 size={16} className="text-gray-400" />
                <div className="w-24 h-1 bg-gray-600 rounded-full">
                    <div className="h-1 bg-gray-200 rounded-full w-2/3"></div>
                </div>
            </div>
        </div>
    );
}
