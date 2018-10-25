import React, { Component } from 'react';
import { Card, Icon, Avatar, Layout, Menu } from 'antd';
import DoctorSearch from '../../containers/Doctor/patient_search';
import RxHistory from '../../containers/Doctor/rx_history';
import PatientInfo from '../../containers/Doctor/PatientInfo';
import NewRX from '../../containers/Doctor/new_rx';
const { Sider, Content, Header } = Layout;
const { Meta } = Card;


export default class Doctor extends Component {
  render() {
    return (
      <div>
        <Layout style={{width:'75%', margin: '0px auto' }}>
          <Sider
            width={300}
          >
            <Card
              style={{ width: 300 }}
              cover={<img alt="example" src="https://i.pinimg.com/originals/17/9c/8d/179c8db70dda14e89103738b06b9d683.jpg" />}
            >
              <Meta
                avatar={<Avatar shape='square' size='large' src="https://myblue.bluecrossma.com/sites/g/files/csphws1086/files/inline-images/Doctor%20Image%20Desktop.png" />}
                title="Dr. Rick Sanchez"
                description="Board Certified Oncologist"
              />
            </Card>
              <PatientInfo />
          </Sider>
            <Layout>
              <Header>
                <Menu
                theme="dark"
                mode="horizontal"
                style={{ lineHeight: '64px' }}

                >
                  <Menu.Item disabled={true}><DoctorSearch /></Menu.Item>
                  <Menu.Item disabled={true} style={{float:'right', background:null}}><NewRX /></Menu.Item>
                </Menu>
              </Header>
              <Content>
                <RxHistory />
              </Content>
            </Layout>
        </Layout>

      </div>
    );
  }
}