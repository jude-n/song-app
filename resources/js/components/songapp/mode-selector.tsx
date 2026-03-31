import React, { useState } from 'react';
import { Disc3, Music, Scissors, ArrowRight } from 'lucide-react';

type Mode = 'covers' | 'samples' | 'all';

const modes = [
    {
        id: 'covers' as Mode,
        label: 'Covers',
        icon: Disc3,
        description: 'Explore cover versions and reimaginations',
        color: '#1DB954',
        bgColor: 'bg-[#1DB954]',
        hoverColor: 'hover:bg-[#1ED760]',
        textColor: 'text-black',
    },
    {
        id: 'samples' as Mode,
        label: 'Samples',
        icon: Scissors,
        description: 'Discover sample chains and influences',
        color: '#AF2896',
        bgColor: 'bg-[#AF2896]',
        hoverColor: 'hover:bg-[#C42BA5]',
        textColor: 'text-white',
    },
    {
        id: 'all' as Mode,
        label: 'All Music',
        icon: Music,
        description: 'Browse the complete music catalog',
        color: '#2E77D0',
        bgColor: 'bg-[#2E77D0]',
        hoverColor: 'hover:bg-[#4687D6]',
        textColor: 'text-white',
    },
];

export default function ModeSelector() {
    const [activeMode, setActiveMode] = useState<Mode>('covers');

    return (
        <section className="px-8 py-8 bg-[#0a0a0a]">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-300">Browse by Category</h3>
                <button className="text-sm text-gray-400 hover:text-white flex items-center gap-1 transition-colors">
                    View All Categories <ArrowRight size={14} />
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {modes.map((mode) => {
                    const Icon = mode.icon;
                    const isActive = activeMode === mode.id;

                    return (
                        <button
                            key={mode.id}
                            onClick={() => setActiveMode(mode.id)}
                            className={`
                                relative group p-6 rounded-2xl transition-all duration-300 text-left overflow-hidden
                                ${isActive
                                    ? `${mode.bgColor} ${mode.textColor} shadow-lg shadow-[${mode.color}]/25 scale-[1.02]`
                                    : 'bg-[#181818] text-white hover:bg-[#282828]'
                                }
                            `}
                        >
                            {/* Background glow effect for active state */}
                            {isActive && (
                                <div
                                    className="absolute inset-0 opacity-30"
                                    style={{
                                        background: `radial-gradient(circle at top right, ${mode.color}, transparent 70%)`
                                    }}
                                />
                            )}

                            <div className="relative z-10">
                                <div className={`
                                    inline-flex p-3 rounded-xl mb-4 transition-colors
                                    ${isActive
                                        ? 'bg-white/20'
                                        : 'bg-white/5 group-hover:bg-white/10'
                                    }
                                `}>
                                    <Icon size={24} className={isActive ? '' : 'text-gray-400 group-hover:text-white'} />
                                </div>

                                <h4 className="text-xl font-bold mb-2">{mode.label}</h4>
                                <p className={`text-sm ${isActive ? 'opacity-80' : 'text-gray-400'}`}>
                                    {mode.description}
                                </p>

                                {/* Active indicator */}
                                {isActive && (
                                    <div className="absolute top-4 right-4 w-3 h-3 bg-white rounded-full animate-pulse" />
                                )}
                            </div>
                        </button>
                    );
                })}
            </div>
        </section>
    );
}
