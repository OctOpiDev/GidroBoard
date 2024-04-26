
import { Link, Outlet, useNavigate } from 'react-router-dom'

import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  DashboardOutlined,
  TeamOutlined,
  BookOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import HeaderApp from './HeaderApp';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,

  };
}
const items = [
  getItem('Монитор', '/', <DashboardOutlined />), 
  getItem('Пользователи', '/users', <TeamOutlined />),
  getItem('Документация', '/docs', <FileOutlined />),

];



const LayoutApp = () => {
    const navigate = useNavigate()
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" >
        <h1 style={{color: 'white', marginInline: '20px'}}>LOGO</h1>
        </div>
        <Menu theme="dark" defaultSelectedKeys={['/']} mode="inline" items={items} onClick={({key})=>navigate(key)} />
      <Link to='/login'>login</Link>
      </Sider>
      <Layout>
        
        <HeaderApp/>
        <Content
          style={{
            margin: '0 16px',
            
          }}
        >
          {/* <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb> */}
          <div
            style={{
              padding: 24,
              minHeight: 360,
            //   background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet/>
           
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default LayoutApp;