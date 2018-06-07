import React, { Component } from 'react'

export default class Spinner extends Component {
  render() {
    return (
      <div>
        <div class="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
        </div>
      </div>
    )
  }
}
