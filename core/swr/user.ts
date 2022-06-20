/* Example use of SWR, data fetching library */

import useSWR from 'swr';
import { getUser } from '@core/cloud/api';

const useUserData = () => {
	const { data, mutate, error } = useSWR('api_user', getUser);

	return {
		loading: !data && !error,
		error: error && error.status === 403,
		user: data ? data : {},
		mutate,
	};
};

export default useUserData;
