import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { getAllBurgerReducer,addBurgerReducer, getBurgerByIdReducer,updateBurgerByIdReducer } from "./reducers/burgerReducer";
import { cartReducer } from "./reducers/cartReducer";
import { registerUserReducer, loginUserReducer, getAllUsersReducer, adminUserReducer } from "./reducers/userReducer";
import {placeOrderReducer, getUserOrdersReducer, allUserOrdersReducer} from './reducers/orderReducer';


  
const rootReducer = combineReducers({
  getAllBurgerReducer: getAllBurgerReducer,
  addBurgerReducer:addBurgerReducer,
  getBurgerByIdReducer:getBurgerByIdReducer,
  updateBurgerByIdReducer:updateBurgerByIdReducer,
  cartReducer: cartReducer,
  registerUserReducer: registerUserReducer,
  loginUserReducer: loginUserReducer,
  getAllUsersReducer:getAllUsersReducer,
  adminUserReducer:adminUserReducer,
  placeOrderReducer: placeOrderReducer,
  getUserOrdersReducer: getUserOrdersReducer,
  allUserOrdersReducer : allUserOrdersReducer,
 });

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;

const initialState = {
  cartReducer: {
    cartItems: cartItems,
  },
  loginUserReducer: {
      currentUser: currentUser,
  },
};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
