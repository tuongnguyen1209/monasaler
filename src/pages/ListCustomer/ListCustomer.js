import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import { CustomerssApis } from "../../apis/CustomerApis";
import Form from "../../compoents/Form/Form";
import Spinners from "../../compoents/Spinners/Spinners";
import SubHeader from "../../compoents/SubHeader/SubHeader";
import { WraperListCustomer } from "./ListCustomerStyle";

const ListCustomer = () => {
  const [dataCustomer, setDataCustomer] = useState([]);
  const query = { limit: 50, page: 1 };
  const [dataEdit, setDataEdit] = useState({});
  const [loading, setLoading] = useState(false);
  const [kw, setKw] = useState("");

  useEffect(() => {
    setLoading(true);
    CustomerssApis.getAll(query)
      .then((result) => {
        const customers = result.data.docs.map((customerData) => {
          return {
            id: customerData.id,
            fullname: customerData.fullname,
            phone: customerData.phone,
            email: customerData.email,
          };
        });
        setDataCustomer(customers);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGetEdit = (cus) => {
    setDataEdit(cus);
  };

  const handleUpdateListCus = (newCus) => {
    let newListCus = [...dataCustomer];

    for (let i in newListCus) {
      if (newListCus[i].id === newCus.id) {
        newListCus[i] = newCus;
      }
    }
    setDataCustomer(newListCus);
  };

  const handleAddNewCus = (newCus) => {
    const newListCus = [newCus, ...dataCustomer];
    setDataCustomer(newListCus);
  };

  const customer = dataCustomer.map((el) => {
    return (
      <div key={el.id} className="customer">
        <div className="customer__box">
          <Popup
            trigger={
              <span className="customer__box--edit">
                <i
                  onClick={() => {
                    handleGetEdit(el);
                  }}
                  className="fas fa-user-edit customer__box--edit-icon"
                />
              </span>
            }
            modal
          >
            {(close) => (
              <Form
                updateList={handleUpdateListCus}
                dataEdit={dataEdit}
                close={close}
              />
            )}
          </Popup>

          <p className="customer__name">{el.fullname}</p>
          <p className="customer__address">{el.address}</p>
          <p className="customer__email">{el.email}</p>
          <p className="customer__phone">ĐT: {el.phone}</p>
        </div>
      </div>
    );
  });

  const handleSearch = (e) => {
    e.preventDefault();
    setLoading(true);
    CustomerssApis.getAll({ ...query, phone: kw })
      .then((result) => {
        const customers = result.data.docs.map((customerData) => {
          return {
            id: customerData.id,
            fullname: customerData.fullname,
            phone: customerData.phone,
            email: customerData.email,
          };
        });
        setDataCustomer(customers);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <WraperListCustomer>
      <div className="subheader">
        <SubHeader>Khách hàng</SubHeader>
      </div>
      <form className="search" onSubmit={handleSearch}>
        <input
          type="text"
          className="search__input"
          placeholder="Tìm kiếm...."
          value={kw}
          onChange={(e) => setKw(e.target.value)}
        />
        <button className="search__button">
          <i className="fas fa-search search__icon"></i>
        </button>
      </form>

      <div className="list-customer">{customer}</div>
      <Spinners show={loading} />

      <Popup
        trigger={
          <div className="btn-box">
            <button>
              <i className="fas fa-plus"></i>
            </button>
          </div>
        }
        modal
      >
        {(close) => <Form addNewCus={handleAddNewCus} close={close} />}
      </Popup>
    </WraperListCustomer>
  );
};

export default ListCustomer;
