import React, {Component} from 'react';
import moment from 'moment';
import {connect} from 'react-redux';
import * as actions from '../actions/rxActionIndex';


class RxFillHistory extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.onePatient.data.patientID !== prevProps.onePatient.data.patientID) {
            this.props.fetchRxHistory(this.props.onePatient.data.patientID);
        }
    }

    renderTable = () => {
        const {rxHistory} = this.props;

        if (rxHistory.rx.rxList) {
            return (
                <div className='ant-table-wrapper'>
                    <div className='ant-table ant-table-default ant-table-scroll-position-left'>
                        <div className='ant-table-content'>
                            <div className='ant-table-body'>
                                <table className='ant-table table'>
                                    <thead className='ant-table-thead'>
                                    <tr>
                                        <th>Prescriber</th>
                                        <th>Prescription</th>
                                        <th>Exp</th>
                                        <th>Refills</th>
                                        <th>Qty</th>
                                        <th>Status</th>
                                        <th>Order Placed</th>
                                    </tr>
                                    </thead>
                                    <tbody className='ant-table-tbody'>
                                        {rxHistory.rx.rxList.map(d => {
                                        return (
                                            <tr className='ant-table-row ant-table-row-level-0' key={d.rxid}>
                                                <td>
                                                    <span className='ant-table-row-indent indent-level-0'>{d.doctor}</span>
                                                </td>
                                                <td>
                                                    <span className='ant-table-row-indent indent-level-0'>{d.prescription}</span>
                                                </td>
                                                <td>
                                                    <span className='ant-table-row-indent indent-level-0'>{d.expDate}</span>
                                                </td>
                                                <td>
                                                    <span className='ant-table-row-indent indent-level-0'>{d.refills}</span>
                                                </td>
                                                <td>
                                                    <span className='ant-table-row-indent indent-level-0'>{d.quantity}</span>
                                                </td>
                                                <td>
                                                    <span className='ant-table-row-indent indent-level-0'>{d.status}</span>
                                                </td>
                                                <td>
                                                    <span className='ant-table-row-indent indent-level-0'>{d.timestamp}</span>
                                                </td>
                                            </tr>
                                        )
                                    }, this)}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div>No Data</div>
        )
    };


    render() {
        return (
            this.renderTable()
        );
    }
}


const mapStateToProps = ({onePatient, rxHistory}) => {
    return {onePatient, rxHistory};
};


export default connect(mapStateToProps, actions)(RxFillHistory);
