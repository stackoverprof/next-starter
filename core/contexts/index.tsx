import React from 'react';
import AuthStore from './slices/auth';

export const AppContext = React.createContext(null);

interface Props {
	children: React.ReactNode;
}

const AppProvider = ({ children }: Props): JSX.Element => (
	<AppContext.Provider
		value={{
			auth: AuthStore(),
		}}
	>
		{children}
	</AppContext.Provider>
);

export default AppProvider;

