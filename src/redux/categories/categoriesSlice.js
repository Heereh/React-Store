import { createSlice } from '@reduxjs/toolkit';
import { Categories } from '../../data/Categories';

export const categoriesSlice = createSlice({
	name: 'categories',
	initialState: {
		categories: Categories,
		selectedCategory: null,
	},
	reducers: {
		selectCategory: (state, action) => {
			console.log(action.payload);
			console.log(state);
			console.log(state.selectedCategory);
			console.log(action.payload);
			return {
				...state,
				selectedCategory:
					action.payload !== state.selectedCategory ? action.payload : null,
			};
		},
		categories: (state) => {
			return state;
		},
	},
});

export const { selectCategory, categories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
