import React, { useEffect, useState } from "react";
import SubHeader from "../../compoents/SubHeader/SubHeader";
import { WrapProductInfo } from "./ProductInfoStyle";
import Img from "../../assets/img/matex_sealer.jpg";
import { useParams } from "react-router-dom";
import { ProductApis } from "../../apis/ProductApis";

const ProductInfo = () => {
  const [product, setProduct] = useState({
    lastestPrice: 0,
    surfaces: [],
    surfacegloss: [],
    surfacegloss: [],
    types: [],
  });
  const { id } = useParams();

  useEffect(() => {
    ProductApis.get(id).then((result) => {
      console.log(result.data.product);
      setProduct(result.data.product);
    });
  }, [id]);

  return (
    <WrapProductInfo>
      <SubHeader>Thông tin sản phẩm</SubHeader>
      {product && (
        <div className="product">
          <div className="product__name">
            <h1>{product.name}</h1>
          </div>
          <div className="product__img">
            <img src={product.image ? product.image : Img} alt="" />
          </div>
          <div className="product__details">
            <ul>
              <li>
                <span>Giá:</span>
                <strong>{product.lastestPrice}</strong>
              </li>
              <li>
                <span>Bề mặt:</span>
                <strong>{product.surfaces.join(",")}</strong>
              </li>
              <li>
                <span>Bề mặt sau sơn:</span>
                <strong>{product.surfacegloss.join(",")}</strong>
              </li>
              <li>
                <span>Loại:</span>
                <strong>{product.types.join(",")}</strong>
              </li>
            </ul>

            <p className=" product__text">
              Nippon WP 200 là loại sơn chống thấm cao cấp, bảo vệ cho các bề
              mặt tường đứng khỏi sự thấm nước từ phía thi công. Màng sơn có
              tính năng chống kiềm và chống rêu mốc rất tốt.Sản phẩm không cần
              pha trộn với xi-măng, dễ thi công.Sơn chống thấm màu vàng, xám -
              phù hợp với đại đa số công trình tại Việt Nam
            </p>
          </div>
        </div>
      )}
    </WrapProductInfo>
  );
};

export default ProductInfo;
