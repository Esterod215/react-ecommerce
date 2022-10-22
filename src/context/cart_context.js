import React, { useEffect, createContext, useContext, useReducer } from 'react';
import reducer from '../reducers/cart_reducer';
import {
	ADD_TO_CART,
	REMOVE_CART_ITEM,
	TOGGLE_CART_ITEM_AMOUNT,
	CLEAR_CART,
	COUNT_CART_TOTALS,
} from '../actions';

const initialState = {
	cart: [],
	totalItems: 0,
	totalAmount: 0,
	shippingFee: 500,
};

const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<CartContext.Provider value={{ ...state }}>{children}</CartContext.Provider>
	);
};

export const useCartContext = () => {
	return useContext(CartContext);
};