import React, {useState} from 'react'
import DashboardHeader from './DashboardHeader/DashboardHeader'
import DashboardSidebar from './DashboardSidebar/DashboardSidebar'
import {Grid, Drawer} from '@mui/material'
import './styles.scss'

const DashboardLayout = ({children}) =>{
  const [drawerState, setDrawerState] = useState(false)
    return (
        <>
          <DashboardHeader drawerState={drawerState} setDrawerState={setDrawerState}/>
          <div className="content-container">
            <DashboardSidebar setDrawerState={setDrawerState} drawerState={drawerState}/>
            <div className="layout-content">
              {children}
            </div>
          </div>
        </>

    );
}

export default DashboardLayout