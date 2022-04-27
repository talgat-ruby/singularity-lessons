// Callbacks
function main() {
	const btn = document.getElementById("btn");
	btn.addEventListener("click", clickButton);
}

function clickButton() {
	console.log("%c btn clicked -> ", "background: #222; color: royalblue");
}

const arr = [1, 2, 3];

const newArr = arr.map((a) => a * 2);
console.log(newArr);
