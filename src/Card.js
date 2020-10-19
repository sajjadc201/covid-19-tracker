import React, { useEffect, useState } from "react";
import {fetchData} from "./info";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TablePagination from "@material-ui/core/TablePagination";



const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export const Card = () => {
  const classes = useStyles();
  const [api, setapi] = useState({});
  useEffect(() => {
    const getData = async () => {
      const { countryitems } = await fetchData();
      setapi(countryitems[0]);
    //   console.log(countryitems[0]);
    
    };
    getData();
  }, []);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Total Confirmed </StyledTableCell>
            <StyledTableCell align="right">Total Recovered </StyledTableCell>
            <StyledTableCell align="right">Total Serious Cases</StyledTableCell>
            <StyledTableCell align="right">Total Deaths</StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {Object.keys(api)
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((val, i) => {
              return (
                <StyledTableRow key={i}>
                  <StyledTableCell
                    component="th"
                    scope="row"
                    className="country"
                  >
                    {api[val].title}
                  </StyledTableCell>
                  <StyledTableCell align="right" className="confirmed">
                    {api[val].total_cases}
                  </StyledTableCell>
                  <StyledTableCell align="right" className="recovered">
                    {api[val].total_recovered}
                  </StyledTableCell>

                  <StyledTableCell align="right" className="serius">
                    {api[val].total_serious_cases}
                  </StyledTableCell>
                  <StyledTableCell align="right" className="deaths">
                    {api[val].total_deaths}
                  </StyledTableCell>
                </StyledTableRow>
              );
            })}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={Object.keys(api).length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};
