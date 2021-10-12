import React from 'react';
import {Grid} from '@mui/material';
import micIcon from '../../../../assests/sectionView/micIcon.svg';
import forwardIcon from '../../../../assests/sectionView/forwardIcon.svg';
import listeningIcon from '../../../../assests/sectionView/listeningIcon.svg';
import readingIcon from '../../../../assests/sectionView/readingIcon.svg'
import writingIcon from '../../../../assests/sectionView/writingIcon.svg'
import './styles.scss'

const SectionView = () =>{
    return (
      <div className="section-container">
        <div className="section-row">
          <Grid container spacing={3}>
            <Grid item md={3} xs={12}>
              <div className="left-div">
                <img src={micIcon} alt="Speaking" />
                <div className="section-title">Speaking</div>
                <img src={forwardIcon} alt="Speaking" />
              </div>
            </Grid>
            <Grid item md={9} xs={12}>
              <div className="right-div">
                <Grid container>
                  <Grid item md={4} xs={12}>
                    <div className="test-number">Speaking Test A</div>
                  </Grid>
                  <Grid item md={4} xs={12}>
                    <div className="duration-div">
                      Duration
                      <div className="duration">35 mins</div>
                    </div>
                  </Grid>
                  <Grid item md={4} xs={12}>
                    <div className="questions-div">
                      No. Of Questions
                      <div className="questions">30</div>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className="section-row">
          <Grid container spacing={3}>
            <Grid item md={3} xs={12}>
              <div className="left-div">
                <img src={writingIcon} alt="Speaking" />
                <div className="section-title">Writing</div>
                <div></div>
              </div>
            </Grid>
            <Grid item md={9} xs={12}>
              <div className="right-div">
                <Grid container>
                  <Grid item md={4} xs={12}>
                    <div className="test-number">Speaking Test B</div>
                  </Grid>
                  <Grid item md={4} xs={12}>
                    <div className="duration-div">
                      Duration
                      <div className="duration">35 mins</div>
                    </div>
                  </Grid>
                  <Grid item md={4} xs={12}>
                    <div className="questions-div">
                      No. Of Questions
                      <div className="questions">30</div>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className="section-row">
          <Grid container spacing={3}>
            <Grid item md={3} xs={12}>
              <div className="left-div">
                <img src={readingIcon} alt="Reading" />
                <div className="section-title">Reading</div>
                <div></div>
              </div>
            </Grid>
            <Grid item md={9} xs={12}>
              <div className="right-div">
                <Grid container>
                  <Grid item md={4} xs={12}>
                    <div className="test-number">Speaking Test C</div>
                  </Grid>
                  <Grid item md={4} xs={12}>
                    <div className="duration-div">
                      Duration
                      <div className="duration">35 mins</div>
                    </div>
                  </Grid>
                  <Grid item md={4} xs={12}>
                    <div className="questions-div">
                      No. Of Questions
                      <div className="questions">30</div>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className="section-row">
          <Grid container spacing={3}>
            <Grid item md={3} xs={12}>
              <div className="left-div">
                <img src={listeningIcon} alt="Listening" />
                <div className="section-title">Listening</div>
                <div></div>
              </div>
            </Grid>
            <Grid item md={9} xs={12}>
              <div className="right-div">
                <Grid container>
                  <Grid item md={4} xs={12}>
                    <div className="test-number">Speaking Test D</div>
                  </Grid>
                  <Grid item md={4} xs={12}>
                    <div className="duration-div">
                      Duration
                      <div className="duration">35 mins</div>
                    </div>
                  </Grid>
                  <Grid item md={4} xs={12}>
                    <div className="questions-div">
                      No. Of Questions
                      <div className="questions">30</div>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className="section-row">
          <Grid container spacing={3}>
            <Grid item md={3} xs={12}>
              <div className="left-div">
                <img src={listeningIcon} alt="Listening" />
                <div className="section-title">Speaking</div>
                <div></div>
              </div>
            </Grid>
            <Grid item md={9} xs={12}>
              <div className="right-div">
                <Grid container>
                  <Grid item md={4} xs={12}>
                    <div className="test-number">Speaking Test E</div>
                  </Grid>
                  <Grid item md={4} xs={12}>
                    <div className="duration-div">
                      Duration
                      <div className="duration">35 mins</div>
                    </div>
                  </Grid>
                  <Grid item md={4} xs={12}>
                    <div className="questions-div">
                      No. Of Questions
                      <div className="questions">30</div>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
}

export default SectionView