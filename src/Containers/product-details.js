import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct } from "../Redux/Actions/product-actions";

export default function ProductDetails() {
  const productId = useParams();
  console.log("Product id", productId);
  const product = useSelector((state) => state.product);
  // const { description, price, category, title, image } = product?.products;

  console.log("Product", product);

  const dispatch = useDispatch();
  const fetchProductDetail = () => {
    const mainResponse = axios({
      method: "get",
      url: `https://fakestoreapi.com/products/${productId.productId}`,
    })
      .then((response) => {
        console.log("Des Resp", response.data);
        dispatch(selectedProduct(response.data));
      })
      .catch((err) => {
        console.log("Err", err);
      });
  };
  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
  }, []);
  return (
    <div>
      <h2>title {product.products.title}</h2>
      {/* <h2> desc {description}</h2>
      <h2>price {price}</h2>
      <h2>img {image}</h2>
      <h2>cat {category}</h2> */}
    </div>
  );
}
