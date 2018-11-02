import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../actions/patientActionIndex";
import '../css/PatientInfo.css';

 class PatientInfo extends Component {

     renderPatient = () => {
         if (this.props.onePatient.data) {
             let patient = this.props.onePatient.data;
             return (
                     <div>
                        <div className="patient-name">{patient.firstName} {patient.lastName}</div>
                        <div className="patient-dob">Date of birth: {patient.dob}</div>
                        <div className="patient-address">Address: {patient.address}</div>
                        <div className="patient-phone">Phone: {patient.phone}</div>
                     </div>
             )
         }
         return (
             <p>Select A Patient Above</p>
         )
     };


   render() {
       return (
           <div className='patient-info'>
            {this.renderPatient()}
           </div>
       );
   };
 }

const mapStateToProps = ({ onePatient }) => {
    return { onePatient };
};


export default connect(mapStateToProps, actions)(PatientInfo);