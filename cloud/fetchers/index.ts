import api from '../lib/api';

export const getUser = async () => {
	return await api
		.get('/me')
		.then((res) => res.data)
		.catch((err) => console.error(err));
};
