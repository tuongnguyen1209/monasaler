import React, { useState } from "react";
import { WrapAccordion } from "./AccordionStyle";

const Accordion = (props) => {
  const [show, setshow] = useState(true);

  const onShow = () => {
    setshow(!show);
  };
  return (
    <WrapAccordion>
      <div className="provisinal__list">
        <div onClick={onShow} className="provisinal__date">
          <span>{props.title}</span>
          <span className={`provisinal__icon ${show ? "icon-show" : ""}`}>
            <i className="fas fa-chevron-up" />
          </span>
        </div>
        <div className={`provisinal__order ${show ? "order-show" : ""}`}>
          {props.children}
        </div>
      </div>
    </WrapAccordion>
  );
};

export default Accordion;
