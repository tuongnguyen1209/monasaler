import React, { useContext } from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import { WrapContent } from "./AppStyle";
import Navigation from "./layout/Navigation/Navigation";
import HomePage from "./pages/HomePage/HomePage";
import ListCustomer from "./pages/ListCustomer/ListCustomer";
import OrderPage from "./pages/OrderPage/OrderPage";
import ProductCode from "./pages/ProductInfo/ProductCode/ProductCode";
import ProductInfo from "./pages/ProductInfo/ProductInfo";
import Products from "./pages/ProductsPage/Products";
import ScanPage from "./pages/ScanPage/ScanPage";
import logo from "./assets/img/logo-paint.png";
import LoginPage from "./pages/LoginPage/LoginPage";
import { UserContext } from "./contexts/UserContext";
import OrderDetail from "./pages/OrderPage/OrderDetail/OrderDetail";

const RouterSales = () => {
  const location = useLocation();
  const { checkLogin } = useContext(UserContext);

  return (
    <WrapContent
      style={{
        paddingBottom: location.pathname !== "/scan" ? "10%" : 0,
        position: "relative",
      }}
    >
      {!checkLogin && <Redirect to="/dang-nhap" />}
      {checkLogin && <Redirect to="/" />}

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route strict path="/san-pham" component={Products} />
        <Route strict path="/scan" component={ScanPage} />
        <Route exact path="/nhap-ma-san-pham" component={ProductCode} />
        <Route exact path="/khach-hang" component={ListCustomer} />

        <Route exact path="/don-hang" component={OrderPage} />

        <Route exact path="/chi-tiet-san-pham/:id" component={ProductInfo} />
        <Route exact path="/chi-tiet-don-hang/:id" component={OrderDetail} />
        <Route exact path="/dang-nhap" component={LoginPage} />
      </Switch>

      {/* {location.pathname !== "/scan" && location.pathname !== "/dang-nhap" && (
        <div
          style={{
            width: "100%",
            textAlign: "center",
            bottom: 80,
            position: "absolute",
          }}
        >
          <img src={logo} style={{ width: "15%" }} />
        </div>
      )} */}
      {location.pathname !== "/scan" && location.pathname !== "/dang-nhap" && (
        <Navigation />
      )}
    </WrapContent>
  );
};

export default RouterSales;
