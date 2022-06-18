import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	accessToken: '',
};

const OtherSlice = createSlice({
	name: 'Other',
	initialState,
	reducers: {
		setAccessToken: (state, action) => {
			state.accessToken = action.payload;
		},
		reset: () => initialState,
	},
});

export default OtherSlice;
