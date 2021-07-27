import React from "react";
import "./TryAgain.css";

const TryAgain = ({ words, characters, wpm, startAgain }) => {
    return (
        <div data-aos="fade-up" className="try-again-container">
            <h1>Test Results</h1>

            <div className="result-container">
                <p>
                    <b>Characters:</b> {characters}
                </p>
                <p>
                    <b>Words:</b> {words}
                </p>
                <p>
                    <b>Speed:</b> {wpm} wpm
                </p>
            </div>

            <div>
                <button className="end-btns retry-btn" onClick={() => startAgain()}>Retry</button>
                <button
                    className="end-btns tweet-btn"
                    onClick={() => { window.open("https://www.twitter.com/intent/tweet?text=Adi720", "twitter", "width=800,height=600") }}

                >
                    Share
                </button>
            </div>


        </div>
    )
}

export default TryAgain
