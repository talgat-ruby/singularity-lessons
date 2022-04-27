import { PIECES } from "./constants.mjs";
import View from "./view.mjs";

const ROW = 3;
const COL = 3;

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

class Round {
	constructor(player1, player2) {
		this.player1 = player1;
		this.player2 = player2;
		this.currentPlayer = this.player1;
		this.winner;
		this.board = new Array(COL * ROW).fill(0);

		this.view = new View();
	}

	#judge(ind, piece) {
		// TODO show player wrong move
		if (this.board[ind] !== PIECES.EMPTY) {
			this.winner =
				this.currentPlayer === this.player1
					? this.player2
					: this.player1;
			return;
		}
		this.board[ind] = piece;

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

	async #pieceHandler(ind, piece) {
		this.#judge(ind, piece);
		await this.view.renderPiece(ind, piece);
		console.log(
			"%c this.currentPlayer, ind -> ",
			"background: #222; color: royalblue",
			this.currentPlayer,
			ind
		);
		// await wait(1000);
	}

	async #makeMove() {
		try {
			const ind = this.currentPlayer.move([...this.board]);
			await this.#pieceHandler(ind, this.currentPlayer.piece);
			this.#togglePlayer();

			if (typeof this.winner === "undefined") {
				await this.#makeMove();
			}
		} catch (err) {
			throw err;
		}
	}

	#togglePlayer() {
		this.currentPlayer =
			this.currentPlayer === this.player1 ? this.player2 : this.player1;
	}

	async start() {
		await this.#makeMove();
	}
}

export default Round;
