import React, { useReducer, useState } from "react";
import { calculateWinnner } from "../../helper";
import Board from "./Board";
import "./GameStyle.css";

const initialState = {
  board: Array(9).fill(null),
  xIsnext: true,
};

const gameReducer = (state, action) => {
  switch (action.type) {
    case "CLICK": {
      const { board, xIsnext } = state;
      const { winner, index } = action.payLoad;
      if (winner || board[index]) return state;
      const nextState = JSON.parse(JSON.stringify(state));
      nextState.board[index] = xIsnext ? "X" : "O";
      nextState.xIsnext = !xIsnext;
      return nextState;
    }

    case "RESET":
      {
        const nextState = JSON.parse(JSON.stringify(state));
        nextState.board = Array(9).fill(null);
        nextState.xIsnext = true;
        return nextState;
      }

      break;
    default:
      break;
  }
  return state;
};

const Game = () => {
  // const [board, setBoard] = useState(Array(9).fill(null));
  // const [xIsnext, setXiNext] = useState(true);
  // /initialState = {} : giá trị khởi tạo

  //use Reducer

  const [state, dispatch] = useReducer(gameReducer, initialState);
  //const acticon = {type: 'CLICK', payLoad: ()}
  //dispatch({type: 'CLICK'})

  // const [state, setState] = useState({
  //   board: Array(9).fill(null),
  //   xIsnext: true,
  // });

  const winner = calculateWinnner(state.board);
  const handelClick = (index) => {
    // const boardCopy = [...state.board];
    // if (winner || boardCopy[index]) {
    //   return;
    // }
    dispatch({
      type: "CLICK",
      payLoad: {
        index,
        winner,
      },
    });
    // boardCopy[index] = state.xIsnext ? "X" : "O";
    // setState({
    //   ...state,
    //   board: boardCopy,
    //   xIsnext: !state.xIsnext,
    // });
    // setBoard(boardCopy);
    // setXiNext(!xIsnext);
  };

  const handelResetgame = () => {
    dispatch({
      type: "RESET",
    });
    // setBoard(Array(9).fill(null));
  };
  return (
    <div>
      <Board cells={state.board} onClick={handelClick}></Board>
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
