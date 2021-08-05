import React from "react";
import SubHeader from "../../compoents/SubHeader/SubHeader";
import { WraperListCustomer } from "./ListCustomerStyle";

const ListCustomer = () => {
  return (
    <WraperListCustomer>
      <SubHeader>Khách hàng</SubHeader>
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

      <div className="list-customer">
        <div className="customer">
          <div className="customer__box">
            <p className="customer__name">Nguyễn Văn A</p>
            <p className="customer__address">
              184 Phan Đình Phùng, p.18, Q.Phú Nhuận
            </p>
            <p className="customer__email">vana@gmail.com</p>
            <p className="customer__phone">ĐT: 0909777999</p>
          </div>
        </div>

        <div className="customer">
          <div className="customer__box">
            <p className="customer__name">Nguyễn Văn A</p>
            <p className="customer__address">
              184 Phan Đình Phùng, p.18, Q.Phú Nhuận
            </p>
            <p className="customer__email">vana@gmail.com</p>
            <p className="customer__phone">ĐT: 0909777999</p>
          </div>
        </div>

        <div className="customer">
          <div className="customer__box">
            <p className="customer__name">Nguyễn Văn A</p>
            <p className="customer__address">
              184 Phan Đình Phùng, p.18, Q.Phú Nhuận
            </p>
            <p className="customer__email">vana@gmail.com</p>
            <p className="customer__phone">ĐT: 0909777999</p>
          </div>
        </div>
        <div className="customer">
          <div className="customer__box">
            <p className="customer__name">Nguyễn Văn A</p>
            <p className="customer__address">
              184 Phan Đình Phùng, p.18, Q.Phú Nhuận
            </p>
            <p className="customer__email">vana@gmail.com</p>
            <p className="customer__phone">ĐT: 0909777999</p>
          </div>
        </div>
        <div className="customer">
          <div className="customer__box">
            <p className="customer__name">Nguyễn Văn A</p>
            <p className="customer__address">
              184 Phan Đình Phùng, p.18, Q.Phú Nhuận
            </p>
            <p className="customer__email">vana@gmail.com</p>
            <p className="customer__phone">ĐT: 0909777999</p>
          </div>
        </div>

        <div className="customer">
          <div className="customer__box">
            <p className="customer__name">Nguyễn Văn A</p>
            <p className="customer__address">
              184 Phan Đình Phùng, p.18, Q.Phú Nhuận
            </p>
            <p className="customer__email">vana@gmail.com</p>
            <p className="customer__phone">ĐT: 0909777999</p>
          </div>
        </div>
      </div>
    </WraperListCustomer>
  );
};

export default ListCustomer;
