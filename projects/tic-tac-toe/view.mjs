import { PIECES } from "./constants.mjs";

class View {
	constructor() {
		const x0 = document.getElementById("x--0");
		const x1 = document.getElementById("x--1");
		const x2 = document.getElementById("x--2");
		const x3 = document.getElementById("x--3");
		const x4 = document.getElementById("x--4");
		const x5 = document.getElementById("x--5");
		const x6 = document.getElementById("x--6");
		const x7 = document.getElementById("x--7");
		const x8 = document.getElementById("x--8");
		const o0 = document.getElementById("o--0");
		const o1 = document.getElementById("o--1");
		const o2 = document.getElementById("o--2");
		const o3 = document.getElementById("o--3");
		const o4 = document.getElementById("o--4");
		const o5 = document.getElementById("o--5");
		const o6 = document.getElementById("o--6");
		const o7 = document.getElementById("o--7");
		const o8 = document.getElementById("o--8");

		this.x = [x0, x1, x2, x3, x4, x5, x6, x7, x8];
		this.o = [o0, o1, o2, o3, o4, o5, o6, o7, o8];

		this.result = document.getElementById("result");
		this.resultO = document.getElementById("result-o");
		this.resultDraw = document.getElementById("result-draw");
	}

	#asyncLabelListener(checkbox) {
		const label = checkbox.labels[0];
		return new Promise((resolve) => {
			label.addEventListener("animationend", resolve, {
				once: true,
			});
		});
	}

	renderBoardResult(winner) {
		if (winner) {
			const { name, avatar } = winner;

			this.result.style.display = "block";

			const winnerAvatar = document.getElementById('winnerAvatar');
			const winnerName = document.getElementById('winnerName');

			winnerAvatar.setAttribute('src', avatar);
			winnerName.textContent = name;


			document.getElementById('players').style.display = "none";

		} else {
			this.resultDraw.style.display = "block";
		}

		// switch (piece) {
		// 	case PIECES.X:
		// 		this.resultX.style.display = "block";
		// 		return;
		// 	case PIECES.O:
		// 		this.resultO.style.display = "block";
		// 		return;
		// 	default:
		// 		this.resultDraw.style.display = "block";
		// }
	}

	renderPiece(ind, piece) {
		let checkbox;
		switch (piece) {
			case PIECES.X:
				checkbox = this.x[ind];
				break;
			case PIECES.O:
				checkbox = this.o[ind];
				break;
			default:
				throw new Error("Piece does not exit, check your code!");
		}

		const listener = this.#asyncLabelListener(checkbox);

		checkbox.checked = true;

		return listener;
	}

	showPlayers(player1, player2) {
		document.getElementById('players').style.display = "flex";

		const player1Img = document.getElementById('player1Img');
		const player2Img = document.getElementById('player2Img');

		const player1Name = document.getElementById('player1Name');
		const player2Name = document.getElementById('player2Name');

		player1Img.setAttribute('src', player1.avatar);
		player2Img.setAttribute('src', player2.avatar);

		player1Name.textContent = player1.name;
		player2Name.textContent = player2.name;
	}
}

export default View;
