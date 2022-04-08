import axios from 'axios';

const api = axios.create();

api.defaults.baseURL = process.env.API_BASE_URL || '/api/';

// Request interceptor for API calls
api.interceptors.request.use(
	async (config) => {
		const access_token = 'sample_token_anr8xb27xb8b92';

		const headers = {
			Authorization: `Bearer ${access_token}`,
			Accept: 'application/json',
			'Content-Type': 'application/x-www-form-urlencoded',
		};

		return { ...config, headers };
	},
	(error) => {
		Promise.reject(error);
	}
);

export default api;
