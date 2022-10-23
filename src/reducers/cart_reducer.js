import React from "react";

import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS
} from "../actions";
import AddToCart from "../components/AddToCart";

const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { id, color, amount, product } = action.payload;
      const itemCheck = state.cart.find(cartItem => cartItem.id == id + color);

      if (itemCheck) {
        const tempCart = state.cart.map(cartItem => {
          if (cartItem.id === id + color) {
            let newAmount = cartItem.amount + amount;
            if (newAmount > cartItem.max) {
              newAmount = cartItem.max;
            }
            return { ...cartItem, amount: newAmount };
          } else {
            return cartItem;
          }
        });
        return { ...state, cart: tempCart };
      } else {
        const cartItem = {
          id: id + color,
          name: product.name,
          color: color,
          amount: amount,
          image: product.images[0].url,
          price: product.price,
          max: product.stock
        };
        return { ...state, cart: [...state.cart, cartItem] };
      }
    default:
      return state;
  }
};

export default cartReducer;
