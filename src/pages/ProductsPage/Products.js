import React, { useState } from "react";
import { Route, Switch, useParams, useRouteMatch } from "react-router-dom";
import PaintType from "../../compoents/PaintType/PaintType";
import SubHeader from "../../compoents/SubHeader/SubHeader";
import { WraperProduct } from "./ProductsStyle";

const Products = () => {
  const dataKindOFPaint = [
    {
      _id: "60f50f75fe00a91594bacc87",
      name: "Sơn nội thất",
      role: "Loại cha",
    },
    {
      _id: "60f50f7cfe00a91594bacc89",
      name: "Sơn ngoại thất",
      role: "Loại cha",
    },
    {
      _id: "60f50f9bfe00a91594bacc8b",
      name: "Sơn lót",
      role: "Loại con",
    },
    {
      _id: "60f50fa8fe00a91594bacc8d",
      name: "Sơn phủ",
      role: "Loại con",
    },
    {
      _id: "60f511951d75f323a049d292",
      name: "Bột trét",
      role: "Loại con",
    },
    {
      _id: "60f511b81d75f323a049d294",
      name: "Sơn giữa",
      role: "Loại con",
    },
    {
      _id: "60f511c31d75f323a049d296",
      name: "Sơn chống thấm",
      role: "Loại con",
    },
    {
      _id: "60f511df1d75f323a049d298",
      name: "Sơn chịu nhiệt",
      role: "Loại con",
    },
  ];
  const parram = useParams();
  const match1 = useRouteMatch();
  const [currentTypes, setCurrentTypes] = useState({
    loaicha: "",
    loaicon: "",
  });
  const [title, setTitle] = useState("Sản phẩm");
  const fillterArr = (arr = [], types = "") => {
    return arr.filter((el) => el.role === types);
  };

  const changeType = (loai, tenLoai) => {
    const newCurrentType = { ...currentTypes };
    newCurrentType[tenLoai] = loai;
    setCurrentTypes(newCurrentType);
  };

  const paintType1 = fillterArr(dataKindOFPaint, "Loại cha").map(
    (type, index) => {
      return (
        <div
          key={`loaicha${index}`}
          onClick={() => {
            changeType(type.name, "loaicha");
          }}
        >
          <PaintType linkTo={`${match1.path}/${type.name}`}>
            {type.name}
          </PaintType>
        </div>
      );
    }
  );
  const paintType2 = fillterArr(dataKindOFPaint, "Loại con").map(
    (type, index) => {
      return (
        <div
          key={`loaicon${index}`}
          onClick={() => {
            changeType(type.name, "loaicon");
          }}
        >
          <PaintType
            linkTo={`${match1.path}/${currentTypes.loaicha}/${type.name}`}
          >
            {type.name}
          </PaintType>
        </div>
      );
    }
  );

  return (
    <WraperProduct>
      <SubHeader>{title}</SubHeader>
      <div className="body">
        <h1 className="body__text">Tra cứu sản phẩm</h1>
        <Switch>
          <Route
            exact
            path={`${match1.path}`}
            render={() => {
              setTitle("Sản phẩm");
              return paintType1;
            }}
          />

          <Route
            exact
            path={`${match1.path}/:cate`}
            render={({ match }) => {
              setTitle(match.params.cate);
              return paintType2;
            }}
          />

          <Route
            exact
            path={`${match1.path}/:cate1/:cate2`}
            render={({ match }) => {
              const { cate1, cate2 } = match.params;
              setTitle(cate2);
              return (
                <>
                  <p>san pham</p>
                  <p>{cate1}</p>
                  <p>{cate2}</p>
                </>
              );
            }}
          />
        </Switch>
      </div>
    </WraperProduct>
  );
};

export default Products;
