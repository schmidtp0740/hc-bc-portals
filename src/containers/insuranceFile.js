import React, {Component} from 'react';
import {Table} from 'antd';
import {connect} from 'react-redux';
import * as actions from '../actions/insuranceActionIndex';

const columns = [
    {
        title: 'Name', dataIndex: 'name', key: 'name'
    }
];

class InsuranceFile extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.onePatient.data.patientID !== prevProps.onePatient.data.patientID) {
            this.props.fetchInsurance(this.props.onePatient.data.patientID);
        }
    }

    render() {
        if (this.props.rxHistory.rx.rxList) {

            let rxHistory = this.props.rxHistory.rx.rxList;

            return (
                <Table columns={columns} rowKey={rxHistory.rxid} dataSource={insurance}/>
            )
        }
        return (
            <div>No Data</div>
        )
    }

}

const mapStateToProps = ({onePatient}) => {
    return {onePatient};
};


export default connect(mapStateToProps, actions)(InsuranceFile);
