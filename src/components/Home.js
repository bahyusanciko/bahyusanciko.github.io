import React from "react";
import { Link } from 'react-router-dom';
import { Typography, Container, Grid, Box } from "@material-ui/core/";
import { makeStyles } from '@material-ui/core/styles'
import { DeveloperMode } from "@material-ui/icons";
import PreviewPost from "./PreviewPost";
import PostsService from '../service/PostsService'

const useStyles = makeStyles(() => ({
    link: {
        textDecoration: 'none'
    }
}))

export default function Home() {
    const classes = useStyles()

    const posts = PostsService.map(post => {
        return (
            <Grid item xs={12} key={post.id}>
                <Link to={"blog/" + post.title} className={classes.link}>
                    <PreviewPost post={post} />
                </Link>
            </Grid>
        )
    })

    return (
        <Container component="main" maxWidth="sm">
            <Typography variant="h3" component="h1" gutterBottom>Bahyu Sanciko</Typography>
            <Typography variant="h5" component="h2" gutterBottom>
                Hello Semua, Blog ini hanya berisikan bacotan saya tentang dunia IT sekian. #santuyprogramming <DeveloperMode />
            </Typography>
            <Typography variant="h6">Tulisan Terbaru</Typography>
            <Box my={3}>
                <Grid container spacing={4}>
                    {posts}
                </Grid>
            </Box>
        </Container>
    );
}