import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import IconButton from "../IconButton";
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    dropdown: {
        width: 380,
        padding: theme.spacing(3),
    },
    header: {
        display: 'flex',
        marginTop: "-.5rem",
    },
    title: {
        display: 'table',
        margin: 'auto 0',
    },
    settingsButton: {
        marginLeft: 'auto',
    },
    content: {
        paddingTop: theme.spacing(1),
    },
    list: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
        columns: 2,
        '&& li a': {
            padding: '2px 4px 2px 0',
            display: 'block',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
        }
    },
    empty: {
        color: theme.palette.grey[600],
    }
}));

const Favorites = ({ options }) => {
    const classes = useStyles();
    return (
        <IconButton
            icon="favoriteBorder"
            dropdownClass={classes.dropdown}
            dropdown={
                <div>
                    <div className={classes.header}>
                        <Typography variant="h5" className={classes.title}>Páginas Favoritas</Typography>
                        <IconButton icon="settings" edge="end" className={classes.settingsButton}></IconButton>
                    </div>
                    <div className={classes.content}>
                        {options == null ? <Typography className={classes.empty}>Aún no tenés páginas favoritas</Typography> :
                            <ul className={classes.list}>
                                {options.map((option, index) => (
                                    <li key={index}><Typography><Link href={option.href}>{option.texto}</Link></Typography></li>
                                ))}
                            </ul>
                        }
                    </div>
                </div>
            }
        />
    );
};

export default Favorites;