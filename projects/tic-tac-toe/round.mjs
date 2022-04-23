import { PIECES } from "./constants.mjs";

const ROW = 3;
const COL = 3;

class Round {
	constructor(player1, player2) {
		this.player1 = player1;
		this.player2 = player2;
		this.currentPlayer = this.player1;
		this.winner;
		this.board = null;

		this.counter = 0;
	}

	#init() {
		const board = new Array(COL * ROW).fill(0);
		this.board = new Proxy(board, {
			set: (target, prop, value) => {
				target[prop] = value;
				this.#judge(Number(prop), value);
				return true;
			},
		});
	}

	#togglePlayer() {
		this.currentPlayer =
			this.currentPlayer === this.player1 ? this.player2 : this.player1;
	}

	async #makeMove() {
		await this.currentPlayer.move(this.board);
		console.log(
			"%c this.board -> ",
			"background: #222; color: royalblue",
			JSON.stringify(this.board)
		);
		console.log(
			"%c this.winner -> ",
			"background: #222; color: royalblue",
			this.winner
		);

		if (this.counter < 100 && typeof this.winner === "undefined") {
			this.counter++;
			this.#togglePlayer();
			this.#makeMove();
		}
	}

	async #judge(ind, piece) {
		const firstInd = ind % COL;
		const win =
			// row
			this.#assess(piece, firstInd, COL, 1) ||
			// col
			this.#assess(piece, firstInd, COL, ROW) ||
			// diagonal 1
			(firstInd === 0 && this.#assess(piece, firstInd, COL, ROW + 1)) ||
			// diagonal 2
			(firstInd === COL - 1 &&
				this.#assess(piece, firstInd, COL, ROW - 1));
		if (win) {
			this.winner = this.currentPlayer;
			return;
		}

		const draw = !new Set(this.board).has(PIECES.EMPTY);
		if (draw) {
			this.winner = null;
			return;
		}
	}

	#assess(piece, firstInd, total, step) {
		let counter = 0;

		for (let i = firstInd; i < total; i += step) {
			if (piece === this.board[i]) {
				counter++;
			}
		}

		return counter === total;
	}

	async start() {
		this.#init();
		await this.#makeMove();
	}
}

export default Round;
