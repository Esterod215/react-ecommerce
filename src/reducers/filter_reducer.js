import {
	LOAD_PRODUCTS,
	SET_LISTVIEW,
	SET_GRIDVIEW,
	UPDATE_SORT,
	SORT_PRODUCTS,
	UPDATE_FILTERS,
	FILTER_PRODUCTS,
	CLEAR_FILTERS,
} from '../actions';

const filter_reducer = (state, action) => {
	switch (action.type) {
		case LOAD_PRODUCTS:
			return {
				...state,
				allProducts: [...action.payload],
				filteredProducts: [...action.payload],
			};
		case SET_GRIDVIEW:
			return { ...state, gridView: true };
		case SET_LISTVIEW:
			return { ...state, gridView: false };
		case UPDATE_SORT:
			return { ...state, sort: action.payload };
		case SORT_PRODUCTS:
			let tempProducts = [...state.filteredProducts];
			if (state.sort == 'price-lowest') {
				tempProducts = tempProducts.sort((a, b) => a.price - b.price);
				return { ...state, filteredProducts: tempProducts };
			} else if (state.sort == 'price-highest') {
				tempProducts = tempProducts.sort((a, b) => b.price - a.price);
				return { ...state, filteredProducts: tempProducts };
			} else if (state.sort == 'name-a') {
				tempProducts = tempProducts.sort((a, b) => {
					return a.name.localeCompare(b.name)
				});
				return { ...state, filteredProducts: tempProducts };
			} else {
				tempProducts = tempProducts.sort((a, b) => {
					return b.name.localeCompare(a.name)
				});
				return { ...state, filteredProducts: tempProducts };
			}

		default:
			return state;
	}
};

export default filter_reducer;
