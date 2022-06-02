import auth from '../reducers/auth';
import { StoreType } from '../store';
import { UseAuthType } from '@core/@types/authRedux';
import { useAutoDispatcher } from '@core/hooks/useAutoDispatcher';
import { useSelector } from 'react-redux';

export const useAuth = (): UseAuthType => {
	const state = useSelector((store: StoreType) => store.auth);
	const dispatcher = useAutoDispatcher(auth.actions);

	// SUPPORTING FUNCTIONS
	const isTokenExist = () => {
		return Boolean(state.accessToken);
	};

	// EXPORTED HOOK PRODUCTS
	const authenticated = isTokenExist();

	const setAccessToken = (accessToken: string) => {
		// dispatcher interceptor for the real `setAccessToken`
		localStorage.setItem('accessToken', accessToken);
		dispatcher.setAccessToken(accessToken);
	};

	return {
		...state,
		...dispatcher,
		authenticated,
		setAccessToken,
	};
};
