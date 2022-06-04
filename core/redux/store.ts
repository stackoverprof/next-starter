import AuthSlice from './slices/auth';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

// INFERRED STORE TYPE
export type StoreType = ReturnType<typeof store.getState>;

// COMBINING ALL REDUCERS
const reducer = combineReducers({
	auth: AuthSlice.reducer,
});

// INITIALIZE STORE
const store = configureStore({ reducer });

export default store;
