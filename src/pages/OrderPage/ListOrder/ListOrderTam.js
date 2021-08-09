import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserApis } from "../../../apis/UserApis";
import { UserContext } from "../../../contexts/UserContext";
import { formatDateFull, formatPrice } from "../../../Hooks/use_Formater";
import { WrapListOrder } from "./ListOrderStyle";

const ListOrderTam = () => {
  const [dataOrderOfUser, setDataOrderOfUser] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    UserApis.getOrderOfUser(user.id, { status: "Đơn hàng tạm" }).then(
      (result) => {
        console.log(result);
        setDataOrderOfUser(result.data.orders);
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <WrapListOrder>
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
          {dataOrderOfUser.map((el, index) => (
            <tr key={`donhangtam-${index}`}>
              <td>
                <Link to={`/chi-tiet-don-hang/${el._id}`}>{el.id}</Link>
              </td>

              <td>{el.customer.fullname}</td>
              <td>{formatDateFull(new Date(el.createAt))}</td>
              <td>{formatPrice(el.totalprice)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </WrapListOrder>
  );
};

ListOrderTam.propTypes = {};

export default ListOrderTam;
