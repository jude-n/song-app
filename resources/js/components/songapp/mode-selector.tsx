import * as React from 'react';
import { Disc3, Music, Scissors } from 'lucide-react';

export default function ModeSelector() {
    return (
        <section className="px-8 py-6">
            <div className="flex space-x-4 mb-6">
                <button
                    className="bg-[#1DB954] text-black font-bold py-3 px-8 rounded-lg hover:bg-[#1ED760] transition-colors flex items-center">
                    <Disc3 size={20} className="mr-2" />
                    Covers
                </button>
                <button
                    className="bg-[#AF2896] text-white font-bold py-3 px-8 rounded-lg hover:bg-[#C42BA5] transition-colors flex items-center">
                    <Scissors size={20} className="mr-2" />
                    Samples
                </button>
                <button
                    className="bg-[#2E77D0] text-white font-bold py-3 px-8 rounded-lg hover:bg-[#4687D6] transition-colors flex items-center">
                    <Music size={20} className="mr-2" />
                    All Music
                </button>
            </div>
        </section>
    )
}
