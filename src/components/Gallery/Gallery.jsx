import React, { Component } from 'react';
import ImageResults from '../ImageResults/ImageResults';
import { SelectField, MenuItem, TextField } from 'material-ui';
import { onTextChange } from '../../store/actions/index';
import './Gallery.css';
import { connect } from 'react-redux';  


class Gallery extends Component {
  handleTextChange() {
    this.props.onTextChange();
  }
 

  onAmountChange = ( value ) => this.setState({ amount: value })

  render() {
    console.log(this.state.images)
    return (
      <div>
        <div className="about-banner">
          <h2 className="about-banner-h2">Gallery</h2>
        </div>
        <div className="search-field">
        <TextField
          name="searchText"
          value={this.state.searchText}
          floatingLabelText="Search For Images"
          onChange={this.onTextChange}
          className="field-text"
        />
        <br />
        <SelectField 
         name="amount"
         floatingLabelText="Amount"
         value={this.state.amount}
         onChange={this.onAmountChange}
         className="field-text"
        >
        <MenuItem value={5} primaryText="5" />
        <MenuItem value={10} primaryText="10" />
        <MenuItem value={15} primaryText="15" />
        <MenuItem value={30} primaryText="30" />
        <MenuItem value={50} primaryText="50" />
        </SelectField>
        </div>
        <br />
        {this.state.images.length > 0 ? (<ImageResults images={this.props.images} />) : null}
        <br />

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
};

function mapStateToProps(state) {  
  return {
    images: state.images
  };
}


export default connect(mapStateToProps, { onTextChange })(Gallery);