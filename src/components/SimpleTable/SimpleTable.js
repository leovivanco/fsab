import React, { Fragment, memo } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@material-ui/core";

const columns = [
  { id: "chemicaltype", label: "Name", minWidth: 170 },
  { id: "documents", label: "Documents", minWidth: 100 },
];

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

const SimpleTable = ({ dataCvs }) => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);
  let history = useHistory();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleClickRow = (event) => history.push("/documents");

  const withNormalizedKeys = (item) => {
    return Object.entries(item)
      .map(([key, value]) => [
        key.replace(/\s+/g, "").replace(/\d+/g, "").toLowerCase(),
        value,
      ])
      .reduce((result, [normalizedKey, value]) => {
        result[normalizedKey] =
          value && typeof value === "object"
            ? withNormalizedKeys(value)
            : value;
        return result;
      }, {});
  };

  const cleanDate = dataCvs.map((item) => {
    return withNormalizedKeys(item);
  });

  const parseForDocuments = (name) => {
    return cleanDate.filter((itemData) => itemData.chemicaltype === name)
      .length;
  };

  const uniquieElements = [
    ...new Set(cleanDate.map((obj) => obj.chemicaltype)),
  ];

  return (
    <Paper className={classes.root}>
      {/* <SearchInput /> */}
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column, index) => (
                <TableCell
                  key={column.id + index}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {uniquieElements
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={index + row}
                    onClick={(event) => handleClickRow(event)}
                  >
                    {columns.map((column, index) => {
                      return (
                        <Fragment key={column.id + index + row}>
                          <TableCell align="left">
                            {column.id === "chemicaltype"
                              ? row
                              : parseForDocuments(row)}
                          </TableCell>
                        </Fragment>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={uniquieElements.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default memo(SimpleTable);
