import React from "react";

export type ProductType = {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
};

export interface ProductContextValueType {
  addSuccess?: boolean;
  updateSuccess?: boolean;
  products: ProductType[];
  //currentFormData?: ProductFormValuesType;
  currentProductID: number;
}
const initialProductContextValue = {
  products: [],
  currentFormData: {
    id: NaN,
    title: "",
    brand: "",
    description: "",
  },
  currentProductID: 0,
};

export const ProductContext = React.createContext<ProductContextValueType>(
  initialProductContextValue
);

export function useProductsContext(): ProductContextValueType {
  return React.useContext(ProductContext);
}
