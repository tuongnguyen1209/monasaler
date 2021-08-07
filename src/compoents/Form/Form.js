import React, { useEffect, useState } from "react";
import { CustomerssApis } from "../../apis/CustomerApis";
import Button from "../Button/Button";
import { WrapForm } from "./FormStyle";
import { NotificationManager } from "react-notifications";

const Form = (props) => {
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    phone: "",
    address: "",
    job: "designer",
  });

  useEffect(() => {
    if (props.dataEdit) {
      setValues(props.dataEdit);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values._id) {
      CustomerssApis.update(values._id, values)
        .then((result) => {
          props.updateCus(result.data.doc, props.index);
          console.log(result);
          NotificationManager.success("Sửa thông tin khách hàng thành công");
          props.close();
        })
        .catch(() => {
          NotificationManager.error("Thất Bại", "Đã có lỗi xảy ra", 1000);
        });
    } else {
      CustomerssApis.insert(values)
        .then((result) => {
          props.updateCus(result.doc);
          console.log(result);
          NotificationManager.success("Thêm khách hàng thành công");
          props.close();
        })
        .catch((error) => {
          console.log(error);
          NotificationManager.error("Thất Bại", "Đã có lỗi xảy ra", 1000);
        });
    }
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
