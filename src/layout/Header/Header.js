import React, { useContext } from "react";
import { WraperHeader } from "./HeaderStyle";
import avt from "../../assets/img/noAvt.png";
import { UserContext } from "../../contexts/UserContext";

const Header = () => {
  const { user, logout } = useContext(UserContext);

  return (
    <WraperHeader>
      <div className="user">
        {user && (
          <>
            <img
              src={user.image ? user.image : avt}
              alt="User avt"
              className="user__avt"
            />
            <span className="user__user-name">Xin Chào, {user.fullname}</span>
          </>
        )}
      </div>
      <div className="box-center">
        {/* <p className="box-center__text">Mona Paint, xin chào! </p> */}
      </div>
      <div className="box-right">
        <div className="box-right__icon">
          <i className="far fa-bell box-right__icon2"></i>
          <span className="box-right__notification">9</span>
        </div>
        <div className="box-right__icon" onClick={logout}>
          <i className="fas fa-sign-out-alt box-right__icon2"></i>
        </div>
      </div>
    </WraperHeader>
  );
};

export default Header;
