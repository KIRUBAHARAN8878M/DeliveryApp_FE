import React, { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartAction";
import { FaRupeeSign } from "react-icons/fa";
import "../CSS/Burger.css";
import Swal from 'sweetalert2';

function Burger({ burger }) {

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  const [varient, setVarient] = useState("small");
  const [quantity, setQuantity] = useState(1);
  const [show, setShow] = useState(false);
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    if (currentUser) {
      dispatch(addToCart(burger, quantity, varient));
      Toast.fire({ icon: 'success', title: 'This item has been added to cart' })
    } else {
      Toast.fire({ icon: 'warning', title: `Please login to shop burger!` })
    }
  };


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card
        className="imageupload mb-4 cards"
        style={{
          width: "22rem",
          marginTop: "30px",
          objectFit: "cover",
          borderRadius: "15px",
          boxShadow: "rgba(160, 159, 159, 0.8) 12px 8px 12px",
          backgroundColor: "rgb(27, 0, 18)",
          border: "1px solid rgb(27, 0, 18)",


        }}
      >
        <Card.Img
          variant="top"
          src={burger.image}
          style={{ height: "200px", cursor: "pointer", borderRadius: "15px", padding: "5px" }}
          onClick={handleShow}
        />
        <Card.Body>
          <Card.Title className="text-white text-center">{burger.name}</Card.Title>
          <hr className="text-white" />
          <Card.Text>
            <Row>
              <Col md={6}>
                <p className="text-white">Varients</p>
                <select className="text-white rounded bg-transparent"
                  value={varient}
                  onChange={(e) => setVarient(e.target.value)}
                >
                  {burger.varients.map((varient) => (
                    <option className="text-success">{varient}</option>
                  ))}
                </select>
              </Col>
              <Col md={6}>
                <p className="text-white">Quantity</p>
                <select className="text-white rounded bg-transparent"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                >
                  {[...Array(10).keys()].map((v, i) => (
                    <option className="text-white bg-transparent" value={i + 1}>{i + 1}</option>
                  ))}
                </select>
              </Col>
            </Row>
          </Card.Text>
          <Row>
            <Col md={6} className="text-white">
              Price : <FaRupeeSign /> {burger.prices[0][varient] * quantity}
            </Col>
            <Col md={6}>
              <Button onClick={addToCartHandler} variant="success">
                Add to Cart
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      {/* modal */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{burger.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Card.Img
              variant="top"
              src={burger.image}
              style={{ height: "270px", borderRadius: "5px" }}
            />
          </div>
          <div>
            <h5>Description</h5>
            <p>{burger.description}</p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Burger;
