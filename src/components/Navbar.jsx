import React, {useState} from "react";
import {AppBar,Toolbar,Typography,InputBase,Badge,Avatar} from "@material-ui/core"
import {makeStyles,alpha} from "@material-ui/core/styles";
import {Search,Mail,Notifications,Cancel} from "@material-ui/icons";


const useStyles = makeStyles((theme) => ({
    Toolbar:{
        display: 'flex',
        justifyContent: 'space-between',
    },
    logoLg: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block",
        },
    },
    logoSm: {
        display: "block",
        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
    },
    search:{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        borderRadius: theme.shape.borderRadius,
        width: '50%',
        [theme.breakpoints.down("sm")]: {
            display: (props) => props.open ? "flex" : 'none',
            width: "60%",
        },
    },
    input: {
        color: 'white',
        marginLeft: theme.spacing(1)
    },
    cancel: {
        [theme.breakpoints.up('sm')]:{
            display: 'none',
        }
    },
    searchButton: {
        marginLeft: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
    },
    icons: {
        alignItems: 'center',
        display: (props) => props.open ? "none" : 'flex',

    },
    badge: {
        marginRight: theme.spacing(2),
    }
}))
export default function NavBar() {
    const [open,setOpen] = useState(false)
    const classes = useStyles({open});
    return (
        <AppBar position='fixed'>
            <Toolbar className={classes.Toolbar}>
                <Typography variant="h6" component='h2' className={classes.logoLg}>
                    Lama Dev
                </Typography>
                <Typography variant='h6' className={classes.logoSm}>Lama</Typography>
                <div className={classes.search}>
                    <Search/>
                    <InputBase placeholder='Search....' className={classes.input}/>
                    <Cancel className={classes.cancel} onClick={() => setOpen(false)}/>


                </div>
                <div className={classes.icons}>
                    <Search className={classes.searchButton} onClick={() => setOpen(true)}/>
                    <Badge badgeContent={4} color="secondary" className={classes.badge}>
                        <Mail />
                    </Badge>
                    <Badge badgeContent={2} color="secondary" className={classes.badge}>
                        <Notifications />
                    </Badge>
                    <Avatar alt="Remy Sharp" src="https://www.w3schools.com/w3images/avatar6.png" />
                </div>

            </Toolbar>
        </AppBar>
    )

}