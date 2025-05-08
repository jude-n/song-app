import SongAppLayout from '@/layouts/song-app-layout';

import FeaturedCoverEvolutions from '@/components/songapp/featured-cover-evolutions';
import FeaturedCoverGenerations from '@/components/songapp/featured-cover-generations';
import Genres from '@/components/songapp/genres';
import HeroSection  from '@/components/songapp/hero-section';
import ModeSelector from '@/components/songapp/mode-selector';

export default function Home() {
    return (
        <SongAppLayout title="Home">
            {/* Hero Section */}
            <HeroSection />
            {/* Mode Selector */}
            <ModeSelector />
            {/* Featured Covers */}
            <FeaturedCoverEvolutions />
            {/* Featured Samples */}
            <FeaturedCoverGenerations />
            {/* Browse by Genre */}
            <Genres />
            {/* Footer */}

        </SongAppLayout>
    );
}
