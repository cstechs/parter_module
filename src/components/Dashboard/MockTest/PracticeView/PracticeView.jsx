import React from 'react'
import { Grid } from "@mui/material";
import './styles.scss'

const PracticeView = () => {
    return (
      <div className="practice-container">
        <Grid container spacing>
          <Grid item md={4} xs={12}>
            <div className="practice-div">
              <div className="shadow"></div>
              <div className="ques-no">71</div>
              <div className="ques-heading">Questions</div>
              <div className="mins">2 Hr 46 Min</div>
              <div className="test-tag">Practice Test A</div>
            </div>
          </Grid>
          <Grid item md={4} xs={12}>
            <div className="practice-div">
              <div className="shadow"></div>
              <div className="ques-no">71</div>
              <div className="ques-heading">Questions</div>
              <div className="mins">2 Hr 46 Min</div>
              <div className="test-tag">Practice Test B</div>
            </div>
          </Grid>
          <Grid item md={4} xs={12}>
            <div className="practice-div">
              <div className="shadow"></div>
              <div className="ques-no">71</div>
              <div className="ques-heading">Questions</div>
              <div className="mins">2 Hr 46 Min</div>
              <div className="test-tag">Practice Test C</div>
            </div>
          </Grid>
        </Grid>
      </div>
    );
}

export default PracticeView