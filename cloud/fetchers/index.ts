import api from '../lib/api';

export const fetchHello = async () => {
	return await api.get('/hello').then((res) => res.data);
};
