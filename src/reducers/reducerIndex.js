import {combineReducers} from "redux";
import allPatients from "./allPatientsReducer";
import onePatient from "./onePatientReducer";
import rxHistory from "./rxReducer";

export default combineReducers({
    onePatient,
    allPatients,
    rxHistory
});