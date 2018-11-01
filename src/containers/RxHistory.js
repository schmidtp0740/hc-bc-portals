import React, { Component } from 'react';
import { Table } from 'antd';
import {connect} from 'react-redux';
import * as actions from '../actions/rxActionIndex';

const columns = [
    {
        title: 'Doctor', dataIndex: 'doctor', key: 'doctor'
    },
    {
        title: 'License', dataIndex: 'license', key: 'license'
    },
    {
        title: 'Prescription', dataIndex: 'prescription', key: 'prescription'
    },
    {
        title: 'Refills', dataIndex: 'refills', key: 'refills'
    },
    {
        title: 'Status', dataIndex: 'status', key: 'status'
    }
];


class RxHistory extends Component {
    renderRxHistory = () => {
        if (this.props.onePatient.data) {
            let id = this.props.onePatient.data.patientID;

            this.props.fetchRxHistory(id);

            return (
                <Table columns={columns}
                       dataSource={this.props.rxHistory.rx.rxList} />
            )
        }
        return <div>No Data</div>
    };

  render() {
      return(
          this.renderRxHistory()
      )
  }

}

const mapStateToProps = ({ onePatient, rxHistory }) => {
    return { onePatient, rxHistory };
};


export default connect(mapStateToProps, actions)(RxHistory);
