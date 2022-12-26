import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Burger from "../Components/Burger";
import ControlledCarousel from "../Components/ControlledCarousel";
import { getAllBurgers } from "../actions/burgerAction";
import Loader from "../Components/Loader";
import Error from "../Components/Error";

import '../CSS/Burger.css';

function HomePage() {
  const dispatch = useDispatch();
  const burgerstate = useSelector((state) => state.getAllBurgerReducer);
  const { loading, burgers, error } = burgerstate;
  useEffect(() => {
    dispatch(getAllBurgers());
  }, [dispatch]);
  return (
    <>
    <ControlledCarousel />
      <Container className="" xs={12} sm={12} md={6}>
     
        {loading ? (
          <span className="d-flex align-items-center justify-content-center"><Loader/></span>
        ) : error ? (
          <Error>Error while fetching burger datas{error}</Error>
        ) : (
          <Row classname="homepage">
            {burgers.map((burger) => (
              <Col md={4} key={burger.name}>
                <Burger burger={burger} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  );
}

export default HomePage;
