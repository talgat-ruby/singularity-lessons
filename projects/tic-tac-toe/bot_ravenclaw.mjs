function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

export default class Bot {
  constructor(piece) {
    this.piece = piece;
    this.name = "Ravenclaw";
    this.avatar = "assets/ravenclaw.webp";
  }

  move(board) {
    if (this.piece === 1) {
      return this.xMove(board);
    }
    return this.oMove(board);

  }

  xMove(board) {
    let edges = [0, 2, 6, 8];
    if (this.firstMove(board)) {
      return edges[getRandomInt(0, 3)];
    }
    if (board[0] + board[1] + board[2] === 2) {//place rows
      for (let i = 0; i < 3; i++) {
        if (board[i] === 0) return i;
      }
    }
    if (board[3] + board[4] + board[5] === 2) {
      for (let i = 3; i < 6; i++) {
        if (board[i] === 0) return i;
      }
    }
    if (board[6] + board[7] + board[8] === 2) {
      for (let i = 6; i < 9; i++) {
        if (board[i] === 0) return i;
      }
    }
    if (board[0] + board[3] + board[6] === 2) {//place colums
      for (let i = 0; i < 7; i = i + 3) {
        if (board[i] === 0) return i;
      }
    }
    if (board[1] + board[4] + board[7] === 2) {
      for (let i = 1; i < 8; i = i + 3) {
        if (board[i] === 0) return i;
      }
    }
    if (board[2] + board[5] + board[8] === 2) {
      for (let i = 2; i < 9; i = i + 3) {
        if (board[i] === 0) return i;
      }
    }
    if (board[0] + board[4] + board[8] === 2) {//place diagonals
      for (let i = 0; i < 9; i = i + 4) {
        if (board[i] === 0) return i;
      }
    }
    if (board[2] + board[4] + board[6] === 2) {
      for (let i = 2; i < 7; i = i + 2) {
        if (board[i] === 0) return i;
      }
    }

    if (board[0] + board[1] + board[2] === -2) {//check rows
      for (let i = 0; i < 3; i++) {
        if (board[i] === 0) return i;
      }
    }
    if (board[3] + board[4] + board[5] === -2) {
      for (let i = 3; i < 6; i++) {
        if (board[i] === 0) return i;
      }
    }
    if (board[6] + board[7] + board[8] === -2) {
      for (let i = 6; i < 9; i++) {
        if (board[i] === 0) return i;
      }
    }
    if (board[0] + board[3] + board[6] === -2) {//check colums
      for (let i = 0; i < 7; i = i + 3) {
        if (board[i] === 0) return i;
      }
    }
    if (board[1] + board[4] + board[7] === -2) {
      for (let i = 1; i < 8; i = i + 3) {
        if (board[i] === 0) return i;
      }
    }
    if (board[2] + board[5] + board[8] === -2) {
      for (let i = 2; i < 9; i = i + 3) {
        if (board[i] === 0) return i;
      }
    }
    if (board[0] + board[4] + board[8] === -2) {//check diagonals
      for (let i = 0; i < 9; i = i + 4) {
        if (board[i] === 0) return i;
      }
    }
    if (board[2] + board[4] + board[6] === -2) {
      for (let i = 2; i < 7; i = i + 2) {
        if (board[i] === 0) return i;
      }
    }


    // if(this.lastMove(board)) {
    // 	console.log("WORK");
    // 	for(let i =0; i< 9; i++) {
    // 		if(board[i] === 0) return i;
    // 	}
    // }
    if (!this.firstMove(board)) {
      return this.checkedges(board);
    }


  }

  oMove(board) {
    let edges = [0, 2, 6, 8];
    if (board[4] === 0) {
      return 4;
    }


    if (board[0] + board[1] + board[2] === -2) {//check rows
      for (let i = 0; i < 3; i++) {
        if (board[i] === 0) return i;
      }
    }
    if (board[3] + board[4] + board[5] === -2) {
      for (let i = 3; i < 6; i++) {
        if (board[i] === 0) return i;
      }
    }
    if (board[6] + board[7] + board[8] === -2) {
      for (let i = 6; i < 9; i++) {
        if (board[i] === 0) return i;
      }
    }
    if (board[0] + board[3] + board[6] === -2) {//check colums
      for (let i = 0; i < 7; i = i + 3) {
        if (board[i] === 0) return i;
      }
    }
    if (board[1] + board[4] + board[7] === -2) {
      for (let i = 1; i < 8; i = i + 3) {
        if (board[i] === 0) return i;
      }
    }
    if (board[2] + board[5] + board[8] === -2) {
      for (let i = 2; i < 9; i = i + 3) {
        if (board[i] === 0) return i;
      }
    }
    if (board[0] + board[4] + board[8] === -2) {//check diagonals
      for (let i = 0; i < 9; i = i + 4) {
        if (board[i] === 0) return i;
      }
    }
    if (board[2] + board[4] + board[6] === -2) {
      for (let i = 2; i < 7; i = i + 2) {
        if (board[i] === 0) return i;
      }
    }
    if (board[0] + board[1] + board[2] === 2) {//place rows
      for (let i = 0; i < 3; i++) {
        if (board[i] === 0) return i;
      }
    }
    if (board[3] + board[4] + board[5] === 2) {
      for (let i = 3; i < 6; i++) {
        if (board[i] === 0) return i;
      }
    }
    if (board[6] + board[7] + board[8] === 2) {
      for (let i = 6; i < 9; i++) {
        if (board[i] === 0) return i;
      }
    }
    if (board[0] + board[3] + board[6] === 2) {//place colums
      for (let i = 0; i < 7; i = i + 3) {
        if (board[i] === 0) return i;
      }
    }
    if (board[1] + board[4] + board[7] === 2) {
      for (let i = 1; i < 8; i = i + 3) {
        if (board[i] === 0) return i;
      }
    }
    if (board[2] + board[5] + board[8] === 2) {
      for (let i = 2; i < 9; i = i + 3) {
        if (board[i] === 0) return i;
      }
    }
    if (board[0] + board[4] + board[8] === 2) {//place diagonals
      for (let i = 0; i < 9; i = i + 4) {
        if (board[i] === 0) return i;
      }
    }
    if (board[2] + board[4] + board[6] === 2) {
      for (let i = 2; i < 7; i = i + 2) {
        if (board[i] === 0) return i;
      }
    }

    return this.checkedges(board);
  }

  firstMove(board) {
    for (let val of board) {
      if (val !== 0) return false;
    }
    return true;
  }

  lastMove(board) {
    let last;
    let counter = 0;
    for (let i = 0; i < 9; i++) {
      if (board[i] !== 0) {
        counter++;
      }
    }
    if (counter != 7) {
      return false;
    }
    return true;
  }

  checkedges(board) {
    if (board[0] === 0) return 0;
    if (board[2] === 0) return 2;
    if (board[6] === 0) return 6;
    if (board[8] === 0) return 8;
  }
}
