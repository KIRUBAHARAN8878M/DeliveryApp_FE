import React, { useState, useEffect } from "react";
import Loader from "./../Loader";
import Error from "./../Error";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getBurgerById, updateBurger } from "../../actions/burgerAction";
import { useParams } from "react-router-dom";

const EditBurger = () => {

  const params = useParams()
  console.log(params);

  const [name, setName] = useState("");
  const [smallPrice, setSmallPrice] = useState("");
  const [largePrice, setLargePrice] = useState("");
  const [mediumPrice, setMediumPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();
  const getBurgerByState = useSelector((state) => state.getBurgerByIdReducer);
  const { error, burger } = getBurgerByState;
  const updateBurgerState = useSelector((state) => state.updateBurgerByIdReducer);
  const { updateloading } = updateBurgerState;

  useEffect(() => {
    if (burger) {
      if (burger._id === params.burgerId) {
        setName(burger.name);
        setDescription(burger.description);
        setCategory(burger.category);
        setImage(burger.image);
        setSmallPrice(burger.prices[0]["small"]);
        setMediumPrice(burger.prices[0]["medium"]);
        setLargePrice(burger.prices[0]["large"]);
      } else {
        dispatch(getBurgerById(params.burgerId));
        
      }
    } else {
      dispatch(getBurgerById(params.burgerId));
    }
  }, [burger, dispatch,params.burgerId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedBurger = {
      _id: params.burgerId,
      name,
      image,
      description,
      category,
      prices: {
        small: smallPrice,
        medium: mediumPrice,
        large: largePrice,
      },
    };
    dispatch(updateBurger(updatedBurger));
  };
  return (
    <div>
      {updateloading && <Loader />}
      {error && <Error error="add New Burger error" />}
      <Form onSubmit={handleSubmit} className="bg-light p-4">
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Burger Name"
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridSmallPrice">
            <Form.Label>Small Burger Price</Form.Label>
            <Form.Control
              type="number"
              value={smallPrice}
              onChange={(e) => setSmallPrice(e.target.value)}
              placeholder="Small Burger Price"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridMediumPrice">
            <Form.Label>Medium Burger Price</Form.Label>

            <Form.Control
              type="number"
              value={mediumPrice}
              onChange={(e) => setMediumPrice(e.target.value)}
              placeholder="Medium Burger Price"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLargePrice">
            <Form.Label>Large Burger Price</Form.Label>

            <Form.Control
              type="number"
              value={largePrice}
              onChange={(e) => setLargePrice(e.target.value)}
              placeholder="Large Burger Price"
            />
          </Form.Group>
        </Row>
        <Form.Group as={Col} controlId="formGridImage">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Add Image URL"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter Description"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridCategory">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Enter Category"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Update Burger
        </Button>
      </Form>
    </div>
  );
};

export default EditBurger;
