import React from 'react';
import Link from '@components/_shared/Link';
import MainLayout from '@components/_layouts/MainLayout';

const About = (): JSX.Element => {
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
				<strong>Extras:</strong> Layout, Alert, Custom Link, Custom Image, SEOTags, useForm,
				Context setup
			</p>

			<div className="flex-cc gap-4 mb-24">
				<Link href="/" className="px-4 py-2 text-white bg-accent hover:bg-opacity-80">
					BACK HOME
				</Link>
			</div>
		</MainLayout>
	);
};

export default About;
