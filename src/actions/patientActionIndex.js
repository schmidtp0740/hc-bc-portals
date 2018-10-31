import axios from 'axios';
import {FETCH_ONE_PATIENT, FETCH_PATIENTS} from './types';

const url = "http://private-aad273-ironbankbcsapidoc.apiary-mock.com/pd";

export const fetchPatients = () => async dispatch => {
    try {
        const res = await axios.get(url);
        dispatch({
            type: FETCH_PATIENTS,
            payload: res.data
        });
    } catch (e) {
        console.error(e);
    }
};


export const fetchOnePatient = () => async dispatch => {
    try {
        const res = await axios.get("http://private-aad273-ironbankbcsapidoc.apiary-mock.com/pd/john");
        dispatch({
            type: FETCH_ONE_PATIENT,
            payload: res.data
        })
    } catch (e) {
        console.error(e);
    }
};
