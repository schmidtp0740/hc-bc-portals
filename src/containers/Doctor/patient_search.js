import React, { Component } from 'react';
import { Select } from 'antd';
import { connect } from 'react-redux';
import * as actions from '../../actions/patientActionIndex';

const Option = Select.Option;

class DoctorSearch extends Component {
    componentDidMount() {
        this.props.fetchPatients();
    }

    handleChange() {
        this.fetchOnePatient();
    }


    render() {
        if (this.props.data) {
            return (
                <Select
                    mode="default"
                    placeholder="Select users"
                    filterOption={false}
                    style={{width: '200px'}}
                    onChange={this.handleChange}>
                    {this.props.data.persons.map(d => <Option value={`${d.firstName}/${d.lastName}`}>${d.firstName}</Option>)}

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