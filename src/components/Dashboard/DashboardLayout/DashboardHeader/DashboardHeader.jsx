import React from 'react'
import {Menu, Grid, Button} from '@mui/material'
import dashboardLogo from '../../../../assests/dashboardLogo.svg'
import profile from '../../../../assests/profile.png'
import notificationIcon from '../../../../assests/notificationIcon.svg'
import './styles.scss'

const DashboardHeader = () =>{
    return(
        <div className="header-div">
        <Grid container position="fixed" centered spacing={3} className="grid-container">
            <Grid item md={3} xs={5} className="grid-item">
            <div className="logo-div">
                <img src={dashboardLogo} alt="logo" />
                <div className="logo-title">Logo</div>
            </div>
            </Grid>
            <Grid item md={5} className='grid-item'>
                <div className="welcome-header">
                    Welcome user name! We are super excited to have you on board. Best Wishes.
                </div>
            </Grid>
            <Grid item md={4} xs={7} className="grid-item">
                <div className="profile-div">
                    <Button variant="outlined">
                        Contact us
                    </Button>
                    <img src={notificationIcon} alt="notifications" className="notification"/>
                    <img src={profile} alt="profile avatar" className="avatar-img"/>
                </div>
            </Grid>
        </Grid>
        </div>
    )
}

export default DashboardHeader