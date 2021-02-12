import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Icon from '../../Icon';
import IconButton from '../../IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from '../../Tooltip';

const useStyles = makeStyles((theme) => ({
    nested: {
        position: 'absolute',
        top: 0,
        left: -240,
        width: '100%',
        height: '100%',
        zIndex: 2,
        background: theme.palette.primary.main,
        transition: 'all ease .3s',
    },
    nestedOpen: {
        left: 0,
    },
    
    submenuItem: {
        '&& .MuiButtonBase-root': {
            opacity: 0,
        },
        '&:hover .MuiButtonBase-root': {
            opacity: 1,
        }
    },
}));

const MainMenuItem = ({
        children,
        className,
        onClick,
        icon,
        text,
        open,
        submenu,
        ...rest })=> {
    const classes = useStyles();
    const [openNested, setOpenNested] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const handleNested = (event, index) => {
        setSelectedIndex(index);
        setOpenNested(!openNested);
    };
    const handleItemSelect = (event, index) => {
        setSelectedIndex(index);
        //setOpen(true);
    };
    const addItem = () => {
        console.log("agregar");
    };
    const handleTarget = () => {
        console.log("src");
    };
    return (
        <div onClick={onClick}>
            <Tooltip title={open === true ? "" : text} placement="right">
                <ListItem button {...rest} onClick={submenu == null ? handleTarget : handleNested}>
                    <ListItemIcon><Icon name={icon} /></ListItemIcon>
                    <ListItemText primary={text} />
                    {submenu === "" ? "" : <Icon name="caretRight" />}
                </ListItem>
            </Tooltip>
            {submenu === "" ? "" :
                <List
                    component="div"
                    className={clsx(classes.nested, {
                        [classes.nestedOpen]: openNested,
                    })}
                >
                    <Tooltip title={open === true ? "" : "Volver"} placement="right">
                        <ListItem button onClick={handleNested}>
                            <ListItemIcon><Icon name="arrowLeft" /></ListItemIcon>
                            <ListItemText primary="Volver" />
                        </ListItem>
                    </Tooltip>
                    {submenu.map((option, index) => (
                        <Tooltip key={option.texto} title={open === true ? "" : option.texto} placement="right">
                            <ListItem button className={classes.submenuItem} selected={selectedIndex === index} onClick={(event) => handleItemSelect(event, index)}>
                                <ListItemIcon><Icon name={option.icono} /></ListItemIcon>
                                <ListItemText primary={option.texto} />
                                <IconButton className={classes.addButton} icon="add" iconSize="small" size="small" onClick={addItem} />
                            </ListItem>
                        </Tooltip>
                    ))}
                </List>
            }
        </div>
    )
}

export default MainMenuItem
