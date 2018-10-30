import React, { Component } from 'react';
import { Card, Icon, Avatar, Layout, Menu } from 'antd';
import DoctorSearch from '../containers/Doctor/patient_search';
import RxHistory from '../containers/Doctor/rx_history';
import PatientInfo from '../containers/Doctor/PatientInfo';
import NewRX from '../containers/Doctor/new_rx';
const { Sider, Content, Header } = Layout;
const { Meta } = Card;

const drImg = <img alt="example" src="https://i.pinimg.com/originals/17/9c/8d/179c8db70dda14e89103738b06b9d683.jpg" />;
const drAvatar = <Avatar shape='square' size='large' src="https://myblue.bluecrossma.com/sites/g/files/csphws1086/files/inline-images/Doctor%20Image%20Desktop.png" />;

export default class Doctor extends Component {
  render() {
    return (
        <Layout className="profile-layout" style={{width:'100%', margin: 'auto' }}>
          <Sider width={300}>
            <Card style={{ width: 300 }} cover={drImg}>
              <Meta avatar={drAvatar} title="Dr. Rick Sanchez" description="Board Certified Oncologist"/>
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
                  <Menu.Item>
                      <DoctorSearch />
                  </Menu.Item>
                  <Menu.Item style={{float:'right', background:null}}>
                      <NewRX />
                  </Menu.Item>
                </Menu>
              </Header>
              <Content>
                <RxHistory />
              </Content>
            </Layout>
        </Layout>
    );
  }
}