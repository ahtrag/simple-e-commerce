import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ProductType } from "../entities/Product";
import Rating from "./Rating";

interface ProductProps {
  product: ProductType;
}

const Product: React.FC<ProductProps> = (props) => {
  const { product } = props;

  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`} className="link">
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <div>
          <Card.Text as="div">
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </Card.Text>

          <Card.Text as="h3">${product.price}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Product;
