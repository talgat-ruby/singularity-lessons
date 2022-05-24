import { PIECES } from "./constants.mjs";
import { wait } from "./utils.mjs";
import View from "./round_view.mjs";

const ROW = 3;
const COL = 3;

class Round {
  constructor(player1, player2, currentPlayer) {
    this.view = new View();
    this.player1 = player1;
    this.player2 = player2;
    this.currentPlayer = currentPlayer;
    this.winner = undefined;
    this.board = new Array(COL * ROW).fill(0);
  }

  #togglePlayer() {
    this.currentPlayer =
      this.currentPlayer === this.player1 ? this.player2 : this.player1;
  }

  async #makeMove() {
    const ind = this.currentPlayer.move([...this.board]);
    if (this.board[ind] === PIECES.EMPTY) {
      this.board[ind] = this.currentPlayer.piece;
      await this.view.renderPiece(ind, this.currentPlayer.piece);
      this.winner = this.#judge(ind, this.currentPlayer.piece);
    } else {
      console.error(new Error("Already has a piece!", ind, this.currentPlayer));
      this.winner = this.currentPlayer === this.player1 ? this.player2 : this.player1;
    }
  }

  #judge(ind, piece) {
    const firstInRowInd = Math.floor(ind / COL) * COL;
    const firstInColInd = ind % COL;
    const win =
      // row
      this.#assess(piece, firstInRowInd, COL, 1) ||
      // col
      this.#assess(piece, firstInColInd, ROW, COL) ||
      // diagonal 1
      this.#assess(piece, 0, COL, ROW + 1) ||
      // diagonal 2
      this.#assess(piece, ROW - 1, COL, ROW - 1);
    if (win) {
      return this.currentPlayer;
    }

    const draw = !new Set(this.board).has(PIECES.EMPTY);
    if (draw) {
      return null;
    }
  }

  #assess(piece, firstInd, total, step) {
    let i = firstInd;

    for (let counter = 0; counter < total; counter++) {
      if (piece !== this.board[i]) {
        return false;
      }
      i += step;
    }

    return true;
  }

  async start(score) {
    this.view.showBoard([this.player1, this.player2], this.currentPlayer, score);
    while (typeof this.winner === "undefined") {
      await this.#makeMove();
      this.#togglePlayer();
      await wait(500);
    }

    this.view.hideBoard();
  }
}

export default Round;
