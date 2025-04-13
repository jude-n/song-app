import SongAppLayout from '@/layouts/song-app-layout';

import FeaturedCovers from '@/components/songapp/featured-covers';
import FeaturedSamples from '@/components/songapp/featured-samples';
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
            <FeaturedCovers />
            {/* Featured Samples */}
            <FeaturedSamples />
            {/* Browse by Genre */}
            <Genres />
            {/* Footer */}

        </SongAppLayout>
    );
}
