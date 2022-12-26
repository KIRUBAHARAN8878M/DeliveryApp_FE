export const addToCart = (burger, quantity, varient) => (dispatch, getState) => {
  var cartItem = {
    name: burger.name,
    _id: burger._id,
    image: burger.image,
    varient: varient,
    quantity: Number(quantity),
    prices: burger.prices,
    price: burger.prices[0][varient] * quantity,
  };
  if (cartItem.quantity > 10) {
    alert("Maximum 10 burgers only you can add");
  } else {
    if (cartItem.quantity < 1) {
      dispatch({ type: "DELETE_FORM_CART", payload: burger });
    } else {
      dispatch({ type: "ADD_TO_CART", payload: cartItem });
      localStorage.setItem(
        "cartItems",
        JSON.stringify(getState().cartReducer.cartItems)
      );
    }
  }
};

export const deleteFromCart = (burger) => (dispatch, getState) => {
  dispatch({ type: "DELETE_FORM_CART", payload: burger });
  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
