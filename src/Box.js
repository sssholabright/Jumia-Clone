import React from 'react';
import "./Box.css";

function Box() {
    return (
        <div className="box">
            <div className="box_option">
                <div className="box_optionOne">
                    <img
                        className="img"
                        src="https://ng.jumia.is/cms/QuickLinks/Icon-red.png"
                        alt="" />
                    <p>Official Stores</p>
                </div>
                <div className="box_optionTwo">
                    <img
                        className="img"
                        src="https://ng.jumia.is/cms/QuickLinks/JumiaOne_2.png"
                        alt="" />
                    <p>Airtime Cashback</p>
                </div>
                <div className="box_optionThree">
                    <img 
                        className="img"
                        src="https://ng.jumia.is/cms/QuickLinks/jumia-food-new.png"
                        alt="" />
                    <p>Food Fest</p>
                </div>
                <div className="box_optionFour">
                    <img
                        className="img"
                        src="https://ng.jumia.is/cms/QuickLinks/JumiaGlobal.png"
                        alt="" />
                    <p>Jumia Global</p>
                </div>
            </div>
        </div>
    )
}

export default Box
