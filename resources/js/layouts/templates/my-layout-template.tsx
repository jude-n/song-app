import { type ReactNode } from 'react';

interface MyLayoutTemplate {
    children: ReactNode;
}
export default function MyLayoutTemplate({ children }:MyLayoutTemplate) {
    return (
        <div className="min-h-screen bg-[#121212] text-white">
                <main className="pb-24">
                    {children}
                </main>
        </div>
    );
}
