export const getAllBurgerReducer = (state = {burgers:[]},action) => {
    switch (action.type) {
        case "GET_BURGERS_REQUEST":
            return {
                ...state,
                loading: true,
            };
        case "GET_BURGERS_SUCCESS":
            return{
                burgers : action.payload,
                loading: false,
            };
        case "GET_BURGERS_FAIL":
            return {
                error : action.payload,
                loading: false,
            };
        default: 
        return state;
    }
};

export const addBurgerReducer = (state = {},action) => {
    switch (action.type) {
        case "ADD_BURGERS_REQUEST":
            return {
                ...state,
                loading: true,
            };
        case "ADD_BURGERS_SUCCESS":
            return{
                success: true,
                loading: false,
            };
        case "ADD_BURGERS_FAIL":
            return {
                error : action.payload,
                loading: false,
            };
        default: 
        return state;
    }
};

export const getBurgerByIdReducer = (state = {},action) => {
    switch (action.type) {
        case "GET_BURGERBYID_REQUEST":
            return {
                ...state,
                loading: true,
            };
        case "GET_BURGERBYID_SUCCESS":
            return{
                burger: action.payload,
                loading: false,
            };
        case "GET_BURGERBYID_FAIL":
            return {
                loading: false,
                error : action.payload,
           };
        default: 
        return state;
    }
};

export const updateBurgerByIdReducer = (state = {},action) => {
    switch (action.type) {
        case "UPDATE_BURGERBYID_REQUEST":
            return {
                ...state,
                loading: true,
            };
        case "UPDATE_BURGERBYID_SUCCESS":
            return{
                updatesuccess: true,
                updateloading: false,
            };
        case "UPDATE_BURGERBYID_FAIL":
            return {
                updateloading: false,
                updateerror : action.payload,
            };
        default: 
        return state;
    }
};