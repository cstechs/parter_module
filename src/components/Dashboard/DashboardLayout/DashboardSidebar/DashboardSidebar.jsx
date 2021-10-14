import React, { useState, useEffect, useRef } from "react";
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
  const [sideMenuDropdown, setSideMenuDropdown] = useState(false)
  const wrapperRef = useRef(null);

  const menuDropdownPreview = () => {
    console.log('menu dropdown preview')
    setmenuDropdown(!menuDropdown);
  };

  const handleSideMenuDropdown = () =>{
      setSideMenuDropdown(!sideMenuDropdown)
  }
  // const [selectedMenu, setSelectedMenu] = useState("dashboard")
  const { pathname } = useLocation();
  const selectedMenu = pathname.slice(1);

  useEffect(() => {
    setmenuDropdown(false);
  }, [selectedMenu]);

  // below is the same as componentDidMount and componentDidUnmount
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      console.log('false')
      setmenuDropdown(false);
    }
  };

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
                selectedMenu === "students" || selectedMenu === "trainers"
                  ? `selected`
                  : ""
              }`}
              onClick={menuDropdownPreview}
              ref={wrapperRef}
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
                  <li
                    onClick={menuDropdownPreview}
                    className={` ${
                      selectedMenu === "students" ? `submenu-selected` : ""
                    }`}
                  >
                    <Link to="/students">Students</Link>
                  </li>
                  <li
                    onClick={menuDropdownPreview}
                    className={` ${
                      selectedMenu === "trainers" ? `submenu-selected` : ""
                    }`}
                  >
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
              onClick={handleSideMenuDropdown}
            >
              <PersonAdd />
              <div className="menu-name">User Account</div>
            </div>
            {sideMenuDropdown && (
              <div className="menu-options">
                <ArrowRight />
                <ul>
                  <li
                    className={` ${
                      selectedMenu === "students" ? `submenu-selected` : ""
                    }`}
                  >
                    <Link to="/students">Students</Link>
                  </li>
                  <li
                    className={` ${
                      selectedMenu === "trainers" ? `submenu-selected` : ""
                    }`}
                  >
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
