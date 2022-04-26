function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

export class Bot1 {
	constructor(piece) {
		this.piece = piece;
		this.name = "Talgat";
	}

	move(board) {
		console.log(
			"%c Talgat - board -> ",
			"background: #222; color: royalblue",
			board
		);
		let i = getRandomInt(0, 9);
		while (board[i] !== 0) {
			i = getRandomInt(0, 9);
		}
		console.log(
			"%c Talgat - i -> ",
			"background: #222; color: royalblue",
			i
		);
		return i;
	}
}

export class Bot2 {
	constructor(piece) {
		this.piece = piece;
		this.name = "Abat";
	}

	move(board) {
		console.log(
			"%c Abat - board -> ",
			"background: #222; color: royalblue",
			board
		);
		let i = getRandomInt(0, 9);
		while (board[i] !== 0) {
			i = getRandomInt(0, 9);
		}
		console.log("%c Abat - i -> ", "background: #222; color: royalblue", i);
		return i;
	}
}
