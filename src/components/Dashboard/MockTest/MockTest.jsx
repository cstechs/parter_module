import React, {useState} from 'react'
import {Button, Grid} from '@mui/material'
import {BarChart} from '@mui/icons-material'
import { TaskViewType, ScoredView, SectionView, PracticeView } from './index'
import './styles.scss'

const renderMockView = (view) =>{
    switch(view) {
      case  "scored" :
        return <ScoredView />
      case "practice" :
        return <PracticeView />
      case "section" :
        return <SectionView />
      case "type" : 
      return <TaskViewType />
      default :
    }
}
const MockTest = () => {
    const [mockTestView, setMockTestView] = useState("scored")


    return (
      <div className="mock-container">
        <div className="mock-header">
          <div className="header-button">
            <Button
              onClick={() => setMockTestView("scored")}
              className={`${
                mockTestView === "scored" ? `selected` : ""
              }`}
            >
              <BarChart />
              Scored Mock Test
            </Button>
          </div>
          <div className="header-button">
            <Button
              onClick={() => setMockTestView("practice")}
              className={`${
                mockTestView === "practice" ? `selected` : ""
              }`}
            >
              <BarChart />
              Practice Test
            </Button>
          </div>
          <div className="header-button">
            <Button
              onClick={() => setMockTestView("section")}
              className={`${
                mockTestView === "section" ? `selected` : ""
              }`}
            >
              <BarChart />
              Section Wise
            </Button>
          </div>
          <div className="header-button">
            <Button
              onClick={() => setMockTestView("type")}
              className={` ${
                mockTestView === "type" ? `selected` : ""
              }`}
            >
              <BarChart />
              Task type
            </Button>
          </div>
        </div>
        <div className="mock-content">{renderMockView(mockTestView)}</div>
      </div>
    );
}

export default MockTest