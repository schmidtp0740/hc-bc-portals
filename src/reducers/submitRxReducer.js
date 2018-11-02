// Import action types
import {SUBMIT_RX, SUBMIT_RX_ERROR} from '../actions/types';

const INITIAL_STATE = {
    rx: ""
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SUBMIT_RX:
            return {...state, res: action.payload};
        case SUBMIT_RX_ERROR:
            return state = action.payload;
        default:
            return state;
    }
};