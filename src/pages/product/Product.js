import React from "react";
import './product.css'
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
} from "reactstrap";
import { Link } from "react-router-dom";

export default function Product(props) {
  const { product } = props;
  return (
    <Col lg={3} md={4} sm={6} xs={6} className="">
      <Card className="m-2 p-2 cardStudent">
        <CardImg top src={require(`../../../public/img/${product.img}.png`)}/>
        <CardBody>
          <CardTitle tag="h5">Student Card</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Information
          </CardSubtitle>
          <CardText>
            <h1>Student</h1>
            <p>Name: {product.name}</p>
            <p>Age: {product.age}</p>
            <Link to={`/detail/${product.id}`}>Thông tin chi tiết</Link>
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </Col>
  );
}
