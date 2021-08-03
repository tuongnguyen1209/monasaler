import React from "react";
import { WraperHeader } from "./HeaderStyle";
import logo from "../../assets/img/logo-paint.png";

const Header = () => {
  return (
    <WraperHeader>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="box-center">
        <p className="box-center__text">Xin chào, Nguyễn Văn A! </p>
      </div>
      <div className="box-right">
        <div className="box-right__icon">
          <i className="far fa-bell"></i>
          <span className="box-right__notification">9</span>
        </div>
        <div className="box-right__icon">
          <i className="fas fa-sign-out-alt"></i>
        </div>
      </div>
    </WraperHeader>
  );
};

export default Header;
