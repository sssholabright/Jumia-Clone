import React from 'react';
import "./Top.css";
import StarsIcon from '@material-ui/icons/Stars';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import TimerIcon from '@material-ui/icons/Timer';

function Top() {
    return (
        <div className="top">
            <div className="top_left">
                <StarsIcon />
                <p><a href="/">Sell on Jumia</a></p>
            </div>
            <div className="top_middle">
                <img src="data:image/png;base64,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"
                    alt="" />
            </div>
            <div className="top_middle">
                <VerifiedUserIcon fontsize="smaller"/>
                <p>PAY</p>
            </div>
            <div className="top_middle">
                <FastfoodIcon fontsize="smaller" />
                <p>FOOD</p>
            </div>
            <div className="top_middle">
                <LocalBarIcon />
                <p>PARTY</p>
            </div>
            <div className="top_middle">
                <TimerIcon />
                <p>NOW</p>
            </div>
        </div>
    )
}

export default Top