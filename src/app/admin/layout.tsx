'use client'
import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import Link from 'next/link';

const { Header, Sider, Content } = Layout;
const LayoutAdmin = ({ children }: { children: React.ReactNode }) => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();


    return (
        <Layout style={{ height: '100vh', overflow: 'hidden' }}>
            <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
                style={{
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                }}
            >
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: <Link href="/admin">Dashboard</Link>,
                        },
                        {
                            key: '2',
                            icon: <UserOutlined />,
                            label: <Link href="/admin/category">Thể loại</Link>,
                        },
                        {
                            key: '3',
                            icon: <VideoCameraOutlined />,
                            label: <Link href="/admin/product">Sản phẩm</Link>,
                        },
                        {
                            key: '4',
                            icon: <UploadOutlined />,
                            label: <Link href="/admin/article">Tin tức</Link>,
                        },
                        {
                            key: '5',
                            icon: <UploadOutlined />,
                            label: <Link href="/admin/contact">Liên hệ</Link>,
                        },
                    ]}
                />
            </Sider>
            <Layout style={{ marginLeft: collapsed ? 80 : 200, transition: 'margin-left 0.2s' }}>
                <Header
                    style={{
                        position: 'fixed',
                        width: `calc(100% - ${collapsed ? 80 : 200}px)`,
                        top: 0,
                        zIndex: 1,
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    style={{
                        height: 'calc(100vh - 64px)',
                        overflowY: 'auto',
                    }}
                ><div className="" style={{
                    padding: 24,
                    margin: '90px 12px 0 ',
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                }}>
                        {children}
                    </div>
                </Content>
            </Layout>
        </Layout>

    );
};
export default LayoutAdmin;