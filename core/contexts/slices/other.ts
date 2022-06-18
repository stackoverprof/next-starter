import { useState } from 'react';

const OtherStore = () => {
	const [accessToken, setAccessToken] = useState('');

	return {
		state: { accessToken },
		dispatcher: { setAccessToken },
	};
};

export default OtherStore;

