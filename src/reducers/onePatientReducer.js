import {
    FETCH_ONE_PATIENT
} from "../actions/types";

const INITIAL_STATE = {
    data: "",
    isFetching: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_ONE_PATIENT:
            console.log(action.payload);
            return {...state, isFetching: true, data: action.payload};
        default:
            return {...state, isFetching: false};
    }
};