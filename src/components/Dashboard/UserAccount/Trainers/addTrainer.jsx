import React from "react";
import { Modal, Box, Grid } from "@mui/material";
import BackupIcon from "@mui/icons-material/Backup";

const AddTrainer = ({ open, modalHandle }) => {
  return (
    <div className="add-student-wrapper">
      <Modal
        open={open}
        onClose={modalHandle}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="add-student">
          <h2>Add New Trainer</h2>
          <form action="" style={{marginBottom: "0"}}>
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
                <div className="upload-logo-div">
                  <div className='logo-div'>Upload Logo</div>
                  <div className="input-div">
                    <label htmlFor="logo" className="upload-label">Upload Logo <BackupIcon className="upload-icon"/></label>
                    <input type="file" id="logo" className="file-input"/>
                  </div>
                </div>
              </Grid>
              <Grid item md={6} xs={12}>
                <label htmlFor="">Package Type</label>
                <select name="" id="">
                  <option value="">Basic Package</option>
                  <option value="package1">package 1</option>
                </select>
              </Grid>
              <Grid item md={6} xs={12}>
                <label htmlFor="">No. Of Ids</label>
                <select name="" id="">
                  <option value="">5 out of 12 ids left</option>
                  <option value="package1">package 1</option>
                </select>
              </Grid>
              <Grid item md={6} xs={12}>
                <label htmlFor="">Package Type</label>
                <select name="" id="">
                  <option value="">Basic Package</option>
                  <option value="package1">package 1</option>
                </select>
              </Grid>
              <Grid item md={6} xs={12}>
                <label htmlFor="">No. Of Ids</label>
                <select name="" id="">
                  <option value="">5 out of 12 ids left</option>
                  <option value="package1">package 1</option>
                </select>
              </Grid>
              <Grid item md={6} xs={12}>
                <label htmlFor="">Package Type</label>
                <select name="" id="">
                  <option value="">Basic Package</option>
                  <option value="package1">package 1</option>
                </select>
              </Grid>
              <Grid item md={6} xs={12}>
                <label htmlFor="">No. Of Ids</label>
                <select name="" id="">
                  <option value="">5 out of 12 ids left</option>
                  <option value="package1">package 1</option>
                </select>
              </Grid>
            </Grid>
            <div className="actions" style={{bottom: "-93px"}}>
              <span onClick={modalHandle}>No, Not Now</span>
              <button>Yes, Add Trainer</button>
            </div>
          </form>
          <div className="add-student-footer">
            <div className="bubble-2"></div>
            <div className="bubble-1"></div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default AddTrainer;
