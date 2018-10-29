import {combineReducers} from "redux";
import allPatients from "./patientReducer";
import onePatient from "./onePatientReducer";
import rx from "./rxReducer";

export default combineReducers({
    onePatient,
    allPatients,
    rx
});