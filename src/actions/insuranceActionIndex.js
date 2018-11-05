import axios from 'axios';
import {FETCH_INSURANCE} from './types';

// const url = 'http://129.213.66.90:8080/insurance';

const url = 'http://'+window.location.hostname+':8080/insurance';

export const fetchInsurance = (id) => async dispatch => {
    try {
        const res = await axios.get(`${url}/${id}`);
        dispatch({
            type: FETCH_INSURANCE,
            payload: res.data
        })
    } catch (e) {
        console.error(e);
    }
};
