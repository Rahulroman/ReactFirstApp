import React from "react";
import { ProductContextValueType } from "../config/context";

export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";

const initialProducts: ProductContextValueType = {
  products: [],
  currentProductID: NaN,
};

export default function productReducer(
  state: ProductContextValueType = initialProducts,
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      break;

    default:
      return state;
  }
}
