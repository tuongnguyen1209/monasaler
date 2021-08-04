import React from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./layout/Navigation/Navigation";
import HomePage from "./pages/HomePage/HomePage";
import Products from "./pages/ProductsPage/Products";

const RouterSales = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/san-pham" component={Products} />
      </Switch>
      <Navigation />
    </>
  );
};

export default RouterSales;
