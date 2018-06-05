import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import './About.css';

export default class About extends Component {
    render() {
        return (
            <div>
                <div className="about-banner">
                    <h2 className="about-banner-h2">About Us</h2>
                </div>
                <div className="about-head">
                    <div className="about-head1">
                        <h2 className="about-head-h2">About Us
                <br />
                            Our History
                <br />
                            Mission & Vision </h2>
                        <p className="about-head-p">inappropriate behavior is often laughed off as “boys will be boys,”
                <br />
                            women face higher conduct standards especially in the workplace.
                 <br />
                            That’s why it’s crucial that, as women, our behavior on the job is beyond
                 <br />
                            reproach. inappropriate behavior is often laughed.</p>
                        <a href="/" className="btn-about">Request Custom Price</a>
                    </div>
                    <div className="about-head2">
                        <img src={require('./image/about_bg.jpg')} alt="about" />
                    </div>
                </div>
                <div className="facilities">
                    <div className="header2">
                        <h2 className="fac-title">Royal Facilities</h2>
                        <p className="fac-titlep">Who are in extremely love with eco friendly system.</p>
                    </div>
                    <div className="hotel-fac">
                        <div className="fac1">
                            <h4 className="fac-h4">Restaurant</h4>
                            <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                        </div>
                        <div className="fac2">
                            <h4 className="fac-h4">Sports CLub</h4>
                            <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                        </div>
                        <div className="fac3">
                            <h4 className="fac-h4">Swimming Pool</h4>
                            <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                        </div>
                    </div>
                    <div className="hotel-fac-2">
                        <div className="facc1">
                            <h4 className="fac-h4">Rent a Car</h4>
                            <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                        </div>
                        <div className="facc2">
                            <h4 className="fac-h4">Gymnesium</h4>
                            <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                        </div>
                        <div className="facc3">
                            <h4 className="fac-h4">Bar</h4>
                            <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                        </div>
                    </div>
                </div>
                <div className="testimonial-area">
                    <div className="area-header">
                        <h2 className="area-header-h2">Testimonial from our Clients</h2>
                        <p>The French Revolution constituted for the conscience of the dominant aristocratic class a fall from</p>
                    </div>
                    <Carousel>
                        <Carousel.Item>
                            <div className="card">
                                <div className="card1">
                                    <div className="card-container">
                                        <img src={require('./image/testtimonial-1.jpg')} width="80px" height="80px" alt="card" />
                                        <div className="card-media">
                                            <p>As conscious traveling Paupers we must always be
                           <br />
                                                concerned about our dear Mother Earth. If you think
                            <br />
                                                about it, you travel across her face, and She is the </p>
                                            <h4 className="card-h4">Fanny Spencer</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="card2">
                                    <div className="card-container">
                                        <img src={require('./image/testtimonial-1.jpg')} width="80px" height="80px" alt="card" />
                                        <div className="card-media">
                                            <p>As conscious traveling Paupers we must always be
                           <br />
                                                concerned about our dear Mother Earth. If you think
                            <br />
                                                about it, you travel across her face, and She is the </p>
                                            <h4 className="card-h4">Fanny Spencer</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="card">
                                <div className="card1">
                                    <div className="card-container">
                                        <img src={require('./image/testtimonial-1.jpg')} width="80px" height="80px" alt="card" />
                                        <div className="card-media">
                                            <p>As conscious traveling Paupers we must always be
                           <br />
                                                concerned about our dear Mother Earth. If you think
                            <br />
                                                about it, you travel across her face, and She is the </p>
                                            <h4 className="card-h4">Fanny Spencer</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="card2">
                                    <div className="card-container">
                                        <img src={require('./image/testtimonial-1.jpg')} width="80px" height="80px" alt="card" />
                                        <div className="card-media">
                                            <p>As conscious traveling Paupers we must always be
                           <br />
                                                concerned about our dear Mother Earth. If you think
                            <br />
                                                about it, you travel across her face, and She is the </p>
                                            <h4 className="card-h4">Fanny Spencer</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>;
                </div>
                <footer className="home-footer">
                    <div className="footer-main">
                        <div className="footer-sec1">
                            <h6 className="footer-h6">About Agency</h6>
                            <p>The world has become so fast paced
                             <br />
                                that people don’t want to stand by
                            <br />
                                reading a page of information, they
                            <br />
                                would much rather look at a
                            <br />
                                presentation and understand the
                            <br />
                                message. It has come to a point</p>
                        </div>
                        <div className="footer-sec2">
                            <h6 className="footer-h6">Navigation Links</h6>
                            <div className="sec2-flex">
                                <div className="sec2-flex1">
                                    <ul>
                                        <li>
                                            <a href="/">Home</a>
                                        </li>
                                        <li>
                                            <a href="/">Feature</a>
                                        </li>
                                        <li>
                                            <a href="/">Service</a>
                                        </li>
                                        <li>
                                            <a href="/">Portfolio</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="sec2-flex2">
                                    <ul>
                                        <li>
                                            <a href="/">Team</a>
                                        </li>
                                        <li>
                                            <a href="/">Pricing</a>
                                        </li>
                                        <li>
                                            <a href="/">Blog</a>
                                        </li>
                                        <li>
                                            <a href="/">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="footer-sec3">
                            <h6 className="footer-h6">Newsletter</h6>
                            <p>For business professionals caught
                            <br />
                                between high OEM price and
                           <br />
                                mediocre print and graphic output,</p>
                            <form>
                                <input type="text" placeholder="     Email Address" className="footer-input" />
                                <button className="sub-btn">
                                </button>
                            </form>
                        </div>
                        <div className="footer-sec4">
                            <h6 className="footer-sec4-h6">Instafeed</h6>
                            <div>
                                <ul className="footer-image">
                                    <li> <img src={require('./image/Image-01.jpg')} alt="footer-pic" /> </li>
                                    <li> <img src={require('./image/Image-02.jpg')} alt="footer-pic" /></li>
                                    <li> <img src={require('./image/Image-03.jpg')} alt="footer-pic" /></li>
                                    <li> <img src={require('./image/Image-04.jpg')} alt="footer-pic" /></li>
                                </ul>
                            </div>
                            <div>
                                <ul className="footer-image">
                                    <li> <img src={require('./image/Image-05.jpg')} alt="footer-pic" /></li>
                                    <li> <img src={require('./image/Image-06.jpg')} alt="footer-pic" /></li>
                                    <li> <img src={require('./image/Image-07.jpg')} alt="footer-pic" /></li>
                                    <li> <img src={require('./image/Image-08.jpg')} alt="footer-pic" /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="line-breaker"></div>
                </footer>
            </div>
        )
    }
}
