/* useState but multiple states */

import { useState } from 'react';

type ProductTuple<T> = [T, (any) => void, () => void];

const useMultiState = <T>(initialState: T): ProductTuple<T> => {
	const [_state, _setState] = useState<T>(initialState);

	const state = _state;

	const setState = (obj) => _setState((prev) => ({ ...prev, ...obj }));

	const resetState = () => _setState(initialState);

	return [state, setState, resetState];
};

export default useMultiState;
