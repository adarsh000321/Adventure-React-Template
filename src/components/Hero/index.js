import React from "react";
import Button from "../Button";
import "./Hero.css";
import "../../App.css";

const Hero = ()=>{
    return (
        <div className = "hero-container">
            <video src="/videos/video-1.mp4" autoPlay muted loop controlsList = "nodownload" />
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className = "hero-btns">
                <Button className = "btn" buttonStyle = "btn--outline" buttonSize = "btn--large">
                    GET STARTED
                </Button>
                <Button className = "btn" buttonSize = "btn--large">
                    WATCH TRAILER <i className = "far fa-play-circle"/>
                </Button>
            </div>
        </div>
    )
}

export default Hero;