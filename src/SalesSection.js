import React from 'react';
import './SalesSection.css';

function SalesSection() {
    return (
        <div className="salesSection">
            
            <div className="sectionOne" id="img">
            <h3>Top selling items</h3>
                <img
                    src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/83/426463/1.jpg?8622"
                    alt="" />
                    <p>Soundebar blutooth Speaker</p>
                    <h3> N 6,170</h3>
                    <h4><strike> N 12,099</strike></h4>
            </div>
            <div className="sectionTwo" id="img">
                <img 
                    src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/29/042456/1.jpg?2575"
                    alt="" />
                    <p>UMIDIGI A7S Infrared Temperat...</p>
                    <h3> N 35,900</h3>
                    <h4><strike> N 63,690</strike></h4>
            </div>
            <div className="sectionThree" id="img">
                <img 
                    src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/08/408736/1.jpg?7641"
                    alt="" />
                    <p>Feng Shui Black Obsidian Wealt...</p>
                    <h3> N 1,807</h3>
                    <h4><strike> N 6,000</strike></h4>
                </div>
            <div className="sectionFour" id="img">
                <img
                    src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/63/659544/1.jpg?5008"
                    alt="" />
                    <p>SIM/TF Bluetooth Wrist Watch ...</p>
                    <h3> N 5,499</h3>
                    <h4><strike> N 11,999</strike></h4>
            </div>
            <div className="sectionFive" id="img">
                <img
                    src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/29/973734/1.jpg?4289"
                    alt="" />
                    <p>Color Screen Smart brace...</p>
                    <h3> N 2,388</h3>
                    <h4><strike> N 4,999</strike></h4>
            </div>
        </div>
    )
}

export default SalesSection
