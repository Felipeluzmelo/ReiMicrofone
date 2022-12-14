import { PlusCircleFilled } from '@ant-design/icons';
import { Space, Card, Button, InputNumber } from 'antd';
import React, { useState, useEffect } from 'react';
import Carousel from "../utility/Carousel";
import api from '../services/api';

const { Meta } = Card;

function Home() {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        async function loadproducts() {
            const response = await api.get('/api/products');
            console.log(response.data)
            setProducts(response.data)
        }
        loadproducts()
    }, [])


    return (

        <Space
            direction="vertical"
            size="middle"
            style={{
                display: 'flex',
            }}>

            <Carousel />

            <Space
                size="large"
                wrap
                style={{
                    padding: 0,
                    paddingLeft: '1.5%',
                    paddingRight: '1.5%',
                }}>

                {products.map((row) => (

                    <Card
                        id= {row._id}
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
                            `R$ ${row.product_price.toFixed(2)}`,
                            <InputNumber min={0} defaultValue={0} />,
                            <Button type="primary" shape="round" icon={<PlusCircleFilled />} >
                                Add
                            </Button>,
                        ]}>

                        <Meta
                            title={row.product_name}
                            description={row.product_brand + " - " + row.product_reference}
                        />
                    </Card>
                ))}

            </Space>

        </Space>

    )
}

export default Home