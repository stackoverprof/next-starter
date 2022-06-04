import auth from '../slices/auth';
import { StoreType } from '../store';
import { UseAuthStoreType } from '@core/@types/auth';
import { useAutoDispatcher } from '@core/hooks/useAutoDispatcher';
import { useSelector } from 'react-redux';

/* 
	This custom hook will act as a `redux thunk` (middleware)
	to do all the necessary process here before mutating the redux state
	or make a derivative state from the real states
*/

export const useAuthStore = (): UseAuthStoreType => {
	const state = useSelector((store: StoreType) => store.auth);
	const dispatcher = useAutoDispatcher(auth.actions);

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

/* 
	Example when in use:

	const { accessToken, authenticated, setAccessToken } = useAuthStore();

	accessToken is a state
	authenticated is a derivative state
	setAccessToken is a setter

	note:
	no more need to `dispatch(setAccessToken())`
	you can just do `setAccessToken()`
*/
