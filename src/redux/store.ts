import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';
import someDataSlice from './someData/someDataSlice';
import { RegistrationApi } from './registrationApi';
export const store = configureStore({
	reducer: {
		counter: counterReducer,
		someData: someDataSlice,
		[RegistrationApi.reducerPath]: RegistrationApi.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(RegistrationApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
