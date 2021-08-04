import React from "react";
import SubHeader from "../../compoents/SubHeader";
import { WraperProduct } from "./ProductsStyle";

const Products = () => {
  return (
    <WraperProduct>
      <SubHeader>sản phẩm</SubHeader>
      <div className="body">
        <h1 className="body__text">Tra cứu sản phẩm</h1>
        <div className="body__item">sơn nội thất</div>
        <div className="body__item">sơn ngoại thất</div>
      </div>
    </WraperProduct>
  );
};

export default Products;
