import React, { Component } from "react"
import { Link } from "gatsby"

class Layout extends Component {
  render() {
    return (
      <>
        <header></header>
          {this.props.children}
        <footer></footer>
      </>
    )
  }
}

export default Layout
