import axios from 'axios';


import envDATA from "../env.json"

const url = envDATA.SERVER + '/rx'



export const submitRX = (data) => {
  return (dispatch) => {
    console.log('value of payload: ', data);
    var sendurl = url + "/" + data.id
    console.log('value of sendurl: ', sendurl);
    console.log('INSIDE SUBMITRX');
    console.log("*****************");
    console.log("*****************");
    console.log("*****************");
    console.log('value of data.id, ', data.id);
    console.log("*****************");
    console.log("*****************");
    console.log("*****************");
    console.log('value of payload: ', data);
    console.log('value of payload: ', data['FirstName']);
    console.log(typeof(data));
    console.log(typeof(data.FirstName));
    axios.post(sendurl, {
      id: data.id,
      firstName: data.firstName,
      lastName: data.lastName,
      dob: data.dob,
      prescription: data.prescription,
      refills: data.refills,
      doctor: data.doctor,
      license: data.license,
      status: "prescribed",
      timestamp: data.timestamp,
      user: "Dr. Sloan",
      insurance: {
        company: data.insurance.company,
        policyId: data.insurance.policyId,
        expirationDate: data.insurance.expirationDate
      }
    })
    .then((response)=>{
      console.log('inside response from login auth and response : ', response);
      dispatch(AXIOSRETURNRXSUBMIT(response))
    })
    .catch(error => {
      console.log('inside error from login auth and response : ', error);
      dispatch(AXIOSERRORRRXSUBMIT(error))
    })
  }
}

//HERE ARE THE ACTIONS ->>> REDUCERS

export const AXIOSRETURNRXSUBMIT = (payload) => {
  console.log('inside AXIOSRETURN and payload ', payload);
  return{
    type: 'SUBMIT_RX',
    data: payload.data
  }
}

export const AXIOSERRORRRXSUBMIT = (payload) => {
  console.log('inside AXIOSERROR and payload ', payload);
  return{
    type: 'SUBMITRX_ERROR',
    data: payload
  }
}