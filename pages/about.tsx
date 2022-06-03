import React from 'react';
import Link from '@components/_shared/Link';
import MainLayout from '@components/_layouts/MainLayout';
import useUser from '@core/swr/user';

const About = () => {
	const { user, loading } = useUser();

	return (
		<MainLayout title="About" className="flex-sc col">
			<p className="z-10 mt-48 mb-2 max-w-sm text-center">
				The technologies used in this template
			</p>
			<div className="flex-cc gap-1 mb-4">
				<img
					src="https://img.shields.io/badge/NEXT%20-%23000000.svg?&style=flat&logo=next.js&logoColor=white"
					alt="tech"
				/>
				<img
					src="https://img.shields.io/badge/TAILWIND%20-%2338B2AC.svg?&style=flat&logo=tailwindcss&logoColor=white"
					alt="tech"
				/>
			</div>
			<p className="z-10 mb-16 max-w-sm text-center">
				<strong>Extras:</strong> Layout, Custom Link, Custom Image, SEOTags, useForm, Redux
				setup, eslint and prettier setup
			</p>

			<div className="flex-cc gap-4 mb-24">
				<Link href="/" className="px-4 py-2 text-white bg-theme-orange hover:bg-opacity-80">
					BACK HOME
				</Link>
			</div>

			{loading ? (
				<p>fetching...</p>
			) : (
				<p className="z-10 mb-16 max-w-sm text-center">
					SWR Example: your name is {user.name} and you have username of {user.username}
				</p>
			)}
		</MainLayout>
	);
};

export default About;
