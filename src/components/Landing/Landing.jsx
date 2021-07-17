import React from "react";
import "./Landing.css";
import keyboard from "./../../assets/keyboard.png"
import Typewriter from "typewriter-effect";

const Landing = () => {
    return (
        <div className="landing-container">
            <div data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-offset="300" className="landing-left">
                <h1 className="landing-header" >Can you type...</h1>
                <div className="typewriter-container">
                    <Typewriter
                        options={{
                            strings: ['Fast?', 'Accurate?', 'Quick?'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
            </div>
            <div className="landing-right">
                <img data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-offset="500" className="landing-image" src={keyboard} alt="keyboard" />
            </div>
        </div>
    )
}

export default Landing
