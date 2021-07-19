import React from "react";
import "./TestLetter.css";

const TestLetter = ({ disceteLetterInfo }) => {

    const { status } = disceteLetterInfo;

    const statusClass = {
        correct: "test-letter-correct",
        incorrect: "test-letter-incorrect",
        notAttempted: "test-letter-not-attempted",
    }[status];

    return (
        <span className={`test-letter ${statusClass}`}>
            {disceteLetterInfo.testLetter}
        </span>
    )
}

export default TestLetter;
