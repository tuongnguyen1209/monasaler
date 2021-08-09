import React from "react";
import { Link } from "react-router-dom";
import Accordion from "../../../compoents/Accordion/Accordion";
import { formatDate, formatPrice } from "../../../Hooks/use_Formater";
import { WrapListOrder } from "./ListOrderStyle";

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

const ListOrderTam = (props) => {
  return (
    <WrapListOrder>
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
                <Link to="/chi-tiet-don-hang/:id">{dataOrderOfUser[0].id}</Link>
              </td>

              <td>{dataOrderOfUser[0].customer.fullname}</td>
              <td>{formatPrice(dataOrderOfUser[0].totalprice)}</td>
            </tr>
          </tbody>
        </table>
      </Accordion>
    </WrapListOrder>
  );
};

ListOrderTam.propTypes = {};

export default ListOrderTam;
