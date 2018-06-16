import React, { Component } from 'react';
import './About.css';
import Footer from '../Footer/Footer';
import Facility from '../Facility /Facility';
import AboutUs from '../About-Us/AboutUs';
import Testimonial from '../Testimonial/Testimonial';

export default class About extends Component {
    render() {
        return (
            <div>
                <div className="about-banner">
                    <h2 className="about-banner-h2">About Us</h2>
                </div>
                <AboutUs />
                <Facility />
                <Testimonial />
                <Footer />
            </div>
        )
    }
}
