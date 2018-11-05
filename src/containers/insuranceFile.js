import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/insuranceActionIndex';

class InsuranceFile extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.onePatient.data.patientID !== prevProps.onePatient.data.patientID) {
            this.props.fetchInsurance(this.props.onePatient.data.patientID);
        }
    }

    render() {
        if (this.props.rxHistory.rx.rxList) {

            let rxHistory = this.props.rxHistory.rx.rxList;

            const columns = [
                {
                    title: 'Patient ID', dataIndex: 'patientID', key: 'patientID'
                },
                {
                    title: 'Insurance', dataIndex: 'insurance', key: 'insurance'
                },
                {
                    title: 'Insurance Name', dataIndex: 'insurance.insuranceName', key: 'insuranceName'
                }
                // {
                //     title: 'Insurance', dataIndex: 'insurance', key: 'insurance'
                // },
                // {
                //     title: 'Insurance', dataIndex: 'insurance', key: 'insurance'
                // },
            ];


            return (
                <div>
                    {"patientID":"p01","insurance":{"insuranceName":"gieco","expDate":12345,"policyID":"p0000121"}}
                    <Table columns={columns} dataSource={rxHistory} />
                </div>

            )
        }
        return (
            <div>No Data</div>
        )
    }

}

const mapStateToProps = ({onePatient, insurance}) => {
    return {onePatient, insurance};
};


export default connect(mapStateToProps, actions)(InsuranceFile);
