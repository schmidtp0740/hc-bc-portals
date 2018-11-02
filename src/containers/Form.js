import {Form, Input, Modal} from "antd";
import React, {Component} from "react";
import {connect} from 'react-redux';
import * as actions from '../actions/patientActionIndex';


const FormItem = Form.Item;
const RxForm = Form.create()(
class RxForm extends Component {

    render() {
        const {visible, onCancel, onSubmit, form} = this.props;
        const {getFieldDecorator} = form;
        const patient = this.props.onePatient.data;
        return (
            <Modal
                    visible={visible}
                    title="Submit a new Rx"
                    okText={'Submit'}
                    onCancel={onCancel}
                    onOk={onSubmit}
                >
                    <Form layout="vertical">
                        <FormItem label="Medication">
                            {getFieldDecorator('prescription')(<Input/>)}
                        </FormItem>

                        <FormItem label="Refills">
                            {getFieldDecorator('refills')(<Input/>)}
                        </FormItem>

                        <FormItem label="Quantity">
                            {getFieldDecorator('quantity')(<Input/>)}
                        </FormItem>
                        <FormItem label="Exp Date">
                            {getFieldDecorator('expDate')(<Input/>)}
                        </FormItem>
                    </Form>
                </Modal>
        )
    }
}
);

const mapStateToProps = ({ onePatient }) => {
    return { onePatient }
};

export default connect(mapStateToProps, actions)(RxForm);


