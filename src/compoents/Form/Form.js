import React, { useEffect, useState } from "react";
import { CustomerssApis } from "../../apis/CustomerApis";
import Button from "../Button/Button";
import { WrapForm } from "./FormStyle";
import { NotificationManager } from "react-notifications";

const Form = (props) => {
  const [values, setValues] = useState({
    id: "",
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
    if (values.id) {
      CustomerssApis.update(values.id, values)
        .then((result) => {
          props.updateList(result.data.doc);
          NotificationManager.success("Sửa thông tin khách hàng thành công");
          props.close();
        })
        .catch(() => {
          NotificationManager.error("Sửa thông tin khách hàng thất bại");
          props.close();
        });
    } else {
      CustomerssApis.insert(values)
        .then((result) => {
          props.addNewCus(result.doc);
          NotificationManager.success("Thêm khách hàng thành công");
          props.close();
        })
        .catch(() => {
          NotificationManager.error("Thất Bại", "Đã có lỗi xảy ra", 1000);
          props.close();
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
          value={values.fullname || ""}
          onChange={handleChange}
        />
        <input
          type="email"
          className="form__input"
          placeholder="Email"
          name="email"
          value={values.email || ""}
          onChange={handleChange}
        />
        <input
          type="text"
          className="form__input"
          placeholder="Số điện thoại"
          name="phone"
          value={values.phone || ""}
          onChange={handleChange}
        />
        <input
          type="text"
          className="form__input"
          placeholder="Địa chỉ"
          name="address"
          value={values.address || ""}
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
