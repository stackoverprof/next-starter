import axios from 'axios';

const api = axios.create();

api.defaults.baseURL = process.env.API_BASE_URL || '/api/';

// Request interceptor for API calls - sending accessToken on every fetch
api.interceptors.request.use(
	async (config) => {
		const accessToken = localStorage.getItem('accessToken');
		return {
			...config,
			headers: {
				...config.headers,
				Authorization: `Bearer ${accessToken}`,
				Accept: 'application/json',
				'Content-Type': 'application/x-www-form-urlencoded',
			},
		};
	},
	(error) => {
		Promise.reject(error);
	}
);

export default api;
