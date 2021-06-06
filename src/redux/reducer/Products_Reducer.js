import { FETCH_PRODUCTS } from '../constants/constants'

const products = (productsState = [], action) => {
    switch (action.type) {
        case FETCH_PRODUCTS: return action.payLoad;
        default: return productsState;
    }
}

export default products;