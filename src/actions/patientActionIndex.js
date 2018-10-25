import axios from 'axios';
import {FETCH_ONE_PATIENT, FETCH_PATIENTS} from './types';

const url = "http://private-aad273-ironbankbcsapidoc.apiary-mock.com/pd";

export const fetchPatients = () => async dispatch => {
    try {
        const res = await axios.get(url);
        dispatch({
            type: FETCH_PATIENTS,
            payload: res.data
        })
    } catch (e) {
        console.error(e);
    }
};


export const fetchOnePatient = (option) => async dispatch => {
    try {
        const res = await axios.get(`url/${option}`);
        dispatch({
            type: FETCH_ONE_PATIENT,
            payload: res.data
        })
        console.log(res.data + " Here");
    } catch (e) {
        console.error(e);
    }
};
