import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiSlice } from './api/authApi';

export const RegistrationApi = apiSlice.injectEndpoints({
	// reducerPath: 'registrationApi',
	// baseQuery: fetchBaseQuery({ baseUrl: 'api/' }),
	endpoints: (build) => ({
		registration: build.mutation<any, any>({
			query: (data) => ({
				url: `registration`,
				method: 'POST',
				body: data,
			}),

			onQueryStarted(arg, api) {},

			transformResponse(baseQueryReturnValue, meta, arg) {
				// console.log(baseQueryReturnValue, meta, arg);
			},
		}),
	}),
});

export const { useRegistrationMutation } = RegistrationApi;
