import React from 'react';
import useMinHeight from '@core/hooks/useMinHeight';
import AlertHandler from '@components/_shared/AlertHandler';
import SEOTags from '@components/_shared/SEOTags';
import { useLayout } from '@core/contexts/app';

interface Props {
	children: React.ReactNode;
	title?: string;
	className?: string;
	style?: React.CSSProperties;
}

const MainLayout = ({ children, title, className, style }: Props): JSX.Element => {
	const [minHeight, upperRef, lowerRef] = useMinHeight();
	const { AlertValue } = useLayout();

	return (
		<>
			<SEOTags title={title} />

			<header ref={upperRef}>{/* Navbar things */}</header>

			<main style={{ minHeight, ...style }} className={className}>
				{children}
			</main>

			<footer ref={lowerRef}>{/* Footer things */}</footer>

			{AlertValue && <AlertHandler key={Date.now()} />}
		</>
	);
};

export default MainLayout;
