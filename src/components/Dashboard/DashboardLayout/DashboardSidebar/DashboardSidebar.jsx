import React, { useState } from "react";
import {
  Drawer
} from "@mui/material";
import {
  BarChartOutlined,
  Home,
  PersonAdd,
  ArrowRight,
  CreditCard,
} from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import "./styles.scss";

const DashboardSidebar = ({ setDrawerState, drawerState }) => {
  const [menuDropdown, setmenuDropdown] = useState(false);
  const menuDropdownPreview = () => {
    setmenuDropdown(!menuDropdown);
  };
  // const [selectedMenu, setSelectedMenu] = useState("dashboard")
  const { pathname } = useLocation();
  const selectedMenu = pathname.slice(1);
  console.log('pathname', selectedMenu)
  
  return (
    <>
      <div className="sidebar-div">
        <div className="sidebar-container">
          <Link to="/dashboard">
            <div
              className={`menu-item ${
                selectedMenu === "dashboard" ? `selected` : ""
              }`}
              //onClick={() => setSelectedMenu("dashboard")}
            >
              <div className="icon-div">
                <Home />
              </div>
              <div className="menu-name">Dashboard</div>
            </div>
          </Link>

          <Link to="/mock-test">
            <div
              className={`menu-item ${
                selectedMenu === "mock-test" ? `selected` : ""
              }`}
            >
              <div className="icon-div">
                <BarChartOutlined />
              </div>
              <div className="menu-name">Mock Test</div>
            </div>
          </Link>

          <span>
            <div
              className={`menu-item ${
                selectedMenu === ("students" || "trainers") ? `selected` : ""
              }`}
              onClick={menuDropdownPreview}
            >
              <div className="icon-div">
                <PersonAdd />
              </div>
              <div className="menu-name">User Account</div>
            </div>
            {menuDropdown && (
              <div className="menu-options">
                <ArrowRight />
                <ul>
                  <li onClick={menuDropdownPreview}>
                    <Link to="/students">Students</Link>
                  </li>
                  <li onClick={menuDropdownPreview}>
                    <Link to="/trainers">Trainers</Link>
                  </li>
                </ul>
              </div>
            )}
          </span>

          <Link to="/buy-packages">
            <div
              className={`menu-item ${
                selectedMenu === "buy-packages" ? `selected` : ""
              }`}
            >
              <div className="icon-div">
                <CreditCard />
              </div>
              <div className="menu-name">Buy Packages</div>
            </div>
          </Link>
        </div>
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
              onClick={menuDropdownPreview}
            >
              <PersonAdd />
              <div className="menu-name">User Account</div>
            </div>
            {menuDropdown && (
              <div className="menu-options">
                <ArrowRight />
                <ul>
                  <li>
                    <Link to="/students">Students</Link>
                  </li>
                  <li>
                    <Link to="/trainers">Trainers</Link>
                  </li>
                </ul>
              </div>
            )}
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

export default DashboardSidebar;
