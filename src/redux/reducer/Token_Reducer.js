import { GENERATE_TOKEN } from '../constants/constants'

const checkoutToken = (checkoutTokenState = null, action) => {
    switch(action.type){
        case GENERATE_TOKEN: return action.payLoad;
        default: return checkoutTokenState;
    }
}

export default checkoutToken;