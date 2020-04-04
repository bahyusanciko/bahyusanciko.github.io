import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CssBaseline, Typography, Container, BottomNavigationAction, BottomNavigation } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import { Favorite, Code } from "@material-ui/icons";
import Copyright from './components/Copyright'
import Home from './components/Home'
import Blog from './components/Blog'

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
  }
}));

export default function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.root}>
        <BottomNavigation>
          <BottomNavigationAction label="Favorites" value="favorites" icon={<Code />} />
        </BottomNavigation>
        <CssBaseline />

        <main className={classes.main}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route exact path='/blog/:slug' component={Blog} />
          </Switch>
        </main>

        <footer className={classes.footer}>
          <Container maxWidth="sm">
            <Typography variant="body1">
              Built with < Favorite fontSize="small" />
            </Typography>
            <Copyright />
          </Container>
        </footer>
      </div>
    </BrowserRouter>
  );
}