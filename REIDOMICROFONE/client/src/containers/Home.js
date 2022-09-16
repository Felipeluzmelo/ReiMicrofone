import { Row, Col, Card, Space, Typography } from 'antd';
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useProducts from '../_actions/productActions';
import Carousel from "../utility/Carousel"



const { Text } = Typography;

function Home() {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.product.productList)
    const { getProductList } = useProducts();

    useEffect(() => {
        getProductList()
    }, [])

    const renderProductList = () => {
        return (
            <Row gutter={[12, 12]} style={{ paddig: 10 }}>{productList?.map((item, index) => (
                <Col key={index}>
                    <Card
                        hoverable

                        cover={
                            <img
                                alt="example"
                                src={item.image}
                            />
                        }
                        actions={[
                            <EyeOutlined key="view" style={{ color: "orange", fontSize: 18 }} />,
                            <ShoppingCartOutlined key="cart" style={{ color: "#b82837", fontSize: 18 }} />,

                        ]}
                    >
                        <Space direction="vertical">
                            <Text strong>{item?.name}</Text>
                            <Text type="secondary">{item?._category?.name}</Text>
                            <Text type="success">{item?.price}</Text>
                        </Space>
                    </Card>
                </Col>
            ))}</Row>
        )
    }

    return (

        <Carousel />


        // <div>
        //     {renderProductList()}
        // </div>
    )
}

export default Home