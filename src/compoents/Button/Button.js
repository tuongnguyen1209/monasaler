import React from "react";
import { WrapButton } from "./ButtonStyle";

const Button = (props) => {
  return <WrapButton>{props.children}</WrapButton>;
};

export default Button;
