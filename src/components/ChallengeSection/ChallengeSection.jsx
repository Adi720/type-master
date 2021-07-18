import React from "react";
import TestContainer from "../TestContainer/TestContainer";
import "./ChallengeSection.css";

const ChallengeSection = () => {
    return (
        <div className="challenge-section-container">
            <h1 data-aos="fade-up" className="challenge-section-header">
                Take a speed test now!
            </h1>
            <TestContainer words={6} characters={14} wpm={20} />
        </div>
    )
}

export default ChallengeSection
