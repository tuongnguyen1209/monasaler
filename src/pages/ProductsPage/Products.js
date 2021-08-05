import React from "react";
import PaintType from "../../compoents/PaintType/PaintType";
import SubHeader from "../../compoents/SubHeader/SubHeader";
import { WraperProduct } from "./ProductsStyle";

const Products = () => {
  const dataKindOFPaint = ["sơn nội thất", "sơn ngoại thất"];

  const paintType = dataKindOFPaint.map((type, index) => {
    return (
      <PaintType linkTo="" key={index}>
        {type}
      </PaintType>
    );
  });

  return (
    <WraperProduct>
      <SubHeader>sản phẩm</SubHeader>
      <div className="body">
        <h1 className="body__text">Tra cứu sản phẩm</h1>
        {paintType}
      </div>
    </WraperProduct>
  );
};

export default Products;
