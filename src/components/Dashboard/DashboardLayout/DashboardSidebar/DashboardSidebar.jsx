import React, {useState} from 'react'
import {Grid, Drawer, List, ListItem, TextareaAutosize, Menu, MenuItem, MenuList, ListItemIcon} from "@mui/material"
import {BarChartOutlined, Home, PersonAdd, CreditCard} from '@mui/icons-material'
import {Link, useLocation} from 'react-router-dom';
import './styles.scss';

const DashboardSidebar = ({ setDrawerState, drawerState }) => {
  // const [selectedMenu, setSelectedMenu] = useState("dashboard")
  const { pathname } = useLocation();
  const selectedMenu = pathname.slice(1);
  return (
    <>
      <div className="sidebar-div">
        <Link to="/dashboard">
          <div
            className={`menu-item ${
              selectedMenu === "dashboard" ? `selected` : ""
            }`}
            //onClick={() => setSelectedMenu("dashboard")}
          >
            <Home />
            <div className="menu-name">Dashboard</div>
          </div>
        </Link>

        <Link to="/mock-test">
          <div
            className={`menu-item ${
              selectedMenu === "mock-test" ? `selected` : ""
            }`}
          >
            <BarChartOutlined />
            <div className="menu-name">Mock Test</div>
          </div>
        </Link>

        <Link to="/user-account">
          <div
            className={`menu-item ${
              selectedMenu === "user-account" ? `selected` : ""
            }`}
          >
            <PersonAdd />
            <div className="menu-name">U ser Account</div>
          </div>
        </Link>

        <Link to="/buy-packages">
          <div
            className={`menu-item ${
              selectedMenu === "buy-packages" ? `selected` : ""
            }`}
          >
            <CreditCard />
            <div className="menu-name">Buy Packages</div>
          </div>
        </Link>
      </div>
      
        <Drawer
          //anchor={anchor}
          open={drawerState}
          onClose={() => setDrawerState(!drawerState)}
        >
          <div className="drawer-div">
          <Link to="/dashboard">
            <div
              className={`menu-item ${
                selectedMenu === "dashboard" ? `selected` : ""
              }`}
              //onClick={() => setSelectedMenu("dashboard")}
            >
              <Home />
              <div className="menu-name">Dashboard</div>
            </div>
          </Link>

          <Link to="/mock-test">
            <div
              className={`menu-item ${
                selectedMenu === "mock-test" ? `selected` : ""
              }`}
            >
              <BarChartOutlined />
              <div className="menu-name">Mock Test</div>
            </div>
          </Link>

          <Link to="/user-account">
            <div
              className={`menu-item ${
                selectedMenu === "user-account" ? `selected` : ""
              }`}
            >
              <PersonAdd />
              <div className="menu-name">U ser Account</div>
            </div>
          </Link>

          <Link to="/buy-packages">
            <div
              className={`menu-item ${
                selectedMenu === "buy-packages" ? `selected` : ""
              }`}
            >
              <CreditCard />
              <div className="menu-name">Buy Packages</div>
            </div>
          </Link>
          </div>
        </Drawer>
    </>
  );
};

export default DashboardSidebar