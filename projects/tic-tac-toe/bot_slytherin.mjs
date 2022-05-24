function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

export default class BotSmart {
  constructor(piece) {
    this.piece = piece;
    this.name = "Slytherin";
    this.avatar = "assets/slytherin.webp";
  }

  move(board) {
    if (this.firstStep(board)) {
      return 0;
    }
    if (board[0] + board[1] + board[2] === 2) { //attack row1
      for (let i = 0; i < 3; i++) {
        if (board[i] === 0) {
          return i;
        }
      }
    }
    if (board[3] + board[4] + board[5] === 2) { //attack row2
      for (let i = 3; i < 6; i++) {
        if (board[i] === 0) {
          return i;
        }
      }
    }
    if (board[6] + board[7] + board[8] === 2) { //attack row3
      for (let i = 6; i < 9; i++) {
        if (board[i] === 0) {
          return i;
        }
      }
    }
    if (board[0] + board[3] + board[6] === 2) { //attack col1
      for (let i = 0; i < 7; i = i + 3) {
        if (board[i] === 0) {
          return i;
        }
      }
    }
    if (board[1] + board[4] + board[7] === 2) { //attack col2
      for (let i = 1; i < 8; i = i + 3) {
        if (board[i] === 0) {
          return i;
        }
      }
    }
    if (board[2] + board[5] + board[8] === 2) { //attack col3
      for (let i = 2; i < 9; i = i + 3) {
        if (board[i] === 0) {
          return i;
        }
      }
    }
    if (board[0] + board[4] + board[8] === 2) { //attack diag1
      for (let i = 0; i < 9; i = i + 4) {
        if (board[i] === 0) {
          return i;
        }
      }
    }
    if (board[2] + board[4] + board[6] === 2) { //attack diag2
      for (let i = 2; i < 7; i = i + 2) {
        if (board[i] === 0) {
          return i;
        }
      }
    }
    if (board[0] + board[1] + board[2] === -2) { //defend row1
      for (let i = 0; i < 3; i++) {
        if (board[i] === 0) {
          return i;
        }
      }
    }
    if (board[3] + board[4] + board[5] === -2) { //defend row2
      for (let i = 3; i < 6; i++) {
        if (board[i] === 0) {
          return i;
        }
      }
    }
    if (board[6] + board[7] + board[8] === -2) { //defend row3
      for (let i = 6; i < 9; i++) {
        if (board[i] === 0) {
          return i;
        }
      }
    }
    if (board[0] + board[3] + board[6] === -2) { //defend col1
      for (let i = 0; i < 7; i = i + 3) {
        if (board[i] === 0) {
          return i;
        }
      }
    }
    if (board[1] + board[4] + board[7] === -2) { //defend col2
      for (let i = 1; i < 8; i = i + 3) {
        if (board[i] === 0) {
          return i;
        }
      }
    }
    if (board[2] + board[5] + board[8] === -2) { //defend col3
      for (let i = 2; i < 9; i = i + 3) {
        if (board[i] === 0) {
          return i;
        }
      }
    }
    if (board[0] + board[4] + board[8] === -2) { //defend diag1
      for (let i = 0; i < 9; i = i + 4) {
        if (board[i] === 0) {
          return i;
        }
      }
    }
    if (board[2] + board[4] + board[6] === -2) { //defend diag2
      for (let i = 2; i < 7; i = i + 2) {
        if (board[i] === 0) {
          return i;
        }
      }
    }

    return this.otherWiseStepX(board);

  }

  firstStep(board) {
    for (let i = 0; i < 9; i++) {
      if (board[i] !== 0) {
        return false;
      }
    }
    return true;
  }

  otherWiseStepX(board) {
    if (board[0] === 0) return 0;
    if (board[2] === 0) return 2;
    if (board[6] === 0) return 6;
    if (board[8] === 0) return 8;
  }
}
