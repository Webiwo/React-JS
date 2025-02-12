/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import PRODUCTS_MOCK from "../assets/shop-data.json"

export const ProductsContext = createContext({
    products: [],
}
);

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState(PRODUCTS_MOCK)
    const value = {products};
    return (
        <ProductsContext.Provider value={value}> {children} </ProductsContext.Provider>
    )
}