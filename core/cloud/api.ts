/* This file will be the single source of all api calls */
import axios from 'axios';

// AXIOS INSTANCE AND INTERCEPTORS
const api = axios.create({ baseURL: '/api/' });

api.interceptors.request.use(
	async (config) => {
		const accessToken = localStorage.getItem('accessToken');
		return {
			...config,
			headers: {
				...config.headers,
				Authorization: `Bearer ${accessToken}`,
			},
		};
	},
	(err) => Promise.reject(err)
);

// API FETCHER FUNCTIONS
export const getUser = async () => {
	return await api
		.get('/me')
		.then((res) => res.data)
		.catch((err) => console.error(err));
};

