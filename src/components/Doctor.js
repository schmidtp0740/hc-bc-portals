import React, { Component } from 'react';
import { Card, Icon, Avatar, Layout, Menu } from 'antd';
import PatientSearch from '../containers/PatientSearch';
import RxHistory from '../containers/RxHistory';
import PatientInfo from '../containers/PatientInfo';
import NewRx from '../containers/NewRx';
const { Sider, Content, Header } = Layout;
const { Meta } = Card;

const doctor = {
    cover: <img alt='example' src='https://i.pinimg.com/originals/17/9c/8d/179c8db70dda14e89103738b06b9d683.jpg' />,
    avatar: <Avatar shape='square' size='large' src='https://myblue.bluecrossma.com/sites/g/files/csphws1086/files/inline-images/Doctor%20Image%20Desktop.png' />,
    title: 'Dr. Rick Sanchez',
    description: 'Board Certified Oncologist'
};

export default class Doctor extends Component {
    render() {
        let provider = doctor;
        return (
            <Layout className="profile-layout" style={{width: '100%', margin: 'auto'}}>
                <Sider width={300}>
                    <Card style={{width: 300}} cover={provider.cover}>
                        <Meta avatar={provider.avatar} title={provider.title} description={provider.description}/>
                    </Card>
                    <PatientInfo/>
                </Sider>
                <Layout>
                    <Header>
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            style={{lineHeight: '64px'}}
                        >
                            <Menu.Item>
                                <PatientSearch/>
                            </Menu.Item>
                            <Menu.Item style={{float: 'right', background: null}}>
                                <NewRx/>
                            </Menu.Item>
                        </Menu>
                    </Header>
                    <Content>
                        <RxHistory/>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}