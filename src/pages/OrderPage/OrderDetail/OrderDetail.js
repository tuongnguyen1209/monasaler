import React from "react";
import SubHeader from "../../../compoents/SubHeader/SubHeader";
import { WrapOrderDetail } from "./OrderDetailStyle";
import imgP from "../../../assets/img/matex_sealer.jpg";
import Button from "../../../compoents/Button/Button";
const OrderDetail = () => {
  return (
    <WrapOrderDetail>
      <SubHeader>Chi tiết đơn hàng</SubHeader>
      <div className="detail-order">
        <div className="detail-order__box">
          <span className="detail-order__icon">
            <i className="fas fa-receipt" />
          </span>
          <div className="detail-order__inner">
            <p className="detail-order__title">
              Mã đơn hàng: 610e172ad42dc62c1c27a399
            </p>
            <p className="detail-order__date">Ngày đặt hàng: 7/8/2021</p>
            <p className="detail-order__status">Đơn hàng tạm</p>
          </div>
        </div>
        <div className="detail-order__box">
          <span className="detail-order__icon">
            <i className="fas fa-map-marked-alt" />
          </span>
          <div className="detail-order__inner">
            <p className="detail-order__title">Thông tin khách hàng</p>
            <p className="detail-order__fullname">Nguyễn Văn A</p>
            <p className="detail-order__info">0909977567</p>
            <p className="detail-order__info">
              184 Lê Đại Hành, Phường 08, Quận 10, Hồ Chí Minh
            </p>
            <p className="detail-order__info">vana99@gmail.com</p>
          </div>
        </div>

        <div className="product">
          <div className="detail-order__box none">
            <span className="detail-order__icon">
              <i className="fas fa-box-open" />
            </span>
            <div className="detail-order__inner">
              <p className="detail-order__title">Thông tin đơn hàng</p>
            </div>
          </div>
          <div className="product__box2">
            <span className="product__img">
              <img src={imgP} alt="" />
            </span>
            <div className="product__inner">
              <p className="product__name">Sơn Nippon Matex Sắc Màu Dịu Mát</p>
              <p className="product__manu">Cung cấp bởi Sơn Nippon</p>
              <p className="product__total">100.000 x 2</p>
            </div>
          </div>
          <div className="product__box2">
            <span className="product__img">
              <img src={imgP} alt="" />
            </span>
            <div className="product__inner">
              <p className="product__name">Sơn Nippon Matex Sắc Màu Dịu Mát</p>
              <p className="product__manu">Cung cấp bởi Sơn Nippon</p>
              <p className="product__total">100.000 x 3</p>
            </div>
          </div>
        </div>
        <div className="price-summary">
          <div className="summary">
            <div className="summary__inner">
              <p className="summary__text">Tạm tính</p>
              <p className="summary__value">500.000 VND</p>
            </div>
            <div className="summary__inner">
              <p className="summary__text">VAT 10% (nếu có)</p>
              <p className="summary__value">50.000 VND</p>
            </div>
            <div className="summary__inner">
              <p className="summary__text summary__total">Thành tiền</p>
              <p className="summary__value summary__total">550.000 VND</p>
            </div>
          </div>
        </div>
      </div>
      <div className="btn-box">
        <Button>Quay lại</Button>
      </div>
    </WrapOrderDetail>
  );
};

export default OrderDetail;
