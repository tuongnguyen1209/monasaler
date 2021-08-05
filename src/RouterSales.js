import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { WrapContent } from "./AppStyle";
import Navigation from "./layout/Navigation/Navigation";
import HomePage from "./pages/HomePage/HomePage";
import ListCustomer from "./pages/ListCustomer/ListCustomer";
import OrderPage from "./pages/OrderPage/OrderPage";
import ProductCode from "./pages/ProductInfo/ProductCode/ProductCode";
import ProductInfo from "./pages/ProductInfo/ProductInfo";
import Products from "./pages/ProductsPage/Products";
import ScanPage from "./pages/ScanPage/ScanPage";

const RouterSales = () => {
  const location = useLocation();

  return (
    <WrapContent
      style={{ paddingBottom: location.pathname !== "/scan" ? "10%" : 0 }}
    >
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route strict path="/san-pham" component={Products} />
        <Route strict path="/scan" component={ScanPage} />
        <Route exact path="/nhap-ma-san-pham" component={ProductCode} />
        <Route exact path="/khach-hang" component={ListCustomer} />

        <Route exact path="/don-hang" component={OrderPage} />

        <Route exact path="/chi-tiet-san-pham/:id" component={ProductInfo} />

      </Switch>

      {location.pathname !== "/scan" && <Navigation />}
    </WrapContent>
  );
};

export default RouterSales;
