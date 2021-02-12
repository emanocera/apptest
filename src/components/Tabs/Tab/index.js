import React from "react";
import { default as TabBase } from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';
import Icon from "../../Icon";

const StyledTab = withStyles((theme) => ({
    root: {
        textTransform: 'none',
        fontSize: '1rem',
        minWidth: 140,
    },
}))(TabBase);

const Tab = ({ label, icon, ...rest }) => {
    return (
        <StyledTab
            label={label}
            {...rest}
            icon={icon == null ? "" : <Icon name={icon} fontSize="small" className="icon-tab" />}
        />
    );
}

export default Tab;