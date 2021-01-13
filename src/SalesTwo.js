import React from 'react';
import './SalesTwo.css';
import NavigateNextOutlinedIcon from '@material-ui/icons/NavigateNextOutlined';

function SalesTwo() {
    return (
        <div className="salesTwo">
            <div className="sales_top">
                <p id="p1"><strong>Deals of the Day </strong> | From N1,000</p>
                <p id="p2">SEE ALL <NavigateNextOutlinedIcon /></p>
            </div>
            <div className="sales_product">
                <div className="productOne" id="product">
                <img
                    src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/91/035411/1.jpg?7658"
                    alt="" />
                    <p>Binatone Dry Iron DI-1255 - Wh..</p>
                    <h3> N 3,650</h3>
                    <h4><strike> N 6,000</strike></h4>
                </div>
                <div className="productTwo" id="product">
                <img
                    src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/63/096344/1.jpg?9265"
                    alt="" />
                    <p>Wireless Earbuds Headset Bluet...</p>
                    <h3> N 5,999</h3>
                    <h4><strike> N 13,500</strike></h4>
                </div>
                <div className="productThree" id="product">
                <img
                    src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/48/762026/1.jpg?7716"
                    alt="" />
                    <p>Cubot Note 7, 5.5 Inches, 4G LTE...</p>
                    <h3> N 31,500</h3>
                    <h4><strike> N 41,099</strike></h4>
                </div>
                <div className="productFour" id="product">
                <img
                    src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/77/843011/1.jpg?0974"
                    alt="" />
                    <p>Men's Lace-up Canvas - Blue.</p>
                    <h3> N 4,670</h3>
                    <h4><strike> N 6,700</strike></h4>
                </div>
                <div className="productFive" id="product">
                <img
                    src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/59/397662/1.jpg?0511"
                    alt="" />
                    <p>Binatone Smoother Glidin..</p>
                    <h3> N 3,900</h3>
                    <h4><strike> N 7,000</strike></h4>
                </div>
            </div>
        </div>
    )
}

export default SalesTwo
