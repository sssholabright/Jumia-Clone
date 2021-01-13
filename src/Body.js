import React from 'react'
import "./Body.css";
import Sidebar from "./Sidebar";
import Ads from "./Ads";
import Sideright from "./Sideright";
import SalesSection from './SalesSection';
import Box from './Box';
import SalesTwo from './SalesTwo';
import Sales from './Sales';
import AdsTwo from './AdsTwo';
import Intro from './Intro';

function Body() {
    return (
        <div className="body">
            <div className="bodyOne">
                <Sidebar />
                <Ads />
                <Sideright />
            </div>
            <div className="bodyTwo">
                <Box />
            </div>
            <div className="bodyThree">
                <SalesSection />
            </div>
            <div className="bodyFour">
                <SalesTwo />
            </div>
            <div className="bodyFive">
                <Sales />
            </div>
            <div className="bodySix">
                <AdsTwo />
            </div>
            <div className="bodySeven">
                <Intro />
            </div>

        </div>
    )
        
        
}

export default Body
