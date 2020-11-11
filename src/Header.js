import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import useWebAnimations, { flip } from "@wellyshen/use-web-animations";

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
  // const { ref } = useWebAnimations({ ...slideInRight });
  const { ref } = useWebAnimations({ ...flip });

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
        <h2 ref={ref}>Covid Tracker</h2>
      </div>
      <div className="imgcont">
        <img src="/corona.png" alt="img" className="img" />
      </div>
    </div>
  );
}
