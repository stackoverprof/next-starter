import { useContext } from 'react';
import { AppContext } from '..';

const useOtherStore = () => {
	const state = useContext(AppContext).auth.state;
	const dispatcher = useContext(AppContext).auth.dispatcher;

	return {
		...state,
		...dispatcher,
	};
};

export default useOtherStore;

