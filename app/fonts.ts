import { Geist, Geist_Mono } from 'next/font/google';

export const fontVariables = [
    Geist({
        variable: '--font-geist-sans',
        subsets: ['latin'],
    }),
    Geist_Mono({
        variable: '--font-geist-mono',
        subsets: ['latin'],
    }).variable,
].join(' ');
