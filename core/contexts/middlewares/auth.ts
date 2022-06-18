import { useContext } from 'react';
import { AppContext } from '..';

const useAuthStore = () => {
	const state = useContext(AppContext).auth.state;
	const dispatcher = useContext(AppContext).auth.dispatcher;

	const isTokenExist = () => {
		return state.accessToken.length > 0;
	};

	// EXPORTED HOOK PRODUCTS
	const authenticated = isTokenExist();

	const setAccessToken = (accessToken: string) => {
		localStorage.setItem('accessToken', accessToken);
		dispatcher.setAccessToken(accessToken);
	};

	return {
		...state,
		...dispatcher,
		authenticated, // derivative state to check if token exists
		setAccessToken, // interceptor for the real `setAccessToken` dispatcher
	};
};

export default useAuthStore;

