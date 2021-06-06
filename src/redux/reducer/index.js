import { combineReducers } from 'redux'
import cart from './Cart_Reducer';
import products from './Products_Reducer'
import checkoutToken from './Token_Reducer'
import shippingCountries from './ShippingCountries_Reducer'
import shippingSubdivisions from './Shipping_Subdivisions_Reducer'
import shippingOptions from './Shipping_Options_Reducer'
import activeStep from './ActiveStep_Reducer'
import shippingData from './Shipping_Data_Reducer'
import orderData from './Order_Reducer'

export default combineReducers({
    products,
    cart,
    checkoutToken,
    shippingCountries,
    shippingSubdivisions,
    shippingOptions,
    activeStep,
    shippingData,
    orderData
})