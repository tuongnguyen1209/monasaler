import React, { useEffect, useState } from "react";
import { CustomerssApis } from "../../apis/CustomerApis";
import Button from "../Button/Button";
import { WrapForm } from "./FormStyle";
import { NotificationManager } from "react-notifications";
import { Link } from "react-router-dom";
import Spinners from "../Spinners/Spinners";

const Form = (props) => {
  const [values, setValues] = useState({
    id: "",
    fullname: "",
    email: "",
    phone: "",
    address: "",
    job: "designer",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (props.dataEdit) {
      setValues(props.dataEdit);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (values.id) {
      CustomerssApis.update(values.id, values)
        .then((result) => {
          props.updateList(result.data.doc);
          NotificationManager.success("Sửa thông tin khách hàng thành công");
          props.close();
        })
        .catch(() => {
          NotificationManager.error("Sửa thông tin khách hàng thất bại");
          // props.close();
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      CustomerssApis.insert(values)
        .then((result) => {
          props.addNewCus(result.doc);
          NotificationManager.success("Thêm khách hàng thành công");
          if (props.close) props.close();
        })
        .catch(() => {
          NotificationManager.error("Thất Bại", "Đã có lỗi xảy ra", 1000);
          // props.close();
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };
  return (
    <WrapForm>
      <div className="form__header">
        {props.close && (
          <Link
            to=""
            className="close"
            onClick={(e) => {
              e.preventDefault();
              props.close();
            }}
          >
            &times;
          </Link>
        )}

        <p className="form__header-title">
          {props.title ? props.title : "Thông tin khách hàng"}
        </p>
      </div>
      <form className="form__content" onSubmit={handleSubmit}>
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

        {loading && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Spinners />
          </div>
        )}
        <div className="btn-box">
          <Button>Lưu</Button>
        </div>
      </form>
    </WrapForm>
  );
};

export default Form;
