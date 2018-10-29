import React, { Component } from 'react';
import { Select } from 'antd';
import { connect } from 'react-redux';
import * as actions from '../../actions/patientActionIndex';
import { fetchOnePatient } from "../../actions/patientActionIndex";

const Option = Select.Option.valueOf();
const handleChange = () => {
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
                    placeholder="Select users"
                    filterOption={false}
                    onChange={handleChange()}
                    style={{ width: '200px' }}>

                    {this.props.patient.data.persons.map(d => <Option value={`${d.firstName}/${d.lastName}`} key={d.id}>{d.firstName}</Option>)}
                </Select>
            )
        }
        return (<span>No Patients</span>);
    }
}

const mapStateToProps = ({ patient }) => {
    return { patient };
};


export default connect(mapStateToProps, actions)(DoctorSearch);