import React from 'react';
import Link from '@components/_shared/Link';
import { NextPage } from 'next';

const Page404: NextPage = () => {
	return (
		<div className="flex-cc col fullscreen">
			<h1 className="mb-4">404 | Not Found</h1>
			<Link href="/" className="px-4 py-2 text-black bg-white">
				BACK HOME
			</Link>
		</div>
	);
};

export default Page404;
