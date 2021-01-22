import React, { Component } from 'react';
import "./Home.css";
import corner from "./corner.png"

class Home extends Component {
    render() {
        return(
            <div className="Home">
                <div className="segment">
                    <div>
                        <h1 className="home-heading">ilk11.futbol</h1>
                        <p className="home-body"> Site yapım aşamasında. </p>
                    </div>
                </div>
                <div className="segment-1">
                    <img className="corner-img" src={corner}></img>
                </div>

            </div>
            
        )
    }
}

export default Home