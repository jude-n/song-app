import MyLayoutTemplate from '@/layouts/templates/my-layout-template';
import { type ReactNode } from 'react';
import { PlayerBar } from '@/components/songapp/player-bar';
import { Header } from '@/components/songapp/header';

interface SongAppLayoutProps {
    title: string;
    children: ReactNode;
}

export default function SongAppLayout({ title, children }: SongAppLayoutProps) {
    return (
        <MyLayoutTemplate>
            {/*<div className="min-h-screen bg-gray-100">*/}
            <Header />

            {children}
            <PlayerBar />

            {/*</div>*/}
        </MyLayoutTemplate>
    );
}
