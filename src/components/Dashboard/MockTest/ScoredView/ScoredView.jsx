import React from 'react'
import {  Grid  } from "@mui/material";
import './styles.scss'

const ScoredView = () =>{
    return (
      <div className="scored-container">
        <Grid container>
          <Grid item md={4} xs={12}>
            <div className="scored-div">
              <div className="shadow"></div>
              <div className="ques-no">71</div>
              <div className="ques-heading">Questions</div>
              <div className="mins">2 Hr 46 Min</div>
              <div className="test-tag">Scored Mocked Test A</div>
            </div>
          </Grid>
          <Grid item md={4} xs={12}>
            <div className="scored-div">
              <div className="shadow"></div>
              <div className="ques-no">71</div>
              <div className="ques-heading">Questions</div>
              <div className="mins">2 Hr 46 Min</div>
              <div className="test-tag">Scored Mocked Test B</div>
            </div>
          </Grid>
          <Grid item md={4} xs={12}>
            <div className="scored-div">
              <div className="shadow"></div>
              <div className="ques-no">71</div>
              <div className="ques-heading">Questions</div>
              <div className="mins">2 Hr 46 Min</div>
              <div className="test-tag">Scored Mocked Test C</div>
            </div>
          </Grid>
        </Grid>
        
      </div>
    );
}

export default ScoredView