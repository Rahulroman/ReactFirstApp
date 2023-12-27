import React from "react";
import { ProductContextValueType } from "../config/context";

export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";

export const initialProducts: ProductContextValueType = {
  addSuccess: false,
  updateSuccess: false,
  products: [],
  // currentFormData: {
  //   id: NaN,
  //   title: "",
  //   brand: "",
  //   description: "",
  // },
  currentProductID: NaN,
};

export default function productReducer({
  type,
  payload,
}: {
  type: string;
  payload?: any;
}) {
  switch (type) {
    case GET_PRODUCTS_SUCCESS:
      return {
        //...state,
        products: payload,
      };
  }
}
