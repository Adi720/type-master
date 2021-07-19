import React from "react";
import { ChallengeDetailsCard } from "../ChallengeDetailsCard/ChallengeDetailsCard";
import TypeMaster from "../TypeMaster/TypeMaster";
import "./TypingChallengeContainer.css";

const TypingChallengeContainer = ({
    selectedParagraph,
    words,
    characters,
    wpm,
    timeRemaining,
    timerStarted
}) => {
    return (
        <div className="typing-challenge-container">
            {/* Details Section */}
            <div className="details-container">
                {/* Words Typed */}
                <ChallengeDetailsCard cardName="Words" cardValue={words} />
                {/* Characters Typed */}
                <ChallengeDetailsCard cardName="Characters" cardValue={characters} />
                {/* Speed */}
                <ChallengeDetailsCard cardName="Speed" cardValue={wpm} />
            </div>

            {/* Real Challenge Container */}
            <div className="typemaster-container">
                <TypeMaster
                    timeRemaining={timeRemaining}
                    timerStarted={timerStarted}
                    selectedParagraph={selectedParagraph}
                />
            </div>
        </div>
    )
}

export default TypingChallengeContainer

