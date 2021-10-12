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
          <div className="left-div">
            <img src={micIcon} alt="Speaking" />
            <div className="section-title">Speaking</div>
            <img src={forwardIcon} alt="Speaking" />
          </div>
          <div className="right-div">
            <div className="test-number">Speaking Test A</div>
            <div className="duration-div">
              Duration
              <div className="duration">35 mins</div>
            </div>
            <div className="questions-div">
              No. Of Questions
              <div className="questions">30</div>
            </div>
          </div>
        </div>
        <div className="section-row">
          <div className="left-div">
            <img src={micIcon} alt="Speaking" />
            <div className="section-title">Speaking</div>
            <img src={forwardIcon} alt="Speaking" />
          </div>
          <div className="right-div">
            <div className="test-number">Speaking Test A</div>
            <div className="duration-div">
              Duration
              <div className="duration">35 mins</div>
            </div>
            <div className="questions-div">
              No. Of Questions
              <div className="questions">30</div>
            </div>
          </div>
        </div>
        <div className="section-row">
          <div className="left-div">
            <img src={micIcon} alt="Speaking" />
            <div className="section-title">Speaking</div>
            <img src={forwardIcon} alt="Speaking" />
          </div>
          <div className="right-div">
            <div className="test-number">Speaking Test A</div>
            <div className="duration-div">
              Duration
              <div className="duration">35 mins</div>
            </div>
            <div className="questions-div">
              No. Of Questions
              <div className="questions">30</div>
            </div>
          </div>
        </div>
        <div className="section-row">
          <div className="left-div">
            <img src={micIcon} alt="Speaking" />
            <div className="section-title">Speaking</div>
            <img src={forwardIcon} alt="Speaking" />
          </div>
          <div className="right-div">
            <div className="test-number">Speaking Test A</div>
            <div className="duration-div">
              Duration
              <div className="duration">35 mins</div>
            </div>
            <div className="questions-div">
              No. Of Questions
              <div className="questions">30</div>
            </div>
          </div>
        </div>
        <div className="section-row">
          <div className="left-div">
            <img src={micIcon} alt="Speaking" />
            <div className="section-title">Speaking</div>
            <img src={forwardIcon} alt="Speaking" />
          </div>
          <div className="right-div">
            <div className="test-number">Speaking Test A</div>
            <div className="duration-div">
              Duration
              <div className="duration">35 mins</div>
            </div>
            <div className="questions-div">
              No. Of Questions
              <div className="questions">30</div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default SectionView