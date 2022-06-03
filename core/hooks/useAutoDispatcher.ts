/* This hook simplify the need for useDispatch once and for all */

import { useDispatch } from 'react-redux';

const mapper = (obj, func): any => {
	return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, func(v)]));
};

export const useAutoDispatcher = (actions) => {
	const dispatch = useDispatch();
	return mapper(actions, (action) => (val) => dispatch(action(val)));
};
