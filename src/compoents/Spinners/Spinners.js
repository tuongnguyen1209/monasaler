import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import loading from "../../assets/img/loading.gif";

const WrapSnip = styled.div`
  background-color: transparent;
  background-image: url(${loading});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 5rem;
  height: 5rem;
`;

const Spinners = (props) => {
  const { show } = props;
  return (
    <>
      {show && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <WrapSnip></WrapSnip>
        </div>
      )}
    </>
  );
};
Spinners.prototype = {
  show: PropTypes.bool.isRequired,
};

export default Spinners;
