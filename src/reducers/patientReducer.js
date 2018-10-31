import {
    FETCH_PATIENTS
} from "../actions/types";

const INITIAL_STATE = {
    data: '',
    isFetching: true
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_PATIENTS:
            return {...state, isFetching: false, data: action.payload};
        default:
            return {...state, isFetching: false};
    }
};

