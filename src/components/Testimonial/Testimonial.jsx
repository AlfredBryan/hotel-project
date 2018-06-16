import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import './Testimonial.css';

export default class Testimonial extends Component {
    render() {
        return (
            <div>
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
            </div>
        )
    }
}
