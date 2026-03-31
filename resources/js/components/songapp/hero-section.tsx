import * as React from 'react';
import { Music2, TrendingUp, Sparkles } from 'lucide-react';
import SearchFilter from '@/components/ui/songapp/search-filter';

export default function HeroSection() {
   return (
       <section className="relative px-8 pt-16 pb-12 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#1DB954]/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#AF2896]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2E77D0]/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-4xl">
                <div className="flex items-center gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#1DB954]/20 text-[#1DB954] text-sm font-medium rounded-full border border-[#1DB954]/30">
                        <Sparkles size={14} />
                        New Features Available
                    </span>
                </div>

                <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent leading-tight">
                    Discover Music Evolution
                </h2>

                <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
                    Explore how music transforms through covers and samples. Track the journey of songs across genres,
                    eras, and artists.
                </p>

                <SearchFilter />

                {/* Stats row */}
                <div className="flex flex-wrap gap-8 mt-10 pt-8 border-t border-white/10">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-[#1DB954]/20 rounded-lg">
                            <Music2 size={20} className="text-[#1DB954]" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-white">50K+</p>
                            <p className="text-sm text-gray-400">Cover Songs</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-[#AF2896]/20 rounded-lg">
                            <TrendingUp size={20} className="text-[#AF2896]" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-white">10K+</p>
                            <p className="text-sm text-gray-400">Sample Chains</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-[#2E77D0]/20 rounded-lg">
                            <Sparkles size={20} className="text-[#2E77D0]" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-white">500+</p>
                            <p className="text-sm text-gray-400">Genres</p>
                        </div>
                    </div>
                </div>
            </div>
       </section>
   )
}
