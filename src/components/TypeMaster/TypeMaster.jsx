import React from "react";
import TestLetter from "../TestLetter/TestLetter";
import "./TypeMaster.css";

const TypeMaster = ({ timeRemaining, timerStarted, testInfo, onInputChange }) => {
    console.log(testInfo);
    return (
        <div className="typemaster">
            <div className="timer-container">
                <p className="timer">
                    00:
                    {timeRemaining > 10 ? timeRemaining : `0${timeRemaining}`}
                </p>
                <p className="timer-info">
                    {!timerStarted && "Start typing to begin the test"}
                </p>
            </div>

            <div className="textarea-container">
                <div className="textarea-left">
                    <div className="textarea text-para">
                        {/* {selectedParagraph} */}
                        {
                            testInfo.map((discreteLetterInfo, index) => {
                                return (
                                    <TestLetter
                                        key={index}
                                        disceteLetterInfo={discreteLetterInfo}
                                    />
                                )
                            })
                        }
                    </div>
                </div>

                <div className="textarea-right">
                    <textarea
                        onChange={(e) => onInputChange(e.target.value)}
                        className="textarea" placeholder="Type here to begin test">

                    </textarea>
                </div>
            </div>
        </div>
    )
}

export default TypeMaster
