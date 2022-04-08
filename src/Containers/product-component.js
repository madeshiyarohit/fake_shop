import React from "react";
import { useSelector } from "react-redux";
import styles from "./product-component.module.css";
import { Link } from "react-router-dom";

export default function ProductComponent() {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, category, price } = product;
    return (
      <div className={styles.box} key={id}>
        <div className={styles.boxMargin}>
          <Link to={`/product/${id}`}>
            <div className={styles.imageBox}>
              <img src={image} alt={title} />
            </div>
            <div className="contentBox">
              <h2>{title}</h2>
              <h3>{price}</h3>
              <span>{category}</span>
            </div>
          </Link>
        </div>
      </div>
    );
  });
  return <div className={styles.mainComponentBox}>{renderList}</div>;
}
