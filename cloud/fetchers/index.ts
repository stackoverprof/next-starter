import api from '../lib/api';

export const getHello = async () => {
	return await api.get('/hello').then((res) => res.data);
};
