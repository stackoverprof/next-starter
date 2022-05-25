import { AuthActionsType, AuthStateType } from '@core/@types/authRedux';
import { createSlice } from '@reduxjs/toolkit';

const initialState: AuthStateType = {
	authenticated: false,
	access_token: 'vfjvidfjvkn',
};

const ReduxSlice = createSlice({
	name: 'AUTH',
	initialState,
	reducers: {
		setToken: (state, action) => {
			state.access_token = action.payload;
			state.authenticated = true;
		},
		removeToken: (state) => {
			state.access_token = '';
			state.authenticated = false;
		},
	},
});

export const actions: AuthActionsType = ReduxSlice.actions;
export default ReduxSlice.reducer;
