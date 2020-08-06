import React, { useContext } from "react";
import SearchInput from "../components/SearchInput";
import SimpleTable from "../components/SimpleTable";
import { Grid, Box, Typography } from "@material-ui/core";
import { GlobalContext } from "../context/GlobalProvider";

const SearchPage = () => {
  const { csv1, csv2, setSearch } = useContext(GlobalContext);

  return (
    <>
      <Typography variant="h4">Search Page</Typography>
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
