import { useState } from "react";
import "./tic.scss";

interface SquareProps {
  value: string;
  onSquaresClick: () => void;
}

function Square({ value, onSquaresClick }: SquareProps) {
  return (
    <button className="square" onClick={onSquaresClick}>
      {value}
    </button>
  );
}

function calculateWinner<T extends string[]>(squares: T) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
    return null;
  }
}

interface BoardProps {
  xIsNext: boolean;
  squares: string[];
  onPlay: (v: string[]) => void;
}
function Board({ xIsNext, squares, onPlay }: BoardProps) {
  function handleClick(i: number) {
    const nextSquares = squares.slice();
    if (nextSquares[i] || calculateWinner(squares)) return;
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  }
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquaresClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquaresClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquaresClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquaresClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquaresClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquaresClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquaresClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquaresClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquaresClick={() => handleClick(8)} />
      </div>
      <div>{status}</div>
    </>
  );
}
export default function Game() {
  // const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState<string[][]>([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
  function handlePlay(nextSquares: string[]) {
    // 跳转历史后重新操作 之后的都不要了
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    // setXIsNext(!xIsNext);
  }

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
    // setXIsNext(nextMove % 2 === 0);
  }
  const moves = history.map((squares, move) => {
    let desc;
    if (move > 0) {
      desc = `Go to move # ${move}`;
    } else {
      desc = "Go to game start";
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
