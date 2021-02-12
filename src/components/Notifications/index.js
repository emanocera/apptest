import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import IconButton from "../IconButton";
import Icon from "../Icon";
import Typography from '@material-ui/core/Typography';
import Tabs from "../Tabs";
import Tab from "../Tabs/Tab";
import TabPanel from "../Tabs/TabPanel";
import Badge from "../Badge";
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    dropdown: {
        left: 'initial',
        right: 0,
    },
    header: {
        display: 'flex',
        padding: '0 10px 0 0',
        borderBottom: 'solid 1px' + theme.palette.grey[300],
        '&& .MuiBadge-dot': {
            padding: 0,
            top: 5,
            right: -10,
            border: 'none',
        },
        '&& .MuiTab-root': {
            padding: '12px',
        },
    },
    settingsButton: {
        margin: 'auto 0 auto auto',
    },
    container: {
        minHeight: 180,
    },
    wrapper: {
        height: 180,
        overflowY: 'auto',
        padding: '10px 15px 15px',
        boxSizing: 'border-box',
    },
    list: {
        margin: "5px 0",
        padding: 0,
        listStyle: 'none',
        '&& a': {
            display: 'flex',
            color: 'inherit',
            textDecoration: 'none',
            width: '100%',
            minHeight: 40,
            background: '#fff',
            borderRadius: '6px',
            padding: '10px 8px',
            marginBottom: 0,
            boxSizing: 'border-box',
            transition: 'all ease .2s',
            border: 'solid 1px transparent',
            '&:hover': {
                background: '#f9f9f9',
            },
        },
    },
    iconCircle: {
        margin: 'auto 15px auto 0',
        display: 'table',
        width: 40,
        height: 40,
        background: theme.palette.success.main + '45',
        borderRadius: '50%',
    },
    icon: {
        color: theme.palette.primary.dark,
        margin: '8px auto',
        display: 'table',
    },
    message: {
        lineHeight: 1.2,
        marginBottom: 4,
    },
    caption: {
        color: theme.palette.grey[600],
    }
}));

const Notifications = ({ options, ...rest }) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <IconButton
            icon="notifications"
            badgeContent={100}
            {...rest}
            dropdownClass={clsx(classes.dropdown, {
                [classes.shortWidth]: !options,
            })}
            dropdown={
                <div>
                    <div className={classes.header}>
                        <Tabs value={value} onChange={handleChange}>
                            <Tab label={<Badge variant="dot" color="secondary">Notificaciones</Badge>} />
                            <Tab label={<Badge variant="dot" color="secondary">Anuncios</Badge>} />
                        </Tabs>
                        <IconButton icon="settings" className={classes.settingsButton} />
                    </div>
                    <TabPanel value={value} index={0}>

                        <div className={classes.container}>
                            {options === undefined || options.notificaciones === '' ?
                                <div className={classes.wrapper}>
                                    <Typography>Aquí no hay nada</Typography>
                                </div>
                                :
                                <div className={classes.wrapper}>
                                    {options.notificaciones.nuevo === '' ? '' :
                                        <div className="wrapper-new-notif">
                                            <Typography variant="h6">Nuevo</Typography>
                                            <ul className={classes.list}>
                                                {options.notificaciones.nuevo.map((notificacion, index) => (
                                                    <li key={index}>
                                                        <Link href="#">
                                                            <div className={classes.iconCircle}>
                                                                <Icon name="check" className={classes.icon} />
                                                            </div>
                                                            <div className={classes.info}>
                                                                <Typography className={classes.message}>{notificacion.mensaje}</Typography>
                                                                <Typography variant="caption" className={classes.caption}>{notificacion.caption}</Typography>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    }
                                    {options.notificaciones.anterior === '' ? '' :
                                        <div className="wrapper-old-notif">
                                            <Typography variant="h6">Anteriores</Typography>
                                            <ul className={classes.list}>
                                                {options.notificaciones.anterior.map((notificacion, index) => (
                                                    <li key={index}>
                                                        <Link href="#">
                                                            <div className={classes.iconCircle}>
                                                                <Icon name="check" className={classes.icon} />
                                                            </div>
                                                            <div className={classes.info}>
                                                                <Typography className={classes.message}>{notificacion.mensaje}</Typography>
                                                                <Typography variant="caption" className={classes.caption}>{notificacion.caption}</Typography>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    }
                                </div>
                            }
                        </div>


                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <div className={classes.container}>
                            {options === undefined || options.anuncios === '' ?
                                <div className={classes.wrapper}>
                                    <Typography>Aquí no hay nada</Typography>
                                </div>
                                :
                                <div className={classes.wrapper}>
                                    {options.anuncios.nuevo === '' ? '' :
                                        <div className="wrapper-new-notif">
                                            <Typography variant="h6">Nuevo</Typography>
                                            <ul className={classes.list}>
                                                {options.anuncios.nuevo.map((anuncio, index) => (
                                                    <li key={index}>
                                                        <Link href="#">
                                                            <div className={classes.iconCircle}>
                                                                <Icon name="check" className={classes.icon} />
                                                            </div>
                                                            <div className={classes.info}>
                                                                <Typography className={classes.message}>{anuncio.mensaje}</Typography>
                                                                <Typography variant="caption" className={classes.caption}>{anuncio.caption}</Typography>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    }
                                    {options.anuncios.anterior === '' ? '' :
                                        <div className="wrapper-old-notif">
                                            <Typography variant="h6">Anteriores</Typography>
                                            <ul className={classes.list}>
                                                {options.anuncios.anterior.map((anuncio, index) => (
                                                    <li key={index}>
                                                        <Link href="#">
                                                            <div className={classes.iconCircle}>
                                                                <Icon name="check" className={classes.icon} />
                                                            </div>
                                                            <div className={classes.info}>
                                                                <Typography className={classes.message}>{anuncio.mensaje}</Typography>
                                                                <Typography variant="caption" className={classes.caption}>{anuncio.caption}</Typography>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    }
                                </div>
                            }
                        </div>
                    </TabPanel>
                </div>
            }
        />
    );
};

export default Notifications;