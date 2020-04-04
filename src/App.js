import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import {
  makeStyles
} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Links from "@material-ui/core/Link";
import {
  Favorite,
  GitHub,
  Code,
  DeveloperMode
} from "@material-ui/icons";
import Grid from "@material-ui/core/Grid";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import Card from "./Card";



function Copyright() {
  return ( <Typography variant = "body2"
      color = "textSecondary"> {
        "Copyright © "
      } <Links color = "inherit"
      href = "https://github.com/bahyusanciko"
      target = "_blank">
      Bahyu Sanciko < GitHub fontSize = "small"
      s/>
      </Links>{" "} {
      new Date().getFullYear()
    } {
      "."
    } </Typography>
);
}

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh"
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2)
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor: theme.palette.type === "light" ?
      theme.palette.grey[200] : theme.palette.grey[800]
  },
  card: {
    display: "flex"
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    width: 160
  }
}));

export default function StickyFooter() {
  const classes = useStyles();

  const featuredPosts = [{
      id : 1,
      title: "Featured post",
      date: "Nov 12",
      description: "This is a wider card with supporting text below as a natural lead-in to additional content.",
      image: "https://ionicframework.com/docs/v3/img/meta/ionic-framework-og.png",
      imageText: "asdsad Text"
    },
    {
      id : 2,
      title: "Post title",
      date: "Nov 11",
      description: "This is a wider card with supporting text below as a natural lead-in to additional content.",
      image: "https://ionicframework.com/docs/v3/img/meta/ionic-framework-og.png",
      imageText: "asdas Text"
    }
  ];

  return ( <div className = {classes.root}>
    <BottomNavigation>
    <BottomNavigationAction label = "Favorites"
    value = "favorites"
    icon = {<Code/>}/> 
    </BottomNavigation> 
    <CssBaseline/>
    <Container component = "main" className = {classes.main} maxWidth = "sm">
    <Typography variant = "h3" component = "h1" gutterBottom>
    Bahyu Sanciko </Typography> <Typography variant = "h5" component = "h2"
    gutterBottom> {  "Hello Semua,"} 
    { "Blog ini hanya berisikan bacotan saya tentang dunia IT sekian. #santuyprogramming "} 
    <DeveloperMode/>
    </Typography> <Typography variant = "h6">
    Tulisan Terbaru < br/>
    </Typography> <Grid container spacing = {4}> {
      featuredPosts.map(post => ( < Card key = {
         post.title
        }
        post = {
          post
        }
      />
      ))
    } </Grid> 
    </Container>

    <footer className = {classes.footer}>
    <Container maxWidth = "sm">
    <Typography variant = "body1">
    Built with < Favorite fontSize = "small"/>
    </Typography> <Copyright/>
    </Container> 
    </footer> 
    </div>
  );
}