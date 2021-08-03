import React from "react";
import { WraperNav } from "./NavigationStyle";
import logo from "../../assets/img/logo-paint.png";

const Navigation = () => {
  return (
    <WraperNav>
      <div className="logo-box">
        <img src={logo} alt=" Logo" />
      </div>

      <div className="icon-box">
        <i className="fas fa-list-alt icon"></i>
        <span className="icon-box__name">Sản phẩm</span>
      </div>
      <div className="icon-box">
        <i className="fas fa-camera icon"></i>
        <span className="icon-box__name">Scan</span>
      </div>
      <div className="icon-box">
        <i className="fas fa-user-friends icon"></i>
        <span className="icon-box__name">Khách hàng</span>
      </div>
      <div className="icon-box">
        <i className="fas fa-file-invoice-dollar icon"></i>
        <span className="icon-box__name">Hóa đơn</span>
      </div>
      <p>test</p>
    </WraperNav>
  );
};

export default Navigation;
