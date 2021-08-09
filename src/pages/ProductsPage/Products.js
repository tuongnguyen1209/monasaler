import React, { useEffect, useState } from "react";
import {
  Link,
  Route,
  Switch,
  useLocation,
  useRouteMatch,
} from "react-router-dom";
import { ProductApis } from "../../apis/ProductApis";
import Img from "../../assets/img/matex_sealer.jpg";
import PaintType from "../../compoents/PaintType/PaintType";
import SubHeader from "../../compoents/SubHeader/SubHeader";
import { WraperProduct } from "./ProductsStyle";

const Products = () => {
  const [dataKindOFPaint, setDataKindOFPaint] = useState();
  const [dataProduct, setDataProduct] = useState([]);

  const query = { limit: 20, types: "" };
  const match1 = useRouteMatch();
  const [currentTypes, setCurrentTypes] = useState({
    loaicha: "",
    loaicon: "",
  });
  const [show, setShow] = useState(true);
  const [title, setTitle] = useState("Sản phẩm");
  const location = useLocation();
  useEffect(() => {
    const path = location.pathname.split("/");
    console.log(path);
    if (path.length === 4) {
      setTitle(path[3]);
      // setCurrentTypes({
      //   loaicha: path[3],
      //   loaicon: path[2],
      // });
      if (currentTypes.loaicha !== path[2]) {
      }
    } else if (path.length === 3) {
      setTitle(path[2]);
    } else {
      setTitle("Chọn loại");
    }

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  useEffect(() => {
    ProductApis.getTypes().then((dataType) => {
      setDataKindOFPaint(dataType.data.docs);
    });
  }, []);

  useEffect(() => {
    const newQuerry = { ...query, types: currentTypes.loaicha };

    ProductApis.getAll(newQuerry).then((result) => {
      setDataProduct(result.data.products);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTypes.loaicha]);

  const fillterArrProduct = (arr = []) => {
    return arr.filter((el) => el.types[1] === currentTypes.loaicon);
  };

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

  const listProduct = fillterArrProduct(dataProduct).map((el, index) => {
    return (
      <div key={index} className="product">
        <Link to={`/chi-tiet-san-pham/${el.id}`}>
          <div className="product__img">
            <img src={el.image ? el.image : Img} alt="hinh" />
          </div>
          <div className="product__name">
            <span>{el.name}</span>
          </div>
        </Link>
      </div>
    );
  });

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
            render={({ match }) => {
              // setTitle("Sản phẩm");
              console.log(match.params);
              return paintType1;
            }}
          />

          <Route
            exact
            path={`${match1.path}/:cate`}
            render={({ match }) => {
              // setTitle(match.params.cate);

              return paintType2;
            }}
          />

          <Route
            exact
            path={`${match1.path}/:cate1/:cate2`}
            render={({ match }) => {
              // const { cate1, cate2 } = match.params;

              // setCurrentTypes({
              //   loaicha: cate1,
              //   loaicon: cate2,
              // });

              // setTitle(cate2);
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
                  <div className="product-list">{listProduct}</div>
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
