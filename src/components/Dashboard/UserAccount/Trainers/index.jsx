import React, { useState } from "react";
import { Button, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Search from "@mui/icons-material/Search";
import Table from "./table";
import AddStudent from "./addTrainer";
import "./styles.scss";

const Trainers = () => {
  const [previewModal, setpreviewModal] = useState(false);
  const handleModalPreview = () => {
    setpreviewModal(!previewModal);
  };
  return (
    <div className="user-account-container">
      <div className="user-account-header">
        <Grid container>
          <Grid item xs={12} md={6}>
            <Button className="add-account" onClick={handleModalPreview}>
              <AddIcon />
              Add New Trainer
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="account-filteration">
              <div className="search-account">
                <input type="text" placeholder="Search" />
                <span>
                  <Search />
                </span>
              </div>
              <div className="search-package">
                <select>
                  <option value="" disabled selected>
                    Package
                  </option>
                  <option value="package1">package 1</option>
                </select>
              </div>
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

export default Trainers;
