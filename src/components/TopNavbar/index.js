import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Alert from '@material-ui/lab/Alert';
import IconButton from '../IconButton';
import Search from '../Search';
import Favorites from '../Favorites';
import AddItem from '../AddItem';
import Notifications from '../Notifications';
import SidebarUser from '../SidebarUser';
import MainMenu from '../MainMenu';
import ChevronRight from '../../images/chevron-right.svg';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        [theme.breakpoints.down('md')]: {
            marginLeft: 0,
            width: '100%',
        },
    },
    menuButton: {
        marginRight: 16,
        marginLeft: -18,
    },
    menuButtonHide: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block',
        },
    },
    logo: {
        margin: 'auto 10px auto 0',
        '&& img': {
            verticalAlign: 'middle',
        },
        [theme.breakpoints.down('sm')]: {
            margin: 'auto',
        },
    },
    navbarLeft: {
        listStyle: 'none',
        padding: 0,
        margin: 'auto auto auto 1.2rem',
        display: 'flex',
        '&& li': {
            display: 'flex',
            padding: '0 4px',
            margin: 'auto 0',
        },
        /*[theme.breakpoints.down('md')]: {
            margin: 'auto 4px auto auto',
        },*/
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    navbarRight: {
        listStyle: 'none',
        padding: 0,
        margin: 'auto 0',
        display: 'flex',
        '&& li': {
            display: 'flex',
        }
    },
    alertContainer: {
        display: 'table',
        margin: 'auto 0',
    },
    alert: {
        padding: '0 1rem',
        marginRight: '.8rem',
        borderRadius: 50,
        maxWidth: 320,
        '&& .MuiAlert-message': {
            padding: '5px 0',
            fontSize: '.87rem',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
        },
        [theme.breakpoints.down('md')]: {
            display: 'none',
        },
    },
    accountButtonDesktop: {
        textDecoration: 'none',
        textAlign: 'right',
        margin: 'auto 0',
        padding: '0 1.2rem',
        display: 'table',
        background: 'url(' + ChevronRight + ') no-repeat center right',
        backgroundSize: 10,
        minWidth: 120,
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        [theme.breakpoints.down('md')]: {
            display: 'none',
        },
    },
    accountButtonMobile: {
        display: 'none',
        marginLeft: '10px',
        marginRight: -18,
        [theme.breakpoints.down('md')]: {
            display: 'block',
        },
    },
    accountName: {
        lineHeight: 1.4,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        maxWidth: 150,
    },
    accountId: {
        letterSpacing: '.5px',
        color: theme.palette.grey[600],
    },
    notiButton: {
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    toolbar: {
        padding: '0 24px',
    },
    navLink: {
        lineHeight: '56px',
        display: 'block',
        textDecoration: 'none !important',
        borderBottom: 'solid 3px transparent',
        padding: '0 10px',
        transition: theme.transitions.create(['color', 'border-bottom'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        '&:hover': {
            borderBottom: 'solid 3px ' + theme.palette.primary.main,
        },
    },
    hide: {
        display: 'none',
    },
}));

const TopNavbar = ({
    children,
    logo,
    className,
    alert,
    links,
    showLeftSidebar,
    showNotifications,
    showUser,
    showCart,
    dataAltas,
    dataFavoritos,
    dataFiltrosBusqueda,
    dataNotificaciones,
    dataEmpresas,
    dataMenuPrimario,
    dataMenuSecundario,
    ...rest }) => {

    const classes = useStyles();
    const [openSidebar, setOpenSidebar] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const [selectedLink, setSelectedLink] = React.useState(1);

    const handleLinkSelect = (event, index) => {
        setSelectedLink(index);
    };

    const toggleSidebar = () => {
        setOpenSidebar(!openSidebar);
    };

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <>
            <AppBar
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
                color="inherit"
                position="fixed"
                {...rest}
            >
                <Toolbar className={classes.toolbar}>
                    {showLeftSidebar ?
                        <IconButton
                            color="inherit"
                            icon="menu"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            className={clsx(classes.menuButton, {
                                [classes.menuButtonHide]: open,
                            })}
                        />
                        : null}

                    <a href="#" className={classes.logo} ><img src={logo} /></a>

                    {links == null ?
                        <ul className={classes.navbarLeft}>
                            <li><AddItem options={dataAltas} /></li>
                            <li><Favorites options={dataFavoritos} /></li>
                            <li><Search filters={dataFiltrosBusqueda} /></li>
                        </ul>
                        :
                        <ul className={classes.navbarLeft}>
                            {links.map((link, index) => (
                                <li key={link, index}>
                                    <Typography>
                                        <Link 
                                            href={link.url}
                                            className={classes.navLink}
                                            selected={selectedLink === index} 
                                            onClick={(event) => handleLinkSelect(event, index)}
                                            >
                                                {link.texto}
                                            </Link>
                                    </Typography>
                                </li>
                            ))}
                        </ul>
                    }

                    {alert == null ? "" :
                        <div className={classes.alertWrapper}>
                            <div className={classes.alertContainer}>
                                <Alert icon={false} severity="error" className={classes.alert}>{alert}</Alert>
                            </div>
                        </div>
                    }

                    <ul className={classes.navbarRight}>
                        {showNotifications === undefined ? '' :
                            <li className={classes.notiWrapper}>
                                <Notifications options={dataNotificaciones} className={classes.notiButton} />
                            </li>
                        }
                        {showCart === undefined ? '' :
                            <li className={classes.notiWrapper}>
                                <IconButton icon="shoppingCart" badgeContent={999} />
                            </li>
                        }
                        {showUser === undefined ? '' :
                            <li className={classes.accountWrapper}>
                                <button className={classes.accountButtonDesktop} onClick={toggleSidebar}>
                                    <Typography variant="h6" className={classes.accountName}>
                                        {dataEmpresas === undefined ? 'Nombre Empresa' : dataEmpresas[selectedIndex].nombre}
                                    </Typography>
                                    <Typography variant="caption" className={classes.accountId}>
                                        ID {dataEmpresas === undefined ? '...' : dataEmpresas[selectedIndex].id}
                                    </Typography>
                                </button>
                                <IconButton icon="user" className={classes.accountButtonMobile} onClick={(event) => { toggleSidebar(); handleDrawerClose(); }} />
                            </li>
                        }
                    </ul>
                </Toolbar>
            </AppBar>
            {showLeftSidebar === undefined ? '' :
                <MainMenu
                    open={open}
                    handleDrawerClose={handleDrawerClose}
                    primaryMenu={dataMenuPrimario}
                    secondaryMenu={dataMenuSecundario}
                />
            }
            <SidebarUser 
                empresas={dataEmpresas} 
                open={openSidebar} 
                onClose={toggleSidebar} 
                selectedIndex={selectedIndex} 
                setSelectedIndex={setSelectedIndex} 
            />
        </>
    )
}

export default TopNavbar