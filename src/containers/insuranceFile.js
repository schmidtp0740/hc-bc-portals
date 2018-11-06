import React, {Component} from 'react';
import moment from 'moment';
import {connect} from 'react-redux';
import * as actions from '../actions/insuranceActionIndex';

class InsuranceFile extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.onePatient.data.patientID !== prevProps.onePatient.data.patientID) {
            this.props.fetchInsurance(this.props.onePatient.data.patientID);
        }
    }


    render() {
        if (this.props.insurance.data) {
            const insurance = this.props.insurance.data.insurance;
            return (
                <div>
                    <label>
                        Insurance Provider:
                    </label>
                    <div>
                        {insurance.insuranceName}
                    </div>
                    <label>
                        Policy Number:
                    </label>
                    <div>
                        {insurance.policyID}
                    </div>
                    <label>
                        Expiration:
                    </label>
                    <div>
                        {moment(insurance.expDate).format('MM/DD/YYYY')}
                    </div>
                </div>
            )
        }
        return null
    }
}

const mapStateToProps = ({onePatient, insurance}) => {
    return {onePatient, insurance};
};


export default connect(mapStateToProps, actions)(InsuranceFile);
