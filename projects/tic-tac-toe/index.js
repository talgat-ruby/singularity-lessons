import Bot1 from "./Bot1.mjs";
import Bot2 from "./Bot2.mjs";
import Game from "./Game.mjs";

function main() {
	const game = new Game(Bot1, Bot2);
	game.start();
}

window.addEventListener(
	"load",
	function () {
		const lastBoardLineEl = document.getElementById("last-line");
		lastBoardLineEl.addEventListener("animationend", main, {
			once: true,
		});
	},
	{
		once: true,
	}
);
