import React from "react";
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
        </div>

    )
}

export default App
