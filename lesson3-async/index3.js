console.log("Page loading");
console.log("%c document -> ", "background: #222; color: royalblue", document);

function clickButton(number) {
	console.log(
		`%c btn ${number} clicked -> `,
		"background: #222; color: royalblue"
	);
}

window.addEventListener("load", () => {
	console.log("Page loaded");
	const btn = document.getElementById("btn");
	btn.addEventListener("click", clickButton);
	btn.removeEventListener("click", clickButton);

	const btn2 = document.getElementById("btn2");
	btn2.addEventListener("click", clickButton);
});
