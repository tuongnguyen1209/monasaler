import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Wrapersub } from "./SubHeaderStyle";

const SubHeader = (props) => {
  const history = useHistory();
  return (
    <Wrapersub>
      <div className="sub-header">
        <div className="sub-header__icon">
          <Link
            to=""
            onClick={(event) => {
              event.preventDefault();
              history.goBack();
            }}
          >
            <i className="fas fa-chevron-left icon2" />
          </Link>
        </div>
        <div className="sub-header__box">
          <div className="sub-header__name">{props.children}</div>
        </div>
      </div>
    </Wrapersub>
  );
};

export default SubHeader;
