import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Layout, Menu } from 'antd';

export default class Nav extends Component {
    render() {
        return (
            <nav>
                <Layout style={{position: 'fixed', zIndex: 1, width: '100%'}}>
                    <Menu
                        theme='dark'
                        mode='horizontal'
                        style={{lineHeight: '64px', paddingLeft: '16px'}}
                    >
                        <Menu.Item key="1">
                            <Link to='/'>Home</Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to='/patient'>Patients</Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to='/doctor'>Doctor</Link>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Link to='/pharmacist'>Pharmacist</Link>
                        </Menu.Item>
                        <Menu.Item key="5">
                            <Link to='/insurance'>Insurance</Link>
                        </Menu.Item>
                    </Menu>
                </Layout>
            </nav>
        );
    }
}