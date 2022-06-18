import auth from '../slices/auth';
import { StoreType } from '../store';
import { useAutoDispatcher } from '@core/hooks/useAutoDispatcher';
import { useSelector } from 'react-redux';

/* 
	This custom hook will act as a `redux thunk` (middleware)
	to do all the necessary process here before mutating the redux state
	or make a derivative state from the real states
*/

const useOtherStore = (): any => {
	const state = useSelector((store: StoreType) => store.other);
	const dispatcher = useAutoDispatcher(auth.actions);

	return {
		...state,
		...dispatcher,
	};
};

/* 
	Example when in use:

	const { accessToken, authenticated, setAccessToken } = useOtherStore();

	accessToken is a state
	authenticated is a derivative state
	setAccessToken is a setter

	note:
	no more need to `dispatch(setAccessToken())`
	you can just do `setAccessToken()`
*/
export default useOtherStore;
