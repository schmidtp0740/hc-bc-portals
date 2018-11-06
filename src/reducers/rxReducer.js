// Import action types
import {FETCH_RX_HISTORY, FETCH_RX_ERROR} from '../actions/types';
import {LOCATION_CHANGE} from "react-router-redux";

const INITIAL_STATE = {
    rx: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
      case LOCATION_CHANGE:
          return INITIAL_STATE;

      case FETCH_RX_HISTORY:
          return {...state, rx: action.payload};

      case FETCH_RX_ERROR:
        return state = action.payload;

    default:
      return state;
  }
};