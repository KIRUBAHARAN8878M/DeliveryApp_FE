import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {deliverOrder, getAllOrders} from '../../actions/orderAction';
import Loader from '../Loader';
import Error from '../Error'
import { Button, Table } from 'react-bootstrap';

function OrderList() {
  const allOrdersState = useSelector(state => state.allUserOrdersReducer)
  const {loading,orders,error} = allOrdersState
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getAllOrders())
  },[dispatch])
  return (
    <div><h1 className="text-center">Order Lists</h1>
    {loading && (<Loader/>)}
    {error && (<Error error="Admin Order request fail"/>)}
    <Table striped bordered hover>
  <thead>
    <tr>
      <th>Order Id</th>
      <th>Email</th>
      <th>User ID</th>
      <th>Amount</th>
      <th>Date</th>
      <th>Status</th>
    </tr>
  </thead>
    <tbody>
    {orders && orders.map(order => (
      <tr key={order._id}>
        <td>{order._id}</td>
        <td>{order.email}</td>
        <td>{order.transactionId}</td>
        <td>Rs {order.orderAmount}/-</td>
        <td> {order.createdAt.substring(0,10)}</td>
        <td>
          {" "}
          {order.isDelivered ? 
          (<p className="text-success">Delivered</p>
          ) : (
            <>
          <Button 
          className="btn-danger"
          onClick = {()=> {dispatch(deliverOrder(order._id))}}
          >
            Deliver</Button>
            </>)
            }{" "}
          
        </td>
      </tr>

    ))}
    </tbody>
</Table>

    </div>
  )
}

export default OrderList