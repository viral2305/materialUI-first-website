import React from "react";
import {Container, makeStyles, Typography, Avatar, Link,Divider} from "@material-ui/core";
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';


const useStyle = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
        position: 'sticky',
        top: 0,
    },
    title: {
        fontSize: 16,
        fontWeight: 500,
        color: "#555",
    },
    link: {

        marginRight: theme.spacing(2),
        color: "#555",
        fontSize: 16,
    },
}));

const Rightbar = () => {
    const classes = useStyle();
    return (
        <Container className={classes.container}>
            <Typography className={classes.title}>Online Friends</Typography>
            <AvatarGroup max={4} style={{marginBottom: "20px"}}>
                <Avatar alt="Remy Sharp" src="https://v4.mui.com/static/images/avatar/1.jpg"/>
                <Avatar alt="Travis Howard" src="https://v4.mui.com/static/images/avatar/1.jpg"/>
                <Avatar alt="Cindy Baker" src="https://v4.mui.com/static/images/avatar/1.jpg"/>
                <Avatar alt="Agnes Walker" src="https://v4.mui.com/static/images/avatar/1.jpg"/>
                <Avatar alt="Trevor Henderson" src="https://v4.mui.com/static/images/avatar/1.jpg"/>
            </AvatarGroup>
            <Typography className={classes.title} gutterBottom>Gallery</Typography>
            <ImageList rowHeight={100} style={{marginBottom: 20}} cols={2}>

                <ImageListItem>
                    <img src='https://v4.mui.com/static/images/image-list/breakfast.jpg' alt=''/>
                </ImageListItem>
                <ImageListItem>
                    <img src='https://v4.mui.com/static/images/image-list/burgers.jpg' alt=''/>
                </ImageListItem>
                <ImageListItem>
                    <img src='https://v4.mui.com/static/images/image-list/camera.jpg' alt=''/>
                </ImageListItem>
                <ImageListItem>
                    <img src='https://v4.mui.com/static/images/image-list/morning.jpg' alt=''/>
                </ImageListItem>
                <ImageListItem>
                    <img src='https://v4.mui.com/static/images/image-list/honey.jpg' alt=''/>
                </ImageListItem>
                <ImageListItem>
                    <img src='https://v4.mui.com/static/images/image-list/vegetables.jpg' alt=''/>
                </ImageListItem>
            </ImageList>
            <Typography className={classes.title} gutterBottom>Categories</Typography>
            <Link href="#" className={classes.link} variant='body2'>
                Sport
            </Link>
            <Link href="#" className={classes.link} variant='body2'>
                Food
            </Link>
            <Divider flexItem style={{marginBottom:5}}/>

            <Link href="#" className={classes.link} variant='body2'>
                Movies
            </Link>
            <Link href="#" className={classes.link} variant='body2'>
                Science
            </Link>

        </Container>

    )
}
export default Rightbar;