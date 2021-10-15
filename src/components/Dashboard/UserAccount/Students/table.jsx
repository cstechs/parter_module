import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";
import UpgradeIcon from "../../../../assests/upgradeIcon.png";

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
];

const TableComponent = () => {
  return (
    <TableContainer sx={{minHeight : 200 , height : 429}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <span> Date Created</span>
            </TableCell>
            <TableCell align="center">
              <span>Email ID</span>
            </TableCell>
            <TableCell align="center">
              <span>Name</span>
            </TableCell>
            <TableCell align="center">
              <span>Password</span>
            </TableCell>
            <TableCell align="center">
              <span>Package Type</span>
            </TableCell>
            <TableCell align="center" sx={{paddingRight: 0}}>
              <span>Action</span>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{minHeight: 422}}>
          {rows.map((row) => (
            <TableRow
              key={row.created}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <div className="data-cell-div"> {row.created} </div>
              </TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.password}</TableCell>
              <TableCell>
                <span>Basic Package</span>
                <Button className="upgrade">
                  <div className="upgrade-title">Upgrade</div>
                  <img src={UpgradeIcon} alt="" />
                </Button>
              </TableCell>
              <TableCell>
                <Button className="edit">
                  <div className="edit-title">Edit</div>
                </Button>
                <Button className="delete">
                  <div className="delete-title">Delete</div>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
