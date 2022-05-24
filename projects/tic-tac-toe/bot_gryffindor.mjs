import { PIECES } from "./constants.mjs";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

export default class Bot {
  constructor(piece) {
    this.piece = piece;
    this.name = "Gryffindor";
    this.avatar = "assets/gryffindor.webp";
  }

  move(board) {
    // let i = getRandomInt(0, 9);
    // while (board[i] !== 0) {
    // 	i = getRandomInt(0, 9);
    // }


    // return i;
    let bestScore = -10000;
    let bestMove;
    const newBoard = [...board];
    const first = isFirst(newBoard);
    if (first) {
      return getRandomInt(0, 9);
    }

    for (let i = 0; i < 9; i++) {
      if (newBoard[i] === 0) {
        newBoard[i] = PIECES.X;
        const score = minimax(newBoard, 0, false);
        newBoard[i] = 0;
        if (score > bestScore) {
          bestScore = score;
          bestMove = i;
        }
      }

    }
    console.log(
      "%c Talgat - bestMove -> ",
      "background: #222; color: royalblue",
      bestMove);
    return bestMove;
  }
}

function isFirst(board) {
  for (const el of board) {
    if (el !== 0) return false;
  }
  return true;
}


function minimax(board, depth, isMax) {
  let score = checkWinner(board);

  // If Maximizer has won the game
  // return his/her evaluated score
  if (score === PIECES.X)
    return score;

  // If Minimizer has won the game
  // return his/her evaluated score
  if (score === PIECES.O)
    return score;

  if (score === "tie")
    return 0;

  // If this maximizer's move
  if (isMax) {
    let best = -10000;
    for (let i = 0; i < 9; i++) {
      if (board[i] === 0) {
        board[i] = PIECES.X;
        best = Math.max(best, minimax(board,
          depth + 1, false));
        board[i] = 0;
      }
    }
    return best;
  }

  // If this minimizer's move
  else {
    let best = 10000;
    for (let i = 0; i < 9; i++) {
      if (board[i] === 0) {
        board[i] = PIECES.O;
        best = Math.min(best, minimax(board,
          depth + 1, true));
        board[i] = 0;
      }
    }
    return best;
  }
}

function checkWinner(board) {
  let winner = null;
  const COL = 3;
  const ROW = 3;

  // Horizontal


  // Horizontal
  if (board[0] === board[1] && board[1] === board[2] && board[0] !== 0) {
    if (board[0] === PIECES.X) winner = PIECES.X;
    else winner = PIECES.O;
  }
  if (board[3] === board[4] && board[4] === board[5] && board[3] !== 0) {
    if (board[3] === PIECES.X) winner = PIECES.X;
    else winner = PIECES.O;
  }
  if (board[6] === board[7] && board[7] === board[8] && board[6] !== 0) {
    if (board[6] === PIECES.X) winner = PIECES.X;
    else winner = PIECES.O;
  }

  // Vertical
  if (board[0] === board[3] && board[3] === board[6] && board[0] !== 0) {
    if (board[0] === PIECES.X) winner = PIECES.X;
    else winner = PIECES.O;
  }
  if (board[1] === board[4] && board[4] === board[7] && board[1] !== 0) {
    if (board[1] === PIECES.X) winner = PIECES.X;
    else winner = PIECES.O;
  }
  if (board[2] === board[5] && board[5] === board[8] && board[2] !== 0) {
    if (board[2] === PIECES.X) winner = PIECES.X;
    else winner = PIECES.O;
  }

  // Diagonal
  if (board[0] === board[4] && board[4] === board[8] && board[0] !== 0) {
    if (board[0] === PIECES.X) winner = PIECES.X;
    else winner = PIECES.O;
  }
  if (board[2] === board[4] && board[4] === board[6] && board[2] !== 0) {
    if (board[2] === PIECES.X) winner = PIECES.X;
    else winner = PIECES.O;
  }

  let openSpots = 0;
  for (let i = 0; i < 9; i++) {
    if (board[i] === 0) {
      openSpots++;
    }
  }

  if (winner === null && openSpots === 0) {
    return "tie";
  } else {
    return winner;
  }
}