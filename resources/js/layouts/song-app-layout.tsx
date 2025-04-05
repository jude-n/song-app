import MyLayoutTemplate from '@/layouts/templates/my-layout-template';
import { type ReactNode } from 'react';

interface SongAppLayoutProps {
    title: string;
    children: ReactNode;
}

export default function SongAppLayout({ title, children }: SongAppLayoutProps) {
    return (
        <MyLayoutTemplate>
            {/*<header className="bg-white shadow">*/}
            {/*    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">*/}
            {/*        <h1 className="text-3xl font-bold text-gray-900">{title}</h1>*/}
            {/*    </div>*/}
            {/*</header>*/}
            <div className="min-h-screen bg-gray-100">
                {children}
            </div>
        </MyLayoutTemplate>
    );
}
