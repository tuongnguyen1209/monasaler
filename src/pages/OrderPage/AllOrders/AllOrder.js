import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserApis } from "../../../apis/UserApis";
import Spinners from "../../../compoents/Spinners/Spinners";
import { UserContext } from "../../../contexts/UserContext";
import {
  FormatDate1,
  formatDateFull,
  formatPrice,
} from "../../../Hooks/use_Formater";
import { WrapAllOrder } from "./AllOrderStyle";

const AllOrder = () => {
  const [cateShow, setCateShow] = useState(0);
  const { user } = useContext(UserContext);
  const [date, setDate] = useState({
    "createAt[gte]": "",
    "createAt[lte]": "",
    limit: "50",
  });
  const [listOrders, setListOrder] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (
      date["createAt[gte]"] &&
      date["createAt[lte]"] &&
      date["createAt[gte]"] <= date["createAt[lte]"]
    ) {
      setLoading(true);
      UserApis.getOrderOfUser(user._id, date)
        .then((result) => {
          console.log(result);
          setListOrder(result.data.orders);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    } else if (cateShow === "3") {
      setLoading(true);
      UserApis.getOrderOfUser(user._id)
        .then((result) => {
          console.log(result);
          setListOrder(result.data.orders);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date, cateShow]);

  const chonceShow = (e) => {
    setCateShow(e.target.value);
    setDate({
      "createAt[gte]": "",
      "createAt[lte]": "",
      limit: "50",
    });
  };

  const changeDate = (event) => {
    const { name, value } = event.target;
    const newDate = { ...date };
    newDate[name] = value;
    setDate(newDate);
  };

  const changemoth = (event) => {
    const { value } = event.target;
    let date = new Date(value),
      y = date.getFullYear(),
      m = date.getMonth();
    let firstDay = new Date(y, m, 1);
    let lastDay = new Date(y, m + 1, 0);

    const newDate = {
      "createAt[gte]": FormatDate1(firstDay),
      "createAt[lte]": FormatDate1(lastDay),
    };
    setDate(newDate);
  };

  return (
    <WrapAllOrder>
      <div className="wrap-search">
        <div className="form-group">
          <label>Chọn loại </label>
          <select onChange={chonceShow} value={cateShow}>
            <option value="0">-----</option>
            <option value="1">Xem Theo Ngày</option>
            <option value="2">Xem Theo Tháng</option>
            <option value="3">Xem Tất Cả Đơn Hàng</option>
          </select>
        </div>
        {cateShow === "1" && (
          <>
            <div className="form-group">
              <label>Từ: </label>
              <input
                type="date"
                name="createAt[gte]"
                value={date["createAt[gte]"]}
                onChange={changeDate}
              />
            </div>
            <div className="form-group">
              <label>Đến: </label>
              <input
                type="date"
                name="createAt[lte]"
                value={date["createAt[lte]"]}
                onChange={changeDate}
              />
            </div>
          </>
        )}
        {cateShow === "2" && (
          <>
            <div className="form-group">
              <label>Chọn tháng: </label>
              <input type="month" onChange={changemoth} />
            </div>
          </>
        )}
      </div>

      <Spinners show={loading} />
      {listOrders.length > 0 && <h4>Kết quả tìm được</h4>}
      <div className="list-order">
        {listOrders.length > 0 && (
          <>
            {/* <Accordion title="ngay"> */}
            <table>
              <thead>
                <tr>
                  <th>Mã đơn hàng</th>
                  <th>Tên khách hàng</th>
                  <th>Thời gian</th>
                  <th>Số tiền</th>
                </tr>
              </thead>
              <tbody>
                {listOrders.map((el, index) => (
                  <tr key={`donhangtam-${index}`}>
                    <td>
                      <Link to={`/chi-tiet-don-hang/${el._id}`}>{el._id}</Link>
                    </td>
                    <td>{el.customer && el.customer.fullname}</td>
                    <td>{formatDateFull(new Date(el.createAt))}</td>
                    <td>{formatPrice(el.totalprice)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* </Accordion> */}
          </>
        )}
      </div>
    </WrapAllOrder>
  );
};

export default AllOrder;
