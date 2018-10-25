import {
    FETCH_ONE_PATIENT,
    FETCH_PATIENTS
} from "../actions/types";

const INITIAL_STATE = {
    data: "",
    isFetching: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_PATIENTS:
            return {...state, isFetching: true, data: action.payload};
        case FETCH_ONE_PATIENT:
            return {...state, isFetching: true, data: action.payload};
        default:
            return {...state, isFetching: false};
    }
};

