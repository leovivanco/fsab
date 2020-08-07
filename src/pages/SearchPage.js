import React, { useContext, useEffect, useState } from "react";
import SearchInput from "../components/SearchInput";
import SimpleTable from "../components/SimpleTable";
import TotalDocuments from "../components/TotalDocuments";
import SubTitle from "../components/SubTitle/SubTitle";
import { Grid } from "@material-ui/core";
import { GlobalContext } from "../context/GlobalProvider";

const SearchPage = () => {
  const { csv1, csv2, setSearch } = useContext(GlobalContext);
  const [totalDocuments, setTotalDocuments] = useState("");
  const columns = [
    { id: "chemicaltype", label: "Name", minWidth: 170 },
    { id: "documents", label: "Documents", minWidth: 100 },
  ];

  useEffect(() => {
    const total = csv1.length + csv2.length;
    setTotalDocuments(total);
  }, [csv1, csv2]);

  return (
    <>
      <SubTitle value="Search Page" />
      <Grid container spacing={1} direction="row">
        <Grid item md={12} lg={8}>
          <SearchInput setSearch={setSearch} />
        </Grid>
        <Grid item md={12} lg={4}>
          <TotalDocuments value={totalDocuments} />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {csv2?.length > 0 && (
          <Grid item xs={12} sm={6}>
            <SimpleTable
              columns={columns}
              maxHeight={440}
              clickOnRow={true}
              dataCvs={csv1}
            />
          </Grid>
        )}
        {csv2?.length > 0 && (
          <Grid item xs={12} sm={6}>
            <SimpleTable
              columns={columns}
              maxHeight={440}
              clickOnRow={true}
              dataCvs={csv2}
            />
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default SearchPage;
