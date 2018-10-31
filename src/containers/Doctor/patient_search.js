import React, { Component } from 'react';
import { Select } from 'antd';
import { connect } from 'react-redux';
import * as actions from '../../actions/patientActionIndex';

const Option = Select.Option;

class DoctorSearch extends Component {
    componentDidMount() {
        this.props.fetchPatients();
    }

    handleChange = (value) => {
        this.props.fetchOnePatient(value);
    }


    render() {
        // if (this.props.allPatients) {
        //     console.log(this.props.allPatients);
        //     // let options = this.props.allPatients.data.map(d => <Option value={`${d.firstName}/${d.lastName}`}key={d.id}>{d.firstName}</Option>);
            return (
                <div>
                    <Select defaultValue="Select users" onChange={this.handleChange} style={{width: '200px'}}>
                        <Option value="John" key="John">John</Option>
                        <Option value="Mary" key="Mary">Mary</Option>
                    </Select>
                </div>
            )
        }
}

const mapStateToProps = ({allPatients, onePatient}) => {
    return {allPatients, onePatient};
};


export default connect(mapStateToProps, actions)(DoctorSearch);