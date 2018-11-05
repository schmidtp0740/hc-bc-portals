import {LOCATION_CHANGE} from 'react-router-redux';
import {
    FETCH_ONE_PATIENT
} from "../actions/types";

const INITIAL_STATE = {
    data: ""
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOCATION_CHANGE:
            return INITIAL_STATE;
        case FETCH_ONE_PATIENT:
            return {...state, data: action.payload};
        default:
            return {...state};
    }
};