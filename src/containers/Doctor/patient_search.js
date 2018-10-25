import React, { Component } from 'react';
import { Select } from 'antd';
import { connect } from 'react-redux';
import * as actions from '../../actions/patientActionIndex';
import {fetchOnePatient} from "../../actions/patientActionIndex";

const Option = Select.Option.valueOf();
const handleChange = () => {
    console.log(Option);
    fetchOnePatient(Option)
};

class DoctorSearch extends Component {
    componentDidMount() {
        this.props.fetchPatients();
    }

    render() {
        if (this.props.patient.data) {
            return (
                <Select
                    mode="default"
                    disabled={false}
                    placeholder="Select users"
                    filterOption={false}
                    onChange={handleChange()}
                    style={{ width: '100%' }}
                >
                    {this.props.patient.data.persons.map(d => <Option value={`${d.firstName}/${d.lastName}`} key={d.id}>{d.firstName}</Option>)}
                </Select>
            )
        }
        return (
            <div>nada</div>
        );
    }
}


//     populateList() {
//         if (this.props.data) {
//             return this.props.data.persons.map(person => {
//                 return (
//                     <ul>
//                         <li key={this.props.data.person.id}>
//                             {this.props.data.person.firstName}{this.props.data.person.lastName}
//                         </li>
//                     </ul>
//                 );
//             })
//         }
//         return (
//             <ul>No Patients</ul>
//         )
//     }
//
//     render() {
//             return (
//                 this.populateList()
//             )
//
//         }
// }

const mapStateToProps = ({ patient }) => {
    return { patient };
};


export default connect(mapStateToProps, actions)(DoctorSearch);