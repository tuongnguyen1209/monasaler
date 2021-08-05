import React from "react";
import SubHeader from "../../compoents/SubHeader/SubHeader";
import { WrapProductInfo } from "./ProductInfoStyle";
import Img from "../../assets/img/matex_sealer.jpg";

const ProductInfo = () => {
  return (
    <WrapProductInfo>
      <SubHeader>Thông tin sản phẩm</SubHeader>
      <div className="product">
        <div className="product__name">
          <h1>Sơn Nippon Matex Sắc Màu Dịu Mát</h1>
        </div>
        <div className="product__img">
          <img src={Img} alt="" />
        </div>
        <div className="product__details">
          <p className=" product__text">
            Nippon WP 200 là loại sơn chống thấm cao cấp, bảo vệ cho các bề mặt
            tường đứng khỏi sự thấm nước từ phía thi công. Màng sơn có tính năng
            chống kiềm và chống rêu mốc rất tốt.Sản phẩm không cần pha trộn với
            xi-măng, dễ thi công.Sơn chống thấm màu vàng, xám - phù hợp với đại
            đa số công trình tại Việt Nam
          </p>
        </div>
      </div>
    </WrapProductInfo>
  );
};

export default ProductInfo;
