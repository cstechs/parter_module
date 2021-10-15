import React from 'react'
import { Button } from '@mui/material'
import './styles.scss'

const Packages = () => {
    return (
        <div className="package-container">
            <Button className="mock-test-button"><span className="mock-span">Mock Test Packages </span></Button>
            <div className="package-div basic-package">
                <div className="package-title">Basic Package</div>
                <div className="package-pricing-div">
                    <div className="package-options">
                        <div className="test-name">Scored Mock Test</div>
                        <div className="tests-number">2 Tests</div>
                    </div>
                    <div className="package-options">
                        <div className="test-name">Practice Test</div>
                        <div className="tests-number">4 Tests</div>
                    </div>
                    <div className="package-options">
                        <div className="test-name">Section Wise Test</div>
                        <div className="tests-number">20 Tests</div>
                    </div>
                    <div className="package-options">
                        <div className="test-name">Task Type Test</div>
                        <div className="tests-number">100 Tests</div>
                    </div>
                    <div className="package-options">
                        <div className="test-name">Validity</div>
                        <div className="tests-number">2 Months</div>
                    </div>
                </div>
                <div className="price-div">
                    <div className="price-title">Price</div>
                    <div className="price-amount">INR 200 /USD 3</div>
                </div>
            </div>

            <div className="package-div learning-package">
                <div className="package-title learning-title">Learning Package</div>
                <div className="package-pricing-div">
                    <div className="package-options">
                        <div className="test-name">Scored Mock Test</div>
                        <div className="tests-number">2 Tests</div>
                    </div>
                    <div className="package-options">
                        <div className="test-name">Practice Test</div>
                        <div className="tests-number">4 Tests</div>
                    </div>
                    <div className="package-options">
                        <div className="test-name">Section Wise Test</div>
                        <div className="tests-number">20 Tests</div>
                    </div>
                    <div className="package-options">
                        <div className="test-name">Task Type Test</div>
                        <div className="tests-number">100 Tests</div>
                    </div>
                    <div className="package-options">
                        <div className="test-name">Validity</div>
                        <div className="tests-number">2 Months</div>
                    </div>
                </div>
                <div className="price-div">
                    <div className="price-title">Price</div>
                    <div className="price-amount">INR 400 /USD 3</div>
                </div>
            </div>
        </div>
    )
}

export default Packages;