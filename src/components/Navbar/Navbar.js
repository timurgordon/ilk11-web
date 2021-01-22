import React, { Component } from 'react';
import { NavbarItems } from './NavbarItems';
import './Navbar.css';
import logo from "./ilk11_logo.png"

class Navbar extends Component {
    state = { clicked: false } 

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <nav className="NavbarItems">
                <img className="logo" src={logo} height="80px" alt="ilk11 logo"/>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {NavbarItems.map((item, index) => {
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.url}> {item.title} </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar