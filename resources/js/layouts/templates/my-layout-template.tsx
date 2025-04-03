import { Header } from '@/components/songapp/header';
import { Footer } from '@/components/songapp/footer';
import { type ReactNode } from 'react';

interface MyLayoutTemplate {
    children: ReactNode;
}
export default function MyLayoutTemplate({ children }:MyLayoutTemplate) {
    return (
        <div className="min-h-screen bg-gray-100">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
