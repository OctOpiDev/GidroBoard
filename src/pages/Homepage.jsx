import React from 'react'
import { Card, Col, Row } from 'antd';
import { Divider, Typography, Progress } from 'antd';
const { Title, Paragraph, Text, Link } = Typography;
import { Line } from '@ant-design/plots';
import { Tiny } from '@ant-design/plots';


export default function Homepage() {
  return (
    <>
    <Title level={3}>Панель управления darknet kate</Title>
    <Divider/>
    <Row gutter={16} style={{paddingBottom: '24px'}}>
    <Col span={6}>
      <Card title="Температура воздуха" bordered={false}>
        <div className='dtm'>50 C</div>
      <DemoArea />
      </Card>
    </Col>
    <Col span={6}>
      <Card title="Температdура воды" bordered={false}>
        Card content
      </Card>
    </Col>
    <Col span={6}>
      <Card title="Влажность" bordered={false}>
      <Progress
      percent={50}
      status="active"
      strokeColor={{
        from: '#108ee9',
        to: '#87d068',
      }}
    />
      </Card>
    </Col>
    <Col span={6}>
      <Card title="Уровень" bordered={false}>
        Card content
      </Card>
    </Col>
    
  </Row>
  <Row gutter={16}>
    <Col span={17}>
      <Card title="Card title" bordered={false}>
      <DemoArea2 />
      </Card>
    </Col>
    <Col span={7}>
      <Card title="Card title" bordered={false}>
        Card content
      </Card>
    </Col>
    
  </Row>
    </>
  )
}

const DemoLine = () => {
    const config = {
      data: {
        type: 'fetch',
        value: 'https://render.alipay.com/p/yuyan/180020010001215413/antd-charts/line-connect-nulls.json',
        transform: [
          {
            type: 'map',
            callback: (d) => ({
              ...d,
              close: new Date(d.date).getUTCMonth() < 3 ? NaN : d.close,
            }),
          },
        ],
      },
      xField: (d) => new Date(d.date),
      yField: 'close',
      connectNulls: {
        connect: true,
        connectStroke: '#aaa',
      },
    };
    return <Line {...config} />;
  };

  const DemoArea = () => {
    const data = [
      264, 417, 438, 887, 309, 397, 550, 575, 563, 430, 525, 592, 492, 467, 513, 546, 983, 340, 539, 243, 226, 192,
    ].map((value, index) => ({ value, index }));
    const config = {
      data,
      width: 200,
      height: 46,
    //   padding: 8,
      shapeField: 'smooth',
      xField: 'index',
      yField: 'value',
      style: {
        fill: 'linear-gradient(-90deg, white 0%, #3e34cc 100%)',
        fillOpacity: 0.6,
      },
    };
    return <Tiny.Area {...config} />;
  };

  const DemoArea2 = () => {
    const config = {
      data: {
        type: 'fetch',
        value: 'https://gw.alipayobjects.com/os/antvdemo/assets/data/blockchain.json',
        transform: [
          {
            type: 'fold',
            fields: ['blockchain', 'nlp'],
            key: 'type',
            value: 'value',
          },
        ],
      },
      xField: (d) => new Date(d.date),
      yField: 'value',
      colorField: 'type',
      axis: {
        x: { labelAutoHide: 'greedy' },
      },
      annotations: [
        {
          type: 'text',
          data: [new Date('2017-12-17'), 100],
          style: {
            text: '2014-03, 受比特币影响，blockchain 1834',
            wordWrap: true,
            wordWrapWidth: 164,
            dx: -174,
            dy: 30,
            fill: '#2C3542',
            fillOpacity: 0.65,
            fontSize: 10,
            background: true,
            backgroundRadius: 2,
            connector: true,
            startMarker: true,
            startMarkerFill: '#2C3542',
            startMarkerFillOpacity: 0.65,
          },
          tooltip: false,
        },
      ],
    };
  
    return <Line {...config} />;
  };
