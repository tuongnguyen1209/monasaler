import React, { useEffect, useState } from "react";
import SubHeader from "../../../compoents/SubHeader/SubHeader";
import { WrapOrderDetail } from "./OrderDetailStyle";
import imgP from "../../../assets/img/matex_sealer.jpg";
import Button from "../../../compoents/Button/Button";
import { useHistory, useParams } from "react-router-dom";
import OrdersApis from "../../../apis/OrdersApi";
import { formatDate, formatPrice } from "../../../Hooks/use_Formater";
import { CustomerssApis } from "../../../apis/CustomerApis";
const OrderDetail = () => {
  const { id } = useParams();
  const [order, setOrder] = useState({});
  const [customer, setCustomer] = useState({});
  const history = useHistory();

  useEffect(() => {
    OrdersApis.getOrder(id)
      .then((result) => {
        console.log(result);
        setOrder(result.data.order);
        return CustomerssApis.getAll({ _id: result.data.order.customer.id });
      })
      .then((result) => {
        setCustomer(result.data.docs[0]);
      })
      .finally(() => {});
  }, [id]);

  const deleteThisOrder = () => {
    if (window.confirm("Bạn có chắc muốn hủy hóa đơn?")) {
      OrdersApis.delteOrder(id)
        .then((result) => {
          if (result.message === "Success") {
            history.push("/don-hang");
            return true;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    return false;
  };

  // const changeOrderToCart = () => {};

  return (
    <WrapOrderDetail>
      <SubHeader>Chi tiết đơn hàng</SubHeader>
      <div className="detail-order">
        <div className="detail-order__box">
          <span className="detail-order__icon">
            <i className="fas fa-receipt" />
          </span>
          <div className="detail-order__inner">
            <p className="detail-order__title">Mã đơn hàng: {order._id}</p>
            <p className="detail-order__date">
              Ngày đặt hàng:{" "}
              {order.createAt && formatDate(new Date(order.createAt))}
            </p>
            <p className="detail-order__status">{order.status}</p>
          </div>
        </div>
        <div className="detail-order__box">
          <span className="detail-order__icon">
            <i className="fas fa-map-marked-alt" />
          </span>
          <div className="detail-order__inner">
            <p className="detail-order__title">Thông tin khách hàng</p>
            {customer && (
              <>
                <p className="detail-order__fullname">{customer.fullname}</p>
                <p className="detail-order__info">{customer.phone}</p>
                <p className="detail-order__info">{customer.type}</p>
                <p className="detail-order__info">{customer.email}</p>
              </>
            )}
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
          {order.detail &&
            order.detail.map((el, ind) => (
              <div className="product__box2" key={`son-${ind}`}>
                <span className="product__img">
                  <img src={imgP} alt="" />
                </span>
                <div className="product__inner">
                  <p className="product__name">{el.product.name}</p>
                  <p className="product__manu">{el.colorInfo.name}</p>
                  <p className="product__total">
                    Đơn giá: {formatPrice(el.price)}x {el.inventory}
                  </p>
                  <p className="product__total">
                    Thành tiền: {formatPrice(el.price * el.inventory)}
                  </p>
                </div>
              </div>
            ))}
        </div>
        <div className="price-summary">
          <div className="summary">
            <div className="summary__inner">
              <p className="summary__text">Tạm tính</p>
              <p className="summary__value">{formatPrice(order.totalprice)}</p>
            </div>
            <div className="summary__inner">
              <p className="summary__text">VAT 10% (nếu có)</p>
              <p className="summary__value">
                {formatPrice(order.totalprice * 0.1)}
              </p>
            </div>
            <div className="summary__inner">
              <p className="summary__text summary__total">Thành tiền</p>
              <p className="summary__value summary__total">
                {formatPrice(order.totalprice * 1.1)}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="btn-box">
        {order.status === "Đơn hàng tạm" && (
          <>
            <div>
              <Button onClick={deleteThisOrder}>Hủy Đơn Hàng</Button>
            </div>

            <div style={{ margin: "1rem 0" }}>
              {/* <Button onClick={deleteThisOrder}>
                Chuyển thành đơn hàng tạm và hủy đơn hàng
              </Button> */}
            </div>
          </>
        )}
      </div>
    </WrapOrderDetail>
  );
};

export default OrderDetail;
