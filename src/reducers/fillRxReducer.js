import {
    FILL_RX
} from "../actions/types";

const INITIAL_STATE = {
    data: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FILL_RX:
            return {...state, data: action.payload};
        default:
            return {...state};
    }
};

