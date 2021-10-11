import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";

function createData(created, email, name, password) {
  return { created, email, name, password };
}

const rows = [
  createData(
    "12 - 10 - 2021",
    "test@ptemocktest.com",
    "Test User",
    "ptemocktest"
  ),
  createData(
    "12 - 10 - 2021",
    "test@ptemocktest.com",
    "Test User",
    "ptemocktest"
  ),
  createData(
    "12 - 10 - 2021",
    "test@ptemocktest.com",
    "Test User",
    "ptemocktest"
  ),
  createData(
    "12 - 10 - 2021",
    "test@ptemocktest.com",
    "Test User",
    "ptemocktest"
  ),
  createData(
    "12 - 10 - 2021",
    "test@ptemocktest.com",
    "Test User",
    "ptemocktest"
  ),
  createData(
    "12 - 10 - 2021",
    "test@ptemocktest.com",
    "Test User",
    "ptemocktest"
  ),
];

const TableComponent = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Data Created</TableCell>
            <TableCell>Email ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Password</TableCell>
            <TableCell>Package Type</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.created}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.created}
              </TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.password}</TableCell>
              <TableCell>
                <span>Basic Package</span>
                <Button>Upgrade</Button>
              </TableCell>
              <TableCell>
                <Button className="edit">Edit</Button>
                <Button className="delete">Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
