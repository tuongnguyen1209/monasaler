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
  const [cateShow, setCateShow] = useState("1");
  const { user } = useContext(UserContext);
  const [listOrders, setListOrder] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (cateShow === "1") {
      setLoading(true);
      const date = {
        "createAt[gte]": FormatDate1(new Date()),
        limit: "50",
      };
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
    } else if (cateShow === "2") {
      setLoading(true);
      UserApis.getOrderOfUser(user._id, changemoth())
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
    return () => {
      setListOrder([]);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cateShow]);

  const chonceShow = (e) => {
    setCateShow(e.target.value);
  };

  const changemoth = () => {
    let date = new Date(),
      y = date.getFullYear(),
      m = date.getMonth();
    let firstDay = new Date(y, m, 1);
    let lastDay = new Date(y, m + 1, 0);
    const newDate = {
      "createAt[gte]": FormatDate1(firstDay),
      "createAt[lte]": FormatDate1(lastDay),
      limit: 100,
    };
    console.log(newDate);
    return newDate;
  };

  return (
    <WrapAllOrder>
      <div className="wrap-search">
        <div className="form-group">
          <label>Chọn loại </label>
          <select onChange={chonceShow} value={cateShow}>
            <option value="1">Xem Ngày hiện tại</option>
            <option value="2">Xem Tháng hiện tại</option>
          </select>
        </div>
      </div>

      <Spinners show={loading} />
      {listOrders.length === 0 && !loading && (
        <h4>Chưa có đơn hàng nào được tạo</h4>
      )}
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
