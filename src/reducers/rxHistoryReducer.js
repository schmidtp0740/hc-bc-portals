// Import action types
import {FETCH_HISTORY_ERROR, FETCH_RX_HISTORY} from '../actions/types';

const INITIAL_STATE = {
    rx: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
      case FETCH_RX_HISTORY:
          return {...state, rx: action.payload};
      case FETCH_HISTORY_ERROR:
          return {...state, rx: action.payload};
    default:
      return state;
  }
};