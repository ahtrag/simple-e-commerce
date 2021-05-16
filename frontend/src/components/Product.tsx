import React from "react";
import { Card, Nav } from "react-bootstrap";

interface ProductProps {
  product: any;
}

const Product: React.FC<ProductProps> = (props: any) => {
  const { product } = props;

  return (
    <Card className="my-3 p-3 rounded">
      <Nav.Link href={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Nav.Link>

      <Card.Body>
        <Nav.Link href={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Nav.Link>

        <div className="mx-3">
          <Card.Text as="div">
            <div className="my-3">
              {product.rating} from {product.numReviews} reviews
            </div>
          </Card.Text>

          <Card.Text as="h3">${product.price}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Product;
