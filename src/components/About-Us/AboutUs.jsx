import React, { Component } from 'react';
import './AboutUs.css';

export default class AboutUs extends Component {
  render() {
    return (
      <div>
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
      </div>
    )
  }
}
