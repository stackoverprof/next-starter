import React from 'react';
import SEOTags from '@components/_shared/SEOTags';
import useMinHeight from '@core/hooks/useMinHeight';

interface Props {
	children: React.ReactNode;
	title?: string;
	className?: string;
	style?: React.CSSProperties;
}

const MainLayout = ({ children, title, className, style }: Props) => {
	const [minHeight, upperRef, lowerRef] = useMinHeight();

	return (
		<>
			<SEOTags title={title} />

			<header ref={upperRef}>{/* Navbar things */}</header>

			<main style={{ minHeight, ...style }} className={className}>
				{children}
			</main>

			<footer ref={lowerRef}>{/* Footer things */}</footer>
		</>
	);
};

export default MainLayout;
