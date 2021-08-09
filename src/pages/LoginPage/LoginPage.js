import React, { useContext, useState } from "react";
import { WraperLogin } from "./LoginStyle";
import bg from "./../../assets/img/login.jpg";
import logo from "./../../assets/img/logo-paint.png";
import { UserApis } from "../../apis/UserApis";
import { Link, Redirect, useHistory } from "react-router-dom";
import { NotificationManager } from "react-notifications";
import { UserContext } from "../../contexts/UserContext";

const LoginPage = () => {
  const [values, setValues] = useState({ username: "", password: "" });
  const [showRemember, setShowRemember] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const { login, checkLogin } = useContext(UserContext);
  const history = useHistory();

  if (checkLogin) return <Redirect to="/" />;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    UserApis.login(values)
      .then((result) => {
        login(result.data);
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
        NotificationManager.error(
          "Thất Bại",
          "Sai username hoặc mật khẩu",
          1000
        );
      });
  };

  return (
    <WraperLogin>
      <img src={bg} alt="bg" className="bg" />
      <div className="wrap-logo">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="wrap">
        {!showRemember ? <h1>Đăng nhập</h1> : <h1>Quên mật khẩu</h1>}
        {!showRemember && (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Tên đăng nhập</label>
              <div className="group">
                <input
                  type="text"
                  placeholder="Nhập tên đăng nhập..."
                  className="form-control"
                  name="username"
                  onChange={handleChange}
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
                  name="password"
                  onChange={handleChange}
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
              <Link
                to=""
                className="qmk"
                onClick={(e) => {
                  e.preventDefault();
                  setShowRemember(true);
                }}
              >
                Quên mật khẩu?
              </Link>
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
              <Link
                className="qmk"
                onClick={(e) => {
                  e.preventDefault();
                  setShowRemember(false);
                }}
              >
                Quay lại
              </Link>
            </div>
          </form>
        )}
      </div>
    </WraperLogin>
  );
};

export default LoginPage;
