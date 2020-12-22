import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import { FiCast, FiGlobe ,FiAward,FiClock,FiActivity,FiCodepen, FiMail, FiLayers , FiUsers , FiMonitor ,FiChevronUp, FiCode } from "react-icons/fi";
import {GiClick } from 'react-icons/gi';
import {MdNotificationsActive,} from 'react-icons/md';
import ScrollToTop from 'react-scroll-up';
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";


const digitalMarketingList = [
    {
        icon: <FiGlobe />,
        title: 'Search Engine Optimization',
        description: 'Search engines are responsible for up to 90% of all online purchases. This is why you need to put your website in front of people searching for a site similar to yours.'
    },
    {
        icon: <FiUsers />,
        title: 'Social Media Marketing',
        description: 'Most brands today need someone full time to manage all their social media channels and public relations online. '
    },
    {
        icon: <FiMail />,
        title: 'Email Marketing',
        description: 'Email marketing still plays a significant role in the digital marketing space.'
    },
    {
        icon: <FiLayers />,
        title: 'Strategy',
        description: 'Ensure that your products covers every customer looking for your product, when it comes to creating a 360-degree digital marketing strategy.'
    },
    {
        icon: <FiCast />,
        title: 'Mobile Marketing',
        description: 'With the rise of mobile purchases and the fact that more than 60% of the South African market possess a smartphone are only two of the hundreds of reasons why mobile marketing is something that cannot be left out of a digital marketing'
    },
    {
        icon: <GiClick />,
        title: 'PPC (Pay Per Click Advertising)',
        description: 'A huge part of digital marketing is buying media online in the form of search engine and social media ads. This is also known as Pay Per Click Advertising. It’s a great way to get your website known when you first start out.'
    },
];

const fullCycleProductDevelopment = [
    {
        icon: <FiGlobe />,
        title: 'Product Discovery and Innovation',
        description: 'In this context, solutions aren’t product solutions, but rather internal programs and processes that effect change within the organization. Our Team works on challenges like improving employee engagement, encouraging knowledge sharing between teams, making meetings more effective, and so on.'
    },
    {
        icon: <FiUsers />,
        title: 'User Experience Research & Design',
        description: 'UX (user experience) research is the systematic study of target users and their requirements, to add realistic contexts and insights to design processes. UX researchers adopt various methods to uncover problems and design opportunities. Doing so, they reveal valuable information which can be fed into the design process.'
    },
    {
        icon: <FiMail />,
        title: 'Customer FeedBack and Analaytics',
        description: 'There are many reasons an organization seeks out customer feedback. A support team will want to know if their service experience was helpful. A product team might need help prioritizing what to build next.'
    },
];

const mobileAppDevelopment = [
    {
        icon: <FiLayers />,
        title: 'Simplicity',
        description: 'Of course, simplicity is the key to good performing applications. UI/UX design (User Interface/ User Experience) is a crucial factor that should be implemented in every application to draw the attention of audiences',

    },
    {
        icon: <FiActivity />,
        title: 'Best performance',
        description: 'The best performance is decided by the loading speed of the applications. Also, security plays a major role here. Most of the mobile apps are secured and have better user performance.'
    },
    {
        icon: <FiCodepen />,
        title: 'Customisation',
        description: 'When comes to organise the applications, the users may have the choice to design their UI according to their wishes. The mobile app is having more customisation features like a web app. '
    },


    {
        icon: <MdNotificationsActive />,
        title: 'Notifications',
        description: 'Another main feature of mobile app development is, it is having Pop up notifications. Any new messages from the app or regarding the app will appear in front and the user can easily remember the new features or messages. ',

    },
    {
        icon: <FiClock />,
        title: 'Real-time uses',
        description: 'A mobile app is popular because it is useful for real-time activities. Games, Chat applications makes the audience more engaging with it. To get a data intensive application, it should be fun, engaging at the same time, it should be useful because users are giving their valuable time to access your apps.'
    },
    {
        icon: <FiAward />,
        title: 'Branding',
        description: 'A mobile app is a wide platform for marketing your business easily. Most of the apps are generating ads which result in branding for a particular business.  If promoting your business is the only goal to develop mobile apps, then it had a door opened for you.'
    },
]


const WebDevelopment = [
    {
        icon: <FiCast />,
        title: 'Quality Web Content',
        description: 'People desire information everyday, and want if delivered in a fast and reliable fashion.'
    },
    {
        icon: <FiLayers />,
        title: 'Simple and Professional Web Design',
        description: ' The websites best at effectively converting site visitors into buying customers,we maintain an attractive layout, and keep it clean and simple'
    },
    {
        icon: <FiUsers />,
        title: 'Webpage Speed',
        description: 'People inherently lose patience quickly, and that holds true when visiting a website. '
    },
    {
        icon: <FiMonitor />,
        title: 'Search Engine Optimisation',
        description: ' A well-designed website generally will receive many visitors, and one method to attract visitors is search engine optimisation'
    },
    {
        icon: <FiCast />,
        title: 'Website Development',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    {
        icon: <FiMonitor />,
        title: 'Web Compatibility',
        description: 'The variety of browser and platforms which one can now be view web design can present a challenge to developers, but talented ones are accustomed to handling such factors'
    },
]
class Service extends Component{
    render(){
        return(
            <React.Fragment>
                <PageHelmet pageTitle='Service' />
                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                {/* Start Breadcrump Area */}
                <Breadcrumb title={'Service'}   />
                {/* End Breadcrump Area */}

                {/* Start Service Area */}
                <div className="service-area ptb--120 bg_color--5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb--30">
                                    <h2>Digital Marketing</h2>
                                    <p>There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row service-one-wrapper">
                            {digitalMarketingList.map( (val , i) => (
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                                    <a>
                                        <div className="service service__style--2">
                                            <div className="icon">
                                                {val.icon}
                                            </div>
                                            <div className="content">
                                                <h3 className="title">{val.title}</h3>
                                                <p>{val.description}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* End Service Area */}

                {/* Start Service Area */}
                <div className="service-area ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb--30">
                                    <h2>Full Cycle Product Development</h2>
                                    <p> We partner with companies at any stage to discover new product opportunities, design elegant solutions,  <br /> develop iterative prototypes, and gather and analyze customer feedback to ensure you build products people will love.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row service-one-wrapper">
                            {fullCycleProductDevelopment.map( (val , i) => (
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                                    <a className="text-center">
                                        <div className="service service__style--2">
                                            <div className="icon">
                                                {val.icon}
                                            </div>
                                            <div className="content">
                                                <h3 className="title">{val.title}</h3>
                                                <p>{val.description}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* End Service Area */}

                {/* Start Service Area */}
                <div className="service-area creative-service-wrapper pt--90 pb--120 bg_color--5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb--30">
                                    <h2>Mobile App Development</h2>
                                    <p>An App is a way to bring your customer closer to your products and services</p>
                                </div>
                            </div>
                        </div>
                        <div className="row creative-service">
                            {mobileAppDevelopment.map( (val , i) => (
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                                    <a href="/service-details">
                                        <div className="service service__style--2">
                                            <div className="icon">
                                                {val.icon}
                                            </div>
                                            <div className="content">
                                                <h3 className="title">{val.title}</h3>
                                                <p>{val.description}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* End Service Area */}

                {/* Start Service Area */}
                <div className="service-area creative-service-wrapper pt--90 pb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb--30">
                                    <h2>Web Development</h2>
                                    <p>There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row creative-service">
                            {WebDevelopment.map( (val , i) => (
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                                    <a className="text-center" href="/service-details">
                                        <div className="service service__style--2">
                                            <div className="icon">
                                                {val.icon}
                                            </div>
                                            <div className="content">
                                                <h3 className="title">{val.title}</h3>
                                                <p>{val.description}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* End Service Area */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                
                <Footer />


            </React.Fragment>
        )
    }
}
export default Service;