import React from "react";
import { WraperHeader } from "./HeaderStyle";
import logo from "../../assets/img/logo-paint.png";

const Header = () => {
  return (
    <WraperHeader>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="box-right">
        <div className="notification">Thong Bao</div>
        <div className="logout">Dang xuat</div>
      </div>
    </WraperHeader>
  );
};

export default Header;
