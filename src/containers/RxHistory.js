import React, {Component} from 'react';
import moment from 'moment';
import {Table} from 'antd';
import {connect} from "react-redux";
import * as actions from '../actions/rxActionIndex';

class RxHistory extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.onePatient.data.patientID !== prevProps.onePatient.data.patientID) {
            this.props.fetchRxHistory(this.props.onePatient.data.patientID);
        }
    }

    handleFill = (data) => {
        this.props.fillRx(
            {
                "patientID": this.props.onePatient.data.patientID,
                "rxid": data.rxid,
                "timestamp": moment(data.timestamp).valueOf(),
                "pharmacist": "pha",
                "phLicense": "pha01",
                "prescription": data.prescription,
                "refills": data.refills,
                "status": 'filled',
                "expDate": moment(data.expDate).valueOf()
            });
    };

    handleApprove = (data) => {
        this.props.approveRx(
            {
                "patientID": this.props.onePatient.data.patientID,
                "rxid": data.rxid,
                "timestamp": moment(data.timestamp).valueOf(),
                "approved": "true"
            }
        )
    };


    render() {
        const columns = [
            {
                title: 'Prescriber', dataIndex: 'doctor', key: 'doctor'
            },
            {
                title: 'Prescription', dataIndex: 'prescription', key: 'prescription'
            },
            {
                title: 'Refills', dataIndex: 'refills', key: 'refills'
            },
            {
                title: 'Qty', dataIndex: 'quantity', key: 'quantity'
            },
            {
                title: 'Exp', dataIndex: 'expDate', key: 'exp'
            },
            {
                title: 'Status', dataIndex: 'status', key: 'status'
            }
        ];

        if (this.props.rxHistory.rx.rxList) {

            const rxHistory = this.props.rxHistory.rx.rxList.map(data => {

                const checkStatus = () => {
                    if (this.props.provider === 'pharmacist') {
                        if (data.status !== 'filled') {
                            return (
                                data.status = <button onClick={() => {this.handleFill(data)}}>Fill Rx</button>)
                        }
                        return (data.status = 'filled')
                    }
                    if (this.props.provider === 'insurance') {
                        if (data.status === 'filled') {
                            if (data.approved === 'false') {
                                return (
                                    data.status = <button onClick={() => {this.handleApprove(data)}}>Approve Rx</button>)
                            }
                            return ('Approved')
                        }
                    }
                    return (data.status)
                };

                data.expDate = moment(data.expDate).format('MM/DD/YYYY');
                data.status = checkStatus();
                return data
            });

            return (
                <Table columns={columns} dataSource={rxHistory}/>
            )
        }
        return (
            <Table columns={columns} />
        )
    }

}

const mapStateToProps = (state) => {
    return {...state}
};

export default connect(mapStateToProps, actions)(RxHistory);
