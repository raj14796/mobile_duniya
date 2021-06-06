import { SET_ACTIVE_STEP } from '../constants/constants'

const activeStep = (activeStepState=0,action) => {
    switch (action.type) {
        case SET_ACTIVE_STEP: return action.payLoad;
        default: return activeStepState;
    }
}

export default activeStep;