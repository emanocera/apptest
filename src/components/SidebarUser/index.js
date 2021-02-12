import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Sidebar from '../Sidebar';
import IconButton from '../IconButton';
import CheckCircle from '../../images/check-circle.svg';






const useStyles = makeStyles((theme) => ({
    userWrapper: {
        textAlign: 'center',
        padding: 20,
    },
    userAvatar: {
        margin: '0 auto 10px',
        width: 50,
        height: 50,
    },
    userCaption: {
        display: 'block',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    },
    userActions: {
        marginTop: 10,
    },
    action: {
        margin: '0 7.5px',
        fontSize: '.87rem',
    },
    companyHeader: {
        display: 'flex',
        padding: '0 20px',
        minHeight: 56,
        '&& .MuiTypography-root': {
            margin: 'auto auto auto 0',
        }
    },
    settingsButton: {
        margin: 'auto -10px auto auto',
        display: 'table',
    },
    companyListWrapper: {
        height: '100%',
        overflowY: 'auto',
        '&& .Mui-selected': {
            '&::before': {
                content: '',
                width: 24,
                height: 24,
                background: 'url(' + CheckCircle + ') no-repeat center center',
                backgroundSize: 'contain',
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                right: 15,
            }
        }
    },
    companyItem: {
        paddingTop: 6,
        paddingBottom: 6,
    },
    itemSelected: {
        background: 'url(' + CheckCircle + ') no-repeat center right 15px',
        backgroundSize: '24px 24px',

    },
    companyAvatar: {
        width: 36,
        height: 36,
    },
    companyText: {
        paddingRight: 30,
        '&& .MuiTypography-body1': {
            fontSize: '.94rem',
            fontWeight: 600,
            lineHeight: 1.3,
        },
        '&& .MuiTypography-body2': {
            fontSize: '.75rem',
            color: theme.palette.grey[600]
        },
    }

}));

const SidebarUser = ({ children, className, open, onClose, title, empresas, selectedIndex, setSelectedIndex, ...rest }) => {
    const classes = useStyles();
    /*const [selectedIndex, setSelectedIndex] = React.useState(1);*/
    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };
    return (
        <Sidebar className={classes.sidebar} open={open} onClose={onClose} {...rest}>
            <div className={classes.userWrapper}>
                <Avatar className={classes.userAvatar}>UN</Avatar>
                <Typography variant="h5" className={classes.userName}>User Name</Typography>
                <Typography variant="caption" className={classes.userCaption}>user@email.com</Typography>
                <Typography variant="caption" className={classes.userCaption}>Nro. Cliente: 12345</Typography>
                <div className={classes.userActions}>
                    <Typography variant="caption" className={classes.action}><Link href="#">Mi cuenta</Link></Typography>
                    <Typography variant="caption" className={classes.action}><Link href="#">Cerrar sesión</Link></Typography>
                </div>
            </div>
            <Divider />

            <div className={classes.companyHeader}>
                <Typography variant="h6">Mis empresas</Typography>
                <IconButton icon="settings" className={classes.settingsButton}></IconButton>
            </div>
            <Divider />
            {empresas === undefined ? '' :
                <div className={classes.companyListWrapper}>
                    <List className={classes.companyList}>

                        {empresas.map((empresa, index) => (
                            <ListItem
                                button
                                key={index}
                                className={classes.companyItem}
                                classes={{ selected: classes.itemSelected }}
                                selected={selectedIndex === index}
                                onClick={(event) => {handleListItemClick(event, index); onClose();}}
                            >
                                <ListItemIcon>
                                    <Avatar className={classes.companyAvatar} style={{ backgroundColor: [empresa.color] }}>{empresa.nombre.substring(0, 1)}</Avatar>
                                </ListItemIcon>
                                <ListItemText className={classes.companyText} primary={empresa.nombre} secondary={"ID " + empresa.id} />
                            </ListItem>
                        ))}

                    </List>
                </div>
            }
        </Sidebar>
    );
};

export default SidebarUser;