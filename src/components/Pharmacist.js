import React, { Component } from 'react';
import { Card, Layout, Avatar, Menu } from 'antd';
import PatientSearch from '../containers/PatientSearch';
import RxHistory from '../containers/RxHistory';
import PatientInfo from '../containers/PatientInfo';
import RxFillHistory from "../containers/RxFillHistory";
const { Sider, Content, Header } = Layout;
const { Meta } = Card;

const pharmacist = {
    cover: <img alt='example' src='https://i.pinimg.com/originals/17/9c/8d/179c8db70dda14e89103738b06b9d683.jpg' />,
    avatar: <Avatar shape='square' size='large' src='https://thedrugofthenation.files.wordpress.com/2013/10/walterwhite1.jpg' />,
    title: 'Dr. Walter White PharmD',
    description: 'Board Certified Pharmacist'
};

export default class Pharmacist extends Component {
    render() {
        return (
            <Layout className="profile-layout" style={{width:'100%', margin: 'auto' }}>
                <Sider width={300}>
                    <Card style={{ width: 300 }} cover={pharmacist.cover}>
                        <Meta avatar={pharmacist.avatar} title={pharmacist.title} description={pharmacist.description} />
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
                                <PatientSearch />
                            </Menu.Item>
                        </Menu>
                    </Header>
                    <Content>
                        <RxFillHistory />
                    </Content>
                </Layout>
            </Layout>
        );
    }
}