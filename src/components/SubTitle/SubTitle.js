import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: "20px",
    color: theme.palette.primary.main,
    fontWeight: "bold",
    marginBottom: theme.spacing(2),
  },
}));

const SubTitle = ({ value }) => {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.root} variant="h2">
        {value}
      </Typography>
    </div>
  );
};

export default SubTitle;
