import * as React from 'react';

import SearchFilter from '@/components/ui/songapp/search-filter';

export default function HeroSection() {
   return (
       <section className="px-8 pt-12 pb-8 bg-gradient-to-b from-[#2E77D0] to-[#121212]">
            <h2 className="text-5xl font-bold mb-6">Discover Music Evolution</h2>
            <p className="text-xl mb-8 max-w-2xl">
                Explore how music transforms through covers and samples. Track the journey of songs across genres,
                eras, and
                artists.
            </p>
            <SearchFilter />
       </section>
   )
}
