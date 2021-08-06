import React, { useState } from "react";
import SubHeader from "../../compoents/SubHeader/SubHeader";
import Tabs from "../../compoents/Tabs/Tabs";
import { WrapOderPage } from "./OrderPageStyle";
const formatDate = (str) => {
  const date = new Date(str);
  if (!date) return;
  return new Intl.DateTimeFormat("vi", {
    timeStyle: "medium",
    dateStyle: "full",
  }).format(date);
};

const OrderPage = () => {
  const [tabs, setTabs] = useState([
    { id: 1, name: "Đơn Hàng Hiện Tại", active: true },
    { id: 2, name: "Đơn Hàng Chưa Thanh Toán", active: false },
    { id: 3, name: "Tất Cả Đơn Hàng", active: false },
  ]);
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
    {
      createAt: "2021-08-03T09:44:29.630Z",
      status: "Đơn hàng tạm",
      _id: "610910f062d5ca246cdad576",
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
      totalprice: 4300000,
      id: "610910f062d5ca246cdad576",
    },
    {
      createAt: "2021-08-03T09:44:29.630Z",
      status: "Đã thanh toán",
      _id: "610910fc62d5ca246cdad579",
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
      totalprice: 3750000,
      id: "610910fc62d5ca246cdad579",
    },
  ];
  const getArrByStatus = (arr = [], status) => {
    return arr.filter((e) => e.status === status);
  };
  return (
    <WrapOderPage>
      <SubHeader> Đơn Hàng</SubHeader>
      <span>(*) Kích vào số hóa đơn để xem chi tiết </span>

      <Tabs tabs={tabs} setTabs={setTabs} />

      {tabs[1].active && <></>}
    </WrapOderPage>
  );
};

export default OrderPage;
