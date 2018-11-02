import React, { Component } from 'react';
import { Table } from 'antd';
import {connect} from 'react-redux';
import * as actions from '../actions/rxActionIndex';

const columns = [
    {
        title: 'Prescriber', dataIndex: 'doctor', key: 'doctor'
    },
    {
        title: 'License', dataIndex: 'docLicense', key: 'license'
    },
    {
        title: 'Prescription', dataIndex: 'prescription', key: 'prescription'
    },
    {
        title: 'Refills', dataIndex: 'refills', key: 'refills'
    },
    {
        title: 'Exp', dataIndex: 'expDate', key: 'exp'
    },
    {
        title: 'Status', dataIndex: 'status', key: 'status'
    }
];


class RxHistory extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.onePatient.data.patientID !== prevProps.onePatient.data.patientID) {
            this.props.fetchRxHistory(this.props.onePatient.data.patientID);
        }
    }



  render() {
        if (this.props.rxHistory) {
            return(
                <Table columns={columns} dataSource={this.props.rxHistory.rx.rxList} />
            )
        }
        return(
            <div>No Data</div>
        )
  }

}

const mapStateToProps = ({ onePatient, rxHistory }) => {
    return { onePatient, rxHistory };
};


export default connect(mapStateToProps, actions)(RxHistory);
