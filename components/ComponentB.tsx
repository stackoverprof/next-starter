import React from 'react';
import useOtherStore from '@core/redux/middlewares/other';

const ComponentB = () => {
	useOtherStore();
	console.log('rerendering B');

	return <div>ComponentB {}</div>;
};

export default ComponentB;

