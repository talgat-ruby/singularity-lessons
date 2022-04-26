// Callbacks

function loadScript(src) {
	// creates a <script> tag and append it to the page
	// this causes the script with given src to start loading and run when complete
	let script = document.createElement("script");
	script.src = src;
	document.head.append(script);
}

loadScript("/my/script.js"); // the script has "function sampleFn() {…}"
