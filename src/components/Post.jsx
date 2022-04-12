import React from "react";
import {Box, Container, makeStyles} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
const useStyle = makeStyles((theme) => ({
    card: {
        marginBottom: theme.spacing(5)
    },
    media: {
        height: 250,
        [theme.breakpoints.down("sm")]: {
            height: 150,
        }
    }
}));

const Post = () => {
    const classes = useStyle();
    return(
        <Box>
            <Card variant='outlined' className={classes.card}>
                <CardMedia component='img'
                           image='https://source.unsplash.com/random'
                           alt='unplash'
                className={classes.media}/>
                <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>React </Typography>
                    <Typography gutterBottom variant='body2' color='text.secondary'>React dfhjalkj kjadhf
                        adshfdhjasfjdas fdhdkjshf dsfk </Typography>
                </CardContent>
                <CardActions>
                    <Button size='small' color='primary'>Share</Button>
                    <Button size='small' color='primary'>Learen more</Button>
                </CardActions>
            </Card>
        </Box>
    )
}
export default Post;