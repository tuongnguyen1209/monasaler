import React, { useEffect, useState } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import { Link, useHistory } from "react-router-dom";
import { ReactComponent as Focus } from "../../assets/img/focus.svg";
import { WrapCamera } from "./ScanPageStyle";

const ScanPage = () => {
  const [data, setData] = useState("");
  const history = useHistory();

  useEffect(() => {
    if (data) {
      console.log(data);
      console.log("chuyen huong", data);
      history.push(`/chi-tiet-san-pham/${data}`);
    } else {
      console.log("sai url");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

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
