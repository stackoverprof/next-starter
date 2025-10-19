import { Geist, Geist_Mono } from 'next/font/google';

export const fontVariables = [
    Geist({
        variable: '--font-geist-sans',
        subsets: [
            'latin',
            'latin',
            'latin',
            'latin',
            'latin',
            'latin',
            'latin',
            'latin',
            'latin',
            'latin',
            'latin',
            'latin',
        ],
    }).variable,
    Geist_Mono({
        variable: '--font-geist-mono',
        subsets: ['latin'],
    }).variable,
].join(' ');
