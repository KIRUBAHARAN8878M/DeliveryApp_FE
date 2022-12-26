import React, { useState } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import { addBurger } from '../../actions/burgerAction'
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Loader'
import Error from '../Error';
import Success from '../Success';

function AddNewBurger() {
  const [name, setName] = useState('');
  const [smallPrice, setSmallPrice] = useState('');
  const [largePrice, setLargePrice] = useState('');
  const [mediumPrice, setMediumPrice] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const addBurgerState = useSelector(state => state.addBurgerReducer)
  const { loading, error, success } = addBurgerState;
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const burger = {
      name, image, description, category,
      prices: {
        small: smallPrice,
        medium: mediumPrice,
        large: largePrice
      }
    }
    dispatch(addBurger(burger));
    window.location.href = "/admin/burgerlist";
  }
  return (
    <div>
      {loading && (<Loader />)}
      {error && (<Error error="add New Burger error" />)}
      {success && (<Success success="Burger Added Successfully" />)}
      <Form onSubmit={handleSubmit} className="bg-light p-4">
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Burger Name" />
          </Form.Group>


        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridSmallPrice">
            <Form.Label>Small Burger Price</Form.Label>
            <Form.Control
              type="number"
              value={smallPrice}
              onChange={(e) => setSmallPrice(e.target.value)}
              placeholder="Small Burger Price" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridMediumPrice">
            <Form.Label>Medium Burger Price</Form.Label>

            <Form.Control
              type="number"
              value={mediumPrice}
              onChange={(e) => setMediumPrice(e.target.value)}
              placeholder="Medium Burger Price" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLargePrice">
            <Form.Label>Large Burger Price</Form.Label>

            <Form.Control
              type="number"
              value={largePrice}
              onChange={(e) => setLargePrice(e.target.value)}
              placeholder="Large Burger Price" />
          </Form.Group>
        </Row>
        <Form.Group as={Col} controlId="formGridImage">
          <Form.Label>Image</Form.Label>
          <Form.Control
            ttype="text"
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
          Add New
        </Button>
      </Form>
    </div>
  )
}

export default AddNewBurger