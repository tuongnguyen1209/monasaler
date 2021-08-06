import React, { useEffect, useState } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import { Link, useHistory } from "react-router-dom";
import { ReactComponent as Focus } from "../../assets/img/focus.svg";
import { WrapCamera } from "./ScanPageStyle";

const ScanPage = () => {
  const [data, setData] = useState("");
  const history = useHistory();

  useEffect(() => {
    if (checkData()) {
      console.log(data);
      console.log("chuyen huong", data.split(":"));
      history.push(`/chi-tiet-san-pham/${data.split(":")[1]}`);
    } else {
      console.log("sai url");
    }
  }, [data]);

  const checkData = () => {
    console.log(data && data.indexOf("p:") !== -1);
    return data && data.indexOf("p:") !== -1;
  };

  return (
    <WrapCamera>
      <div className="wrapVideo">
        <BarcodeScannerComponent
          width="100%"
          height="100%"
          onUpdate={(err, result) => {
            if (result) setData(result.text);
            else setData("");
          }}
        />
      </div>

      <div className="container">
        <p>Vui lòng quét mã vạch trên sản phẩm hoặc mã QR</p>
        <div className="image">
          <svg className="svg">
            <Focus />
          </svg>
          <div className="line"></div>
        </div>
        <Link to="/">
          <button className="btn">Quay lại</button>
        </Link>
      </div>
    </WrapCamera>
  );
};

export default ScanPage;
