import React from "react";
import SubHeader from "../../../compoents/SubHeader/SubHeader";
import { WraperProductCode } from "./ProductCodeStyle";
import barcodeImg from "../../../assets/img/barcode.jpg";

const ProductCode = () => {
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
          placeholder="890000000000000"
        />
        <button className="form-search__button">hoàn tất</button>
      </form>
      <div className="img-box">
        <img src={barcodeImg} alt="" className="img-box__img" />
      </div>
    </WraperProductCode>
  );
};

export default ProductCode;
