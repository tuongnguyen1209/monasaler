import React from "react";
import { WraperContent } from "./ContentStyle";
import { ReactComponent as Scan } from "../../assets/img/barcode-scan.svg";
import { ReactComponent as Keyboard } from "../../assets/img/keyboard.svg";

const Content = () => {
  return (
    <WraperContent>
      <div className="scan">
        <svg className="scan__img">
          <Scan />
        </svg>
        <span className="scan__text">quét mã sản phẩm</span>
      </div>

      <div className="scan">
        <svg className="scan__img">
          <Keyboard />
        </svg>
        <span className="scan__text">nhập mã sản phẩm</span>
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
