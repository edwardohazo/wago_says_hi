const printMsg = function () {
	console.log("Hi! Im Wago and this is my first Node Js package");
	console.log("Incrementing patch to 1.0.1 version");
}

const secondPrintMsg = function () {
	console.log("Incrementing minor to 1.1.0 version");
}

const thirdPrintMsg = function () {
	console.log("Incrementing minor to 1.3.0 version");
}

const fourthPrintMsg = function () {
	console.log("Incrementing minor to 1.4.0 version");
}

console.log("Wago is ready to say hi!");

module.exports = {printMsg, secondPrintMsg, thirdPrintMsg, fourthPrintMsg};
