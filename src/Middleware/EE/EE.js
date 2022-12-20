export default async function EE() {
	function createCheckKeyPressFunction() {
		let timeout;
		let escTime = 0;
		function checkKeyPressed(evt) {
			if (evt.key === "Escape") {
				console.log("Escape Detected");
				window.clearTimeout(timeout);
				escTime += 1;
				timeout = window.setTimeout(() => {
					escTime = 0;
					console.log("Escape count reset to zero, due to timeout.");
				}, 1000);
			}
			if (escTime >= 3) {
				let url = "https://google.com";
				window.location.replace(url);
				escTime = 0;
			}
		}
		return checkKeyPressed;
	}
	let checkKeyPressed = createCheckKeyPressFunction();
	window.addEventListener("keydown", checkKeyPressed, false);
}
//TODO make work
