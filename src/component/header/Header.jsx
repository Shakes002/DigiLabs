import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { FiX , FiMenu } from "react-icons/fi";


class Header extends Component{
    constructor(props) {
        super(props);
        this.menuTrigger = this.menuTrigger.bind(this);
        this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
       //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
        window.addEventListener('load', function() {
            console.log('All assets are loaded')
        })
    }

    menuTrigger() {
        document.querySelector('.header-wrapper').classList.toggle('menu-open')
    }

    CLoseMenuTrigger() {
        document.querySelector('.header-wrapper').classList.remove('menu-open');
    }


    render(){
        var elements = document.querySelectorAll('.has-droupdown > a');
        for(var i in elements) {
            if(elements.hasOwnProperty(i)) {
                elements[i].onclick = function() {
                    this.parentElement.querySelector('.submenu').classList.toggle("active");
                    this.classList.toggle("open");
                }
            }
        }
        const { logo, color='default-color' } = this.props;
        let logoUrl;
        if(logo === 'light'){
            logoUrl = <img src="assets/images/logo/DREAM_TO_DIGITAL-removebg-preview.png" height={60} alt="DigiLabs Pvt Ltd" />;
        }else if(logo === 'dark'){
            logoUrl = <img src="assets/images/logo/DREAM_TO_DIGITAL-removebg-preview.png" height={60} alt="DigiLabs Pvt Ltd" />;
        }else if(logo === 'symbol-dark'){
            logoUrl = <img src="assets/images/logo/DREAM_TO_DIGITAL-removebg-preview.png" height={60} alt="DigiLabs Pvt Ltd" />;
        }else if(logo === 'symbol-light'){
            logoUrl = <img src="assets/images/logo/DREAM_TO_DIGITAL-removebg-preview.png" height={60} alt="DigiLabs Pvt Ltd" />;
        }else{
            logoUrl = <img src="assets/images/logo/DREAM_TO_DIGITAL-removebg-preview.png" height={60} alt="DigiLabs Pvt Ltd" />;
        }
        
        return(
            <header className={`header-area formobile-menu header--transparent ${color}`}>
                <div className="header-wrapper" id="header-wrapper">
                    <div className="header-left">
                        <div className="logo">
                            <a href="/">
                                {logoUrl}
                            </a>
                        </div>
                    </div>
                    <div className="header-right">
                        <nav className="mainmenunav d-lg-block">
                            <ul className="mainmenu">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/digiService" >Service</Link> </li>
                                <li><Link to="/digiAbout" >About</Link></li>
                            </ul>
                        </nav>
                        <div className="header-btn"> 
                            <a className="rn-btn" href="/digiContact">
                                <span>Contact Us</span>
                            </a>
                        </div>
                        {/* Start Humberger Menu  */}
                        <div className="humberger-menu d-block d-lg-none pl--20">
                            <span onClick={this.menuTrigger} className="menutrigger text-white"><FiMenu /></span>
                        </div>
                        {/* End Humberger Menu  */}
                        <div className="close-menu d-block d-lg-none">
                            <span onClick={this.CLoseMenuTrigger} className="closeTrigger"><FiX /></span>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
export default Header;