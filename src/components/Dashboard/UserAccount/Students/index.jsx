import React, { useState } from "react";
import { Button, Grid, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Search from "@mui/icons-material/Search";
import Table from "./table";
import AddStudent from "./addStudent";
import "./styles.scss";

const Students = () => {
  const [previewModal, setpreviewModal] = useState(false);
  const [packageValue, setPackageValue] = useState(10);
  const handleModalPreview = () => {
    setpreviewModal(!previewModal);
  };



  const handleChange = (e) =>{
    setPackageValue(e.target.value)
  }

  return (
    <div className="user-account-container">
      <div className="user-account-header">
        <Grid container>
          <Grid item xs={12} md={6} >
            <Button className="add-account" onClick={handleModalPreview}>
              <div className="person-account">
                <AddIcon />
              </div>
              Add New User
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="account-filteration">
              <div className="search-account">
                <input
                  type="text"
                  placeholder="Search"
                  //onChange={handleInputChange}
                />
                <span>
                  <Search />
                </span>
              </div>

              <FormControl fullWidth className="select-form">
                <InputLabel id="package-label">Package</InputLabel>
                <Select
                  labelId="package-label"
                  id="package-select"
                  value={packageValue}
                  label="Package"
                  onChange={handleChange}
                  native={true}
                >
                  <option value="package one">Package one</option>
                  <option value="package two">Package two</option>
                  <option value="package three">Package three</option>
                  {/*<MenuItem key={10} value={10}>
                    {" "}
                    10{" "}
                  </MenuItem>
                  <MenuItem key={20} value={20}>
                    {" "}
                    20{" "}
                  </MenuItem>
                  <MenuItem key={30} value={30}>
                    Thirty
                  </MenuItem>
                  <MenuItem key={40} value={40}>
                    Ten
                  </MenuItem>
                  <MenuItem key={50} value={50}>
                    Twenty
                  </MenuItem>
                  <MenuItem value={60}>Thirty</MenuItem> */}
                </Select>
              </FormControl>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="user-account-content">
        <Table />
      </div>
      {previewModal && (
        <AddStudent open={previewModal} modalHandle={handleModalPreview} />
      )}
    </div>
  );
};

export default Students;
