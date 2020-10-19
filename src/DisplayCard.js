import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CountUp from "react-countup";


const useStyles = makeStyles({
  root: {
    minWidth: 200 ,
    margin: "30px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function DisplayCard({api: { confirmed, recovered, deaths, lastUpdate },
}) {
  const classes = useStyles();
  if (!confirmed) {
    return "Loading...";
  }

  return (
    <div className="maincont">
      <Card className={classes.root}>
        <CardContent className="conf">
          <img src="/diagnosed-cases.png" alt=""  className="imag" />
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Total Confirmed Cases :
          </Typography>
          <Typography variant="h5" component="h2">
            <CountUp
              start={0}
              end={confirmed["value"]}
              duration={2.5}
              separator={","}
            />
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {new Date(lastUpdate).toDateString()}
          </Typography>
          <Typography variant="body2" component="p">
            Number of Active Cases of COVID-19
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardContent className="recoverr">
          <img src="/recovered.png" alt="" className="imag" />
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Total Recovered Cases :
          </Typography>
          <Typography variant="h5" component="h2">
            <CountUp
              start={0}
              end={recovered["value"]}
              duration={2.5}
              separator={","}
            />
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {new Date(lastUpdate).toDateString()}
          </Typography>
          <Typography variant="body2" component="p">
            Recovered Cases of COVID-19
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardContent className="death">
          <img src="/deaths.png" alt="" className="imag" />
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Total Deaths :
          </Typography>
          <Typography variant="h5" component="h2">
            <CountUp
              start={0}
              end={deaths["value"]}
              duration={2.5}
              separator={","}
            />
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {new Date(lastUpdate).toDateString()}
          </Typography>
          <Typography variant="body2" component="p">
            Number of Deaths of COVID-19
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
