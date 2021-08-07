import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ListItemCart } from "./CartItemStyle";
import Img from "../../../assets/img/matex_sealer.jpg";
import { Link } from "react-router-dom";
import { formatColor, formatPrice } from "../../../Hooks/use_Formater";
import { UserContext } from "../../../contexts/UserContext";

const CartItem = (props) => {
  const { el, ind } = props;
  const { changeSLCart, deleteCart } = useContext(UserContext);

  const changeSl = (value) => {
    changeSLCart(ind, value);
  };
  const deleteitem = () => {
    if (window.confirm("Bạn có chắc muốn xóa?")) {
      deleteCart(ind);
    }
  };

  return (
    <ListItemCart>
      <div className="item">
        <div className="wrapimg">
          <img src={Img} />
        </div>
        <div className="info">
          <h4>
            <Link to={`/chi-tiet-san-pham/${el.product._id}`}>
              {el.product && el.product.name}
            </Link>
          </h4>
          <div className="calcu">
            <div className="tinhtoan">
              <button
                onClick={() => {
                  if (el.quantity - 1 > 0) changeSl(el.quantity - 1);
                }}
              >
                -
              </button>
              <input
                type="number"
                onChange={(e) => {
                  changeSl(e.target.value);
                }}
                value={el.quantity}
              />
              <button
                onClick={() => {
                  changeSl(el.quantity + 1);
                }}
              >
                +
              </button>
            </div>
            <div className="mau">
              <span
                className="preview"
                style={{
                  backgroundColor: formatColor(el.color.color.colorcode),
                }}
              ></span>
              <span>{el.color && el.color.color.name}</span>
            </div>
          </div>

          <div>Thành Tiền: {formatPrice(el.quantity * el.price)} </div>
        </div>
        <div className="action">
          <button onClick={deleteitem}>
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>
    </ListItemCart>
  );
};

CartItem.propTypes = {};

export default CartItem;
