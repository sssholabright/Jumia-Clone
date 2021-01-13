import React from 'react';
import "./Footer.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AppleIcon from '@material-ui/icons/Apple';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
//import MailIcon from '@material-ui/icons/Mail';

function Footer() {
    return (
        <div className="footer">
            <div className="footer_top">
                <div className="footer_logo">
                    <img 
                        src="https://www.jumia.com.ng/assets_he/images/i-shop-jumia.c8de1c55.svg#logo-inv"
                        alt="" />
                </div>
                <div className="footer_newsfeed">
                    <h3>NEW TO FAKEJUMIA?</h3>
                    <p>Subscribe to our newsletter to get updates on our latest offers!</p>
                    <input type="text" name="email" placeholder='Enter E-mail Address' />
                    <button id="bit">MALE</button><button id="but">FEMALE</button>
                </div>
                <div className="footer_app">
                    <h3>DOWNLOAD JUMIA FREE FAKE APP</h3>
                    <p>Get access to exclusive offers!</p>
                    <button><AppleIcon />Download on the <p>App Store</p></button><button><PlayArrowIcon />GET IT ON <p>Google Play</p></button>
                </div>
            </div>
            <div className="footer_middle">
                <div className="middleOne" id="middle">
                    <h3>LET US HELP YOU</h3>
                    <p>Help Center</p>
                    <p>How to shop on Jumia?</p>
                    <p>Delivery options and timelines</p>
                    <p>How to return a product on Jumia?</p>
                    <p>Corporate and bulk purchases</p>
                    <p>Report a Product</p>
                </div>
                <div className="middleTwo" id="middle">
                    <h3>ABOUT JUMIA</h3>
                    <p>About us</p>
                    <p>Jumia careers</p>
                    <p>Jumia Express</p>
                    <p>Terms and Conditions</p>
                    <p>Privacy policy</p>
                    <p>Jumia Prime</p>
                    <p>Stay Safe</p>
                    <p>Black Friday</p>
                </div>
                <div className="middleThree" id="middle">
                    <h3>MAKE MONEY WITH JUMIA</h3>
                    <p>Sell on Jumia</p>
                    <p>Become a Sales Consultant</p>
                    <p>Become a Jumia Vendor Service Provider</p>
                    <p>Become a Logistics Service Partner</p>
                </div>  
                <div className="middleFour" id="middle">
                    <h3>JUMIA INTERNATIONAL</h3>
                    <p>Algeria</p>
                    <p>Egypt</p>
                    <p>Ghana</p>
                    <p>Ivory</p>
                    <p>Coast</p>
                    <p>Kenya</p>
                    <p>Morocco</p>
                    <p>Senegal</p>
                    <p>Tunisia</p>
                    <p>Uganda</p>
                    <p>South Africa</p>
                    <p>Zando</p>
                </div>
            </div>
            <div className="footer_end">
                <div className="midOne" id="middle">
                    <h3>JOIN US ON</h3>
                    <div className="icons">
                        <FacebookIcon />
                        <TwitterIcon />
                        <YouTubeIcon />
                        <ShoppingCartIcon />
                        <InstagramIcon />
                    </div>
                </div>
                <div className="midTwo" id="middle">
                    <h3>PAYMENT METHODS & DELIVERY PARTNERS</h3>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Footer
