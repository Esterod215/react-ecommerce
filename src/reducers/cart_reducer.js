import React from "react";

import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS
} from "../actions";
import AddToCart from "../components/AddToCart";
import { CartItem } from "../components";

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
    case REMOVE_CART_ITEM:
      let newCart = state.cart.filter(item => {
        return item.id !== action.payload;
      });
      return { ...state, cart: newCart };
    case CLEAR_CART:
      return { ...state, cart: [], totalAmount: 0, totalItems: 0 };

    case TOGGLE_CART_ITEM_AMOUNT:
      let tempCart = state.cart.map(cartItem => {
        if (cartItem.id === action.payload.id) {
          if (action.payload.value === "+") {
            if (cartItem.amount + 1 <= cartItem.max) {
              return { ...cartItem, amount: cartItem.amount + 1 };
            }
          } else {
            if (cartItem.amount - 1 > 0) {
              return { ...cartItem, amount: cartItem.amount - 1 };
            }
          }
        }
        return cartItem;
      });
      return { ...state, cart: tempCart };
    default:
      return state;
  }
};

export default cartReducer;
