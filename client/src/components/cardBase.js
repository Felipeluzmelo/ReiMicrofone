import { PlusCircleFilled } from '@ant-design/icons';
import { Card, Button, InputNumber } from 'antd';
import React from 'react';

const { Meta } = Card;


const cardBase = ( ) => (
    <Card
        style={{
            width: 300,
        }}
        cover={
            <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
        }

        actions={[
            "R$ 29,90",
            <InputNumber min={0} defaultValue={0} />,
            <Button type="primary" shape="round" icon={<PlusCircleFilled />} >
                Add
            </Button>,
        ]}>

        <Meta
            title="Card title"
            description="This is the description"
        />
    </Card>
);
export default cardBase;