import Image from 'next/image';

export default function Home() {

    return (
        <div className="font-sans flex-cc col min-h-screen p-8 pb-20 sm:p-20">
            <main className="flex-cc col gap-[32px] flex-1">
                <div className="text-center sm:text-left">
                    <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-2">
                        next-starter
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400">
                        by stackoverprof
                    </p>
                </div>
        
                <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
                    <li className="mb-2 tracking-[-.01em]">
                        Get started by editing{' '}
                        <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
                            app/page.tsx
                        </code>
                        .
                    </li>
                    <li className="tracking-[-.01em]">
                        Save and see your changes instantly.
                    </li>
                </ol>

                <div className="flex-cc gap-4">
                    <a
                        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="rounded-full border border-solid border-transparent transition-colors flex-cc bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
                    >
                        <Image
                            alt="Vercel logomark"
                            src="/vercel.svg"
                            height={20}
                            width={20}
                            className="dark:invert"
                        />
                        Deploy now
                    </a>                    
                    <a
                        href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex-cc hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
                    >
                        Read our docs
                    </a>
                </div>
            </main>
            <footer className="h-5 flex-cc gap-[24px] flex-wrap">
                <a
                    href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="flex-cc gap-2 hover:underline hover:underline-offset-4"
                >
                    <Image
                        alt="File icon"
                        aria-hidden
                        src="/file.svg"
                        height={16}
                        width={16}
                    />
                    Learn
                </a>
                <a
                    href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="flex-cc gap-2 hover:underline hover:underline-offset-4"
                >
                    <Image
                        alt="Window icon"
                        aria-hidden
                        src="/window.svg"
                        height={16}
                        width={16}
                    />
                    Examples
                </a>
                <a
                    href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="flex-cc gap-2 hover:underline hover:underline-offset-4"
                >
                    <Image
                        alt="Globe icon"
                        aria-hidden
                        src="/globe.svg"
                        height={16}
                        width={16}
                    />
                    Go to nextjs.org →
                </a>
            </footer>
        </div>
    );
}
