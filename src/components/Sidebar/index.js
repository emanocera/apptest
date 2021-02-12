import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from '../IconButton';

const useStyles = makeStyles((theme) => ({
    drawer: {
        position: 'relative',
        '&& .sb_wrapper': {
            padding: 0,
            width: 280,
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
        }
    },
    headerWrapper: {
        display: 'flex',
        padding: '0 20px',
        boxSizing: 'border-box',
        minHeight: 56,
    },
    title: {
        margin: 'auto auto auto 0',
    },
    buttonClose: {
        position: 'absolute',
        right: 10,
        top: 4,
    },
}));

const Sidebar = ({ children, className, open, onClose, title, ...rest }) => {
    const classes = useStyles();
    return (
        <Drawer anchor="right" className={classes.drawer} open={open} onClose={onClose} {...rest}>
            <div className={classes.header}>
                {title == null ?
                    <div className={classes.headerNoTitle}>
                        <IconButton icon="close" className={classes.buttonClose} onClick={onClose} />
                    </div>
                    :
                    <div>
                        <div className={classes.headerWrapper}>
                            <Typography variant="h5" className={classes.title}>{title}</Typography>
                            <IconButton icon="close" className={classes.buttonClose} onClick={onClose} />
                        </div>
                        <Divider />
                    </div>
                }
            </div>
            <div className="sb_wrapper">
                {children}
            </div>
        </Drawer>
    );
};

export default Sidebar;