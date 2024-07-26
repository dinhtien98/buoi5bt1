import React, { useContext } from 'react'
import { AppContext } from '../../AppContext'
import { Container, Table } from 'reactstrap'

export default function Cart() {
    const {cart}=useContext(AppContext)
    console.log(cart)
  return (
    <div>
        <Container>
            <Table hover>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>age</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map((item,index)=>(
                            <tr key={index}>
                                <td scope='row'>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>action</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </Container>
    </div>
  )
}
