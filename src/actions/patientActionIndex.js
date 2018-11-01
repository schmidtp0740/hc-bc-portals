import axios from 'axios';
import {FETCH_ONE_PATIENT, FETCH_PATIENTS} from './types';

const url = "http://129.213.196.117:8080/pd";

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


export const fetchOnePatient = (id) => async dispatch => {
    try {
        const res = await axios.get(url+"/"+id);
        dispatch({
            type: FETCH_ONE_PATIENT,
            payload: res.data
        })
    } catch (e) {
        console.error(e);
    }
};
