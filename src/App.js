import React from "react";
import "./App.css";
import Form from "./Form";
import Game from "./Game";

function App() {
  return (
    <div className="App">
      <h1>Wordle Turtle 🐢✨</h1>
      <Form />
      <Game />
      <footer>
        <p>© 2022 Made by Lindsey Teacher 👩🏻‍🏫💖</p>
      </footer>
    </div>
  );
}

export default App;
