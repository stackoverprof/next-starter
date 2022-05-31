import * as fetchers from '@cloud/fetchers';
import useSWR from 'swr';

const useUser = () => {
	const { data, mutate, error } = useSWR('api_user', fetchers.getUser);

	return {
		loading: !data && !error,
		error: error && error.status === 403,
		user: data ? data : {},
		mutate,
	};
};

export default useUser;

