import React from 'react'
import DashboardHeader from './DashboardHeader/DashboardHeader'
import DashboardSidebar from './DashboardSidebar/DashboardSidebar'
import {Grid} from '@mui/material'
import './styles.scss'

const DashboardLayout = ({children}) =>{
    return (
        <>
          <DashboardHeader />
          <div className="content-container">
            <DashboardSidebar />
            <div className="layout-content">
              {children}
            </div>
          </div>
        </>

    );
}

export default DashboardLayout