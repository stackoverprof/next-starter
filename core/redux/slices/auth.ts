import { AuthStoreType } from '@core/@types/authRedux';
import { createSlice } from '@reduxjs/toolkit';

const initialState: AuthStoreType = {
	accessToken: '',
};

const AuthSlice = createSlice({
	name: 'Auth',
	initialState,
	reducers: {
		setAccessToken: (state, action) => {
			state.accessToken = action.payload;
		},
		reset: () => initialState,
	},
});

export default AuthSlice;
