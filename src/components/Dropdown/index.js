import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';

const StyledDropdown = withStyles((theme) => ({
    root: {
        position: 'absolute',
        top: "100%",
        left: 0,
        zIndex: 1,
        minWidth: 150,
        boxSizing: 'border-box',
    },
}))(Paper);


const Dropdown = ({ children, open, className }) => {
    return (
        <Fade in={open}>
            <StyledDropdown elevation={4} className={className}>
                {children}
            </StyledDropdown>
        </Fade>
    );
};

export default Dropdown;