import React, { useEffect } from 'react'
import { getUserOrders } from '../actions/orderAction';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Components/Loader';
import Error from '../Components/Error';
import { Col, Container, Row } from 'react-bootstrap';


function Order() {
  const orderState = useSelector((state) => state.getUserOrdersReducer)
  const { loading, error, orders } = orderState;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserOrders());
  }, [dispatch])

  return (
    <>
      <h1>Orders</h1>
      {loading && (<Loader />)}
      {error && (<Error error="Something went wrong" />)}
      {
        orders && orders.map((order) => (
          <Container className="container border p-4 bg-transparent">
            <Row>
              <Col md={4}>
                {order.orderItems.map((item) => (
                  <div>
                    <h6>{item.name}[{item.varient}]*{item.quantity} = {item.price}</h6>
                  </div>
                ))}
              </Col>
              <Col md={4}>
                <h4>Address</h4>
                <h6>Street : {order.shippingAddress.street} </h6>
                <h6>City : {order.shippingAddress.city} </h6>
                <h6>Pincode : {order.shippingAddress.zip} </h6>
                <h6>Country : {order.shippingAddress.country}</h6>
              </Col>
              <Col md={4}>
                <h4>Order Info</h4>
                <h6>Order Amount : {order.orderAmount}</h6>
                <h6>Transaction Id : {order.transactionId}</h6>
                <h6>Date:{order.createdAt.toString().substring(0, 10)}</h6>
                <h6>Order Id : {order._id}</h6>
                {
                  order.isDelivered === true ? <h6 className='text-light'>Delivered</h6> : <h6 className='text-warning'>Estimate Time : 30 Mint</h6>
                }
              </Col>
            </Row>
          </Container>
        ))
      }
    </>
  )
}

export default Order