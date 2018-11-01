import {Card, Layout} from "antd";
import PatientInfo from "../../containers/PatientInfo";
import {Menu} from "antd/lib/menu";
import PatientSearch from "../../containers/PatientSearch";
import NewRx from "../../containers/NewRx";
import RxHistory from "../../containers/RxHistory";
import React, {Component} from "react";

const doctor = {
    cover: <img alt='example' src='https://i.pinimg.com/originals/17/9c/8d/179c8db70dda14e89103738b06b9d683.jpg' />,
    avatar: <Avatar shape='square' size='large' src='https://myblue.bluecrossma.com/sites/g/files/csphws1086/files/inline-images/Doctor%20Image%20Desktop.png' />,
    title: 'Dr. Rick Sanchez',
    description: 'Board Certified Oncologist'
};

const pharmacist = {
    cover: <img alt='example' src='https://i.pinimg.com/originals/17/9c/8d/179c8db70dda14e89103738b06b9d683.jpg' />,
    avatar: <Avatar shape='square' size='large' src='https://myblue.bluecrossma.com/sites/g/files/csphws1086/files/inline-images/Doctor%20Image%20Desktop.png' />,
    title: 'Dr. Walter White PharmD',
    description: 'Board Certified Pharmacist'
};

const insurance = {
    cover: <img alt='example' src='https://i.pinimg.com/originals/17/9c/8d/179c8db70dda14e89103738b06b9d683.jpg' />,
    avatar: <Avatar shape='square' size='large' src='https://vignette.wikia.nocookie.net/undertale-au-offspring/images/c/c3/FLO.jpg/' />,
    title: 'Flo',
    description: 'Insurance Spokeswoman'
};


export default class Provider extends Component {
    render() {
        return (
            <Layout className="profile-layout" style={{width:'100%', margin: 'auto' }}>
                <Sider width={300}>
                    <Card style={{ width: 300 }} cover={doctor.cover}>
                        <Meta avatar={doctor.avatar} title={doctor.title} description={doctor.description} />
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
                                <PatientSearch/>
                            </Menu.Item>
                            <Menu.Item style={{float:'right', background:null}}>
                                <NewRx />
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