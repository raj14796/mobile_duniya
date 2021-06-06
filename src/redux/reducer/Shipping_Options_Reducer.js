import { Fetch_Shipping_OPTIONS } from '../constants/constants'

const shippingOptions = (shippingOptionsState=[],action) => {
    switch (action.type) {
        case Fetch_Shipping_OPTIONS: return action.payLoad;
        default: return shippingOptionsState;
    }
}

export default shippingOptions;
