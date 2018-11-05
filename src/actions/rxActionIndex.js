import axios from 'axios';
import {
    FETCH_RX_HISTORY,
    SUBMIT_RX,
    FILL_RX,
    // BILL_RX
} from './types';

const url = "http://129.213.66.90:8080/rx";

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

export const submitRx = (data) => async (dispatch) => {
    try {
        const res = await axios.post(url, data);

        dispatch({
            type: SUBMIT_RX,
            payload: res.data
        })
    } catch (e) {
        console.error(e);
    }
};

export const fillRx = (data) => async (dispatch) => {
    try {
        const res = await axios.patch(url, data);

        dispatch({
            type: FILL_RX,
            payload: res.data
        })
    } catch (e) {
        console.error(e);
    }
};