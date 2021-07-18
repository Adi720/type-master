import React from "react";
import { ChallengeDetailsCard } from "../ChallengeDetailsCard/ChallengeDetailsCard";
import "./TypingChallengeContainer.css";

const TypingChallengeContainer = ({ words, characters, wpm }) => {
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
                <p>This is the real Challenge</p>
            </div>
        </div>
    )
}

export default TypingChallengeContainer

