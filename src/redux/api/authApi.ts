import { BaseQueryFn, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery: BaseQueryFn = fetchBaseQuery({
	baseUrl: 'api/',
	credentials: 'include',
	prepareHeaders: (headers, { getState }) => {
		// console.log('HEADERS', headers);

		// if (token) {
		// 	headers.set('authorization', `Bearer ${token}`);
		// }
		headers.set('authorization', `Bearer ${'ASLAN'}`);
		return headers;
	},
});

const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
	// console.log(args, api, extraOptions);
	let result = await baseQuery(args, api, extraOptions);

	// if (result?.error?.originalStatus === 401) {

	// 	// Send refresh token to get new access token;
	// 	const refreshResult = await baseQuery('/api/auth/refresh', api, extraOptions);

	// 	if (refreshResult?.data) {
	// 		const user = api.getState().auth.user;

	// 		// console.log(api.dispath(setCredentials({ ...refreshResult.data, user })));
	// 		// api.dispath(setCredentials({ ...refreshResult.data, user }));
	// 		// Retry the original query with new access token
	// 		result = await baseQuery(args, api, extraOptions);
	// 		console.log('Result=>', result);
	// 	} else {
	// 		// api.dispath(logOut());
	// 	}
	// }
	return result;
};

export const apiSlice = createApi({
	baseQuery: baseQueryWithReauth,
	endpoints: (builder) => ({}),
});
