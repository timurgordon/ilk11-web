import React, { Component } from 'react';
import "./Home.css";
import corner from "./corner.png"

class Home extends Component {
    render() {
        return(
            <div className="Home">
                <div className="segment">
                    <h1 className="home-heading">Takimini kur </h1>
                    <h1 className="home-heading">Takimini kur </h1>
                </div>
                <div className="segment-1">
                    <img className="corner-img" src={corner}></img>
                </div>

            </div>
            
        )
    }
}

export default Home