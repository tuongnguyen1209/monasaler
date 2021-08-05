import React from "react";
import PaintType from "../../../compoents/PaintType/PaintType";
import SubHeader from "../../../compoents/SubHeader/SubHeader";
import { WraperProductType } from "./ProductTypeStyle";

const ProductSubType = (props) => {
  const typeColor = ["sơn nội thất", " sơn ngoại thất"];
  const subTypeOfTypeColor = [1, 2, 3];
  return (
    <WraperProductType>
      <SubHeader>sơn nội thất</SubHeader>
      <PaintType></PaintType>
    </WraperProductType>
  );
};

export default ProductSubType;
