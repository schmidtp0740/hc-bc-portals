import {combineReducers} from 'redux';
import allPatients from './allPatientsReducer';
import onePatient from './onePatientReducer';
import rxHistory from './rxReducer';
import submitRx from './submitRxReducer';
import insurance from './insuranceReducer';

export default combineReducers({
    onePatient,
    allPatients,
    rxHistory,
    submitRx,
    insurance
});