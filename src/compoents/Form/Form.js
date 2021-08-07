import React, { useState } from "react";
import Button from "../Button/Button";
import { WrapForm } from "./FormStyle";

const Form = (props) => {
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <WrapForm>
      <div className="form__header">
        <a className="close" onClick={props.close}>
          &times;
        </a>
        <p className="form__header-title">Thông tin khách hàng</p>
      </div>
      <form className="form__content">
        <input
          type="text"
          className="form__input"
          placeholder="Họ và tên"
          name="fullname"
          value={values.fullname}
          onChange={handleChange}
        />
        <input
          type="email"
          className="form__input"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        <input
          type="text"
          className="form__input"
          placeholder="Số điện thoại"
          name="phone"
          value={values.phone}
          onChange={handleChange}
        />
        <input
          type="text"
          className="form__input"
          placeholder="Địa chỉ"
          name="address"
          value={values.address}
          onChange={handleChange}
        />
      </form>
      <div className="btn-box">
        <Button onClick={handleSubmit}>Lưu</Button>
      </div>
    </WrapForm>
  );
};

export default Form;
