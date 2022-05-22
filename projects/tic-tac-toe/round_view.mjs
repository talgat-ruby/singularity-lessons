import { PIECES } from "./constants.mjs";

class View {
  constructor() {
    this.board = document.getElementById("play-board");

    this.cells = this.board.getElementsByClassName("cell");
    if (this.cells.length !== 9) {
      throw new Error("incorrect number of cells. Must be 9, found ", this.cells.length);
    }
  }

  #getIconClass(piece) {
    switch (piece) {
      case PIECES.X:
        return "fa-x";
      case PIECES.O:
        return "fa-o";
      default:
        throw new Error("Piece does not exit, check your code!");
    }
  }

  #getIconEl(piece) {
    const iEl = document.createElement("i");
    iEl.classList.add("fa-solid");
    iEl.classList.add(this.#getIconClass(piece));

    return iEl;
  }

  #renderPlayersData(parentEl, players, currentPlayer) {
    const playerCardEls = parentEl.getElementsByClassName("player-card");
    if (playerCardEls.length !== players.length) {
      throw new Error(".player-card not 2 elements corresponds");
    }

    for (let i = 0; i < players.length; i++) {
      const { avatar, piece } = players[i];
      this.#renderPlayerData(playerCardEls[i], avatar, piece, currentPlayer.piece);
    }
  }

  #renderPlayerData(el, imgSrc, piece, activePiece) {
    const pieceEl = el.getElementsByClassName("piece")?.[0];
    if (pieceEl) {
      pieceEl.replaceChildren();
      if (piece === activePiece) {
        pieceEl.classList.add("active");
      } else {
        pieceEl.classList.remove("active");
      }
    }

    pieceEl.appendChild(this.#getIconEl(piece));

    const imgEl = el.getElementsByClassName("player-avatar")?.[0];
    if (imgEl) {
      imgEl.src = imgSrc;
    }
  }

  #renderPlayersScores(parentEl, scores) {
    const playerScoreEls = parentEl.getElementsByClassName("score");
    if (playerScoreEls.length !== scores.length) {
      throw new Error(".score not 2 elements corresponds");
    }

    for (let i = 0; i < scores.length; i++) {
      const score = scores[i];
      this.#renderPlayerScore(playerScoreEls[i], score);
    }
  }

  #renderPlayerScore(el, score) {
    if (el) {
      el.textContent = score;
    }
  }

  showBoard(players, currentPlayer, score) {
    this.#renderPlayersData(this.board, players, currentPlayer);
    this.#renderPlayersScores(this.board, score);
    this.board.classList.add("show");
  }

  hideBoard() {
    for (const cell of this.cells) {
      cell.replaceChildren();
    }
    this.board.classList.remove("show");
  }

  renderPiece(ind, piece) {
    const cell = this.cells[ind];
    cell.appendChild(this.#getIconEl(piece));
  }
}

export default View;
