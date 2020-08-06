import React, { useState, useEffect, useContext } from "react";
import SearchInput from "../components/SearchInput";
import SimpleTable from "../components/SimpleTable";
import { Grid, Box } from "@material-ui/core";
import { GlobalContext } from "../context/GlobalProvider";

const SearchPage = () => {
  const { csv1, csv2, setSearch } = useContext(GlobalContext);

  return (
    <>
      <h1>Welcome Search Page</h1>
      <Box mb={2}>
        <SearchInput setSearch={setSearch} />
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <SimpleTable dataCvs={csv1} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SimpleTable dataCvs={csv2} />
        </Grid>
      </Grid>
    </>
  );
};

export default SearchPage;
