import React, { useState, useEffect } from "react";
import { CustomerssApis } from "../../apis/CustomerApis";
import Button from "../../compoents/Button/Button";
import SubHeader from "../../compoents/SubHeader/SubHeader";
import Popup from "reactjs-popup";
import { WraperListCustomer } from "./ListCustomerStyle";
import Form from "../../compoents/Form/Form";

const ListCustomer = () => {
  const [dataCustomer, setDataCustomer] = useState([]);
  const [query, setQuery] = useState({ limit: 10, page: 1 });

  useEffect(() => {
    let newData = [];
    CustomerssApis.getAll(query).then((result) => {
      newData = result.data.docs;
      setDataCustomer(newData);
    });
  }, []);

  const customer = dataCustomer.map((el) => {
    return (
      <div key={el.id} className="customer">
        <div className="customer__box">
          <p className="customer__name">{el.fullname}</p>
          <p className="customer__address">
            184 Phan Đình Phùng, p.18, Q.Phú Nhuận
          </p>
          <p className="customer__email">{el.email}</p>
          <p className="customer__phone">ĐT: {el.phone}</p>
        </div>
      </div>
    );
  });

  return (
    <WraperListCustomer>
      <div className="subheader">
        <SubHeader>Khách hàng</SubHeader>
      </div>
      <form className="search">
        <input
          type="text"
          className="search__input"
          placeholder="Tìm kiếm...."
        />
        <button className="search__button">
          <i className="fas fa-search search__icon"></i>
        </button>
      </form>

      <div className="list-customer">{customer}</div>
      <Popup
        trigger={
          <div className="btn-box">
            <Button>Thêm khách hàng</Button>
          </div>
        }
        modal
      >
        {(close) => <Form close={close} />}
      </Popup>
    </WraperListCustomer>
  );
};

export default ListCustomer;
