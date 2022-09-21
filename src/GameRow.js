import React from "react";
import "./Game.css";
import GameTile from "./GameTile.js";

export default function GameRow() {
  return (
    <div className="gamerow">
      <GameTile />
      <GameTile />
      <GameTile />
      <GameTile />
      <GameTile />
    </div>
  );
}
