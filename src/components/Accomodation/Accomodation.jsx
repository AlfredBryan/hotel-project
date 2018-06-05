import React, { Component } from 'react'
import './Accomodation.css';

export default class Accomodation extends Component {
  render() {
    return (
      <div>
        <div className="about-banner">
          <h2 className="about-banner-h2">Accomodation</h2>
        </div>
        <div className="header">
          <h2 className="room-title">Special Accomodation</h2>
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
        <div className="accomodation-booking-area">
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
        <div className="header">
          <h2 className="room-title">Normal Accomodation</h2>
          <p className="room-titlep">We all live in an age that belongs to the young at heart. Life that is becoming extremely fast,</p>
        </div>
        <div className="normal-rooms">
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
                            <br/>
                           between high OEM price and
                           <br/>
                           mediocre print and graphic output,</p>
                           <form>
                               <input type="text" placeholder="     Email Address" className="footer-input"/>
                               <button className="sub-btn">
                               </button>
                           </form>
                        </div>
                        <div className="footer-sec4">
                        <h6 className="footer-sec4-h6">Instafeed</h6>
                        <div>
                            <ul className="footer-image">
                                <li> <img src={require('./image/Image-01.jpg')} alt="footer-pic"/> </li>
                                <li> <img src={require('./image/Image-02.jpg')} alt="footer-pic"/></li>
                                <li> <img src={require('./image/Image-03.jpg')} alt="footer-pic"/></li>
                                <li> <img src={require('./image/Image-04.jpg')} alt="footer-pic"/></li>
                            </ul>
                        </div>
                        <div>
                        <ul className="footer-image">
                                <li> <img src={require('./image/Image-05.jpg')} alt="footer-pic"/></li>
                                <li> <img src={require('./image/Image-06.jpg')} alt="footer-pic"/></li>
                                <li> <img src={require('./image/Image-07.jpg')} alt="footer-pic"/></li>
                                <li> <img src={require('./image/Image-08.jpg')} alt="footer-pic"/></li>
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
