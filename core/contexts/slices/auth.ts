import { useState } from 'react';

const AuthStore = () => {
	const [accessToken, setAccessToken] = useState('');

	return {
		state: { accessToken },
		dispatcher: { setAccessToken },
	};
};

export default AuthStore;

