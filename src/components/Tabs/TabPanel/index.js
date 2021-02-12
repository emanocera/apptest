import React from "react";

const TabPanel = (props) => {
  const { className, children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div className="tabcontent-base">{children}</div>
      )}
    </div>
  );
}

export default TabPanel;