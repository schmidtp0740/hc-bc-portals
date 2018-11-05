import React, { Component } from 'react';
import { Card, Layout, Avatar, Menu } from 'antd';
import { connect } from 'react-redux';
import PatientSearch from '../containers/PatientSearch';
import RxHistory from '../containers/RxHistory';
import PatientInfo from '../containers/PatientInfo';
import * as actions from '../actions/insuranceActionIndex';
const { Sider, Content, Header } = Layout;
const { Meta } = Card;

const insurance = {
    cover: <img alt='example' src='https://i.pinimg.com/originals/17/9c/8d/179c8db70dda14e89103738b06b9d683.jpg' />,
    avatar: <Avatar shape='square' size='large' src='https://upload.wikimedia.org/wikipedia/en/thumb/8/84/Flo_from_Progressive_Insurance.jpg/200px-Flo_from_Progressive_Insurance.jpg' />,
    title: 'Flo',
    description: 'Insurance Agent'
};

class Insurance extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.onePatient.data.patientID !== prevProps.onePatient.data.patientID) {
            let patientID = this.props.onePatient.data.patientID;
            this.props.fetchInsurance(patientID);
        }
    }

    render() {
        return (
            <Layout className="profile-layout" style={{width:'100%', margin: 'auto' }}>
                <Sider width={300}>
                    <Card style={{ width: 300 }} cover={insurance.cover}>
                        <Meta avatar={insurance.avatar} title={insurance.title} description={insurance.description} />
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
                        </Menu>
                    </Header>
                    <Content>
                        <RxHistory provider={insurance}/>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

const mapStateToProps = ({ onePatient }) => {
    return { onePatient };
};

export default connect(mapStateToProps, actions)(Insurance);

