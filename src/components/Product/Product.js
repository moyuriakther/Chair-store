import React from "react";
import { Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { Col } from "react-bootstrap";

const Product = ({ product, handleAddProduct }) => {
  const { name, price, img } = product;
  return (
    <Col md={{ span: 4, offset: 0 }} className="mb-2 p-2">
      <Card style={{ width: "16rem" }}>
        <Card.Img variant="top" style={{ height: "300px" }} src={img} />
        <Card.Body>
          <Card.Title>
            {name.length < 30 ? name : name.slice(0, 30) + " ...read more"}
          </Card.Title>
          <Card.Text>
            <strong>Price: $</strong>
            {price}
          </Card.Text>
          <Button variant="info" onClick={() => handleAddProduct(product)}>
            Add To Cart <FontAwesomeIcon icon={faCartPlus} />{" "}
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;
