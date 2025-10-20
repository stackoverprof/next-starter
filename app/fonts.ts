import { Geist, Geist_Mono } from 'next/font/google';

const geist = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const fontVariables = [geist.variable, geistMono.variable].join(' ');
