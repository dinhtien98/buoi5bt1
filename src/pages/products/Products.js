import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import axios from "axios";
import { Container, Row } from "reactstrap";
import Product from "../product/Product";

export default function Products() {
  const [data, setData] = useState([]);
  const url = "https://66a07bbb7053166bcabb8e6d.mockapi.io/Student";
  const fetchData = () => {
    axios
      .get(url)
      .then(function (res) {
        setData(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Header />
      <Container>
        <Row>
          {data.map((item, index) => (
            <Product key={index} product={item} />
          ))}
        </Row>
      </Container>

      <Footer />
    </div>
  );
}
