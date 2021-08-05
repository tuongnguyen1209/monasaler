import React from "react";
import { Link } from "react-router-dom";
import { WraperProductList } from "./PaintTypeStyle";

const ProductType = (props) => {
  return (
    <WraperProductList>
      <Link to={props.linkTo} className="body__link">
        <div className="body__item">{props.children}</div>
      </Link>
    </WraperProductList>
  );
};

export default ProductType;
