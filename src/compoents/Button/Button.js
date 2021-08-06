import React from "react";
import { WrapButton } from "./ButtonStyle";

const Button = (props) => {
  return <WrapButton onClick={props.onClick}>{props.children}</WrapButton>;
};

export default Button;
