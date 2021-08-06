import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { WrapperTabs } from "./TabsStyle";

const Tabs = (props) => {
  const { tabs, setTabs } = props;

  const handleChangeTab = (tab, index) => {
    const newTabs = [...tabs];
    for (let i = 0; i < newTabs.length; i++) {
      newTabs[i].active = false;
    }
    tab.active = true;
    newTabs[index] = tab;
    setTabs(newTabs);
  };

  return (
    <WrapperTabs>
      {tabs &&
        tabs.map((tab, index) => (
          <Link
            key={tab.id}
            onClick={(event) => {
              event.preventDefault();
              handleChangeTab(tab, index);
            }}
            to=""
            className={tab.active ? "active" : ""}
          >
            {tab.name}
          </Link>
        ))}
    </WrapperTabs>
  );
};
Tabs.prototype = {
  tabs: PropTypes.array.isRequired,
  setTabs: PropTypes.func.isRequired,
};
export default Tabs;
