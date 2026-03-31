import React, { useState } from 'react';
import {
    Heart,
    Play,
    Pause,
    SkipBack,
    SkipForward,
    Volume2,
    VolumeX,
    Repeat,
    Shuffle,
    ListMusic,
    Maximize2,
    Mic2,
} from "lucide-react"

export function PlayerBar() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [progress, setProgress] = useState(33);
    const [volume, setVolume] = useState(66);

    return (
        <div className="bg-gradient-to-t from-[#121212] to-[#181818] border-t border-white/10 fixed bottom-0 left-0 right-0 px-4 py-3 z-50">
            <div className="flex items-center justify-between max-w-screen-2xl mx-auto">
                {/* Now Playing Info */}
                <div className="flex items-center gap-4 flex-1 min-w-0">
                    <div className="relative group">
                        <img
                            src="/images/round-icons-dj_vJ7FR06U-unsplash.svg?height=56&width=56"
                            alt="Now playing"
                            className="w-14 h-14 rounded-lg shadow-lg transition-transform group-hover:scale-105"
                        />
                        <button className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg">
                            <Maximize2 size={18} className="text-white" />
                        </button>
                    </div>

                    <div className="min-w-0">
                        <h4 className="font-semibold text-white text-sm truncate hover:underline cursor-pointer">
                            Sound of Silence
                        </h4>
                        <p className="text-xs text-gray-400 truncate">
                            <span className="hover:underline hover:text-white cursor-pointer">Simon & Garfunkel</span>
                            <span className="mx-1">•</span>
                            <span className="hover:underline hover:text-white cursor-pointer">Disturbed</span>
                        </p>
                        <span className="inline-flex mt-1 text-[10px] bg-gradient-to-r from-[#1DB954] to-[#169c46] text-white font-medium px-2 py-0.5 rounded-full">
                            Cover
                        </span>
                    </div>

                    <button
                        onClick={() => setIsLiked(!isLiked)}
                        className={`flex-shrink-0 p-1.5 rounded-full transition-all ${
                            isLiked
                                ? 'text-[#1DB954] hover:scale-110'
                                : 'text-gray-400 hover:text-white'
                        }`}
                    >
                        <Heart size={18} fill={isLiked ? 'currentColor' : 'none'} />
                    </button>
                </div>

                {/* Player Controls */}
                <div className="flex flex-col items-center flex-1 max-w-2xl px-4">
                    <div className="flex items-center gap-5 mb-2">
                        <button className="text-gray-400 hover:text-white transition-colors">
                            <Shuffle size={16} />
                        </button>
                        <button className="text-gray-400 hover:text-white transition-colors hover:scale-110">
                            <SkipBack size={18} />
                        </button>
                        <button
                            onClick={() => setIsPlaying(!isPlaying)}
                            className="bg-white rounded-full p-2.5 hover:scale-105 transition-all shadow-lg hover:shadow-xl"
                        >
                            {isPlaying ? (
                                <Pause size={20} className="text-black" fill="currentColor" />
                            ) : (
                                <Play size={20} className="text-black ml-0.5" fill="currentColor" />
                            )}
                        </button>
                        <button className="text-gray-400 hover:text-white transition-colors hover:scale-110">
                            <SkipForward size={18} />
                        </button>
                        <button className="text-gray-400 hover:text-white transition-colors">
                            <Repeat size={16} />
                        </button>
                    </div>

                    {/* Progress Bar */}
                    <div className="flex items-center gap-2 w-full">
                        <span className="text-[11px] text-gray-400 font-mono w-10 text-right">1:23</span>
                        <div
                            className="h-1 bg-gray-600/50 rounded-full flex-grow cursor-pointer group relative"
                            onClick={(e) => {
                                const rect = e.currentTarget.getBoundingClientRect();
                                const percent = ((e.clientX - rect.left) / rect.width) * 100;
                                setProgress(Math.min(100, Math.max(0, percent)));
                            }}
                        >
                            <div
                                className="h-full bg-white group-hover:bg-[#1DB954] rounded-full transition-colors relative"
                                style={{ width: `${progress}%` }}
                            >
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </div>
                        <span className="text-[11px] text-gray-400 font-mono w-10">3:45</span>
                    </div>
                </div>

                {/* Additional Controls */}
                <div className="flex items-center gap-3 flex-1 justify-end">
                    <button className="text-gray-400 hover:text-white transition-colors p-1.5">
                        <Mic2 size={16} />
                    </button>
                    <button className="text-gray-400 hover:text-white transition-colors p-1.5">
                        <ListMusic size={16} />
                    </button>

                    {/* Volume Control */}
                    <div className="flex items-center gap-2 group">
                        <button
                            onClick={() => setIsMuted(!isMuted)}
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                        </button>
                        <div
                            className="w-24 h-1 bg-gray-600/50 rounded-full cursor-pointer relative"
                            onClick={(e) => {
                                const rect = e.currentTarget.getBoundingClientRect();
                                const percent = ((e.clientX - rect.left) / rect.width) * 100;
                                setVolume(Math.min(100, Math.max(0, percent)));
                                if (isMuted) setIsMuted(false);
                            }}
                        >
                            <div
                                className="h-full bg-white group-hover:bg-[#1DB954] rounded-full transition-colors relative"
                                style={{ width: isMuted ? '0%' : `${volume}%` }}
                            >
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </div>
                    </div>

                    <button className="text-gray-400 hover:text-white transition-colors p-1.5">
                        <Maximize2 size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
}
