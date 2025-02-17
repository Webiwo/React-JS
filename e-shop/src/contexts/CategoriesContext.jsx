/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import {
  addCollectionAndDocuments,
  getCategoriesAndDocuments,
} from "../utils/firebase/firebaseUtils";
//import SHOP_DATA from "../assets/shop-data";

export const CategoriesContext = createContext({
  categoryMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoryMap, setCategoryMap] = useState({});
  //adding products to DB
  /*
  useEffect(() => {
    addCollectionAndDocuments("categories", SHOP_DATA);
  }, []);
  */

  useEffect(() => {
    const getCategoryMap = async () => {
      const catMap = await getCategoriesAndDocuments();
      setCategoryMap(catMap);
      console.log("loaded");
    };
    getCategoryMap();
  }, []);

  const value = { categoryMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
