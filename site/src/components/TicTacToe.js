'use client';
import React, { useState, useEffect } from 'react';

const X = 'X';
const O = 'O';
const EMPTY = null;

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(3).fill().map(() => Array(3).fill(EMPTY)));
  const [currentPlayer, setCurrentPlayer] = useState(X);
  const [isGameOver, setIsGameOver] = useState(false);

  const player = (board) => {
    let numberX = 0, numberO = 0;
    for (let i = 0; i < 3; i++) {
      numberX += board[i].filter(cell => cell === X).length;
      numberO += board[i].filter(cell => cell === O).length;
    }
    return numberX > numberO ? O : X;  // If X has more, it's O's turn
  };

  const handleClick = (i, j) => {
    if (board[i][j] !== EMPTY || checkWinner(board) || isGameOver) return; // Ignore if already occupied or game over

    const newBoard = board.map(row => [...row]); // Create a copy of the board
    newBoard[i][j] = currentPlayer;
    setBoard(newBoard);
    setCurrentPlayer(player(newBoard)); // Set the next player
  };

  const checkWinner = (board) => {
    // Check rows, columns, and diagonals for a winner
    for (let i = 0; i < 3; i++) {
      if (board[i][0] && board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
        return board[i][0];
      }
      if (board[0][i] && board[0][i] === board[1][i] && board[0][i] === board[2][i]) {
        return board[0][i];
      }
    }
    if (board[0][0] && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
      return board[0][0];
    }
    if (board[2][0] && board[2][0] === board[1][1] && board[2][0] === board[0][2]) {
      return board[2][0];
    }
    return null;
  };

  const winner = checkWinner(board);

  // Minimax Algorithm Implementation
  const minimax = (board, depth, isMaximizingPlayer) => {
    const score = utility(board);
    if (score === 1) return score;
    if (score === -1) return score;
    if (isBoardFull(board)) return 0;

    if (isMaximizingPlayer) {
      let best = -Infinity;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (board[i][j] === EMPTY) {
            const newBoard = [...board]; // Create a new copy of the board
            newBoard[i][j] = X; // Temporarily simulate the move
            best = Math.max(best, minimax(newBoard, depth + 1, false)); // Evaluate this move
          }
        }
      }
      return best;
    } else {
      let best = Infinity;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (board[i][j] === EMPTY) {
            const newBoard = [...board]; // Create a new copy of the board
            newBoard[i][j] = O; // Temporarily simulate the move
            best = Math.min(best, minimax(newBoard, depth + 1, true)); // Evaluate this move
          }
        }
      }
      return best;
    }
  };

  const isBoardFull = (board) => {
    return board.every(row => row.every(cell => cell !== EMPTY));
  };

  const utility = (board) => {
    const winner = checkWinner(board);
    if (winner === X) return 1;
    if (winner === O) return -1;
    return 0;
  };

  const bestMove = (board) => {
    let bestVal = -Infinity;
    let move = [-1, -1];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === EMPTY) {
          const newBoard = [...board];
          newBoard[i][j] = X; // Temporarily simulate the move
          const moveVal = minimax(newBoard, 0, false); // Minimax for the best move
          if (moveVal > bestVal) {
            move = [i, j];
            bestVal = moveVal;
          }
        }
      }
    }
    return move;
  };

  useEffect(() => {
    if (currentPlayer === O && !isGameOver) {
      const [i, j] = bestMove(board);
      handleClick(i, j); // AI makes its move
    }
  }, [currentPlayer, board]); // Make sure to track changes to the `board`

  useEffect(() => {
    if (winner) {
      setIsGameOver(true);
    }
  }, [winner]);

  const renderSquare = (i, j) => {
    return (
      <button
        className="w-16 h-16 border-2 border-black flex items-center justify-center text-xl"
        onClick={() => handleClick(i, j)}
      >
        {board[i][j]}
      </button>
    );
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl mb-4">Tic Tac Toe</h1>
      <div className="grid grid-cols-3 gap-1">
        {board.map((row, i) =>
          row.map((cell, j) => renderSquare(i, j))
        )}
      </div>
      {winner && <h2 className="mt-4 text-xl">{winner} wins!</h2>}
      {!winner && board.flat().every(cell => cell !== EMPTY) && <h2 className="mt-4 text-xl">{"It's a draw!"}</h2>}
    </div>
  );
};

export default TicTacToe;
