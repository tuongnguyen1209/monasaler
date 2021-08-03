import React from "react";
import { WraperHeader } from "./HeaderStyle";
import avt from "../../assets/img/noAvt.png";

const Header = () => {
  return (
    <WraperHeader>
      <div className="user">
        <img src={avt} alt="User avt" className="user__avt" />
        <span className="user__user-name">Nguyễn Văn A</span>
      </div>
      <div className="box-center">
        <p className="box-center__text">Mona Paint, xin chào! </p>
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
