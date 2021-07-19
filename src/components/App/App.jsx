import React from "react";
import ChallengeSection from "../ChallengeSection/ChallengeSection";
import Landing from "../Landing/Landing";
import Nav from "../Nav/Nav";
import "./App.css";

const TotalTime = 60;
const apiUrl = "http://metaphorpsum.com/paragraphs/1/9"

class App extends React.Component {

    state = {
        selectedParagraph: "Hello World!!",
        timerStarted: false,
        timeRemaining: TotalTime,
        words: 0,
        characters: 0,
        wpm: 0,
        testInfo: []
    };

    componentDidMount() {
        // fetch(apiUrl)
        //     .then(response => response.text())
        //     .then(data => {
        //         this.setState({ selectedParagraph: data })
        //     })

        const selectedParaArray = this.state.selectedParagraph.split("");

        const testInfo = selectedParaArray.map(selectedLetter => {
            return {
                testLetter: selectedLetter,
                status: "notAttempted",
            };
        });
        this.setState({ testInfo });
    }

    startTimer = () => {
        this.setState({ timerStarted: true })
        const timer = setInterval(() => {
            if (this.state.timeRemaining > 0) {
                this.setState({
                    timeRemaining: this.state.timeRemaining - 1,
                })
            }
            else {
                clearInterval(timer);
            }

        }, 1000)
    }

    handleUserInput = (inputValue) => {
        if (!this.state.timerStarted) this.startTimer();
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
                />
            </div>

        )
    }
}

export default App
