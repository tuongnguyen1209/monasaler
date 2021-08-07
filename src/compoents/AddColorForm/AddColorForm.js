import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { WrapAddCart } from "./AddColorFormStyle";
import Img from "../../assets/img/matex_sealer.jpg";
import Button from "../Button/Button";
import { formatColor, formatPrice } from "../../Hooks/use_Formater";
import { UserContext } from "../../contexts/UserContext";
import { useHistory } from "react-router-dom";

const AddColorForm = (props) => {
  const { color, product } = props;
  const { addToCart } = useContext(UserContext);
  const [sl, setSl] = useState(1);
  const history = useHistory();

  const changeSl = (e) => {
    if (!e.target.value) {
      setSl(1);
      return;
    }
    if (
      parseInt(e.target.value) > 0 &&
      parseInt(e.target.value) <= color.inventory
    )
      setSl(parseInt(e.target.value));
  };
  const changeSl1 = (s) => {
    if (sl + s > 0 && sl + s <= color.inventory) setSl(sl + s);
  };

  const handleAddTocart = () => {
    addToCart({
      product: product,
      color: color,
      price: product.lastestPrice,
      quantity: sl,
    });
    history.push("/don-hang");
  };

  return (
    <WrapAddCart>
      <h3>Thêm màu vào đơn tạm</h3>
      <div className="wrapimg">
        <img src={product.image ? product.image : Img} alt="hinh sp" />
      </div>
      <div className="wrapInfo">
        <h4>{product.name}</h4>
        <div className="color">
          <span>Màu: </span>
          <span className="namecl">{color.color.name}</span>
          <span
            className="clpreview"
            style={{ backgroundColor: formatColor(color.color.colorcode) }}
          ></span>
          {/* <span className="tonkho">{color.inventory}</span> */}
        </div>

        <div className="inputform">
          <button
            onClick={() => {
              changeSl1(-1);
            }}
          >
            <i className="fas fa-minus"></i>
          </button>
          <input type="number" min="1" value={sl} onChange={changeSl} />
          <button
            onClick={() => {
              changeSl1(1);
            }}
          >
            <i className="fas fa-plus"></i>
          </button>
        </div>
        <div className="ifo">
          <span>Đơn Giá: </span>
          <strong>{formatPrice(product.lastestPrice)}</strong>
        </div>
        <div className="ifo">
          <span>Thành Tiền: </span>
          <strong>{formatPrice(product.lastestPrice * sl)}</strong>
        </div>
      </div>
      <div className="wrapAction">
        <Button onClick={handleAddTocart}>Thêm</Button>
      </div>
    </WrapAddCart>
  );
};

AddColorForm.propTypes = {
  color: PropTypes.object.isRequired,
  product: PropTypes.object.isRequired,
};

export default AddColorForm;
