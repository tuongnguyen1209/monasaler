import React, { useState, useEffect } from "react";
import { CustomerssApis } from "../../apis/CustomerApis";
import Button from "../../compoents/Button/Button";
import SubHeader from "../../compoents/SubHeader/SubHeader";
import Popup from "reactjs-popup";
import { WraperListCustomer } from "./ListCustomerStyle";
import Form from "../../compoents/Form/Form";

const ListCustomer = () => {
  const [dataCustomer, setDataCustomer] = useState([]);
  const query = { limit: 20, page: 1 };
  const [dataEdit, setDataEdit] = useState({});

  useEffect(() => {
    let newData = [];
    CustomerssApis.getAll(query).then((result) => {
      newData = result.data.docs;
      setDataCustomer(newData);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateCus = (newCus, index) => {
    const newDataCus = [...dataCustomer];
    console.log(index);
    if (index !== undefined && index !== null) {
      newDataCus[index] = newCus;
    } else {
      newDataCus.push(newCus);
    }
    setDataCustomer(newDataCus);
  };

  const handleEdit = (cus) => {
    setDataEdit(cus);
  };
  console.log(dataEdit);
  const customer = dataCustomer.map((el, index) => {
    return (
      <div key={el.id} className="customer">
        <div className="customer__box">
          <Popup
            trigger={
              <span className="customer__box--edit">
                <i
                  onClick={() => {
                    handleEdit(el);
                  }}
                  className="fas fa-user-edit customer__box--edit-icon"
                />
              </span>
            }
            modal
          >
            {(close) => (
              <Form
                updateCus={updateCus}
                index={index}
                dataEdit={dataEdit}
                close={close}
              />
            )}
          </Popup>

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
        {(close) => <Form updateCus={updateCus} close={close} />}
      </Popup>
    </WraperListCustomer>
  );
};

export default ListCustomer;
