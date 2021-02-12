import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Icon from "../Icon";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        marginTop: 'auto',
        marginBottom: 'auto',
    },
    button: {
        background: 'transparent',
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        display: 'inline-flex',
        padding: 0,
        margin: '0 7.5px',
        '&& svg': {
            color: 'rgba(0, 0, 0, 0.54)',
            marginRight: 4,
        },
        '&& span': {
            margin: 'auto 0',
            textTransform: 'uppercase',
            letterSpacing: '.7px',
            fontSize: 11,
        }
    },
}));

const HelpButtons =({ tipsOnClick, helpOnClick })=>{
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <button onClick={tipsOnClick} className={classes.button}>
                <Icon name="lightbulb" fontSize="small"/>
                <Typography variant="caption">Tips</Typography>
            </button>
            <button onClick={helpOnClick} className={classes.button}>
                <Icon name="help" fontSize="small"/>
                <Typography variant="caption">Ayuda</Typography>
            </button>
        </div>
    )
}

export default HelpButtons