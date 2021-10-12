import React from "react";
import { Menu, Grid, Button } from "@mui/material";
import { MenuOpen, ContactMail } from "@mui/icons-material";
import dashboardLogo from "../../../../assests/dashboardLogo.svg";
import profile from "../../../../assests/profile.png";
import notificationIcon from "../../../../assests/notificationIcon.svg";
import "./styles.scss";

const DashboardHeader = ({ drawerState, setDrawerState }) => {
  return (
    <div className="header-div">
      <Grid
        container
        position="fixed"
        centered
        spacing={3}
        className="grid-container"
      >
        <Grid item md={2} sm={3} xs={3} className="grid-item">
          <div className="logo-div">
            <img src={dashboardLogo} alt="logo" />
            <div className="logo-title">Logo</div>
          </div>
        </Grid>
        <Grid item md={7} sm={5} xs={0} className="grid-item">
          <div className="welcome-header">
            Welcome user name! We are super excited to have you on board. Best
            Wishes.
          </div>
        </Grid>
        <Grid item md={3} sm={4} xs={8} className="grid-item">
          <div className="profile-div">
            <Button variant="outlined" className="contact-button">
              Contact us
            </Button>
            <ContactMail className="contact-mail" />
            <img
              src={notificationIcon}
              alt="notifications"
              className="notification"
            />
            <img src={profile} alt="profile avatar" className="avatar-img" />
            <div
              className="hamburger-icon"
              onClick={() => setDrawerState(true)}
            >
              <MenuOpen />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default DashboardHeader;
