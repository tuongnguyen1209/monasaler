import React from "react";
import { WraperContent } from "./ContentStyle";

const Content = () => {
  return (
    <WraperContent>
      <form action="#" className="search">
        <input
          type="text"
          className="search__input"
          placeholder="Tìm kiếm...."
        />
        <button className="search__button">
          <i class="fas fa-search search__icon"></i>
        </button>
      </form>
    </WraperContent>
  );
};

export default Content;
