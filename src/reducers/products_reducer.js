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

const products_reducer = (state, action) => {
	switch(action.type) {
		case OPEN_SIDEBAR:
			return {...state, isSidebarOpen: true}
		case 	CLOSE_SIDEBAR:
			return {...state, isSidebarOpen: false}
		default:
			return state;
	}
}
export default products_reducer;