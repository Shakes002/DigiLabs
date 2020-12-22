import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>{this.props.pageTitle} || DigiLabs </title>
                    <meta name="description" content="Digialbs a company that is dedicated towards achieving 100% digitalization of its clients" />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
