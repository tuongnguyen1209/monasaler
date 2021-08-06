import React, { useEffect, useState } from "react";
import {
  Link,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import PaintType from "../../compoents/PaintType/PaintType";
import SubHeader from "../../compoents/SubHeader/SubHeader";
import { WraperProduct } from "./ProductsStyle";
import ImgProduct from "../../assets/img/matex_sealer.jpg";
import { ProductApis } from "../../apis/ProductApis";

const Products = () => {
  const [dataKindOFPaint, setDataKindOFPaint] = useState();
  useEffect(() => {
    ProductApis.getTypes().then((dataType) => {
      setDataKindOFPaint(dataType.data.docs);
    });
  }, []);

  const parram = useParams();
  const match1 = useRouteMatch();
  const [currentTypes, setCurrentTypes] = useState({
    loaicha: "",
    loaicon: "",
  });
  const [show, setShow] = useState(true);
  const [title, setTitle] = useState("Sản phẩm");
  const fillterArr = (arr = [], types = "") => {
    return arr.filter((el) => el.role === types);
  };
  const changeType = (loai, tenLoai) => {
    const newCurrentType = { ...currentTypes };
    newCurrentType[tenLoai] = loai;
    setCurrentTypes(newCurrentType);
  };
  const onShow = () => {
    if (!currentTypes.loaicon) {
      setShow(!show);
    }
    console.log(currentTypes);
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
            onShow={onShow}
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
        <h1 className={`body__text ${show ? "" : "text-hidden"}`}>
          Tra cứu sản phẩm
        </h1>
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
                  <form className="search">
                    <input
                      type="text"
                      className="search__input"
                      placeholder="Tìm kiếm...."
                    />
                    <button className="search__button">
                      <i className="fas fa-search search__icon"></i>
                    </button>
                  </form>
                  <div className="product-list">
                    <Link to="/chi-tiet-san-pham/:id">
                      <div className="product">
                        <div className="product__img">
                          <img src={ImgProduct} />
                        </div>
                        <div className="product__name">
                          <span>Sơn Lót Nội Thất Matex Sealer</span>
                        </div>
                      </div>
                    </Link>
                    <div className="product">
                      <div className="product__img">
                        <img src={ImgProduct} />
                      </div>
                      <div className="product__name">
                        <span>Sơn Lót Nội Thất Matex Sealer</span>
                      </div>
                    </div>
                  </div>
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
