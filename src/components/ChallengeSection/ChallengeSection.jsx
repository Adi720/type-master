import React from "react";
import TestContainer from "../TestContainer/TestContainer";
import "./ChallengeSection.css";

const ChallengeSection = ({
    selectedParagraph,
    words,
    characters,
    wpm,
    timeRemaining,
    timerStarted,
    testInfo,
    onInputChange,
    startAgain
}) => {
    return (
        <div className="challenge-section-container">
            <h1 data-aos="fade-up" className="challenge-section-header">
                &#x261F; Take Your Speed Test Now &#x261F;
            </h1>
            <TestContainer
                selectedParagraph={selectedParagraph}
                timeRemaining={timeRemaining}
                timerStarted={timerStarted}
                words={words}
                characters={characters}
                wpm={wpm}
                testInfo={testInfo}
                onInputChange={onInputChange}
                startAgain={startAgain}
            />

        </div>
    )
}

export default ChallengeSection
