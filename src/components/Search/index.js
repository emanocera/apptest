import React from "react";
import IconButton from "../IconButton";
import TextField from "../TextField";
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import InputAdornment from '@material-ui/core/InputAdornment';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'block',
    },
    searchWrapper: {
        paddingLeft: 15,
    },
    searchInput: {
        minWidth: 150,
    }
}));

const Search = ({ filters }) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleClickMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setAnchorEl(null);
    };

    const handleClick = () => {
        setOpen((prev) => !prev);
    };

    const handleClickAway = () => {
        setOpen(false);
    };
    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <div className={classes.root}>
                {open ? (
                    <div className={classes.searchWrapper}>
                        <TextField
                            autoFocus
                            placeholder={filters ? "Buscar " + filters[selectedIndex] + "..." : "Buscar..."}
                            variant="standard"
                            className={classes.searchInput}
                            InputProps={{
                                endAdornment:
                                [filters ? 
                                    <InputAdornment position="end">
                                        
                                        <IconButton
                                            icon="caretDown"
                                            aria-controls="simple-menu"
                                            aria-haspopup="true"
                                            onClick={handleClickMenu}
                                        />
                                        <Menu
                                            id="simple-menu"
                                            anchorEl={anchorEl}
                                            keepMounted
                                            className={classes.searchMenu}
                                            open={Boolean(anchorEl)}
                                            onClose={handleCloseMenu}
                                            getContentAnchorEl={null}
                                            anchorOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'center',
                                            }}
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}

                                        >
                                            
                                            {filters.map((option, index) => (
                                                <MenuItem
                                                    key={index}
                                                    selected={index === selectedIndex}
                                                    onClick={(event) => handleMenuItemClick(event, index)}
                                                >
                                                    {option}
                                                </MenuItem>
                                            ))}
                                        </Menu>
                                        
                                    </InputAdornment>
                                : null]
                            }}
                        />
                    </div>
                ) : <IconButton icon="search" onClick={handleClick} />}
            </div>
        </ClickAwayListener>
    );
}

export default Search;