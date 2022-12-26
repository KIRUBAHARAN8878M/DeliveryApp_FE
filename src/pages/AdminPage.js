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
        <Row className="text-white">
          <h1 className="text-center p-2 text-black mb-2">Admin Panel</h1>
          <Col md={2}>
            <ButtonGroup vertical style={{ minHeight: "400px" }}>
              <Button onClick={() => navigate("/admin/userlist",history)}>
                All Users
              </Button>
              <Button onClick={() => navigate("/admin/pizzalist",history)}>
                All Pizzas
              </Button>
              <Button onClick={() => navigate("/admin/addnewpizza",history)}>
                Add New Pizza
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