import React from "react";
import { default as ButtonBase } from "@material-ui/core/Button";
import { withStyles } from '@material-ui/core/styles';

const StyledButton = withStyles((theme) => ({
    root: {
    },
    label: {
        fontSize: '1rem',
        textTransform: 'none',
    },
    startIcon: {
        marginRight: 4,
    },
}))(ButtonBase);

const Button = ({ children, ...rest }) => {
    return (
        <StyledButton disableElevation {...rest}>{children}</StyledButton>
    );
};

export default Button;