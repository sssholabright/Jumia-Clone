import React from 'react';
import "./Sidebar.css";
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SmartphoneOutlinedIcon from '@material-ui/icons/SmartphoneOutlined';
import ComputerOutlinedIcon from '@material-ui/icons/ComputerOutlined';
import LiveTvOutlinedIcon from '@material-ui/icons/LiveTvOutlined';
import ChildCareOutlinedIcon from '@material-ui/icons/ChildCareOutlined';
import SportsEsportsOutlinedIcon from '@material-ui/icons/SportsEsportsOutlined';
import FitnessCenterOutlinedIcon from '@material-ui/icons/FitnessCenterOutlined';
import DriveEtaOutlinedIcon from '@material-ui/icons/DriveEtaOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import StoreOutlinedIcon from '@material-ui/icons/StoreOutlined';
import HealingOutlinedIcon from '@material-ui/icons/HealingOutlined';


function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_list">
                <StoreOutlinedIcon />
                <p>Supermarket</p>
            </div>
            <div className="sidebar_list">
                <HealingOutlinedIcon />
                <p>Health & Beauty</p>
            </div>
            <div className="sidebar_list">
                <HomeOutlinedIcon />
                <p>Home & Office</p>
            </div>
            <div className="sidebar_list">
                <SmartphoneOutlinedIcon />
                <p>Phones & Tablets</p>
            </div>
            <div className="sidebar_list">
                <ComputerOutlinedIcon />
                <p>Computing</p>
            </div>
            <div className="sidebar_list">
                <LiveTvOutlinedIcon />
                <p>Electronics</p>
            </div>
            <div className="sidebar_list">
                <p>Fashion</p>
            </div>
            <div className="sidebar_list">
                <ChildCareOutlinedIcon />
                <p>Baby Products</p>
            </div>
            <div className="sidebar_list">
                <SportsEsportsOutlinedIcon />
                <p>Gaming</p>
            </div>
            <div className="sidebar_list">
                <FitnessCenterOutlinedIcon />
                <p>Sporting Goods</p>
            </div>
            <div className="sidebar_list">
                <DriveEtaOutlinedIcon />
                <p>Automobile</p>
            </div>
            <div className="sidebar_list">
                <MoreHorizOutlinedIcon />
                <p>Other categories</p>
            </div>

        </div>
    )
}

export default Sidebar
