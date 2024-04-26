import React from 'react'
import { Layout, Avatar, Dropdown, Space, Flex } from 'antd';
import { DownOutlined, NotificationFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const items = [
    {
      label: 'Профиль',
      key: '0',
    },
    {
      label: <a href="https://www.aliyun.com">2nd menu item</a>,
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      label: <Link to='/login'>Выйти</Link>,
      key: '3',
    },
  ];

const HeaderApp = () => {
  return (
    <Layout.Header style={{background: 'white'}}>
        <Flex align='center' justify='flex-end' gap='10px'>
    <NotificationFilled />
         <Dropdown
    menu={{
      items,
    }}
    trigger={['click']}
  >
   
      <Space>
      <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1"  style={{
            backgroundColor: '#f56a00',
          }} size={40}/>
        <DownOutlined />
      </Space>
    
    </Dropdown>
    </Flex>
    </Layout.Header>
  )
}
export default HeaderApp;