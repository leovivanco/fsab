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
  IconButton,
} from "@material-ui/core";
import LanguageIcon from "@material-ui/icons/Language";

const useStyles = makeStyles({
  root: {
    width: "100%",
    marginTop: 10,
  },
  container: {
    maxHeight: (props) => props,
  },
});

const SimpleTable = ({
  dataCvs,
  maxHeight,
  clickOnRow,
  columns,
  details,
  query,
}) => {
  const classes = useStyles(maxHeight);
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

  const handleClickRow = (rowName) =>
    history.push({
      pathname: "/documents",
      search: `?q=${rowName}`,
    });

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

  const renderMultiTable = () => {
    return (
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
                onClick={() => clickOnRow && handleClickRow(row)}
              >
                {columns.map((column, index) => {
                  return (
                    <Fragment key={column.id + index + row}>
                      <TableCell align={column.align}>
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
    );
  };

  const parseForValue = (rowId, row, index) => {
    if (rowId === "number") {
      return index + 1;
    } else if (rowId === "actions") {
      return (
        <IconButton
          component="a"
          target="_blank"
          aria-label="go to patents google"
          href={`https://patents.google.com/patent/${row["patentno"]}`}
          style={{ display: "block" }}
        >
          <LanguageIcon />
        </IconButton>
      );
    }
    return row[rowId];
  };

  const renderDetailsTable = () => {
    return (
      <TableBody>
        {cleanDate
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          // .filter((row) => {
          //   if (query) {
          //     return (
          //       row.chemicaltype.toLocaleLowerCase() ===
          //       query.toLocaleLowerCase()
          //     );
          //   }
          //   return row;
          // })
          .map((row, indexDate) => {
            return (
              <TableRow
                hover
                role="checkbox"
                tabIndex={-1}
                key={indexDate + row}
              >
                {columns.map((column, index) => {
                  return (
                    <Fragment key={column.id + index + row}>
                      <TableCell align={column.align}>
                        {parseForValue(column.id, row, indexDate)}
                      </TableCell>
                    </Fragment>
                  );
                })}
              </TableRow>
            );
          })}
      </TableBody>
    );
  };

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
          {details ? renderDetailsTable() : renderMultiTable()}
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
