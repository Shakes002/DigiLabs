import React, { Component } from "react";
import { FlashOn,EmojiObjects,Phonelink, } from '@material-ui/icons';

const ServiceList = [
    {
        icon: <FlashOn style={{color:"#045de9",fontSize:"60"}}/>,
        title: 'Information Technology Consultancy',
        description: 'We provide perfect solutions for your problems with the best available technologies and approaches.'
    },
    {
        icon: <EmojiObjects style={{color:"#045de9",fontSize:"60"}}/>,
        title: 'Product Design Strategy and Implementation',
        description: 'We constantly work towards idenitfying a market oppurtunity, re-defining the problems and developing a proper solution for that problem and validating the solutions with real users'
    },
    {
        icon: <Phonelink style={{color:"#045de9",fontSize:"60"}}/>,
        title: 'Web and Mobile App Development',
        description: 'Having a website and online presence strategy allows you to market your business online.An app is a way to bring your consumer closer to your products or services.'
    },
]

class ServiceOne extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="row">
                    {ServiceList.map( (val , i) => (
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                            <div className="service service__style--1">
                                <div className="icon">
                                    {//<img src={`/assets/images/icons/icon-${val.icon}.png`} alt="DigiLabs"/>
    }
                                    {val.icon}
                                </div>
                                <br />
                                <div className="content">
                                    <h4 className="title">{val.title}</h4>
                                    <p>{val.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceOne;