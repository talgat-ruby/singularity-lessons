function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

export default class Bot2 {
  constructor(piece) {
    this.piece = piece;
    this.name = "Talgat";
  }

  move(board) {
    let i = getRandomInt(0, 9);
    while (board[i] !== 0) {
      i = getRandomInt(0, 9);
    }

    return i;
  }
}
