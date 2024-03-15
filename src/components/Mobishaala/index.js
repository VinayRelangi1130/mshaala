import { Component } from "react";
import React from 'react';
import YouTubeVideo from "../Video";
import Icon from "../../images/download.jpeg"


import "./index.css"

class Mobishaala extends Component {
    render() {
        return (
            <div className="container">

                <div className="container-1">
                    <div className="container1-details">
                        <h1 className="main-heading">Mobishaala</h1>
                        <h2 className="heading1">Create your <span className="color-change">Digital ClassRoom</span> in 5 mins for <span className="color-change">FREE</span> & connect to 1+ Million Students.</h2>
                        <div className="points">
                            <li>No Technical Knowledge Required</li>
                            <li>Quickly setup live class, tests, notes, ebooks and more</li>
                            <li>Reach out to million of students anywhere, anytime</li>
                        </div>

                        <div className="y-video"><YouTubeVideo /></div>
                        <div className="container-2">
                            <button className="buy-button">Buy</button>
                            <p className="para">Institute/Teacher</p>
                            <button className="get-started-button">Get Started</button>
                            <p className="para">Student</p>
                            <button className="download-button">Download App</button>
                            <div className="whatsapp-btn">
                            <img src={Icon} alt="whatsapp" className="whatsapp" />
                                <button className="w-btn">Talk to Us</button>
                            </div>
                        </div>
                    </div>
                    <div className="last-container">
                    <div className="container-3">
                        <h1 className="heading2">Mobishaala</h1>
                        <div className="container-4">
                            <p className="paragraph">Vision</p>
                            <p className="paragraph2">Empower Institutions & Teachers with state of the art digital classroom Technology.</p>
                        </div>
                        <div>
                            <p className="paragraph">Address</p>
                            <p className="paragraph2"> <span className="color-change2">Registered Office</span> : 8O4, 5th Floor, 9th Main, 4th Block, Koramangala, Banglore, Karnataka 560034</p>
                            <p className="paragraph2"><span className="color-change2">Corparate Office </span> : 293, Western Marg, near Saket, Saidulajab, Saket, New Delhi, 110300</p>
                        </div>
                        <div>
                            <p className="paragraph">Quick Links</p>
                            <p className="paragraph2">Blog</p>
                            <p className="paragraph2">Anroid App</p>
                            <p className="paragraph2">IOS App</p>
                        </div>
                    </div>
                    <div className="container-5">
                        <YouTubeVideo />
                        <button className="buy-btn">Buy</button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Mobishaala

