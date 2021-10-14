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
    <TableContainer sx={{ minHeight: 200, height: 429 }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ borderRadius: 10 }}>
          <TableRow sx={{ borderRadius: 10 }}>
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
            <TableCell align="center">
              <span>Action</span>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow
            //key={}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              <div className="data-cell-div"> 12 - 10 - 2021 </div>
            </TableCell>
            <TableCell>test@ptemocktest.com</TableCell>
            <TableCell>Test User</TableCell>
            <TableCell>ptemocktest</TableCell>
            <TableCell>
              <div className="package-type-div">
                <div>Basic Package</div>
                <div>5 of 10 ids </div>
              </div>

              <div className="package-type-div">
                <div>Premium Package</div>
                <div>5 of 10 ids </div>
              </div>
            </TableCell>
            <TableCell>
              <Button className="edit">
                <div className="edit-title">Edit</div>
              </Button>
              <Button className="delete">
                <div className="delete-title">Delete</div>
              </Button>
              <Button className="upgrade-side">
                <div className="upgrade-title">Assign Ids</div>
                <img src={UpgradeIcon} alt="" />
              </Button>
            </TableCell>
          </TableRow>
          <TableRow
            //key={}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              <div className="data-cell-div"> 12 - 10 - 2021 </div>
            </TableCell>
            <TableCell>test@ptemocktest.com</TableCell>
            <TableCell>Test User</TableCell>
            <TableCell>ptemocktest</TableCell>
            <TableCell>
              <div className="type-div">
                <Button className="view-button">View</Button>
                <Button className="upgrade">
                  <div className="upgrade-title">Assign Ids</div>
                  <img src={UpgradeIcon} alt="" />
                </Button>
              </div>
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
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
