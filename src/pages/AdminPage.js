import React, { useEffect } from "react";
import { Row, Col, Container, Button, ButtonGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import {useNavigate,} from "react-router-dom";

const AdminPage = ({history}) => {

  const navigate = useNavigate()
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;

  useEffect(() => {
    if (localStorage.getItem("currentUser") === null || !currentUser.isAdmin) {
      window.location.href = "/";
    }
  }, [currentUser]);
  return (
    <>
      <Container>
        <Row className="text-light">
          <h1 className="text-center p-2 text-light mb-2">Admin Panel</h1>
          <Col md={2}>
            <ButtonGroup vertical style={{ minHeight: "400px" }}>
              <Button onClick={() => navigate("/admin/userlist",history)}>
                All Users
              </Button>
              <Button onClick={() => navigate("/admin/burgerlist",history)}>
                All Burgers
              </Button>
              <Button onClick={() => navigate("/admin/addnewburger",history)}>
                Add New Burger
              </Button>
              <Button onClick={() => navigate("/admin/orderlist",history)}>
                All Orders
              </Button>
            </ButtonGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminPage;