import React, {Component} from 'react';
import {Table} from 'antd';
import {connect} from 'react-redux';
import * as actions from '../actions/rxActionIndex';

const columns = [
    {
        title: 'Name', dataIndex: 'name', key: 'name'
    },
    {
        title: 'Phone', dataIndex: 'phone', key: 'phone'
    },
    {
        title: 'SSN', dataIndex: 'ssn', key: 'ssn'
    },
    {
        title: 'company', dataIndex: 'company', key: 'company'
    },
    {
        title: 'policyId', dataIndex: 'policyId', key: 'policyId'
    },
    {
        title: 'EXP Date', dataIndex: 'expiraionDate', key: 'expiraionDate'
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
                <Table columns={columns} rowKey={rxHistory.rxid} dataSource={rxHistory}/>
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
