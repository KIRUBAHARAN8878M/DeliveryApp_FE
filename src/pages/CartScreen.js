import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { FaMinusSquare, FaPlusSquare, FaTrash, FaRupeeSign } from "react-icons/fa";
import { addToCart, deleteFromCart } from "../actions/cartAction";
import Checkout from "../Components/Checkout";

function CartScreen() {

  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.cartItems;
  const dispatch = useDispatch();
  const subTotal = cartItems.reduce((x, item) => x + item.price, 0);
  
  return (
    <>
      <Container className="cartscreen mt-4">
        <Row>
          <Col md={6}>
            <h1 className="text-center text-dark mb-5" style={{ color: 'black' }} >My Cart</h1>
            <Row className="text-dark">
              {cartItems.map((item) => (
                <>
                  <Col md={7}>
                    <h5>
                      {item.name} [{item.varient}]
                    </h5>
                    <h6>
                      {" "}
                      Price : {item.quantity} X <FaRupeeSign /> {item.prices[0][item.varient]} = <FaRupeeSign /> {" "}
                      {item.price}
                    </h6>
                    <h6>
                      Quantity: &nbsp;
                      <FaMinusSquare
                        className="text-danger"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          dispatch(
                            addToCart(item, item.quantity - 1, item.varient)
                          );
                        }}
                      />{" "}
                      &nbsp;
                      {item.quantity} &nbsp;
                      <FaPlusSquare className="text-success"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          dispatch(
                            addToCart(item, item.quantity + 1, item.varient)
                          );
                        }}
                      /> &nbsp;
                    </h6>
                  </Col>
                  <Col md={5} className="mb-4 text-dark">
                    <img
                      alt={item.name}
                      src={item.image}
                      style={{
                        width: "100px",
                        height: "80px",
                        borderRadius: "5px",
                        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
                      }}
                    />
                    <FaTrash
                      className="text-danger"
                      style={{ cursor: "pointer", marginLeft: "20px" }}
                      onClick={() => {
                        dispatch(
                          deleteFromCart(item)
                        );
                      }}
                    />
                  </Col>
                  <hr />
                </>
              ))}
            </Row>
          </Col>
          <Col md={2}>
          </Col>
          <Col className="text-dark" md={3}>
            <h1 className="text-center mb-5">Payment Info</h1>
            <h4>Total Amount</h4>
            <h4 className="mb-4"><FaRupeeSign />{subTotal}/-</h4>
            <Checkout subTotal={subTotal} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CartScreen;
