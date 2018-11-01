import axios from 'axios';
import {FETCH_RX_HISTORY} from './types';

const url = "http://129.213.196.117:8080/rx";

export const fetchRxHistory = (id) => async dispatch => {
    try {
        const res = await axios.get(`${url}/${id}`);
        dispatch({
            type: FETCH_RX_HISTORY,
            payload: res.data
        });
    } catch (e) {
        console.error(e);
    }
};