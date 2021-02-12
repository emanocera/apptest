import React from 'react'
import { default as IconButtonBase } from "@material-ui/core/IconButton";
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { makeStyles } from '@material-ui/core/styles';
import Icon from "../Icon";
import Badge from "../Badge";
import Tooltip from "../Tooltip";
import Dropdown from "../Dropdown";

const useStyles = makeStyles((theme) => ({
    container: {
        position: 'relative',
    },
    wrapper: {
        display: 'block',
    }
}));

const IconButton = ({
    children,
    icon,
    iconSize,
    iconStyle,
    className,
    badgeContent,
    badgeMax,
    badgeVariant,
    tooltip,
    tooltipEnterDelay,
    onClick,
    dropdown,
    dropdownClass,
    ...rest
}) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen((prev) => !prev);
    };

    const handleClickAway = () => {
        setOpen(false);
    };
    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <div className={className}>
                <div className={classes.container}>
                    <Tooltip title={tooltip == null ? "" : tooltip}>
                        <div className={classes.wrapper}>
                            <IconButtonBase {...rest} onClick={dropdown ? handleClick : onClick}>
                                <Badge badgeContent={badgeContent} color="secondary" max={badgeMax} variant={badgeVariant}>
                                    <Icon name={icon} fontSize={iconSize} style={iconStyle} />
                                </Badge>
                            </IconButtonBase>
                            <Dropdown open={open} className={dropdownClass}>{dropdown}</Dropdown>
                        </div>
                    </Tooltip>
                </div>
            </div>
        </ClickAwayListener>
    )
}

export default IconButton