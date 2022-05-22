import View from "./tournament_view.mjs";
import Game from "./game.mjs";

class Tournament {
  constructor(Members = []) {
    this.view = new View();
    this.players = Members.map(M => new M());
    this.games = [];
  }

  #startGames = async () => {
    for (let i = 0; i < this.players.length; i++) {
      const player1 = this.players[i];
      for (let j = i + 1; j < this.players.length; j++) {
        const player2 = this.players[j];
        const game = new Game(player1, player2);
        await game.start();
        this.games.push(game);
      }
    }

    this.view.showTournamentResult(this.games);
  };

  start() {
    this.view.showTournamentPage(this.players, this.#startGames);
  }
}

export default Tournament;
