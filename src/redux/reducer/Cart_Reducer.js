import { FETCH_CART, ADD_TO_CART, UPDATE_CART_QUANTITY, Remove_Item_From_Cart, Empty_The_Cart, REFRESH_CART } from '../constants/constants'

const cart = (cartState = {}, action) => {
    switch (action.type) {
        case FETCH_CART:
        case ADD_TO_CART:
        case UPDATE_CART_QUANTITY:
        case Remove_Item_From_Cart:
        case Empty_The_Cart: 
        case REFRESH_CART: return action.payLoad;
        default: return cartState;
    }
}
export default cart;