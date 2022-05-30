import { AuthActionsType, AuthStateType } from '@core/@types/authRedux';
import { createSlice } from '@reduxjs/toolkit';

const initialState: AuthStateType = {
	accessToken: '',
};

const ReduxSlice = createSlice({
	name: 'AUTH',
	initialState,
	reducers: {
		setAccessToken: (state, action) => {
			state.accessToken = action.payload;
		},
		reset: () => initialState,
	},
});

export const actions: AuthActionsType = ReduxSlice.actions;
export default ReduxSlice.reducer;
