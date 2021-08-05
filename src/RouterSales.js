import React from "react";
import { Route, Switch } from "react-router-dom";
import { WrapContent } from "./AppStyle";
import Navigation from "./layout/Navigation/Navigation";
import HomePage from "./pages/HomePage/HomePage";
import ListCustomer from "./pages/ListCustomer/ListCustomer";
import ProductCode from "./pages/ProductInfo/ProductCode/ProductCode";
import Products from "./pages/ProductsPage/Products";

const RouterSales = () => {
  return (
    <WrapContent>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route strict path="/san-pham" component={Products} />
        <Route exact path="/nhap-ma-san-pham" component={ProductCode} />
        <Route exact path="/khach-hang" component={ListCustomer} />
      </Switch>
      <Navigation />
    </WrapContent>
  );
};

export default RouterSales;
