import React, { Component } from "react";
import TabOne from "./TabOne";

class About extends Component{  
    render(){
        let title = 'About Us',
        description = 'Digilabs is a experienced firm in developing user centric applications and solutions that assist business for the swift business process. Digilabs has huge experience in giving businesses a digital identity and digitalizing a company. We assist you in every step of your business process.Our Client\'s Success is our Success. ';
        return(
            <React.Fragment> 
               <div className="about-wrapper">
                        <div className="container">
                            <div className="row row--35">
                                <div className="col-lg-5">
                                    <div className="thumbnail">
                                        <img className="w-100" src="/assets/images/about/selected_about.jpg" alt="About Images"/>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <h2 className="title">{title}</h2>
                                            <p className="description">{description}</p>
                                        </div>
                                        <div className="row mt--30">    
                                            <TabOne tabStyle="tab-style--1" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </React.Fragment>
        )
    }
}
export default About;