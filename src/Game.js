import React from "react";
import "./Game.css";
import GameRow from "./GameRow.js";

export default function Game() {
  return (
    <section className="gameboard">
      <GameRow />
      <GameRow />
      <GameRow />
      <GameRow />
      <GameRow />
      <GameRow />
    </section>
  );
}
