import React from "react";
import { WraperContent } from "./ContentStyle";
import { ReactComponent as Scan } from "../../assets/img/barcode-scan.svg";
import { ReactComponent as Keyboard } from "../../assets/img/keyboard.svg";
import { Link } from "react-router-dom";

const Content = () => {
  return (
    <WraperContent>
      <Link to="/scan">
        <div className="scan">
          <svg className="scan__img">
            <Scan />
          </svg>
          <span className="scan__text">quét mã sản phẩm</span>
        </div>
      </Link>

      <Link to="/nhap-ma-san-pham">
        <div className="scan">
          <svg className="scan__img">
            <Keyboard />
          </svg>
          <span className="scan__text">nhập mã sản phẩm</span>
        </div>
      </Link>

      <div className="manual">
        <div className="manual__header">
          <p className="manual__title">Hướng dẫn QUÉT MÃ SẢN PHẨM</p>
        </div>
        <div className="manual__content">
          <div className="manual__text">
            <span data-color="red">Bước 1: </span>
            <span data-color="nor">Bấm vào </span>
            <span data-color="red">QUÉT MÃ SẢN PHẨM</span>
            <span data-color="nor">
              {" "}
              trên màn hình để thực hiện quá trình quét{" "}
            </span>
          </div>
          <div className="manual__text">
            <span data-color="red">Bước 2: </span>
            <span data-color="nor">
              Di chuyển màn hình điện thoại đến vùng mã vạch được dán trên thùng
              sơn để{" "}
            </span>
            <span data-color="red"> THỰC HIỆN QUÉT MÃ</span>
          </div>
          <div className="manual__text">
            <span data-color="red">Bước 3: </span>
            <span data-color="red"> HIỂN THỊ THÔNG TIN SẢN PHẨM. </span>
            <span data-color="nor">Nhấn vào nút thêm để thêm vào đơn hàng</span>
          </div>
        </div>
      </div>

      <div className="manual">
        <div className="manual__header">
          <p className="manual__title">Hướng dẫn NHẬP MÃ SẢN PHẨM</p>
        </div>
        <div className="manual__content">
          <div className="manual__text">
            <span data-color="red">Bước 1: </span>
            <span data-color="nor">Bấm vào </span>
            <span data-color="red">NHẬP MÃ SẢN PHẨM</span>
            <span data-color="nor">
              {" "}
              trên màn hình để thực hiện quá trình nhập{" "}
            </span>
          </div>
          <div className="manual__text">
            <span data-color="red">Bước 2: </span>
            <span data-color="nor">
              Nhập vào dãy số trên mã vạch được dán trên thùng sơn để{" "}
            </span>
            <span data-color="red"> THỰC HIỆN KIỂM TRA</span>
          </div>
          <div className="manual__text">
            <span data-color="red">Bước 3: </span>
            <span data-color="red"> HIỂN THỊ THÔNG TIN SẢN PHẨM. </span>
            <span data-color="nor">Nhấn vào nút thêm để thêm vào đơn hàng</span>
          </div>
        </div>
      </div>
      {/* <form action="#" className="search">
        <input
          type="text"
          className="search__input"
          placeholder="Tìm kiếm...."
        />
        <button className="search__button">
          <i className="fas fa-search search__icon"></i>
        </button>
      </form> */}
    </WraperContent>
  );
};

export default Content;
