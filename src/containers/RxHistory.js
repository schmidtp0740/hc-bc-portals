import React, {Component} from 'react';
import moment from 'moment';
import {Table} from 'antd';
import {connect} from 'react-redux';
import * as actions from '../actions/rxActionIndex';

class RxHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            provider: {}
        }
    }
    componentDidUpdate(prevProps) {
        if (this.props.onePatient.data.patientID !== prevProps.onePatient.data.patientID) {
            this.props.fetchRxHistory(this.props.onePatient.data.patientID);
        }
    }

    handleClick = (data) => {
        this.props.fillRx(
            {
                "patientID": this.props.onePatient.data.patientID,
                "rxid": "rx01",
                "timestamp": data.timestamp,
                "pharmacist": "pha",
                "phLicense": "pha01",
                "prescription": data.prescription,
                "refills": data.refills,
                "status": 'filled',
                "expDate": new Date(data.expDate).getTime() / 1000,
            });
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
                                data.status = <button onClick={() => {this.handleClick(data)}}>Fill Rx</button>)
                        }
                        return (data.status = 'filled')
                    }
                    return (data.status = 'prescribed')
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

const mapStateToProps = ({onePatient, rxHistory}) => {
    return {onePatient, rxHistory};
};


export default connect(mapStateToProps, actions)(RxHistory);
