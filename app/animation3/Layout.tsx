// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import TransitionProvider from '@/components/animation3cpt/TransitionProvider';
import Navigation from '@/components/animation3cpt/Navigation';
import TransitionSelector from '@/components/animation3cpt/TransitionSelector';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Page Transitions Demo',
    description: 'Demonstrating smooth page transitions in Next.js',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navigation />
                <TransitionSelector />
                <TransitionProvider>
                    {children}
                </TransitionProvider>
            </body>
        </html>
    );
}