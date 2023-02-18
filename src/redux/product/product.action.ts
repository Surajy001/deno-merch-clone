import { AppDispatch } from "../store";
import { getProductsAPI } from "./product.api";
import { PRODUCT_LOADING, PRODUCT_ERROR, GET_PRODUCT } from "./product.types";

export const getProducts = (): any => async (dispatch:AppDispatch) => {
  dispatch({ type: PRODUCT_LOADING });

  try {
    let data = await getProductsAPI();
    dispatch({ type: GET_PRODUCT, payload: data });
  } catch (e) {
    dispatch({ type: PRODUCT_ERROR });
  }
};
