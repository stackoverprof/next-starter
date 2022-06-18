import React from 'react';
import useAuthStore from '@core/redux/middlewares/auth';

const ComponentA = () => {
	const { setAccessToken } = useAuthStore();
	console.log('rerendering A');

	return (
		<div>
			ComponentA
			<button className="" onClick={() => setAccessToken('geju')}>
				trigger update
			</button>
		</div>
	);
};

export default ComponentA;

