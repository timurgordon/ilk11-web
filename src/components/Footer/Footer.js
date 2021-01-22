import React, { Component } from 'react';
import "./Footer.css";

class Footer extends Component {
    render() {
        return(
            <footer id="footer">
                <ul className="footer-menu">
                    <li> <a class="footer-links" href="ilk11.futbol"> Kosullar </a></li>
                    <li> <a class="footer-links" href="ilk11.futbol"> Gizlilik </a></li>
                    <li> <a class="footer-links" href="ilk11.futbol"> Bize Ulasin </a></li>
                </ul>
                <p className="footer-info"> 2021 ilk11.futbol </p>
                <ul className="footer-social">
                    <li> <a class="footer-links" rel="noopener noreferrer" target="_blank" href="https://instagram.com"> <i className="fab fa-instagram fa-2x"></i></a></li>
                    <li> <a class="footer-links" rel="noopener noreferrer" target="_blank" href="https://instagram.com"> <i className="fab fa-twitter fa-2x"></i></a></li>
                    <li> <a class="footer-links" rel="noopener noreferrer" target="_blank" href="https://instagram.com"> <i className="fab fa-app-store fa-2x"></i></a></li>
                </ul>
            </footer>
        )
    }
}

export default Footer