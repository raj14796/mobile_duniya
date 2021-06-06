import { CAPTURE_CHECKOUT } from '../constants/constants'

const orderData = (orderState=null, action) => {
    switch(action.type){
        case CAPTURE_CHECKOUT: return action.payLoad;
        default: return orderState;
    }
}

export default orderData;