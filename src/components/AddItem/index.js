import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import IconButton from "../IconButton";
import Icon from "../Icon";
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    dropdown: {
        padding: theme.spacing(3),
        [theme.breakpoints.down('md')]: {
            left: '50%',
            right: 'initial',
            transform: 'translateX(-50%)',
            width: '90vw',
        },
    },
    shortWidth: {
        width: 300,
    },
    title: {
        marginBottom: theme.spacing(1),
    },
    row: {
        display: 'flex',
    },
    column: {
        minWidth: 180,
        [theme.breakpoints.down('md')]: {
            width: '100%',
        },
    },
    list: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
        '&& p': {
            width: '100%',
        },
        '&& li a': {
            padding: '4px 4px 4px 0',
            display: 'flex',
            lineHeight: 1.4,
        }
    },
    empty: {
        color: theme.palette.grey[600],
    }
}));

const AddItem = ({ options }) => {
    const classes = useStyles();
    return (
        <IconButton
            icon="addCircle"
            dropdownClass={clsx(classes.dropdown, {
                [classes.shortWidth]: !options,
            })}
            dropdown={
                <div>
                    {options ?
                        <div className={classes.row}>
                            {options.map((option, index) => (
                                <div className={classes.column} key={index}>
                                    <Typography variant="h6" className={classes.title}>{option.modulo}</Typography>
                                    <ul className={classes.list}>
                                        {option.altas.map((option, index) => (
                                            <li key={index}><Typography><Link href={option.url}><Icon name="add" fontSize="small" />{option.texto}</Link></Typography></li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        : <Typography className={classes.empty}>Aquí no hay nada</Typography>}
                </div>
            }
        />
    );
};

export default AddItem;