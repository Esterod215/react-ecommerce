import React, { useEffect, useContext, useReducer } from 'react';
import reducer from '../reducers/filter_reducer';
import {
	LOAD_PRODUCTS,
	SET_GRIDVIEW,
	SET_LISTVIEW,
	UPDATE_SORT,
	SORT_PRODUCTS,
	UPDATE_FILTERS,
	FILTER_PRODUCTS,
	CLEAR_FILTERS,
} from '../actions';
import { useProductsContext } from './products_context';

const initialState = {
	allProducts: [],
	filteredProducts: [],
	gridView: true,
	sort: 'price-lowest',
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const { products } = useProductsContext();

	const setGridView = () => {
		dispatch({ type: SET_GRIDVIEW });
	};
	const setListView = () => {
		dispatch({ type: SET_LISTVIEW });
	};

	const changeSort = (e) => {
		dispatch({ type: UPDATE_SORT, payload: e.target.value });
	};

	useEffect(() => {
		dispatch({ type: LOAD_PRODUCTS, payload: products });
	}, [products]);

	return (
		<FilterContext.Provider
			value={{ ...state, setGridView, setListView, changeSort }}>
			{children}
		</FilterContext.Provider>
	);
};
// make sure use
export const useFilterContext = () => {
	return useContext(FilterContext);
};
