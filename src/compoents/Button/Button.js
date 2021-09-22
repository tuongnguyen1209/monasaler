import React from "react";
import { WrapButton } from "./ButtonStyle";

const Button = (props) => {
  return (
    <WrapButton onClick={props.onClick} color={props.color}>
      {props.children}
    </WrapButton>
  );
};

export default Button;
