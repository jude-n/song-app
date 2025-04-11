import { Header } from '@/components/songapp/header';
import { Footer } from '@/components/songapp/footer';
import { PlayerBar } from '@/components/songapp/player-bar';
import { type ReactNode } from 'react';

interface MyLayoutTemplate {
    children: ReactNode;
}
export default function MyLayoutTemplate({ children }:MyLayoutTemplate) {
    return (
        <div className="min-h-screen bg-[#121212] text-white">
            <Header />
            <main className="pb-24">{children}</main>
            <PlayerBar />
            {/*<Footer />*/}
        </div>
    );
}
