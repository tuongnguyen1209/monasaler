import React from "react";
import { Link, useLocation } from "react-router-dom";
import { WraperNav } from "./NavigationStyle";

const Navigation = () => {
  const location = useLocation();

  const check = (to) => {
    const path = location.pathname;

    if (to !== "/") {
      return path.indexOf(to) !== -1;
    } else {
      return path === to;
    }
  };

  const NavLink = (props) => {
    return (
      <Link to={props.to}>
        <div className={`icon-box ${check(props.to) ? "active" : ""}`}>
          <i className={`${props.class} icon`}></i>
          <span className="icon-box__name">{props.children}</span>
        </div>
      </Link>
    );
  };
  return (
    <WraperNav>
      <NavLink to="/" class="fas fa-home">
        Trang chủ
      </NavLink>
      <NavLink to="/san-pham" class="fas fa-list-alt">
        Sản phẩm
      </NavLink>

      <NavLink to="/khach-hang" class="fas fa-user-friends">
        Khách hàng
      </NavLink>
      <NavLink to="/don-hang" class="fas fa-receipt ">
        Đơn hàng
      </NavLink>
      <NavLink to="/thong-ke" class="fas fa-file-invoice-dollar">
        Thống kê
      </NavLink>
    </WraperNav>
  );
};

export default Navigation;
