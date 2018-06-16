import React, { Component } from 'react';
import Footer from '../Footer/Footer';
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
        <Footer />
      </div>
    )
  }
}
