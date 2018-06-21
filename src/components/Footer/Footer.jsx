import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
    render() {
        return (
            <div>
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
                    <div className="pointer">
                            &copy; 2018 works by Bryan                                
                            </div>
                    <div className="line-breaker"></div>
                </footer>
            </div>
        )
    }
}
