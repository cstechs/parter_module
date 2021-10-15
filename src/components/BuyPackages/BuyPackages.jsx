import React from 'react'
import { Grid } from '@mui/material'
import Packages from './Packages/Packages'
import InvoiceComponent from './InvoiceComponent/InvoiceComponent'
import './styles.scss'


const BuyPackages = () =>{
    return(
        <div className="buy-package-container">
            <Grid container spacing={1}>
                <Grid item md={4} sx={12}>
                    <Packages />
                </Grid>
                <Grid item md={8} sx={12}>
                    <InvoiceComponent />
                </Grid>
            </Grid>
        </div>
    )
}

export default BuyPackages