import auth from './reducers/auth';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

export const reducers = combineReducers({
	auth: auth.reducer,
});

const store = configureStore({
	reducer: reducers,
});

export default store;

export type StoreType = ReturnType<typeof store.getState>;
