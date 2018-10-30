import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../../actions/patientActionIndex";
import {fetchOnePatient} from "../../actions/patientActionIndex";

 class PatientInfo extends Component {
     componentDidMount() {
         fetchOnePatient();
     }

     renderPatients = () => {
         console.log(this.props.patient);
         if (this.props.patient) {
         //     return this.props.patient.map(person => {
         //         return (
         //             <li key={person.id} className="person">
         //                 <span>{this.props.patient.firstName}</span>
         //                 <span>{this.props.patient.lastName}</span>
         //             </li>
         //         )
         //     });
         //
         // } else {
            return (
                <p>Hi</p>
            )
         }
     };


   render() {
       return (
           <div>
               {this.renderPatients()}
           </div>
       )
   }
 }



const mapStateToProps = ({ patient }) => {
    return { patient };
};


export default connect(mapStateToProps, actions)(PatientInfo);