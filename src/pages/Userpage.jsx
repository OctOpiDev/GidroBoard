import React from 'react'
import { Divider, Typography } from 'antd';
import { Space, Table, Tag } from 'antd';
const { Title, Paragraph, Text, Link } = Typography;

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: '1',
      name: 'Sergey Golovan',
      age: 32,
      email: 'fabl.1991@mail.ru',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      email: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
  ];

export default function Userpage() {
  return (
    <>
        <Title level={3}>Пользовssатели</Title>
        <Divider />
        <Table columns={columns} dataSource={data} />
    </>
  )
}
