import React, { Component } from 'react'
import FourSquare from '../foursquare/foursquare'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        {this.props.children}
      </div>
    )
  }
}
