import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import SignIn from "./Components/SignIn/SignIn";
import Quiz from "./Components/Quiz/Quiz";
import "./App.css";

const App = () => {
  const [username, setUsername] = useState("");

  const handleSignIn = (user) => {
    setUsername(user);
  };

  return (
    <Router>
      <div className="app">
        <Navbar username={username} />
        <Routes>
          <Route path="/" element={<Quiz />} />
          <Route path="/signin" element={<SignIn onSignIn={handleSignIn} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
