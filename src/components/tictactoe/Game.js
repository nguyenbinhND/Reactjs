import React, { useState } from "react";
import { calculateWinnner } from "../../helper";
import Board from "./Board";
import "./GameStyle.css";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsnext, setXiNext] = useState(true);
  const winner = calculateWinnner(board);
  const handelClick = (index) => {
    const boardCopy = [...board];
    if (winner || boardCopy[index]) {
      return;
    }
    boardCopy[index] = xIsnext ? "X" : "O";
    setBoard(boardCopy);
    setXiNext(!xIsnext);
  };

  const handelResetgame = () => {
    setBoard(Array(9).fill(null));
  };
  return (
    <div>
      <Board cells={board} onClick={handelClick}></Board>
      {winner && (
        <div className="game-winner">{winner ? `winner is ${winner}` : ""}</div>
      )}
      <button className="game-reset" onClick={handelResetgame}>
        Reset Game
      </button>
    </div>
  );
};

export default Game;
