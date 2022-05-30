import { actions } from '../reducers/auth';
import { RootState } from '../store';
import { UseAuthType } from '@core/@types/authRedux';
import { useAutoDispatcher } from '../root';
import { useSelector } from 'react-redux';

export const useAuth = (): UseAuthType => {
	const state = useSelector((state: RootState) => state.auth);
	const dispatcher = useAutoDispatcher(actions);

	// SUPPORTING FUNCTIONS
	const isTokenExist = () => {
		return Boolean(state.accessToken);
	};

	// EXPORTED HOOK PRODUCTS

	const authenticated = isTokenExist();

	return {
		...state,
		...dispatcher,
		authenticated,
	};
};
