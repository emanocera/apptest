import React from "react";
import { default as BadgeBase } from "@material-ui/core/Badge";
import { withStyles } from '@material-ui/core/styles';

const StyledBadge = withStyles((theme) => ({
    badge: {
        right: 0,
        top: 0,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
        fontSize: ".81rem",
    },
}))(BadgeBase);


const Badge = ({ children, ...rest }) => {
    return (
        <StyledBadge {...rest}>{children}</StyledBadge>
    );
};

export default Badge;