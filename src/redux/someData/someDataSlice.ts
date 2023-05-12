import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface SomeDataState {
	data: any;
}

const initialState: SomeDataState = {
	data: {},
};

export const someDataSlice = createSlice({
	name: 'someData',
	initialState,
	reducers: {
		getData: (state) => {
			state.data;
		},
		setData: (state, action: PayloadAction<any>) => {
			state.data = action.payload;
			return state;
		},
	},
});

export const { getData, setData } = someDataSlice.actions;

export const selectData = (state: RootState) => state.someData.data;

export default someDataSlice.reducer;
