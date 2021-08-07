import React, { useContext, useState } from "react";
import { formatDate, formatPrice } from "../../../src/Hooks/use_Formater";
import Img from "../../assets/img/matex_sealer.jpg";
import Accordion from "../../compoents/Accordion/Accordion";
import Button from "../../compoents/Button/Button";
import SubHeader from "../../compoents/SubHeader/SubHeader";
import Tabs from "../../compoents/Tabs/Tabs";
import { UserContext } from "../../contexts/UserContext";
import { ListItemCart, WrapOderPage } from "./OrderPageStyle";

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

  const { cart } = useContext(UserContext);

  return (
    <WrapOderPage>
      <SubHeader> Đơn Hàng</SubHeader>
      <span>(*) Kích vào số hóa đơn để xem chi tiết </span>
      <Tabs tabs={tabs} setTabs={setTabs} />

      {tabs[0].active &&
        cart.map((el, ind) => (
          <>
            <ListItemCart>
              <div className="item">
                <div className="wrapimg">
                  <img src={Img} />
                </div>
                <div className="info">
                  <h4>ten</h4>
                  <div className="mau">
                    <span
                      className="preview"
                      style={{ backgroundColor: "red" }}
                    ></span>
                    <span>ten mau</span>
                  </div>
                </div>
                <div className="tinhtoan">
                  <p>123</p>
                  <p>123</p>
                </div>
                <div className="action">
                  <button>Xóa</button>
                </div>
              </div>
            </ListItemCart>
            <div style={{ textAlign: "center" }}>
              <Button>Chuyển hóa đơn</Button>
            </div>
          </>
        ))}

      {tabs[1].active && (
        <div className="accordion-list">
          <Accordion title={formatDate(dataOrderOfUser[0].createAt)}>
            <table>
              <tr>
                <th>Mã đơn hàng</th>
                <th>Tên khách hàng</th>
                <th>Số tiền</th>
              </tr>
              <tr>
                <td>{dataOrderOfUser[0].id}</td>
                <td>{dataOrderOfUser[0].customer.fullname}</td>
                <td>{formatPrice(dataOrderOfUser[0].totalprice)}</td>
              </tr>
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
