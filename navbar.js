import React, { Component } from 'react'

export default class navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md bg-primary navbar-dark">
  
  <a className="navbar-brand" href="#">Booking</a>

 
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>

  
  <div className="collapse navbar-collapse justify-content-center" id="collapsibleNavbar">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="#">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Login</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Register</a>
      </li>
    </ul>
  </div>
</nav>
            </div>
        )
    }
}
