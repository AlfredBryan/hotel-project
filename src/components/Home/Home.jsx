import React, { Component } from 'react';
import './Home.css';
import Footer from '../Footer/Footer';
import Facility from '../Facility /Facility';
import AboutUs from '../About-Us/AboutUs';
import Testimonial from '../Testimonial/Testimonial';

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="Hbanner" >
                    <h6 className="banner-contenth6">AWAY FROM MONOTONOUS LIFE</h6>
                    <h2 className="banner-contenth2">Relax Your Mind</h2>
                    <p className="banner-contentp">
                        If you are looking at blank cassettes on the web, you may be very confused at the
                  <br />
                        difference in price. You may see some for as low as $.17 each.
                  </p>
                    <button className="banner-btn">GET STARTED</button>

                    <div className="booking-area">
                        <div className="title">
                            <h2>
                                BOOK
                             <br />
                                YOUR ROOM
                         </h2>
                        </div>
                        <div className="form1">
                            <input type="date" name="arrival" className="no1" placeholder="    Arrival Date">
                            </input>
                            <input type="text" name="departure" className="no2" placeholder="    Departure Date">
                            </input>
                        </div>
                        <div className="form2">
                            <input type="text" name="adult" className="no3" placeholder="    Adult">
                            </input>
                            <input type="text" name="child" className="no4" placeholder="    Child">
                            </input>
                        </div>
                        <div className="form3">
                            <input type="text" name="child" className="no5" placeholder="    Child">
                            </input>
                            <button className="no6">BOOK</button>
                        </div>

                    </div>
                </div>

                <div className="header">
                    <h2 className="room-title">Hotel Accomodation</h2>
                    <p className="room-titlep">We all live in an age that belongs to the young at heart. Life that is becoming extremely fast,</p>
                </div>
                <div className="rooms">
                    <div className="room1">
                        <div className="room-image">
                            <img src={require('./image/room1.jpg')} alt="room" />
                            <a href="/" className="room-btn">Book Now</a>
                        </div>
                    </div>
                    <div className="room2">
                        <div className="room-image2">
                            <img src={require('./image/room2.jpg')} alt="room" />
                            <a href="/" className="room-btn">Book Now</a>
                        </div>
                    </div>
                    <div className="room3">
                        <div className="room-image3">
                            <img src={require('./image/room3.jpg')} alt="room" />
                            <a href="/" className="room-btn">Book Now</a>
                        </div>
                    </div>
                    <div className="room4">
                        <div className="room-image4">
                            <img src={require('./image/room4.jpg')} alt="room" />
                            <a href="/" className="room-btn">Book Now</a>
                        </div>
                    </div>
                </div>
                <Facility />
                <AboutUs />
                <Testimonial />
                <div className="post-blog">
                    <div className="post-head">
                        <h2 className="post-head-h2">
                            latest posts from blog
                </h2>
                        <p>The French Revolution constituted for the conscience of the dominant aristocratic class a fall from</p>
                    </div>
                    <div className="blog-post">
                        <div className="blog1">
                            <div className="blog-image1">
                                <img src={require('./image/blog-1.jpg')} alt="blog" />
                            </div>
                            <div className="blog-section">
                                <div className="blog-btn">
                                    <a href="/" className="blog-btn-1">Travel </a>
                                    <a href="/" className="blog-btn-2">Life Style </a>
                                </div>
                                <a href="/" className="blog-a">
                                    <h4 className="blog-h4">Low Cost Advertising</h4>
                                </a>
                                <p>Acres of Diamonds… you’ve read the famous story,
                                <br />
                                    or at least had it related to you. A farmer.</p>
                                <h6 className="blog-h6">31st May,2018</h6>
                            </div>
                        </div>
                        <div className="blog2">
                            <div className="blog-image2">
                                <img src={require('./image/blog-2.jpg')} alt="blog" />
                            </div>
                            <div className="blog-section">
                                <div className="blog-btn">
                                    <a href="/" className="blog-btn-1">Travel </a>
                                    <a href="/" className="blog-btn-2">Life Style </a>
                                </div>
                                <a href="/" className="blog-a">
                                    <h4 className="blog-h4">Creative Outdoor Ads</h4>
                                </a>
                                <p>Self-doubt and fear interfere with our ability to
                                    <br />
                                    achieve or set goals. Self-doubt and fear are</p>
                                <h6 className="blog-h6">31st May,2018</h6>
                            </div>

                        </div>
                        <div className="blog3">
                            <div className="blog-image3">
                                <img src={require('./image/blog-3.jpg')} alt="blog" />
                            </div>
                            <div className="blog-section">
                                <div className="blog-btn">
                                    <a href="/" className="blog-btn-1">Travel </a>
                                    <a href="/" className="blog-btn-2">Life Style </a>
                                </div>
                                <a href="/" className="blog-a">
                                    <h4 className="blog-h4">It S Classified How To Utilize Free</h4>
                                </a>
                                <p>Why do you want to motivate yourself? Actually, just
                                    <br />
                                    answering that question fully can</p>
                                <h6 className="blog-h6">31st May,2018</h6>
                            </div>

                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
