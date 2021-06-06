import { Fetch_Shipping_Countries } from '../constants/constants'

const shippingCountries = (shippingCountriesState=[],action) => {
    switch (action.type) {
        case Fetch_Shipping_Countries: return action.payLoad;
        default: return shippingCountriesState;
    }
}

export default shippingCountries;
