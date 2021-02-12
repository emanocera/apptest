import React from "react";
import TabsBase from '@material-ui/core/Tabs';

const Tabs = ({ onChange, value, children, ...rest }) => {
  return (
    <div className="base-tab-container">
      <div className="base-tab-container__buttons">
        <TabsBase value={value} onChange={onChange} indicatorColor="primary" textColor="primary" {...rest}>
        {children}
        </TabsBase>
      </div>
    </div>
  );
}

export default Tabs;