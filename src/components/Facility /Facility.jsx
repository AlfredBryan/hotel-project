import React, { Component } from 'react';
import './Facility.css';

export default class Facility extends Component {
    render() {
        return (
            <div>
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
            </div>
        )
    }
}
