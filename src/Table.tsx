import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  table: {
    // minWidth: 360,
    width: "100%",
    maxHeight: "500px",
  },
  tableScroll: {
    height: "100%",
  },
});

const columns = [{ label: "time", viewType: "time", name: "time" }];
function BuSimpleTable(props: any) {
  const { columns, rows, cells } = props;
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.table}>
        <Table className={classes.root} stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((node: any) => {
                const { id, label } = node;
                return (
                  <TableCell component="th" key={id}>
                    {label}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row: any) => (
              <TableRow key={row.id}>
                {columns.map((col: any) => {
                  // const { name: colName } = col;
                  const label = row[col.name];
                  const Cell = cells?.[col.viewType] || TableCell;
                  return (
                    <Cell size="medium" key={col.id}>
                      {label}
                    </Cell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
export default BuSimpleTable;
