import React from "react";
import ChallengeSection from "../ChallengeSection/ChallengeSection";
import Landing from "../Landing/Landing";
import Nav from "../Nav/Nav";
import { SAMPLE_PARAGRAPHS } from "./../../data/sampleParagraphs"
import "./App.css";

const TotalTime = 60;
const apiUrl = "http://metaphorpsum.com/paragraphs/1/9";
const DefaultState = {
    selectedParagraph: "",
    timerStarted: false,
    timeRemaining: TotalTime,
    words: 0,
    characters: 0,
    wpm: 0,
    testInfo: []
};

class App extends React.Component {

    state = DefaultState;

    fetchNewParaFallback = () => {
        const data = SAMPLE_PARAGRAPHS[
            Math.floor(Math.random() * SAMPLE_PARAGRAPHS.length)
        ];
        const selectedParaArray = data.split("");

        const testInfo = selectedParaArray.map(selectedLetter => {
            return {
                testLetter: selectedLetter,
                status: "notAttempted",
            };
        });
        this.setState({ ...DefaultState, testInfo, selectedParagraph: data });
    }

    fetchNewPara = () => {
        fetch(apiUrl)
            .then(response => response.text())
            .then(data => {
                const selectedParaArray = data.split("");

                const testInfo = selectedParaArray.map(selectedLetter => {
                    return {
                        testLetter: selectedLetter,
                        status: "notAttempted",
                    };
                });
                this.setState({ ...DefaultState, testInfo, selectedParagraph: data });
            });
    }

    componentDidMount() {
        this.fetchNewParaFallback();

    }

    startTimer = () => {
        this.setState({ timerStarted: true })
        const timer = setInterval(() => {
            if (this.state.timeRemaining > 0) {
                // Update WPM
                const timeSpent = TotalTime - this.state.timeRemaining;
                const wpm = timeSpent > 0
                    ? (this.state.words / timeSpent) * TotalTime
                    : 0;
                this.setState({
                    timeRemaining: this.state.timeRemaining - 1,
                    wpm: parseInt(wpm),
                })
            }
            else {
                clearInterval(timer);
            }

        }, 1000)
    }

    startAgain = () => this.fetchNewParaFallback();

    handleUserInput = (inputValue) => {
        if (!this.state.timerStarted) this.startTimer();

        /**
         * BASIC TEST ALGO TO HANDLE UPDATES AND CASES
         * 
         * 1. Underflow Case => All characters should be shown as not-attempted
         * 2. Overflow Case  => Incase User completes the test before time stop comparing i.e early exit
         * 3. Backspace Case => 
         *          - Mark [index+1] as not-attempted
         *            (Irrespetive of whether index is less than zero)
         *          - Also check for Overflow Case 
         *            (index + 1 -> out of bound, when index === length-1)
         * 4. Updating status in test info 
         *          - Check for last character and index of inputValue
         *          - Check if state matches the character at same index 
         *          - if Yes -> "correct"
         *          - else   -> "incorrect"
         * 
         * 5. Characters, Words, WPM should be updated regardless of above cases
         */

        const characters = inputValue.length;
        const words = inputValue.split(" ").length;
        const index = characters - 1;

        // Underflow condition
        if (index < 0) {
            this.setState({
                testInfo: [
                    {
                        testLetter: this.state.testInfo[0].testLetter,
                        status: "notAttempted"
                    },
                    ...this.state.testInfo.slice(1)
                ],
                characters,
                words,
            });

            return;
        }

        // Overflow condition 
        if (index >= this.state.selectedParagraph.length) {
            this.setState({ characters, words })
            return;
        }

        // Backspace case
        // TestInfo Copy
        const testInfo = this.state.testInfo;
        if (!(index === this.state.selectedParagraph.length - 1)) {
            testInfo[index + 1].status = "notAttempted";
        }
        // Checking correct typed letters
        const isCorrect = inputValue[index] === testInfo[index].testLetter;

        // Updating testInfo
        testInfo[index].status = isCorrect ? "correct" : "incorrect";

        // Update state
        this.setState({
            testInfo,
            words,
            characters
        })
    };

    render() {
        console.log(this.state.testInfo);
        return (
            <div className="app">
                {/* Nav Bar */}
                <Nav />
                {/* Landing Section */}
                <Landing />
                {/* Challenge Section */}
                <ChallengeSection
                    selectedParagraph={this.state.selectedParagraph}
                    words={this.state.words}
                    characters={this.state.characters}
                    wpm={this.state.wpm}
                    timeRemaining={this.state.timeRemaining}
                    timerStarted={this.state.timerStarted}
                    testInfo={this.state.testInfo}
                    onInputChange={this.handleUserInput}
                    startAgain={this.startAgain}
                />
            </div>

        )
    }
}

export default App
