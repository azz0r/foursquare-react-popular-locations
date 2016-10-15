import React, { Component } from 'react'
import Head from '../head/head'

export default class Application extends Component {
  render() {
    return (
      <div className="container">
        <Head />
        {this.props.children}
      </div>
    )
  }
}
