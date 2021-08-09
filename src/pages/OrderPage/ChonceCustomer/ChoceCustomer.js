import React, { useState } from "react";
import PropTypes from "prop-types";
import { WrapChonce } from "./ChonceCustomerStyle";
import Button from "../../../compoents/Button/Button";
import { CustomerssApis } from "../../../apis/CustomerApis";
import Form from "../../../compoents/Form/Form";
import Spinners from "../../../compoents/Spinners/Spinners";

const ChoceCustomer = (props) => {
  const [kw, setKw] = useState({ phone: "" });

  const [listUser, setistUser] = useState({});

  const [err, setErr] = useState();

  const [check, setCheck] = useState(0);

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
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
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleAddNewCus = (cus) => {
    setistUser(cus);
    setCheck(1);
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
      {check === 0 && (
        <>
          <p>Nhập vào số điện thoại để tìm khách hàng.</p>
          <div className="form-search">
            <form className="search" onSubmit={handleSubmit}>
              <input
                type="text"
                className="search__input"
                placeholder="Tìm kiếm...."
                onChange={handleChangeText}
                value={kw.phone}
                disabled={loading}
              />
              <button className="search__button">
                <i className="fas fa-search search__icon"></i>
              </button>
            </form>
          </div>
        </>
      )}
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
            <Button
              onClick={() => {
                setCheck(4);
              }}
            >
              Thêm khách hàng mới
            </Button>
          </div>
        )}
        {check === 3 && (
          <div className="error">
            <p>{err && err}</p>
          </div>
        )}
        {check === 4 && (
          <div className="addnew">
            <Form
              title="Nhập thông tin khách hàng"
              dataEdit={{
                id: "",
                fullname: "",
                email: "",
                phone: kw.phone,
                address: "",
                job: "designer",
              }}
              addNewCus={handleAddNewCus}
            />
          </div>
        )}
        {check !== 0 && (
          <div className="addnew" style={{ margin: "1rem 0" }}>
            <Button
              onClick={() => {
                setCheck(0);
                setKw({ phone: "" });
              }}
            >
              Nhập số khác
            </Button>
          </div>
        )}
        {loading && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Spinners />
          </div>
        )}
      </div>
    </WrapChonce>
  );
};

ChoceCustomer.propTypes = {
  chonceUser: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
};

export default ChoceCustomer;
