import React, { createContext, useContext, useReducer, useEffect } from 'react';
import axios from 'axios';

import reducer from '../reducers/products_reducer';
import { products_url } from '../utils/constants';
import {
	OPEN_SIDEBAR,
	CLOSE_SIDEBAR,
	GET_PRODUCTS_BEGIN,
	GET_PRODUCTS_SUCCESS,
	GET_PRODUCTS_ERROR,
	GET_SINGLE_PRODUCT_BEGIN,
	GET_SINGLE_PRODUCT_SUCCESS,
	GET_SINGLE_PRODUCT_ERROR,
} from '../actions';

const initialState = {
	isSidebarOpen: false,
	products_loading: false,
	products_error: false,
	featured_products: [],
	products: [],
	single_product_loading: false,
	single_product_error: false,
	single_product: {},
};

const ProductsContext = createContext();

//create Provider Component to wrap application to access state in Products Context
export const ProductsProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const openSidebar = () => {
		dispatch({ type: OPEN_SIDEBAR });
	};
	const closeSidebar = () => {
		dispatch({ type: CLOSE_SIDEBAR });
	};

	const fetchProducts = async (url) => {
		dispatch({ type: GET_PRODUCTS_BEGIN });
		try {
			const response = await axios.get(url);
			dispatch({ type: GET_PRODUCTS_SUCCESS, payload: response.data });
		} catch (error) {
			dispatch({ type: GET_PRODUCTS_ERROR });
		}
	};

	const fetchProduct = async (url) => {
		dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });

		try {
			const response = await axios.get(url);
			dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: response.data });
		} catch (error) {
			dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
		}
	};

	useEffect(() => {
		fetchProducts(products_url);
	}, []);

	return (
		<ProductsContext.Provider
			value={{ ...state, openSidebar, closeSidebar, fetchProduct }}>
			{children}
		</ProductsContext.Provider>
	);
};

//create hook to right away give us the result of using useContext
export const useProductsContext = () => {
	return useContext(ProductsContext);
};
