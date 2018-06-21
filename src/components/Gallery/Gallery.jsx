import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SelectField, MenuItem, TextField, } from 'material-ui';
import Footer from '../Footer/Footer';
import ImageResults from '../ImageResults/ImageResults';
import { getImagesRequest } from '../../store/actions';
import './Gallery.css';


class Gallery extends Component {
  state = {
    searchText: '',
    amount: '',
  }
  handleTextChange = (e) => {
    this.props.getImages(e.target.value);
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmitResult = (event) => {
    event.preventDefault()
    const { searchText, amount } = this.state;
    if (searchText && amount) {
      this.props.getImages(searchText, amount)
    }
  }

  onAmountChange = (e, index, value) => this.setState({ amount: value })

  render() {
    const { searchText, amount } = this.state;
    const { images } = this.props;

    return (
      <div>
        <div className="about-banner">
          <h2 className="about-banner-h2">Gallery</h2>
        </div>
        <form onSubmit={this.handleSubmitResult}>
          <div className="search-field">
            <TextField
              name="searchText"
              value={searchText}
              onChange={this.handleChange}
              floatingLabelText="Search For Images"
              className="field-text"
            />
            <br />
            <SelectField
              name="amount"
              value={amount}
              onChange={this.onAmountChange}
              floatingLabelText="Amount"
              className="field-text"
            >
              <MenuItem value={5} primaryText="5" />
              <MenuItem value={10} primaryText="10" />
              <MenuItem value={15} primaryText="15" />
              <MenuItem value={30} primaryText="30" />
              <MenuItem value={50} primaryText="50" />
            </SelectField>
          </div>
          <button type="submit" className="btn">Get images</button>
        </form>
        <br />
        {!images.fetching && images.images ? (<ImageResults images={images.images.hits} />) : null}
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
    getImages: (searchText, amount) => dispatch(getImagesRequest(searchText, amount)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);