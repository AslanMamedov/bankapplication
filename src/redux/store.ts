import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';
import someDataSlice from './someData/someDataSlice';
export const store = configureStore({
	reducer: { counter: counterReducer, someData: someDataSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
