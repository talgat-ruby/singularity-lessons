import { PIECES } from "./constants.mjs";
import View from "./view.mjs";

const ROW = 3;
const COL = 3;

class Round {
	#currentPlayer = null;
	#winner;
	#board = new Array(COL * ROW).fill(0);

	constructor(player1, player2) {
		this.player1 = player1;
		this.player2 = player2;

		this.view = new View();
	}

	#init() {
		// NOTE: helps with reactive programming
		Object.defineProperties(this, {
			currentPlayer: {
				get() {
					return this.#currentPlayer;
				},
				set(player) {
					this.#currentPlayer = player;
					this.#currentPlayerAfterUpdate();
				},
			},
			winner: {
				get() {
					return this.#winner;
				},
				set(player) {
					this.#winner = player;
					this.#winnerAfterUpdate();
				},
			},
			board: {
				value: new Proxy(this.#board, {
					set: (target, prop, value) => {
						target[prop] = value;
						this.#boardAfterUpdate(prop, value);
						return true;
					},
				}),
				writable: true,
			},
		});
	}

	#currentPlayerAfterUpdate() {
		this.#makeMove();
	}

	#winnerAfterUpdate() {
		this.view.renderBoardResult(this.winner.piece);
	}

	async #boardAfterUpdate(prop, value) {
		const ind = Number(prop);
		await this.view.renderPiece(ind, value);
		const winner = this.#judge(ind, value);

		if (typeof winner === "undefined") {
			this.#togglePlayer();
		} else {
			this.winner = winner;
		}
	}

	#makeMove() {
		const ind = this.currentPlayer.move([...this.board]);
		if (this.board[ind] === PIECES.EMPTY) {
			this.board[ind] = this.currentPlayer.piece;
		} else {
			throw new Error("Already has a piece!");
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

	#pieceHandler(ind, piece) {
		this.view.renderPiece(ind, piece);
	}

	#togglePlayer() {
		this.currentPlayer =
			this.currentPlayer === this.player1 ? this.player2 : this.player1;
	}

	start() {
		this.#init();
		this.currentPlayer = this.player1;
	}
}

export default Round;
