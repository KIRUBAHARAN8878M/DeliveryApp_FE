import axios from "axios";
import { registerRoute, loginRoute, getUsersAll, deleteTheUser,adminRoute } from "../utils/APIRoutes";
import swal from "sweetalert";

export const registerUser = (user) => async (dispatch) => {
  dispatch({ type: "USER_REGISTER_REQUEST" });
  try {
  await axios.post(registerRoute, user);
    dispatch({ type: "USER_REGISTER_SUCCESS" });
    window.location.href ="/login";
  } catch (error) {
    dispatch({ type: "USER_REGISTER_FAIL", payload: error });
  }
};

export const loginUser = (user) => async (dispatch) => {
  dispatch({ type: "USER_LOGIN_REQUEST" });
  try {
    const response = await axios.post(loginRoute, user);
    console.log(response);
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: response.data });
    localStorage.setItem("currentUser", JSON.stringify(response.data));
    window.location.href = "/";
    
  } catch (error) {
    dispatch({ type: "USER_LOGIN_FAIL", payload: error });
  }
};

export const logoutUser = () => dispatch => {
    localStorage.removeItem("currentUser");
    window.location.href = "/";
    
};

export const getAllUsers = () => async (dispatch) => {
  dispatch({ type: "GET_USERS_REQUEST" });
  try {
    const response = await axios.get(getUsersAll);
    dispatch({ type: "GET_USERS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_USERS_FAIL", payload: error });
  }
};

export const deleteUser = (userid) => async (dispatch) => {
  try {
 await axios.post(deleteTheUser, { userid });
    swal("User Deleted Successfully!", "success");
    window.location.href="/admin";
    // window.location.reload();
  } catch (error) {
    swal("Error while deleting user");
  }
};

export const adminUser = (user) => async (dispatch) => {
  dispatch({ type: "ADMIN_LOGIN_REQUEST" });
  try {
    const response = await axios.post(adminRoute, user);
    console.log(response);
    dispatch({ type: "ADMIN_LOGIN_SUCCESS", payload: response.data });
    localStorage.setItem("currentUser", JSON.stringify(response.data));
    window.location.href = "/admin";
  } catch (error) {
    dispatch({ type: "ADMIN_LOGIN_FAIL", payload: error });
  }
};