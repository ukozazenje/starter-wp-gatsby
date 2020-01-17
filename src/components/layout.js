import React, {Component} from 'react'

class Layout extends Component {
  render() {
    return (
      <>
        <header />
        {this.props.children}
        <footer />
      </>
    )
  }
}

export default Layout
