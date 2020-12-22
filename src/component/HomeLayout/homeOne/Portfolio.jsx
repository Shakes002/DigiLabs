import React, { Component } from "react";
import Slider from "react-slick";
import { portfolioSlick2 } from "../../../page-demo/script";


const PortfolioList = [
    {
        image: 'image-1',
        category: 'Web Development',
        title: 'Yadvesh Vidya Mandir'
    },
    {
        image: 'image-2',
        category: 'Web Development',
        title: 'Jagadish Prasad Memorial Primary School'
    },
    {
        image: 'image-3',
        category: 'Web Development',
        title: 'Web Design Concept & Web Analysis'
    },
    {
        image: 'image-4',
        category: 'UI/UX Strategy',
        title: 'Strategy for Enduring Customer Relationships'
    },
    {
        image: 'image-3',
        category: 'Web Development',
        title: 'Web Design Concept & Web Analysis'
    },
    {
        image: 'image-4',
        category: 'UI/UX Strategy',
        title: 'Strategy for Enduring Customer Relationships'
    },
]

class Portfolio extends Component{
    render(){
        let title = 'Our Projects',
        description = 'Client satifisication is our ultimate goal. These are some of our works that tell our success story.';
        return(
            <React.Fragment>
                <div className="portfolio-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="section-title">
                                    <h2>{title}</h2>
                                    <p>{description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-slick-activation mt--70 mt_sm--40">
                        <Slider {...portfolioSlick2}>
                            {PortfolioList.map((value , index) => (
                                <div className="portfolio" key={index}>
                                    <div className="thumbnail-inner">
                                        <div className={`thumbnail ${value.image}`}></div>
                                        <div className={`bg-blr-image ${value.image}`}></div>
                                    </div>
                                    <div className="content">
                                        <div className="inner">
                                            <p>{value.category}</p>
                                            <h4><a href="/portfolio-details">{value.title}</a></h4>
                                            <div className="portfolio-button">
                                                <a className="rn-btn" href="#">Case Study</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Portfolio;