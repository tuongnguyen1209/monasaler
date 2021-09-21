import React, { useContext, useEffect, useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { UserApis } from "../../apis/UserApis";
import Spinners from "../../compoents/Spinners/Spinners";
import SubHeader from "../../compoents/SubHeader/SubHeader";
import Tabs from "../../compoents/Tabs/Tabs";
import { UserContext } from "../../contexts/UserContext";
import {
  FormatDate1,
  formatDateSort,
  formatPrice,
} from "../../Hooks/use_Formater";
import { WrapStatistic } from "./StatisticPageStyle";

const StatisticPage = () => {
  const [listOrder, setListOrder] = useState([]);
  const { user } = useContext(UserContext);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [tabs, setTabs] = useState([
    { id: 1, name: "Thống kê tháng hiện tại", active: true },
  ]);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState({
    "createAt[gte]": "",
    "createAt[lte]": "",
    limit: 50,
  });
  const [err, setErr] = useState("");

  useEffect(() => {
    if (
      user._id !== undefined &&
      date &&
      date["createAt[gte]"] &&
      date["createAt[lte]"] &&
      date["createAt[gte]"] <= date["createAt[lte]"]
    )
      setLoading(true);
    UserApis.getOrderOfUser(user._id, date)
      .then((result) => {
        if (result.quantity > 0) {
          setListOrder(result.data.orders);
          setShow(true);
          setErr("");

          if (tabs[0].active) setTitle(`trong tháng ${getmonth() + 1}`);
        } else {
          setErr("Không có đơn hàng phù hợp");
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {
      setShow(false);
      setErr("");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user._id, date]);

  useEffect(() => {
    if (tabs[0].active) {
      setDate(getdate());
    } else if (tabs[3].active) {
      const year = new Date().getFullYear();
      setDate({
        "createAt[gte]": `${year}-1-1`,
        "createAt[lte]": `${year}-12-31`,
        limit: 100,
        sort: "createAt",
      });
    }
    return () => {
      setDate({
        "createAt[gte]": "",
        "createAt[lte]": "",
        limit: 50,
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tabs]);

  const getdate = (value = null) => {
    let date;
    if (value) date = new Date(value);
    else date = new Date();
    let y = date.getFullYear(),
      m = date.getMonth();
    let firstDay = new Date(y, m, 1);
    let lastDay = new Date(y, m + 1, 0);
    return {
      "createAt[gte]": FormatDate1(firstDay),
      "createAt[lte]": FormatDate1(lastDay),
      limit: 50,
      sort: "createAt",
    };
  };

  const getDonThanhCong = () => {
    let dem = 0,
      doanhthu = 0;
    if (listOrder.length > 0) {
      for (let i = 0; i < listOrder.length; i++) {
        const element = listOrder[i];
        if (element.status === "Đã thanh toán") {
          dem++;
          doanhthu += element.totalprice;
        }
      }
    }
    return { dem, doanhthu };
  };

  const getmonth = () => {
    return new Date().getMonth();
  };

  // const changeDate = (e) => {
  //   const { name, value } = e.target;
  //   const newDate = { ...date };
  //   newDate[name] = value;
  //   setDate(newDate);
  // };

  // const changemonth = (event) => {
  //   const { value } = event.target;
  //   setDate(getdate(value));
  // };

  const getOrderFromDate = () => {
    const arr = [];

    for (let i = 0; i < listOrder.length; i++) {
      const element = listOrder[i];
      if (element.status === "Đã thanh toán") {
        let vt = arr.findIndex(
          (el) => formatDateSort(el.date) === formatDateSort(element.createAt)
        );
        if (vt !== -1) {
          arr[vt].price += element.totalprice;
        } else {
          arr.push({
            date: formatDateSort(element.createAt),
            price: element.totalprice,
          });
        }
      }
    }

    return arr;
  };

  return (
    <WrapStatistic>
      <div className="tabst">
        <SubHeader>Thống kê</SubHeader>
      </div>

      <Tabs tabs={tabs} setTabs={setTabs} />

      <div className="tabst">
        <Spinners show={loading} />
      </div>

      {err && <h4>{err}</h4>}
      {show && (
        <>
          <h4>Thống kê doanh thu {title}</h4>

          <h4>Doanh thu theo ngày </h4>
          <div className="statistic-to-month">
            <div className="wrapchart">
              <LineChart
                width={500}
                height={250}
                data={getOrderFromDate()}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="price" stroke="#8884d8" />
              </LineChart>
            </div>
          </div>
          <div className="my-statistic">
            <div className="item">
              <span>Tổng số đơn hàng:</span>
              <strong>{listOrder.length}</strong>
            </div>
            <div className="item">
              <span>Số đơn hàng đã thanh toán:</span>
              <strong>{getDonThanhCong().dem}</strong>
            </div>

            <div className="item">
              <span>Doanh Thu:</span>
              <strong>{formatPrice(getDonThanhCong().doanhthu)}</strong>
            </div>
          </div>
        </>
      )}
    </WrapStatistic>
  );
};

export default StatisticPage;
