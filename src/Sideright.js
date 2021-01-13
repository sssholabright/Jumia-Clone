import React from 'react';
import "./Sideright.css";
import Low from "./Low";

function Sideright() {
    return (
        <div className="sideright">
            <div className="side_ads">
                <img
                    src="https://ng.jumia.is/cms/Homepage/2020/W38/help-centerv4.png"
                    alt="" />
                <p>HELP CENTER <br/>Guide to Customer Care</p>
            </div>
            <div className="side_ads">
                <img
                src="https://ng.jumia.is/cms/Homepage/2020/W38/returns-refunds.png"
                alt="" />
                <p>EASY RETURN <br/> Quick Refund</p>
            </div>
            <div className="side_ads">
                <img
                    src="https://ng.jumia.is/cms/Homepage/2020/W38/sell-on-jumia.png"
                    alt="" />
                <p>SELL ON JUMIA <br/> Millions of Visitors</p>
            </div>
            <Low />
        </div>

    )
}

export default Sideright
