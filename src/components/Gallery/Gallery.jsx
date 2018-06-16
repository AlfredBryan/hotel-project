import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SelectField, MenuItem, TextField } from 'material-ui';
import Footer from '../Footer/Footer';

import ImageResults from '../ImageResults/ImageResults';
import { getImagesRequest } from '../../store/actions';
import './Gallery.css';



class Gallery extends Component {
  handleTextChange(event) {
    this.props.getImages(event.target.value);
  }


  onAmountChange = (value) => this.setState({ amount: value })

  render() {
    return (
      <div>
        <div className="about-banner">
          <h2 className="about-banner-h2">Gallery</h2>
        </div>
        <div className="search-field">
          <TextField
            name="searchText"
            value={this.props.searchText}
            floatingLabelText="Search For Images"
            onChange={this.props.getImages}
            className="field-text"
          />
          <br />
          <SelectField
            name="amount"
            floatingLabelText="Amount"
            value={this.props.amount}
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
        {this.props.images.length > 0 ? (<ImageResults images={this.props.images} />) : null}
        <br />
        <Footer />
      </div>
    )

  }
};

function mapStateToProps(state) {
  return {
    images: state.images
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getImages: searchText => dispatch(getImagesRequest(searchText)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);