// Import action types
import {SUBMITTING_RX, SUBMIT_RX, FAIL_SUBMIT_RX} from '../actions/types';

const INITIAL_STATE = {
    isFetching: false,
    res: "",
    error: ""
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SUBMITTING_RX:
            return {
                type: SUBMITTING_RX,
                payload: action.payload,
                message: "Loading Rx History.",
            };

        case SUBMIT_RX:
            return {
                type: SUBMIT_RX,
                payload: action.payload,
                message: "Rx History Loaded."
            };

        case FAIL_SUBMIT_RX:
            return {
                type: FAIL_SUBMIT_RX,
                payload: action.payload,
                message: "Submitting Rx failed."
            };


        default:
            return state;
    }
};