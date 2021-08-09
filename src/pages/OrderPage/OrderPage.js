import React, { useContext, useEffect, useState } from "react";
import { NotificationManager } from "react-notifications";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import { formatDate, formatPrice } from "../../../src/Hooks/use_Formater";
import OrdersApis from "../../apis/OrdersApi";
import Accordion from "../../compoents/Accordion/Accordion";
import Button from "../../compoents/Button/Button";
import SubHeader from "../../compoents/SubHeader/SubHeader";
import Tabs from "../../compoents/Tabs/Tabs";
import { UserContext } from "../../contexts/UserContext";
import CartItem from "./CartItem/CartItem";
import ChoceCustomer from "./ChonceCustomer/ChoceCustomer";
import { WrapOderPage } from "./OrderPageStyle";

const dataOrderOfUser = [
  {
    createAt: "2021-08-03T09:44:29.630Z",
    status: "Đã thanh toán",
    _id: "610910d462d5ca246cdad572",
    saler: {
      _id: "60fce2dc24eb121394942a9a",
      fullname: "Nguyen Van Saler 1",
      id: "60fce2dc24eb121394942a9a",
    },
    customer: {
      _id: "60e81c9d50017d2c0426cc61",
      fullname: "Nguyen Van B",
      id: "60e81c9d50017d2c0426cc61",
    },
    type: "Đơn hàng bán",
    cashier: {
      _id: "61023f7aae56b32db8e60d0b",
      fullname: "Nguyễn Thị Cashier 1",
      id: "61023f7aae56b32db8e60d0b",
    },
    totalprice: 3600000,
    id: "610910d462d5ca246cdad572",
  },
];

const OrderPage = () => {
  const [tabs, setTabs] = useState([
    { id: 1, name: "Đơn Hàng Hiện Tại", active: true },
    { id: 2, name: "Đơn Hàng Chưa Thanh Toán", active: false },
    { id: 3, name: "Tất Cả Đơn Hàng", active: false },
  ]);
  const [steper, setSteper] = useState(0);
  const { cart, user, clearCart } = useContext(UserContext);
  const [customer, setCustomer] = useState({});

  const chonceUser = (u) => {
    setCustomer(u);
    setSteper(2);
  };

  useEffect(() => {
    if (cart.length > 0) {
      setSteper(1);
    }
  }, []);

  const totalCart = () => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      const element = cart[i];
      total += element.quantity * element.price;
    }
    return total;
  };

  const confirmOrder = () => {
    const order = {
      saler: user._id,
      customer: customer._id,
      details: [],
      type: "Đơn hàng bán",
    };
    for (let i = 0; i < cart.length; i++) {
      const element = cart[i];
      order.details.push({
        product: element.product._id,
        color: element.color._id,
        price: element.price,
        quantity: element.quantity,
      });
    }

    OrdersApis.createOrder(order)
      .then((result) => {
        console.log(result);
        NotificationManager.success("Thêm đơn hàng thành công!!!");
        setSteper(0);
        clearCart();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <WrapOderPage>
      <SubHeader> Đơn Hàng</SubHeader>
      <span className="note-text">
        (*) Kích vào mã đơn hàng để xem chi tiết
      </span>
      <Tabs tabs={tabs} setTabs={setTabs} />

      {tabs[0].active && (
        <>
          {cart.map((el, ind) => (
            <CartItem key={ind} ind={ind} el={el} />
          ))}

          <div style={{ textAlign: "center", margin: "1rem 0" }}>
            {steper === 0 && <p>Bạn chưa thêm sản phẩm nào</p>}
            {steper === 1 && (
              <Popup
                trigger={
                  <div className="btn-box">
                    <Button>Chọn khách hàng</Button>
                  </div>
                }
                modal
              >
                {(close) => (
                  <ChoceCustomer chonceUser={chonceUser} close={close} />
                )}
              </Popup>
            )}
            {steper === 2 && (
              <>
                <ul className="orderinfo">
                  <li>
                    <span>Tên khách hàng:</span>
                    <strong>{customer.fullname}</strong>
                  </li>
                  <li>
                    <span>Số Điện Thoại:</span>
                    <strong>{customer.phone}</strong>
                  </li>
                  {/* <li>
                    <span>Địa chỉ:</span>
                    <strong></strong>
                  </li> */}
                  <div className="line"></div>
                  <li>
                    <span>Tổng hóa đơn:</span>
                    <strong className="price">
                      {formatPrice(totalCart())}
                    </strong>
                  </li>

                  <li>
                    <span>Thuế:</span>
                    <strong className="price">
                      {formatPrice(totalCart() * 0.1)}
                    </strong>
                  </li>
                  <li>
                    <span>Tổng cộng:</span>
                    <strong className="price">
                      {formatPrice(totalCart() * 1.1)}
                    </strong>
                  </li>
                </ul>
                <Button onClick={confirmOrder}>Chuyển hóa đơn</Button>
              </>
            )}
          </div>
        </>
      )}

      {tabs[1].active && (
        <div className="accordion-list">
          <Accordion title={formatDate(dataOrderOfUser[0].createAt)}>
            <table>
              <thead>
                <tr>
                  <th>Mã đơn hàng</th>
                  <th>Tên khách hàng</th>
                  <th>Số tiền</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Link to="/chi-tiet-don-hang/:id">
                      {dataOrderOfUser[0].id}
                    </Link>
                  </td>

                  <td>{dataOrderOfUser[0].customer.fullname}</td>
                  <td>{formatPrice(dataOrderOfUser[0].totalprice)}</td>
                </tr>
              </tbody>
            </table>
          </Accordion>
        </div>
      )}
      {tabs[2].active && (
        <>
          <p>abc</p>
        </>
      )}
    </WrapOderPage>
  );
};

export default OrderPage;
