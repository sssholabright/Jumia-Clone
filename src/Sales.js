import React from 'react';
import './Sales.css';
import NavigateNextOutlinedIcon from '@material-ui/icons/NavigateNextOutlined';

function Sales() {
    return (
        <div className="salesTwo">
            <div className="sales_top1">
                <p id="p1"><strong>Back to Work Fashion </strong> | Up to 60% Off</p>
                <p id="p2">SEE ALL <NavigateNextOutlinedIcon /></p>
            </div>
            <div className="sales_product">
                <div className="productOne" id="product">
                <img
                    src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/43/482144/1.jpg?8251"
                    alt="" />
                    <p>Mens Slip On Formal Shoes Fas...</p>
                    <h3> N 4,890</h3>
                    <h4><strike> N 10,100</strike></h4>
                </div>
                <div className="productTwo" id="product">
                <img
                    src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/08/408736/1.jpg?7641"
                    alt="" />
                    <p>Feng Shui Black Obsidian Wealt..</p>
                    <h3> N 1,807</h3>
                    <h4><strike> N 6,000</strike></h4>
                </div>
                <div className="productThree" id="product">
                <img
                    src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/63/228665/1.jpg?0546"
                    alt="" />
                    <p>Oil Perfume 3ml X 12 Bottles</p>
                    <h3> N 3,000</h3>
                    <h4><strike> </strike></h4>
                </div>
                <div className="productFour" id="product">
                <img
                    src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/06/334324/1.jpg?2229"
                    alt="" />
                    <p>Quality Office Men's White Shir...</p>
                    <h3> N 2,999</h3>
                    <h4><strike> N 5,000</strike></h4>
                </div>
                <div className="productFive" id="product">
                <img
                    src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/64/469736/1.jpg?7458"
                    alt="" />
                    <p>ScentsHub Designer Oil P...</p>
                    <h3> N 2,769</h3>
                    <h4><strike> </strike></h4>
                </div>
            </div>
        </div>
    )
}

export default Sales;
