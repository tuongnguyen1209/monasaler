import React, { useState } from "react";
import { WraperLogin } from "./LoginStyle";
import bg from "./../../assets/img/login.jpg";
import logo from "./../../assets/img/logo-paint.png";

const LoginPage = () => {
  const [showRemember, setShowRemember] = useState(false);
  const [showPass, setShowPass] = useState(false);
  return (
    <WraperLogin>
      <img src={bg} alt="bg" className="bg" />
      <div className="wrap-logo">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="wrap">
        {!showRemember ? <h1>Đăng nhập</h1> : <h1>Quên mật khẩu</h1>}
        {!showRemember && (
          <form>
            <div className="form-group">
              <label>Tên đăng nhập</label>
              <div className="group">
                <input
                  type="text"
                  placeholder="Nhập tên đăng nhập..."
                  className="form-control"
                />
                <span className="icon">
                  <i className="fas fa-user"></i>
                </span>
              </div>
            </div>
            <div className="form-group">
              <label>Mật khẩu</label>
              <div className="group">
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="Nhập mật khẩu..."
                  className="form-control"
                />
                <span
                  className="icon"
                  onClick={() => {
                    setShowPass(!showPass);
                  }}
                >
                  {showPass ? (
                    <i className="far fa-eye"></i>
                  ) : (
                    <i className="far fa-eye-slash"></i>
                  )}
                </span>
              </div>
            </div>
            <div className="form-group">
              <input type="submit" value="Đăng nhập" className="btn" />
              <a
                className="qmk"
                onClick={() => {
                  setShowRemember(true);
                }}
              >
                Quên mật khẩu?
              </a>
            </div>
          </form>
        )}
        {showRemember && (
          <form>
            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                placeholder="Nhập email..."
                className="form-control"
              />
              {/* <i className="fas fa-user"></i> */}
            </div>
            <div className="form-group">
              <input type="submit" value="Lấy mật khẩu" className="btn" />
              <a
                className="qmk"
                onClick={() => {
                  setShowRemember(false);
                }}
              >
                Quay lại
              </a>
            </div>
          </form>
        )}
      </div>
    </WraperLogin>
  );
};

export default LoginPage;
