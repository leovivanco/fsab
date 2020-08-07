import React from "react";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    height: theme.spacing(7),
    padding: theme.spacing(1),
    paddingTop: theme.spacing(2),
    width: "100%",
    color: theme.palette.primary.main,
  },
}));

const TotalDocuments = ({ value = 0 }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root} elevation={2}>
      <strong>Total documents: {value}</strong>
    </Paper>
  );
};

export default TotalDocuments;
