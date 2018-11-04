import axios from 'axios';
import {FETCH_INSURANCE} from './types';

const url = 'http://129.213.66.90:8080/insurance';

export const fetchInsurance = () => async dispatch => {
    try {
        const res = await axios.get(url);
        dispatch({
            type: 'FETCH_INSURANCE',
            payload: res.data
        })
    } catch (e) {
        console.error(e);
    }
};