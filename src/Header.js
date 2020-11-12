import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import useWebAnimations, { slideInRight } from "@wellyshen/use-web-animations";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();
  const { keyframes, timing } = slideInRight;
  const { ref } = useWebAnimations({
    keyframes,
    timing: {
      ...timing,
      delay: 1000, // Delay 1s
      duration: timing.duration * 3, // Speed up the animation
    },
  });

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            COVID-19 Tracker
          </Typography>
          <Button color="inherit">My GitHub</Button>
        </Toolbar>
      </AppBar>
      <div className="title">
        <h2>Covid Tracker</h2>
      </div>
      <div className="images">
        <div className="imgcont">
          <img src="/crona.jpg" alt="img" className="img" />
        </div>
        <div>
          <img src="/virus.jpg" alt="img" className="virus" ref={ref} />
        </div>
      </div>
    </div>
  );
}
