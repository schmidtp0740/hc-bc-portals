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

    render() {
        if (this.props.rxHistory.rx.rxList) {
            const rxHistory = this.props.rxHistory.rx.rxList;

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
                                    {rxHistory.map(rx => {
                                        return (
                                            <tr className='ant-table-row ant-table-row-level-0' key={rx.rxid}>
                                                <td>
                                                        <span className='ant-table-row-indent'>
                                                        {rx.doctor}
                                                    </span>
                                                </td>

                                                <td>
                                                        <span className='ant-table-row-indent'>
                                                        {rx.prescription}
                                                        </span>
                                                </td>

                                                <td>
                                                        <span className='ant-table-row-indent'>
                                                            {rx.expDate}
                                                        </span>
                                                </td>

                                                <td>
                                                        <span className='ant-table-row-indent'>
                                                            {rx.refills}
                                                        </span>
                                                </td>

                                                <td>
                                                        <span className='ant-table-row-indent'>
                                                            {rx.quantity}
                                                        </span>
                                                </td>

                                                <td>
                                                        <span className='ant-table-row-indent'>
                                                            {rx.status}
                                                        </span>
                                                </td>

                                                <td>
                                                        <span className='ant-table-row-indent'>
                                                            {rx.timestamp}
                                                        </span>
                                                </td>
                                            </tr>
                                        )
                                    })
                                    }
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
    }

}

const mapStateToProps = ({onePatient, rxHistory}) => {
    return {onePatient, rxHistory};
};


export default connect(mapStateToProps, actions)(RxFillHistory);
