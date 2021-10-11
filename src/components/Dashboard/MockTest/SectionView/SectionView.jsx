import React from 'react'
import {Grid} from '@mui/material'
import { ReactComponent as MicIcon } from "../../../../assests/sectionView/micIcon.svg";
import { ReactComponent as ForwardIcon } from "../../../../assests/sectionView/forwardIcon.svg";
import {MicOutlined} from '@mui/icons-material'
import './styles.scss'

const SectionView = () =>{
    return (
      <div className="section-container">
        <div className="section-row">
            <div className="right-div">
                <MicIcon />
                <div>Speaking</div>
            </div>
            <div className="right-div">

            </div>  
        </div>
      </div>
    );
}

export default SectionView