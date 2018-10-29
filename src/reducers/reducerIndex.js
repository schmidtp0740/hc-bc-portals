import {combineReducers} from "redux";
import patient from "./patientReducer";
import rx from "./rxReducer";

export default combineReducers({
    patient,
    rx
});