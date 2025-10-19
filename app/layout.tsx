import type { Metadata } from 'next';

import { fontVariables } from './fonts';
import './globals.css';

export const metadata: Metadata = {
    title: 'next-starter',
    description: 'by stackoverprof',
};

const RootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <html lang="en">
            <body className={[fontVariables, 'antialiased'].join(' ')}>
                {children}
            </body>
        </html>
    );
};

export default RootLayout;
