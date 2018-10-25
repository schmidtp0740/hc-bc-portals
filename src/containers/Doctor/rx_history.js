import React, { Component } from 'react';
import { Table } from 'antd';

const columns = [{
  title: 'Doctor',
  dataIndex: 'doctor',
  render: text => <a href="javascript:;">{text}</a>,
}, {
  title: 'License',
  dataIndex: 'license',
}, {
  title: 'Prescription',
  dataIndex: 'prescription',
}, {
  title: 'Refills',
  dataIndex: 'refills',
},
];
const data = [];


class RxHistory extends Component {
  render() {
    return (
      <Table columns={columns} dataSource={data} />
    )
  }
}

export default RxHistory;