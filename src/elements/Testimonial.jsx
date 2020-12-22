import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
class Testimonial extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="row">
                    <div className="col-lg-12">
                        <Tabs>
                            

                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>" Please make sure that you thank everyone at DiGiLABS for all of the work they have done, we are very happy with everything "</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>Shekhar Kumar </span> - Pro  Gamer</h6>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>"I cannot begin to thank Nitansh and the crew at DiGiLABS for the amazing work they did on my business site!I could have never imagined" </p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>Vishal Shukla </span> - Self Employed</h6>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p> "Websites promote you 24/7: No employee will do that." </p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>Paul Cookson </span> - Business Man</h6>
                                    </div>
                                </div>
                            </TabPanel>


                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p> "The Web as I envisaged it, we have not seen it yet. The future is still so much bigger than the past.” </p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>Tim Berners-Lee </span> - Inventor of the World Wide Web</h6>
                                    </div>
                                </div>
                            </TabPanel>



                            
                            <TabList className="testimonial-thumb-wrapper">

                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/client2.png" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/client3.jpg" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/client4.jpeg" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                                
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/client2.png" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                               
                            </TabList>
                        </Tabs>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Testimonial;