
export const host = "https://delivery-app-be.vercel.app";

export const getBurgerData = `${host}/api/burgers/getAllBurgers`;
export const addNewBurger = `${host}/api/burgers/addburger`;
export const getBurgerId = `${host}/api/burgers/getburgerbyid`;
export const updatesBurger = `${host}/api/burgers/updatedburger`;
export const deletedBurger = `${host}/api/burgers/deleteburger`;

export const registerRoute = `${host}/api/users/register`;
export const loginRoute = `${host}/api/users/login`;
export const getUsersAll = `${host}/api/users/getallusers`;
export const deleteTheUser = `${host}/api/users/deleteuser`;
export const adminRoute = `${host}/api/users/admin`;

export const orderRoute = `${host}/api/orders/placeorder`;
export const getuserOrderRoute = `${host}/api/orders/getuserorder`;
export const allUserOrder = `${host}/api/orders/alluserorder`;
export const deliveredOrder = `${host}/api/orders/deliverorder`;

