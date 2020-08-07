import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Input } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "4px 4px",
    display: "flex",
    alignItems: "center",
    width: "100%",
    maxHeight: "56px",
  },
  input: {
    width: "100%",
    marginLeft: theme.spacing(1),
    flex: 1,
  },
}));

const SearchInput = ({ setSearch, search }) => {
  const classes = useStyles();
  return (
    <Paper component="form" className={classes.root}>
      <Input
        className={classes.input}
        placeholder="Vitamin B"
        inputProps={{ "aria-label": "search for a document" }}
        value={search}
        onChange={(value) => setSearch(value.target.value)}
      />

      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchInput;
