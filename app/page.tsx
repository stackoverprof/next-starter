import Image from 'next/image';

const Home = () => {

    return (
        <div className="flex-cc col min-h-screen p-8 pb-20 font-sans sm:p-20 ">
            <main className="flex-cc col flex-1 gap-[32px]">
                <div className="text-center sm:text-left">
                    <h1 className="mb-2 text-4xl font-bold tracking-tight sm:text-6xl">
                        next-starter
                    </h1>
                    <p className="text-lg text-gray-600 sm:text-xl dark:text-gray-400">
                        by stackoverprof
                    </p>
                </div>
        
                <ol className="list-inside list-decimal text-center font-mono text-sm/6 sm:text-left">
                    <li className="mb-2 tracking-[-.01em]">
                        Get started by editing{' '}
                        <code className="rounded bg-black/[.05] px-1 py-0.5 font-mono font-semibold dark:bg-white/[.06]">
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
                        className="flex-cc bg-foreground text-background h-10 gap-2 rounded-full border border-solid border-transparent px-4 text-sm font-medium transition-colors hover:bg-[#383838] sm:h-12 sm:w-auto sm:px-5 sm:text-base dark:hover:bg-[#ccc]"
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
                        className="flex-cc h-10 w-full rounded-full border border-solid border-black/[.08] px-4 text-sm font-medium transition-colors hover:border-transparent hover:bg-[#f2f2f2] sm:h-12 sm:w-auto sm:px-5 sm:text-base md:w-[158px] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
                    >
                        Read our docs
                    </a>
                </div>
            </main>
            <footer className="flex-cc h-5 flex-wrap gap-[24px]">
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
};

export default Home;
