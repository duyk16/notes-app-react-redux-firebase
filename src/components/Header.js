import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <header className="mb-3 mb-lg-4">
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <a className="navbar-brand" href="/">NOTES APP</a>
        </nav>
      </header>
    )
  }
}
