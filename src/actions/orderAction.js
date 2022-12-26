import axios from "axios";
import {getuserOrderRoute,orderRoute,allUserOrder,deliveredOrder} from "../utils/APIRoutes";

export const placeOrder = (token,subTotal) => async (dispatch, getState) => {
  dispatch({ type: "PLACE_ORDER_REQUEST" });

  const currentUser = getState().loginUserReducer.currentUser;
  const cartItems = getState().cartReducer.cartItems;
  try {
    await axios.post(orderRoute, {token,subTotal,currentUser,cartItems});
    dispatch({ type: "PLACE_ORDER_SUCCESS" });
  } catch (error) {
    console.log(error);
    dispatch({ type: "PLACE_ORDER_FAIL" });
  }
};

export const getUserOrders = () => async (dispatch, getState) => {
  const currentUser = getState().loginUserReducer.currentUser;
  dispatch({ type: "USER_ORDER_REQUEST" });
  try {
    const response = await axios.post(getuserOrderRoute, {
      userid: currentUser._id,
    });
    console.log(response);
    dispatch({
      type: "USER_ORDER_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: "USER_ORDER_FAIL", payload: error });
  }
};

export const getAllOrders = () => async (dispatch, getState) => {
  // const currentUser = getState().loginUserReducer.currentUser
  dispatch({ type: "ALL_ORDER_REQUEST" });
  try {
    const response = await axios.get(allUserOrder);
    dispatch({
      type: "ALL_ORDER_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: "ALL_ORDER_FAIL", payload: error });
  }
};

export const deliverOrder = (orderid) => async (dispatch, getState) => {
    // const currentUser = getState().loginUserReducer.currentUser
    dispatch({ type: "GET_ALL_ORDER_REQUEST" });
    try {
      await axios.post(deliveredOrder, {orderid});
      alert ("Delivered Successfully")
      const orders = await axios.get(allUserOrder)
      dispatch({
        type: "GET_ALL_ORDER_SUCCESS",
        payload: orders.data,
      });
      window.location.href ="/admin/orderlist"
    } catch (error) {
      dispatch({ type: "GET_ALL_ORDER_FAIL", payload: error });
    }
  };
  
