import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Fab from '@material-ui/core/Fab';
import Button from '../Button';
import Icon from '../Icon';
import IconButton from '../IconButton';

const useStyles = makeStyles((theme) => ({
    appBar: {
        top: 'auto',
        bottom: 0,
    },
    toolbar: {
        '&& .MuiButtonBase-root': {
            marginRight: 10,
        },
        [theme.breakpoints.up('sm')]: {
            minHeight: 70,
        },
    },
    desktop: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
        },
    },
    mobile: {
        display: 'flex',
        '&& .MuiButtonBase-root': {
            marginRight: 5,
        },
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    buttonSuccessDesktop: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
        },
    },
    buttonCancel: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
        },
    },
    mobileMenu: {
        top: 'inherit',
        bottom: '100%',
    },
    fabButton: {
        position: 'absolute',
        zIndex: 1,
        top: -30,
        right: 20,
        left: 'inherit',
        margin: '0 auto',
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
}));

const PageFooter = ({ children, actionsDesktop, actionsMobile, onSuccess, onCancel, successText, cancelText, ...rest }) => {
    const classes = useStyles();
    return (
        <AppBar position="fixed" color="inherit" className={classes.appBar} {...rest}>
            <Toolbar className={classes.toolbar}>
                {onCancel ?
                    <Button
                        className={classes.buttonCancel}
                        startIcon={<Icon name="close" />}
                        onClick={onCancel}
                    >
                        {cancelText === null ? "Cancelar" : cancelText}
                    </Button>
                    : null}

                <div className={classes.desktop}>
                    {actionsDesktop}
                </div>

                <div className={classes.mobile}>
                    <IconButton icon="close" onClick={onCancel}/>
                    {actionsMobile}
                </div>

                {onSuccess ?
                    <Button
                        className={classes.buttonSuccessDesktop}
                        variant="contained"
                        color="primary"
                        startIcon={<Icon name="check" />}
                        onClick={onSuccess}
                    >
                        {successText === null ? "Finalizar" : successText}
                    </Button>
                    : null}

                <Fab color="primary" aria-label="check" className={classes.fabButton} onClick={onSuccess}>
                    <Icon name="check" />
                </Fab>

            </Toolbar>
        </AppBar>
    );
};

export default PageFooter;