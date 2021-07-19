import React from "react";
import TestLetter from "../TestLetter/TestLetter";
import "./TypeMaster.css";

const TypeMaster = ({ selectedParagraph, timeRemaining, timerStarted, testInfo }) => {
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
                            testInfo.map((discreteLetterInfo) => {
                                return (
                                    <TestLetter disceteLetterInfo={discreteLetterInfo} />
                                )
                            })
                        }
                    </div>
                </div>

                <div className="textarea-right">
                    <textarea className="textarea" placeholder="Type here to begin test">

                    </textarea>
                </div>
            </div>
        </div>
    )
}

export default TypeMaster
