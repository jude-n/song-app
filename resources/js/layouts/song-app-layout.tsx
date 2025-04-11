import MyLayoutTemplate from '@/layouts/templates/my-layout-template';
import { type ReactNode } from 'react';

interface SongAppLayoutProps {
    title: string;
    children: ReactNode;
}

export default function SongAppLayout({ title, children }: SongAppLayoutProps) {
    return (
        <MyLayoutTemplate>
            {/*<div className="min-h-screen bg-gray-100">*/}
                {children}
            {/*</div>*/}
        </MyLayoutTemplate>
    );
}
