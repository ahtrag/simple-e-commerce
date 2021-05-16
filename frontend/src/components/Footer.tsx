import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer: React.FC<any> = () => {
  return (
    <Container>
      <Row>
        <Col className="text-center py-3">
         Copyright &copy; Ahtrag
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
