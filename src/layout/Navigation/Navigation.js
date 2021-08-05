import React from "react";
import { WraperNav } from "./NavigationStyle";
import logo from "../../assets/img/logo-paint.png";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const NavLink = (props) => {
    return (
      <Link to={props.to}>
        <div
          className={`icon-box ${
            location.pathname === props.to ? "active" : ""
          }`}
        >
          <i className={`${props.class} icon`}></i>
          <span className="icon-box__name">{props.children}</span>
        </div>
      </Link>
    );
  };
  return (
    <WraperNav>
      <Link to="/">
        <div className="logo-box">
          <img src={logo} alt=" Logo" />
        </div>
      </Link>
      <NavLink to="/san-pham" class="fas fa-list-alt">
        Sản phẩm
      </NavLink>

      <NavLink to="/khach-hang" class="fas fa-user-friends">
        Khách hàng
      </NavLink>
      <NavLink to="/hoa-don" class="fas fa-receipt ">
        Hóa đơn
      </NavLink>
      <NavLink to="/thong-ke" class="fas fa-file-invoice-dollar">
        Thống kê
      </NavLink>
    </WraperNav>
  );
};

export default Navigation;
