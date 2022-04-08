import React from "react";
import styles from "./header.module.css";
export default function Header() {
  return (
    <div className={styles.mainHeader}>
      <header className={styles.header}>
        <h2>FakeShop</h2>
        <h3>Rohit Madeshiya</h3>
      </header>
    </div>
  );
}
