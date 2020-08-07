import React, { useContext, useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import SimpleTable from "../components/SimpleTable";
import { GlobalContext } from "../context/GlobalProvider";
import SearchInput from "../components/SearchInput";
import TotalDocuments from "../components/TotalDocuments";
import SubTitle from "../components/SubTitle/SubTitle";

const DocumentsPage = ({ location }) => {
  const { csv1, csv2, setSearch } = useContext(GlobalContext);
  const allTables = csv1.concat(csv2);
  const [query, setQuery] = useState("");
  const columns = [
    { id: "number", label: "Nº", minWidth: 40 },
    { id: "patentno", label: "Patent Id", minWidth: 80 },
    { id: "patenttitle", label: "Title", minWidth: 170 },
    { id: "actions", label: "Google Patents", minWidth: 140, align: "justify" },
  ];
  useEffect(() => {
    const { search: q } = location;
    const cleanSearch = decodeURIComponent(q.replace("?q=", ""));
    setQuery(cleanSearch);
  }, [location, query]);

  return (
    <>
      <SubTitle value="Documents" />
      <Grid container spacing={1} direction="row">
        <Grid item md={12} lg={8}>
          <SearchInput setSearch={setSearch} />
        </Grid>
        <Grid item md={12} lg={4}>
          <TotalDocuments value={allTables.length} />
        </Grid>
      </Grid>
      {allTables?.length > 0 && (
        <SimpleTable
          columns={columns}
          maxHeight={500}
          details={true}
          dataCvs={allTables}
          query={query}
        />
      )}
    </>
  );
};

export default DocumentsPage;
