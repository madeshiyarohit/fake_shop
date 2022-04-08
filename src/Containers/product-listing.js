import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setProducts } from "../Redux/Actions/product-actions";
import ProductComponent from "./product-component";
export default function ProductListing() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state);
  const fetchProduct = async () => {
    const response = await axios({
      method: "get",
      url: "https://fakestoreapi.com/products",
    })
      .then((response) => dispatch(setProducts(response.data)))
      .catch((err) => {});
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  console.log("Products : ", products);
  return (
    <div>
      <ProductComponent />
    </div>
  );
}
