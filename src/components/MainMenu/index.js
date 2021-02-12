import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '../IconButton';
import Icon from '../Icon';
import MainMenuItem from './MainMenuItem';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        '&& .MuiTypography-root': {
            color: theme.palette.primary.contrastText,
            fontSize: '1rem',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
        },
        '&& .MuiSvgIcon-root, && MuiListItemIcon-root': {
            color: theme.palette.primary.contrastText,
        },
        '&& .MuiListItem-root': {
            paddingTop: 6,
            paddingBottom: 6,
        },
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        [theme.breakpoints.down('md')]: {
            zIndex: 3000,
        },
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: 56,
        [theme.breakpoints.down('md')]: {
            zIndex: 3000,
            width: 0,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 1rem',
        background: theme.palette.primary.main,
        borderBottom: 'solid thin rgba(0, 0, 0, 0.12)',
        minHeight: 56,
    },
    secondaryList: {
        '&& .MuiDivider-root': {
            margin: '1rem 0 .5rem',
        },
        '&& .MuiTypography-root': {
            fontSize: '.94rem',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
        }
    },
    listWrapper: {
        background: theme.palette.primary.main,
        height: '100%',
        overflow: 'hidden',
        position: 'relative',
        '&& .MuiListItemText-root': {
            marginLeft: '-10px',
        }
    },
    buttonClose: {
        marginRight: -5,
    },
    hide: {
        display: 'none',
    },
}));

const MainMenu = ({
    open,
    handleDrawerClose,
    primaryMenu,
    secondaryMenu
}) => {
    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const handleItemSelect = (event, index) => {
        setSelectedIndex(index);
    };

    return (
        <div >
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose} icon="close" className={classes.buttonClose} />
                </div>

                <div className={classes.listWrapper}>

                    <List component="div">
                        {primaryMenu === undefined ? '' :
                            <div>
                                {primaryMenu.map((option, index) => (
                                    <MainMenuItem
                                        submenu={option.submenu == null ? "" : option.submenu}
                                        key={option.texto}
                                        text={option.texto}
                                        icon={option.icono}
                                        open={open}
                                        selected={selectedIndex === index}
                                        onClick={(event) => handleItemSelect(event, index)}
                                    />
                                ))}
                            </div>
                        }
                        <div
                            className={clsx(classes.secondaryList, {
                                [classes.hide]: !open,
                            })}
                        >
                            <Divider />
                            <List component="div">
                                {secondaryMenu === undefined ? '' :
                                    <div>
                                        {secondaryMenu.map((option, index) => (
                                            <ListItem button key={option.texto}>
                                                <ListItemIcon><Icon name={option.icono} fontSize="small" /></ListItemIcon>
                                                <ListItemText primary={option.texto} />
                                            </ListItem>
                                        ))}
                                    </div>
                                }
                            </List>
                        </div>
                    </List>
                </div>
            </Drawer>
        </div>
    );
};

export default MainMenu
