import authReducer from './reducers/auth';
import { combineReducers } from '@reduxjs/toolkit';
import { mapper } from '@core/utils/mapper';
import { useDispatch } from 'react-redux';

export const rootReducer = combineReducers({
	auth: authReducer,
});

export const useAutoDispatcher = (actions) => {
	const dispatch = useDispatch();
	return mapper(actions, (action) => (val) => dispatch(action(val)));
};
