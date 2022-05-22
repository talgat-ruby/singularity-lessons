import { NUM_ROUNDS, PIECES } from "./constants.mjs";
import View from "./game_view.mjs";
import Round from "./round.mjs";

class Game {
  constructor(player1, player2, onEnd) {
    this.view = new View();
    this.player1 = player1;
    this.player2 = player2;
    this.score = [0, 0];
    this.rounds = [];
  }

  async #runRounds() {
    for (let i = 0; i < NUM_ROUNDS; i++) {
      [this.player1.piece, this.player2.piece] =
        Math.floor(i / 2) % 2 === 0 ?
          [PIECES.X, PIECES.O] :
          [PIECES.O, PIECES.X];

      const round = new Round(this.player1, this.player2, i % 2 === 0 ? this.player1 : this.player2);
      await round.start(this.score);

      switch (round.winner) {
        case this.player1:
          this.score[0]++;
          break;
        case this.player2:
          this.score[1]++;
          break;
      }

      this.rounds.push(round);
    }
  }

  async start() {
    await this.view.showGameStart([this.player1, this.player2]);
    await this.#runRounds();
    await this.view.showGameEnd([this.player1, this.player2], this.score);
  }
}

export default Game;
