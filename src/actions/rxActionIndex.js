import axios from 'axios';
import moment from 'moment';
import {
    FETCH_RX_HISTORY,
    SUBMIT_RX,
    FILL_RX,
    APPROVE_RX
} from './types';

const url = "http://129.213.11.204:8080/rx";
// var url = "http://"+window.location.hostname+":8080/rx";

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
        // data.expDate = moment(data.expDate).valueOf()
        // data.timestamp = moment().valueOf()
        const res = await axios.patch(url, data);

        dispatch({
            type: FILL_RX,
            payload: res.data
        })
    } catch (e) {
        console.error(e);
    }
};

export const approveRx = (data) => async (dispatch) => {
    try {
        const res = await axios.put(url, data);

        dispatch({
            type: APPROVE_RX,
            payload: res.data
        })
    } catch (e) {
        console.error(e);
    }
}