import React from 'react';
import AppProvider from '@core/contexts';
import Head from 'next/head';
import ProgressBar from '@components/_shared/ProgressBar';
import store from '@core/redux/store';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import '@core/styles/global.tailwind.css';
import '@core/styles/typefaces.css';

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta name="theme-color" content="#000000" />
			</Head>
			<ProgressBar color="#009AFF" />
			<Provider store={store}>
				<AppProvider>
					<Component {...pageProps} />
				</AppProvider>
			</Provider>
		</>
	);
};

export default App;
