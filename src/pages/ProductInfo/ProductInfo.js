import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Popup from "reactjs-popup";
import { ProductApis } from "../../apis/ProductApis";
import Img from "../../assets/img/matex_sealer.jpg";
import AddColorForm from "../../compoents/AddColorForm/AddColorForm";
import SubHeader from "../../compoents/SubHeader/SubHeader";
import ChangeColorText from "../../Hooks/use_ChageColorText";
import { formatColor, formatPrice } from "../../Hooks/use_Formater";
import { WrapColor, WrapProductInfo } from "./ProductInfoStyle";

const ProductInfo = () => {
  const [product, setProduct] = useState({
    lastestPrice: 0,
    surfaces: [],
    surfacegloss: [],
    types: [],
  });
  const [errorId, setErrorId] = useState(false);
  const { id } = useParams();
  const [kw, setKW] = useState("");

  useEffect(() => {
    ProductApis.get(id)
      .then((result) => {
        setProduct(result.data.product);
      })
      .catch(() => {
        setErrorId(true);
      });
  }, [id]);

  const filterColter = (arr = []) => {
    if (kw === "") return arr;

    return arr.filter(
      (el) =>
        el.color.name.toLocaleLowerCase().indexOf(kw.toLocaleLowerCase()) !== -1
    );
  };

  const handleChangeText = (event) => {
    const { value } = event.target;
    setKW(value);
  };

  // if (errorId) {
  //   return (
  //     <>
  //       <SubHeader>Thông tin sản phẩm</SubHeader>
  //       <p>Không tìm thấy sản phẩm</p>;
  //     </>
  //   );
  // }

  return (
    <WrapProductInfo>
      <SubHeader>Thông tin sản phẩm</SubHeader>
      {errorId ? (
        <p
          style={{
            position: "absolute",
            top: "50%",
            transform: "translateX(-50%)",
            left: "50%",
            textAlign: "center",
            width: "100%",
            fontSize: "1.8rem",
            fontWeight: "600",
          }}
        >
          Không tìm thấy sản phẩm
        </p>
      ) : (
        <div className="product">
          <div className="product__name">
            <h1>{product.name}</h1>
          </div>
          <div className="product__img">
            <img src={product.image ? product.image : Img} alt="" />
          </div>
          <div className="product__details">
            <ul className="info">
              <li>
                <span>Giá:</span>
                <strong>{formatPrice(product.lastestPrice)}</strong>
              </li>
              <li>
                <span>Đơn vị:</span>
                <strong>{product.unit}</strong>
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
            <div className="titlecl">
              <h3>Màu sắc</h3>
              <input
                placeholder="Tìm kiếm tên màu ... "
                onChange={handleChangeText}
              />
              <p>Nhấp vào màu để lập hóa đơn</p>
            </div>
            <div className="colors">
              {product.colors &&
                filterColter(product.colors).map((el, index) => (
                  <div className="color" key={`mau-${index}`}>
                    <WrapColor
                      dataColor={formatColor(el.color.colorcode)}
                      textcolor={ChangeColorText(
                        formatColor(el.color.colorcode)
                      )}
                    >
                      <Popup
                        trigger={
                          <div className="btn-box">
                            {el.color.name} - {el.inventory}
                          </div>
                        }
                        modal
                      >
                        {(close) => (
                          <AddColorForm product={product} color={el} />
                        )}
                      </Popup>
                    </WrapColor>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </WrapProductInfo>
  );
};

export default ProductInfo;
