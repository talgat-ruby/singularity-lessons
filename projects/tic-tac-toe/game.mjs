import { NUM_ROUNDS, PIECES } from "./constants.mjs";
import Round from "./round.mjs";

class Game {
	constructor(Member1, Member2) {
		this.rounds = [];
		this.Member1 = Member1;
		this.Member2 = Member2;
	}

	start() {
		for (let i = 0; i < NUM_ROUNDS; i++) {
			const [player1, player2] = [
				new this.Member1(
					Math.floor(i / 2) % 2 === 0 ? PIECES.X : PIECES.O
				),
				new this.Member2(
					Math.floor(i / 2) % 2 === 0 ? PIECES.O : PIECES.X
				),
			];

			const round =
				i % 2 === 0
					? new Round(player1, player2)
					: new Round(player2, player1);

			round.start();
			this.rounds.push(round);
		}
	}
}

export default Game;
