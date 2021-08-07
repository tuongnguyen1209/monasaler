

import Accordion from "../../compoents/Accordion/Accordion";
import SubHeader from "../../compoents/SubHeader/SubHeader";
import Tabs from "../../compoents/Tabs/Tabs";
import { formatDate, formatPrice } from "../../../src/Hooks/use_Formater";

import React, { useContext, useState } from "react";
import { ListItemCart, WrapOderPage } from "./OrderPageStyle";
import Img from "../../assets/img/matex_sealer.jpg";
import Button from "../../compoents/Button/Button";
import { UserContext } from "../../contexts/UserContext";


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

    </WrapOderPage>
  );
};

export default OrderPage;
