import React from "react";
import { default as TooltipBase } from "@material-ui/core/Tooltip";
import { withStyles } from '@material-ui/core/styles';

const StyledTooltip = withStyles((theme) => ({
    tooltip: {
        fontSize: '.82rem',
        letterSpacing: '.5px',
        backgroundColor: '#2d2d2d',
    },
}))(TooltipBase);

const Tooltip = ({ children, ...rest }) => {
    return (
        <StyledTooltip {...rest}>
            {children}
        </StyledTooltip>
    );
};

export default Tooltip;