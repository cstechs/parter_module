import React from 'react'
import { Button, Table, TableCell, TableContainer, TableBody, TableRow } from '@mui/material'
import { ArrowForwardIos } from '@mui/icons-material'
import './styles.scss'


function createData(packageType, loginIds, price) {
    return { packageType, loginIds, price };
  }
  
  const rows = [
    createData(
      "12 - 10 - 2021",
      "test@ptemocktest.com",
      "Test User",
      "ptemocktest"
    ),
    createData(
      "12 - 10 - 2021",
      "test@ptemocktest.com",
      "Test User",
      "ptemocktest"
    ),
    createData(
      "12 - 10 - 2021",
      "test@ptemocktest.com",
      "Test User",
      "ptemocktest"
    ),
  ];

const InvoiceTable = () =>{
    return(
        <TableContainer>

        </TableContainer>
    )
}

const InvoiceComponent = () =>{
    return(
        <div className="invoice-container">
            <div className="invoice-header">
                Give More <Button className="arrow-button"><ArrowForwardIos className="arrow-icon"/></Button> <span className="break-word">To Your Students</span> 
            </div>
            <div className="invoice-content-container">

            </div>

        </div>
    )
}

export default InvoiceComponent