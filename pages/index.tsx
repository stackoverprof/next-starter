import React from 'react';
import MainLayout from '@components/_layouts/MainLayout';
import Link from '@components/_shared/Link';

const Index = (): JSX.Element => {
	return (
		<MainLayout title="Home" className="flex-sc col">
			<h1 className="mb-4 mt-48 text-4xl font-bold text-center z-10">Next (Basic) Starter</h1>
			<p className="max-w-sm mb-8 text-center z-10">
				The template for a quick and intuitive workflow with Next.js and tailwindcss
			</p>

			<div className="flex-cc gap-4 z-10">
				<Link href="/about" className="px-4 py-2 text-white bg-accent hover:bg-opacity-80">
					ABOUT
				</Link>
				<Link href="/form" className="px-4 py-2 text-white bg-black hover:bg-opacity-80">
					FORM
				</Link>
			</div>

			<div
				className="fixed bottom-0 w-full h-1/4 bg-cover flex-cc"
				style={{
					backgroundImage: 'url(https://svgshare.com/i/_H4.svg)',
					paddingBottom: 'env(safe-area-inset-bottom)',
				}}
			>
				<p className="flex-cc gap-1 text-lg">
					See the{' '}
					<Link
						href="https://github.com/stackoverprof/next-starter"
						target="_blank"
						className="font-bold underline"
					>
						repository
					</Link>
				</p>
			</div>
		</MainLayout>
	);
};

// Above are sample use of

// useLayout: which is a custom hooks in context management
// Alert: custom popping out alert box that automatically vanish
// Link: custom link that can be styled into anything and is so comfortable
// MainLayout: open 'components/_layouts/', that is the place where you put navbar and footer, not here

export default Index;
