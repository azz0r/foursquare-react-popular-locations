import React, { Component } from 'react'
import Helmet from "react-helmet";

export default class PageAbout extends Component {

  displayName = "PageAbout"

  render() {
    return (
      <div className="container">
        <Helmet title="About Us" />
        About Page
      </div>
    )
  }
}
