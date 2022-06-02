import auth from './slices/auth';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

// COMBINING ALL REDUCERS
const reducers = combineReducers({
	auth: auth.reducer,
});

// INITIALIZE STORE
const store = configureStore({
	reducer: reducers,
});

export default store;

// INFERRED STORE TYPE
export type StoreType = ReturnType<typeof store.getState>;
