import React from "react";
import ChallengeSection from "../ChallengeSection/ChallengeSection";
import Landing from "../Landing/Landing";
import Nav from "../Nav/Nav";
import "./App.css";

function App() {
    return (
        <div className="app">
            {/* Nav Bar */}
            <Nav />
            {/* Landing Section */}
            <Landing />
            {/* Challenge Section */}
            <ChallengeSection />
        </div>

    )
}

export default App
