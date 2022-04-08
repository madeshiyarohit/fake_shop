import Header from "../Header/header";
import Footer from "../Footer/footer";
import React from "react";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer /> 
    </>
  );
}
