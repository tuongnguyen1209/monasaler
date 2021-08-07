import React, { useState } from "react";
import PropTypes from "prop-types";
import { WrapChonce } from "./ChonceCustomerStyle";
import Button from "../../../compoents/Button/Button";
import { CustomerssApis } from "../../../apis/CustomerApis";

const ChoceCustomer = (props) => {
  const [kw, setKw] = useState({ phone: "" });

  const [listUser, setistUser] = useState({});

  const [err, setErr] = useState();

  const [check, setCheck] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    CustomerssApis.getAll(kw)
      .then((result) => {
        if (result.quantity > 0) {
          setistUser(result.data.docs[0]);
          setCheck(1);
        } else {
          setCheck(2);
        }
      })
      .catch((err) => {
        console.log(err);
        setCheck(3);
        setErr("Đã có lỗi xảy ra, mới bạn thử lại sau!!!");
      });
  };

  const handleChangeText = (e) => {
    setKw({ phone: e.target.value });
  };
  const handleChonce = () => {
    props.chonceUser(listUser);
    props.close();
  };

  return (
    <WrapChonce>
      <h3>Chọn khách hàng</h3>
      <p>Nhập vào số điện thoại để tìm khách hàng.</p>
      <div className="form-search">
        {/* <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Nhập số điện thoại..." />
          
          <Button type="submit">Tìm kiếm</Button>
        </form> */}
        <form className="search" onSubmit={handleSubmit}>
          <input
            type="text"
            className="search__input"
            placeholder="Tìm kiếm...."
            onChange={handleChangeText}
            value={kw.phone}
          />
          <button className="search__button">
            <i className="fas fa-search search__icon"></i>
          </button>
        </form>
      </div>
      <div className="list-search">
        {check === 1 && (
          <div className="user">
            <div className="wr-right">
              <div className="info">
                <span>Tên: </span>
                <strong>{listUser.fullname}</strong>
              </div>
              <div className="info">
                <span>SDT: </span>
                <strong>{listUser.phone}</strong>
              </div>
            </div>
            <div className="wr-left">
              <button onClick={handleChonce}>Chọn</button>
            </div>
          </div>
        )}
        {check === 2 && (
          <div className="addnew">
            <p>
              Chưa có khách hàng nào phù hợp, bạn có muốn thêm mới khách hàng
              không
            </p>
            <Button>Thêm khách hàng mới</Button>
          </div>
        )}
        {check === 3 && (
          <div className="error">
            <p>{err && err}</p>
          </div>
        )}
      </div>
    </WrapChonce>
  );
};

ChoceCustomer.propTypes = {};

export default ChoceCustomer;
