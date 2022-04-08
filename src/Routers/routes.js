import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "../Containers/Layout/Layout";
import ProductListing from "../Containers/product-listing";
import ProductDetails from "../Containers/product-details";
export default function MyRoutes() {
  return (
    <>
      <Router>
        <Layout>
          <Switch>
            <Route path="/" exact component={ProductListing} />
            <Route
              path="/product/:productId"
              exact
              component={ProductDetails}
            />
            <Route>Hello World !!!</Route>
          </Switch>
        </Layout>
      </Router>
    </>
  );
}
