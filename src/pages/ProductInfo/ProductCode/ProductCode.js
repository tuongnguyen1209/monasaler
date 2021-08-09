import React, { useEffect, useState } from "react";
import SubHeader from "../../../compoents/SubHeader/SubHeader";
import { WraperProductCode } from "./ProductCodeStyle";
import barcodeImg from "../../../assets/img/barcode.jpg";
import { useHistory } from "react-router-dom";
import { ProductApis } from "../../../apis/ProductApis";
import { NotificationManager } from "react-notifications";

const ProductCode = () => {
  const [barcode, setBarcode] = useState();
  const history = useHistory();

  const handleChange = (e) => {
    setBarcode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (barcode) {
      history.push(`/chi-tiet-san-pham/${barcode}`);
    }
  };

  return (
    <WraperProductCode>
      <SubHeader>nhập mã sản phẩm</SubHeader>
      <div className="text-box">
        <h1 className="text-box__manual">
          Hãy nhập dãy số được in trên sản phẩm <br />
          (phía bên dưới mã vạch)
        </h1>
      </div>
      <form className="form-search">
        <input
          type="text"
          className="form-search__input"
          placeholder="89000000000000"
          name="barcode"
          value={barcode || ""}
          onChange={handleChange}
        />
        <button onClick={handleSubmit} className="form-search__button">
          hoàn tất
        </button>
      </form>
      <div className="img-box">
        <img src={barcodeImg} alt="" className="img-box__img" />
      </div>
    </WraperProductCode>
  );
};

export default ProductCode;
