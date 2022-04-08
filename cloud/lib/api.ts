import axios from 'axios';

const api = axios.create();

api.defaults.baseURL = process.env.API_BASE_URL || '/api/';

// Request interceptor for API calls
api.interceptors.request.use(
	async (config) => {
		return { ...config };
	},
	(error) => {
		Promise.reject(error);
	}
);

export default api;
