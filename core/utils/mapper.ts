export const mapper = (obj, func): any => {
	return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, func(v)]));
};

