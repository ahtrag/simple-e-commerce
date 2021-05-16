import React from "react";
import { Col, Row } from "react-bootstrap";
import producs from "../products";
import Product from '../components/Product'

const Home: React.FC<any> = () => {
  return (
    <>
      <h1>Latest Product</h1>
      <Row>
        {producs.map((product: any) => (
          <Col sm={12} md={6} lg={3} xl={3} key={product._id}>
            <Product product={product}/>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Home;
