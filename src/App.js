import React from "react";
import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import Home from "./Pages/Home/Home.js";
import Quiz from "./Pages/Quiz/Quiz.js";
import "./App.css";

const App = () => {
  const [name, setName] = useState("");
  const [score, setScore] = useState(0);

  return (
    <BrowserRouter>
      <div className="app" style={{ backgroundImage: "url(./bg.jpeg)" }}>
        <Header />

        <Switch>
          <Route path="/" exact>
            <Home name={name} setName={setName} />
          </Route>

          <Route path="/quiz" exact>
            <Quiz name={name} score={score} setScore={setScore} />
          </Route>
        </Switch>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
