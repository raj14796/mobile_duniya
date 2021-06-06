import { SET_SHIPPING_DATA } from '../constants/constants'

const shippingData = (shippingDataState=null,action) => {
    switch(action.type){
        case SET_SHIPPING_DATA: return action.payLoad;
        default: return shippingDataState
    }
}

export default shippingData;