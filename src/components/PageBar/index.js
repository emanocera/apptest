import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { default as AppBarBase } from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '../IconButton';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'block',
    },
    titleMobile: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    sectionDesktop: {
        display: 'flex',
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
        },
    },
    buttonCloseDesktop: {
        display: 'none',
        '&& svg': {
            fontSize: 30,
        },
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
        },
    },
    buttonCloseMobile: {
        display: 'flex',
        marginRight: 10,
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
}));

const PageBar = ({ title, actions, onClose, hideTitleOnMobile, ...rest }) => {
    const classes = useStyles();
    return (
        <AppBarBase position="fixed" color="inherit" {...rest}>
            <Toolbar>
                <IconButton 
                    icon="arrowLeft" 
                    edge="start" 
                    onClick={onClose} 
                    className={classes.buttonCloseMobile} 
                />
                <Typography
                    className={clsx(classes.title, {
                        [classes.titleMobile]: hideTitleOnMobile,
                    })}
                    variant="h4"
                    noWrap
                >
                    {title}
                </Typography>
                <div className={classes.grow} />
                <div className={classes.sectionDesktop}>
                    {actions}
                </div>
                <IconButton 
                    icon="close" 
                    edge="end"
                    onClick={onClose} 
                    className={classes.buttonCloseDesktop} 
                />
            </Toolbar>
        </AppBarBase>
    );
};

export default PageBar;