import React, { useContext } from "react";
import { AppContext } from "../../AppContext";
import { Button, Container, Table } from "reactstrap";

export default function Cart() {
  const { cart, deleteCart, updateQuantity } = useContext(AppContext);
  return (
    <div>
      <Container>
        <Table hover>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>age</th>
              <th>quantity</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={index}>
                <td scope="row">{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>
                  <Button onClick={() => updateQuantity(item.id, 0)}>-</Button>
                  <span>{item.quantity}</span>
                  <Button onClick={() => updateQuantity(item.id, 1)}>+</Button>
                </td>
                <td>
                  <Button
                    className="btn btn-danger"
                    onClick={() => deleteCart(item.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
