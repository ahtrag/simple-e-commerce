import React from "react";
import { Col, Row } from "react-bootstrap";
import products from "../../products";
import Product from '../../components/Product'
import { ProductType } from "../../entities/Product";

const HomePage: React.FC = () => {
  return (
    <>
      <h1>Latest Product</h1>
      <Row>
        {products.map((product: ProductType) => (
          <Col sm={12} md={6} lg={3} xl={3} key={product._id}>
            <Product product={product}/>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomePage;
