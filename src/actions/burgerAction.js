import axios from "axios";
import {
  getBurgerData,
  addNewBurger,
  getBurgerId,
  updatesBurger,
  deletedBurger,
} from "../utils/APIRoutes";
import swal from "sweetalert";

export const getAllBurgers = () => async (dispatch) => {
  dispatch({ type: "GET_BURGERS_REQUEST" });
  try {
    const response = await axios.get(getBurgerData);
    dispatch({ type: "GET_BURGERS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_BURGERS_FAIL", payload: error });
  }
};

export const addBurger = (burger) => async (dispatch) => {
  dispatch({ type: "ADD_BURGERS_REQUEST" });
  try {
   await axios.post(addNewBurger, { burger });

    dispatch({ type: "ADD_BURGERS_SUCCESS" });
  } catch (error) {
    dispatch({ type: "ADD_BURGERS_FAIL", payload: error });
  }
};

export const getBurgerById = (burgerId) => async (dispatch) => {
  dispatch({ type: "GET_BURGERBYID_REQUEST" });
  try {
    const response = await axios.post(getBurgerId, { burgerId });

    dispatch({ type: "GET_BURGERBYID_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_BURGERBYID_FAIL", payload: error });
  }
};

export const updateBurger = (updatedBurger) => async (dispatch) => {
  dispatch({ type: "UPDATE_BURGERBYID_REQUEST" });
  try {
    const response = await axios.post(updatesBurger, { updatedBurger });

    dispatch({ type: "UPDATE_BURGERBYID_SUCCESS", payload: response.data });
    window.location.href = "/admin/burgerlist";
  } catch (error) {
    dispatch({ type: "UPDATE_BURGERBYID_FAIL", payload: error });
  }
};

export const deleteBurger = (burgerId) => async (dispatch) => {
  try {
    await axios.post(deletedBurger, { burgerId });
    swal("Burger Deleted Successfully!", "success");
    window.location.href = "/admin/burgerlist";
  } catch (error) {
    swal("Error while deleting burger");
  }
};
