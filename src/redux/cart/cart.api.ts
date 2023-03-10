import { Cart } from "@/utils/types";
import axios, { AxiosResponse } from "axios";

export const getCartAPI = async () => {
  let res: AxiosResponse<Cart[]> = await axios.get(
    "https://faithful-cardigan-crab.cyclic.app/carts"
      // "http://localhost:8080/carts"
  );

  return res.data;
};

export const addItemToCartAPI = async (productId: number, quantity: number) => {
  let res: AxiosResponse<Cart> = await axios.post(
    "https://faithful-cardigan-crab.cyclic.app/carts",
  //  " http://localhost:8080/carts",
    { productId, quantity }
  );

  return res.data;
};
