import { commerce } from '../../lib/commerce';
import * as constants from '../constants/constants'

export const fetchProducts = () => async (dispatch) => {
    try {
        const res = await commerce.products.list();
        // console.log("FETCH_PRODUCTS : ");
        // console.log(res.data);
        dispatch({
            type: constants.FETCH_PRODUCTS,
            payLoad: res.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const fetchCart = () => async (dispatch) => {
    try {
        const res = await commerce.cart.retrieve();
        // console.log("FETCH_CART : ");
        // console.log(res);
        dispatch({
            type: constants.FETCH_CART,
            payLoad: res
        })
    } catch (error) {
        console.log(error)
    }
}

export const addToCart = (productId, quantity) => async (dispatch) => {
    try {
        const res = await commerce.cart.add(productId, quantity);
        // console.log("ADD_TO_CART : ");
        // console.log(res.cart);
        dispatch({
            type: constants.ADD_TO_CART,
            payLoad: res.cart
        })
    } catch (error) {
        console.log(error)
    }
}

export const updateCartQuantity = (productId, quantity1) => async (dispatch) => {
    try {
        const res = await commerce.cart.update(productId, { quantity: quantity1 });
        // console.log("UPDATE_CART_QUANTITY : ");
        // console.log(res.cart);
        dispatch({
            type: constants.UPDATE_CART_QUANTITY,
            payLoad: res.cart
        })
    } catch (error) {
        console.log(error)
    }
}

export const removeItemFromCart = (productId) => async (dispatch) => {
    try {
        const res = await commerce.cart.remove(productId);
        // console.log("Remove_Item_From_Cart : ");
        // console.log(res.cart);
        dispatch({
            type: constants.Remove_Item_From_Cart,
            payLoad: res.cart
        })
    } catch (error) {
        console.log(error)
    }
}

export const emptyTheCart = () => async (dispatch) => {
    try {
        const res = await commerce.cart.empty();
        // console.log("Empty_The_Cart : ");
        // console.log(res.cart);
        dispatch({
            type: constants.Empty_The_Cart,
            payLoad: res.cart
        })
    } catch (error) {
        console.log(error)
    }
}
//--------------------------------CHECKOUT------------------------------------------------------------------

export const generateToken = (cartId) => async (dispatch) => {
    try {
        const res = await commerce.checkout.generateToken(cartId, { type: 'cart' });
        // console.log("GENERATE_TOKEN : ");
        // console.log(res);
        dispatch({
            type: constants.GENERATE_TOKEN,
            payLoad: res
        })
    } catch (error) {
        console.log(error)
    }
}

export const fetchShippingCountries = (checkoutTokenId) => async (dispatch) => {
    try {
        const res = await commerce.services.localeListShippingCountries(checkoutTokenId);
        // console.log("Fetch_Shipping_Countries : ");
        // console.log(Object.entries(res.countries));
        dispatch({
            type: constants.Fetch_Shipping_Countries,
            payLoad: Object.entries(res.countries)
        })
    } catch (error) {
        console.log(error);
    }
}

export const fetchShippingSubdivisions = (countryCode) => async (dispatch) => {
    try {
        const res = await commerce.services.localeListSubdivisions(countryCode);
        // console.log("Fetch_Shipping_SUBDIVISIONS : ");
        // console.log(Object.entries(res.subdivisions));
        dispatch({
            type: constants.Fetch_Shipping_SUBDIVISIONS,
            payLoad: Object.entries(res.subdivisions)
        })
    } catch (error) {
        console.log(error);
    }
}

export const fetchshippingOptions = (checkoutTokenId, shippingCountryCode, shippingSubdivisionCode) => async (dispatch) => {
    try {
        const res = await commerce.checkout.getShippingOptions(checkoutTokenId, { country: shippingCountryCode, region: shippingSubdivisionCode });
        // console.log("Fetch_Shipping_OPTIONS : ");
        // console.log(res);
        dispatch({
            type: constants.Fetch_Shipping_OPTIONS,
            payLoad: res
        })
    } catch (error) {
        console.log(error);
    }
}

export const setActiveStep = (activeStep) => {
    return{
        type: constants.SET_ACTIVE_STEP,
        payLoad: activeStep
    }
}

export const setShippingData = (shippingData) => {
    console.log("Shipping Data : ");
    console.log(shippingData)
    return {
        type: constants.SET_SHIPPING_DATA,
        payLoad: shippingData
    }
}

export const captureCheckout = (checkoutTokenId,newOrder) => async (dispatch) => {
    try {
        const res = await commerce.checkout.capture(checkoutTokenId,newOrder);
        console.log("CAPTURE_CHECKOUT : ");
        console.log(res);
        dispatch({
            type: constants.CAPTURE_CHECKOUT,
            payLoad: res
        })
    } catch (error) {
        console.log(error);
    }
}

export const refreshCart = () => async (dispatch) => {
    try {
        const res = await commerce.cart.refresh();
        console.log("REFRESH_CART : ");
        console.log(res)
        dispatch({
            type: constants.REFRESH_CART,
            payLoad: res
        })
    } catch (error) {
        console.log(error);
    }
}