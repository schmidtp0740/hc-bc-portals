import React, { Component } from 'react';
import { Modal, Button, Form, Input } from 'antd';

const FormItem = Form.Item;
const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};

const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};


class NewRx extends Component {
  state = { visible: false }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Button type="default" onClick={this.showModal} icon="plus" size="large" ghost>
          New Prescription
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okButtonProps={{ disabled: true }}
          cancelButtonProps={{ disabled: true }}
        >



        <Form onSubmit={this.handleSubmit}>
        <FormItem
          {...formItemLayout}
          label="Doctor"
        >
          {getFieldDecorator('doctor', {
            rules: [{
              type: 'name', message: '',
            }, {
              required: true, message: 'Please input your E-mail!',
            }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="License"
        >
          {getFieldDecorator('license', {
            rules: [{
              type: 'number', message: 'Must be in #00-000-0000 format',
            }, {
              required: true, message: 'Enter valid license number.',
            }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Prescription"
        >
          {getFieldDecorator('prescription', {

          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Refills"
        >
          {getFieldDecorator('refills', {
            rules: [{
              type: 'number', message: '3 or more refills require additional visit',
            }, {
              required: true, message: 'Enter number of refills',
            }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
        </FormItem>
      </Form>
        </Modal>
      </div>
    );
  }
}
const NewRX = Form.create()(NewRx);
export default NewRX;