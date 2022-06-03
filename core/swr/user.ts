/* Example use of SWR, data fetching library */

import useSWR from 'swr';
import { getUser } from '@core/api/fetchers';

const useUser = () => {
	const { data, mutate, error } = useSWR('api_user', getUser);

	return {
		loading: !data && !error,
		error: error && error.status === 403,
		user: data ? data : {},
		mutate,
	};
};

export default useUser;
