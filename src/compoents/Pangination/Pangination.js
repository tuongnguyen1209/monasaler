import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { WrapPangination } from "./PanginationStyle";

const Pangination = (props) => {
  const { totalPage, currentPage, changePage, color } = props;

  const getArray = () => {
    let a = [];
    for (let i = 0; i < totalPage; i++) {
      a.push(i + 1);
    }
    return a;
  };
  const nextPage = () => {
    if (currentPage < totalPage) {
      changePage(currentPage + 1);
    }
  };
  const prePage = () => {
    if (currentPage > 1) {
      changePage(currentPage - 1);
    }
  };

  return (
    <WrapPangination bgcolor={color}>
      <ul>
        {/* <li>
          <Link
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <i className="fas fa-angle-double-left"></i>
          </Link>
        </li> */}
        <li>
          <Link
            to=""
            onClick={(e) => {
              e.preventDefault();
              prePage();
            }}
          >
            <i className="fas fa-chevron-left"></i>
          </Link>
        </li>
        {getArray().map((el) => {
          let key = `pagination-${el}`;
          return (
            <li key={key}>
              <Link
                to=""
                onClick={(e) => {
                  e.preventDefault();
                  changePage(el);
                }}
                className={currentPage === el ? "active" : ""}
              >
                {el}
              </Link>
            </li>
          );
        })}
        <li>
          <Link
            to=""
            onClick={(e) => {
              e.preventDefault();
              nextPage();
            }}
          >
            <i className="fas fa-chevron-right"></i>
          </Link>
        </li>
        {/* <li>
          <Link
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <i className="fas fa-angle-double-right"></i>
          </Link>
        </li> */}
      </ul>
    </WrapPangination>
  );
};

Pangination.propTypes = {
  totalPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  changePage: PropTypes.func.isRequired,
  color: PropTypes.oneOf(["red", "green", "blue"]),
};

export default Pangination;
