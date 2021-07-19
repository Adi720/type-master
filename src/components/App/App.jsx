import React from "react";
import ChallengeSection from "../ChallengeSection/ChallengeSection";
import Landing from "../Landing/Landing";
import Nav from "../Nav/Nav";
import "./App.css";

const TotalTime = 60;

class App extends React.Component {

    state = {
        selectedParagraph: "Hello World!!",
        timerStarted: false,
        timeRemaining: TotalTime,
        words: 0,
        characters: 0,
        wpm: 0,
    }

    render() {
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
                />
            </div>

        )
    }
}

export default App
