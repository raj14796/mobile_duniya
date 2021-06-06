import { Fetch_Shipping_SUBDIVISIONS } from '../constants/constants'

const shippingSubdivisions = (shippingSubdivisionsState=[],action) => {
    switch (action.type) {
        case Fetch_Shipping_SUBDIVISIONS: return action.payLoad;
        default: return shippingSubdivisionsState;
    }
}

export default shippingSubdivisions;
