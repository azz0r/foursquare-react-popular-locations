import React, { Component } from 'react'
import './stylesheets/loading'

export default class Head extends Component {

  displayName = "Loading"

  render() {
    return (
      <div className="load-3 text-center">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
      </div>
    )
  }
}
