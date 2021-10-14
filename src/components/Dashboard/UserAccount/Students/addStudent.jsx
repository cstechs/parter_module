import React from "react";
import { Modal, Box, Grid } from "@mui/material";

const AddStudent = ({ open, modalHandle }) => {
  return (
    <div className="add-student-wrapper">
      <Modal
        open={open}
        onClose={modalHandle}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="add-student">
          <div className="shadow"></div>
          <h2>Add New Student</h2>
          <form action="">
            <Grid container>
              <Grid item md={6} xs={12}>
                <label htmlFor="">Full Name</label>
                <input type="text" placeholder="Enter Student's Name" />
              </Grid>
              <Grid item md={6} xs={12}>
                <label htmlFor="">Email Id</label>
                <input type="email" placeholder="Enter Student's Email Id" />
              </Grid>
              <Grid item md={6} xs={12}>
                <label htmlFor="">Password</label>
                <input type="password" placeholder="************************" />
              </Grid>
              <Grid item md={6} xs={12}>
                <label htmlFor="">Package Type</label>
                <select name="" id="">
                  <option value="">Basic Package</option>
                  <option value="package1">package 1</option>
                </select>
              </Grid>
            </Grid>
            <div className="actions">
              <button onClick={modalHandle} className='cancel-button'>No, Not Now</button>
              <button>Yes Add Student</button>
            </div>
          </form>
          <div className="add-student-footer">
            <div className="bubble-1"></div>
            <div className="bubble-2"></div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default AddStudent;
