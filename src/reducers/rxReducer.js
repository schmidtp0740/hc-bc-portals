// Import action types
import {SUBMIT_RX, SUBMIT_RX_ERROR} from '../actions/types';

const INITIAL_STATE = {
    rx: "",
    isFetching: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
      case SUBMIT_RX:
      console.log('value of FILL_RX: ', action.data);
      return {...state, rx: action.data, isFetching: false};
    case SUBMIT_RX_ERROR:
      return state = action.data;
    default:
      return state;
  }
};