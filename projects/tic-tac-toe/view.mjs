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
	}

	#listenLabelAnimationEnd(labelEl) {
		// if (labelEl) {
		// 	return new Promise((resolve) => {
		// 		labelEl.addEventListener("animationend", resolve, {
		// 			once: true,
		// 		});
		// 	});
		// }
	}

	renderPiece(ind, piece) {
		let el;
		if (piece === PIECES.X) {
			el = this.x[ind];
		} else if (piece === PIECES.O) {
			el = this.o[ind];
		} else {
			throw new Error("Piece does not exit, check your code!");
		}

		// const p = this.#listenLabelAnimationEnd(el.labels[0]);

		el.checked = true;

		// return p;
	}
}

export default View;
