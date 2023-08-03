import * as actionTypes from '../constants/productConstant';
import axios from 'axios';

export const getProducts = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`http://localhost:5000/products`);
        dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload: error.response });
    }
};