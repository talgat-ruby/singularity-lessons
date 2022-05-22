import { wait } from "./utils.mjs";

class View {
  constructor() {
    this.gameStartBox = document.getElementById("game-start-box");
    this.gameEndBox = document.getElementById("game-end-box");
  }

  #renderPlayersData(parentEl, players) {
    const playerCardEls = parentEl.getElementsByClassName("player-card");
    if (playerCardEls.length !== players.length) {
      throw new Error(".player-card not 2 elements corresponds");
    }

    for (let i = 0; i < players.length; i++) {
      const { name, avatar } = players[i];
      this.#renderPlayerData(playerCardEls[i], name, avatar);
    }
  }

  #renderPlayerData(el, name, imgSrc) {
    const nameEl = el.getElementsByClassName("player-name")?.[0];
    if (nameEl) {
      nameEl.textContent = name;
    }

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

  async showGameStart(players) {
    this.gameStartBox.classList.add("show");
    this.#renderPlayersData(this.gameStartBox, players);
    await wait(2000);
    this.gameStartBox.classList.remove("show");
  }

  async showGameEnd(players, scores) {
    this.gameEndBox.classList.add("show");
    this.#renderPlayersData(this.gameEndBox, players);
    this.#renderPlayersScores(this.gameEndBox, scores);
    await wait(2000);
    this.gameEndBox.classList.remove("show");
  }
}

export default View;
