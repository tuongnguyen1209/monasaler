import React from "react";
import Button from "../Button/Button";
import { WrapForm } from "./FormStyle";

const Form = (props) => {
  return (
    <WrapForm>
      <div className="form__header">
        <a className="close" onClick={props.close}>
          &times;
        </a>
        <p className="form__header-title">Thông tin khách hàng</p>
      </div>
      <form className="form__content">
        <input type="text" className="form__input" placeholder="Họ và tên" />
        <input type="text" className="form__input" placeholder="Email" />
        <input
          type="text"
          className="form__input"
          placeholder="Số điện thoại"
        />
        <input type="text" className="form__input" placeholder="Địa chỉ" />
      </form>
      <Button>Lưu</Button>
    </WrapForm>
  );
};

export default Form;
