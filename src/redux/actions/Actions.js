import { ADD_ADRESS, ADD_TO_CART, ADD_TO_WISHLIST, DELETE_ADRESS, REMOVE_FROM_CART, REMOVE_FROM_WISHLIST } from '../ActionTypes';


export const addItemToCart = data => ({
    type: ADD_TO_CART,
    payload: data,
});

export const removeFromCart = index => ({
    type: REMOVE_FROM_CART,
    payload: index,
});

export const addToWishlist = data => ({
    type: ADD_TO_WISHLIST,
    payload: data,
});

export const removeFromWishlist = index => ({
    type: REMOVE_FROM_WISHLIST,
    payload: index,
});

export const addAdress = index => ({
    type: ADD_ADRESS,
    payload: index,
});

export const removeAdress = index => ({
    type: DELETE_ADRESS,
    payload: index,
});